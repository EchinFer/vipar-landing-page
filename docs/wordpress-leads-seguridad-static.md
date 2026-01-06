# Seguridad para endpoint de Leads en WordPress (Astro `output: "static"`)

Este documento endurece (hardening) el endpoint que ya creaste en WordPress:

- CPT: `vipar_lead`
- Endpoint: `POST /wp-json/vipar/v1/leads`

Como tu frontend (Astro) se compila en **static**, no existe un backend propio donde esconder secretos (Application Password). Por eso la estrategia correcta es:

- Hacer el endpoint **público**, pero protegido con:
  1) CAPTCHA (Turnstile recomendado)
  2) Rate limit por IP
  3) CORS restringido
  4) Honeypot (campo trampa)
  5) Validación estricta + sanitización
  6) Opcional: WAF/Cloudflare rate limiting

> Nota: **Ninguna** protección “client-side” es suficiente por sí sola. El CAPTCHA debe validarse **server-side** en WordPress.

---

## 0) Requisitos

- WordPress bajo **HTTPS**.
- (Recomendado) Cloudflare al frente del dominio `admin.vipar.com.py` o del WP.
- Acceso a editar el plugin `vipar-leads-api.php`.

---

## 1) Elegir CAPTCHA: Cloudflare Turnstile (recomendado)

### 1.1 Crear claves

1. Ir a Cloudflare Dashboard → Turnstile.
2. Crear un widget.
3. Agregar dominios permitidos:
   - `vipar.com.py`
   - (si usás subdominios) `www.vipar.com.py`
4. Guardar:
   - **Site Key** (se usa en el frontend)
   - **Secret Key** (se usa SOLO en WordPress)

### 1.2 Guardar el Secret Key en WordPress (no en el repo)

En `wp-config.php`, agrega:

```php
define('VIPAR_TURNSTILE_SECRET', 'PEGA_ACA_TU_SECRET');
```

---

## 2) Cambios en el plugin de WordPress

> Estos cambios se aplican sobre tu plugin actual.

### 2.1 Hacer el endpoint público (sin Basic Auth)

En el `register_rest_route`, cambia:

```php
'permission_callback' => function () {
  return current_user_can('edit_posts');
},
```

por:

```php
'permission_callback' => '__return_true',
```

**Por qué:** en static no podés autenticar con Application Password sin filtrar credenciales.

---

### 2.2 Agregar verificación Turnstile server-side

1) En `args`, agrega el token (y honeypot):

```php
'turnstileToken' => ['type' => 'string', 'required' => true],
'website' => ['type' => 'string', 'required' => false],
```

2) Agrega estas funciones al plugin (debajo de `vipar_create_lead` o arriba, da igual):

```php
function vipar_get_origin() {
  return $_SERVER['HTTP_ORIGIN'] ?? '';
}

function vipar_get_ip() {
  // Si hay proxy/CDN puede venir en HTTP_X_FORWARDED_FOR.
  $xff = $_SERVER['HTTP_X_FORWARDED_FOR'] ?? '';
  if ($xff) {
    $parts = explode(',', $xff);
    return trim($parts[0]);
  }
  return $_SERVER['REMOTE_ADDR'] ?? '';
}

function vipar_rate_limit_or_fail($ip) {
  // 20 requests cada 10 minutos por IP (ajustable)
  $key = 'vipar_leads_rl_' . md5($ip);
  $count = (int) get_transient($key);

  if ($count >= 20) {
    return new WP_REST_Response(['ok' => false, 'error' => 'Demasiadas solicitudes. Intentá más tarde.'], 429);
  }

  set_transient($key, $count + 1, 10 * MINUTE_IN_SECONDS);
  return null;
}

function vipar_verify_turnstile($token) {
  if (!defined('VIPAR_TURNSTILE_SECRET') || !VIPAR_TURNSTILE_SECRET) {
    return new WP_REST_Response(['ok' => false, 'error' => 'Servidor sin configuración de CAPTCHA'], 500);
  }

  $resp = wp_remote_post('https://challenges.cloudflare.com/turnstile/v0/siteverify', [
    'timeout' => 10,
    'body' => [
      'secret' => VIPAR_TURNSTILE_SECRET,
      'response' => $token,
      'remoteip' => vipar_get_ip(),
    ],
  ]);

  if (is_wp_error($resp)) {
    return new WP_REST_Response(['ok' => false, 'error' => 'Error validando CAPTCHA'], 502);
  }

  $json = json_decode(wp_remote_retrieve_body($resp), true);
  $success = is_array($json) && !empty($json['success']);

  if (!$success) {
    return new WP_REST_Response(['ok' => false, 'error' => 'CAPTCHA inválido'], 403);
  }

  return null;
}
```

3) Dentro de `vipar_create_lead`, antes de guardar el post, agrega estas verificaciones:

```php
// Honeypot: bots suelen completar campos ocultos.
$honeypot = sanitize_text_field($request->get_param('website'));
if ($honeypot) {
  return new WP_REST_Response(['ok' => false, 'error' => 'Solicitud rechazada'], 400);
}

$ip = vipar_get_ip();
$ua = $_SERVER['HTTP_USER_AGENT'] ?? '';
$origin = vipar_get_origin();

// Rate limit
$rl = vipar_rate_limit_or_fail($ip);
if ($rl) return $rl;

// CAPTCHA
$token = sanitize_text_field($request->get_param('turnstileToken'));
$captcha = vipar_verify_turnstile($token);
if ($captcha) return $captcha;
```

4) (Opcional recomendado) Guardar `origin` también como meta:

```php
'vipar_origin' => $origin,
```

---

### 2.3 Restringir CORS al dominio de tu landing

En WordPress, agrega esto al plugin:

```php
add_filter('rest_pre_serve_request', function ($served, $result, $request, $server) {
  $origin = $_SERVER['HTTP_ORIGIN'] ?? '';

  // Permitimos solo tu web (ajustar si usás www)
  $allowed = [
    'https://vipar.com.py',
    'https://www.vipar.com.py',
    'http://localhost:4321',
  ];

  if ($origin && in_array($origin, $allowed, true)) {
    header('Access-Control-Allow-Origin: ' . $origin);
    header('Vary: Origin');
    header('Access-Control-Allow-Methods: POST, OPTIONS');
    header('Access-Control-Allow-Headers: Content-Type');
  }

  // Responder preflight
  if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    status_header(204);
    exit;
  }

  return $served;
}, 10, 4);
```

**Nota:** CORS no evita ataques desde servidores/bots (ellos no respetan CORS), pero reduce abuso “desde navegador” y evita errores de CORS legítimos.

---

## 3) Cambios en el formulario (frontend Astro)

En tu formulario ([src/components/ContactForm.astro](../src/components/ContactForm.astro)), debes:

1) Agregar el script de Turnstile
2) Renderizar el widget
3) Enviar el token al endpoint como `turnstileToken`
4) Agregar el campo honeypot `website`

### 3.1 Script + widget

Dentro del formulario, agrega:

```html
<script src="https://challenges.cloudflare.com/turnstile/v0/api.js" async defer></script>

<div class="cf-turnstile" data-sitekey="TU_TURNSTILE_SITE_KEY"></div>

<!-- Honeypot: oculto. Debe quedar vacío -->
<input type="text" name="website" tabindex="-1" autocomplete="off" style="position:absolute;left:-9999px;opacity:0;" />
```

### 3.2 Enviar token

Turnstile pone el token en un input llamado `cf-turnstile-response`. En tu JS, tomarlo así:

```js
const turnstileToken = String(formData.get('cf-turnstile-response') || '').trim();
const website = String(formData.get('website') || '').trim();

if (!turnstileToken) {
  showError('Confirmá el CAPTCHA para enviar.');
  return;
}
```

Y en el body JSON incluir:

```js
turnstileToken,
website,
```

---

## 4) Prueba rápida (qué debería pasar)

1) Desde la landing, enviar formulario:
   - Si falta CAPTCHA → 403 (o mensaje de error)
   - Si se excede rate limit → 429
   - Si está OK → 201 en WP y el lead aparece en Admin → Leads

2) Probar un bot básico:
   - Si completa el honeypot → 400

---

## 5) Seguridad extra recomendada (alto impacto)

### 5.1 Cloudflare/WAF

- Regla de Rate Limit a:
  - `/wp-json/vipar/v1/leads`
- Bloquear países si aplica.

### 5.2 HTTPS obligatorio

Asegurá que `CMS_API_URL` sea `https://admin.vipar.com.py/wp-json`.

### 5.3 Evitar `NODE_TLS_REJECT_UNAUTHORIZED=0`

Eso desactiva validación TLS. Usarlo solo en ambientes de prueba con certificados rotos.

---

## 6) Nota sobre Application Passwords

- Con Astro static, **no** uses Application Password desde el navegador.
- Si querés volver a Application Password “bien”, el sitio debe tener un backend (Astro `output: "server"`/`"hybrid"` o serverless) para guardar secretos.

---

## Checklist

- [ ] `permission_callback` público (`__return_true`)
- [ ] Turnstile secret guardado en `wp-config.php`
- [ ] Validación CAPTCHA server-side
- [ ] Rate limit por IP (429)
- [ ] Honeypot activo
- [ ] CORS permite solo `vipar.com.py`
- [ ] `CMS_API_URL` usa `https://`
