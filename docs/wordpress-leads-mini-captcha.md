# Mini‑captcha simple (sin Cloudflare) para Leads en WordPress + Astro static

Este approach es “lo mínimo razonable” para un sitio **Astro `output: "static"`**:

- No usa Cloudflare.
- No usa secrets en el frontend.
- Protege el endpoint público con:
  - **Honeypot**
  - **Rate limit por IP**
  - **Mini-captcha (suma simple)** validado en backend
  - **CORS restringido**

> Limitación: un bot “inteligente” puede resolver una suma. Esto filtra spam básico, no ataques dedicados.

---

## 1) WordPress: cambios en tu plugin `vipar-leads-api.php`

### 1.1 Hacer el endpoint público

En el `register_rest_route`, cambia el `permission_callback`:

```php
'permission_callback' => '__return_true',
```

> Con Astro static no podés reminder credenciales (Application Password) en el browser.

---

### 1.2 Agregar args del captcha + honeypot

En `args` agrega:

```php
'website' => ['type' => 'string', 'required' => false],
'captcha_a' => ['type' => 'string', 'required' => true],
'captcha_b' => ['type' => 'string', 'required' => true],
'captcha_answer' => ['type' => 'string', 'required' => true],
```

---

### 1.3 Rate limit (si aún no lo agregaste)

Pega esta función en el plugin:

```php
function vipar_rate_limit_or_fail($ip) {
  // 30 requests cada 10 minutos por IP (ajustable)
  $key = 'vipar_leads_rl_' . md5($ip);
  $count = (int) get_transient($key);

  if ($count >= 30) {
    return new WP_REST_Response(['ok' => false, 'error' => 'Demasiadas solicitudes. Intentá más tarde.'], 429);
  }

  set_transient($key, $count + 1, 10 * MINUTE_IN_SECONDS);
  return null;
}

function vipar_get_ip() {
  $xff = $_SERVER['HTTP_X_FORWARDED_FOR'] ?? '';
  if ($xff) {
    $parts = explode(',', $xff);
    return trim($parts[0]);
  }
  return $_SERVER['REMOTE_ADDR'] ?? '';
}
```

---

### 1.4 Validación del mini-captcha (backend)

Dentro de `vipar_create_lead`, ANTES de guardar el post, agrega:

```php
// Honeypot: debe estar vacío.
$honeypot = sanitize_text_field($request->get_param('website'));
if ($honeypot) {
  return new WP_REST_Response(['ok' => false, 'error' => 'Solicitud rechazada'], 400);
}

$ip = vipar_get_ip();
$rl = vipar_rate_limit_or_fail($ip);
if ($rl) return $rl;

// Mini-captcha: suma simple.
$a = (int) sanitize_text_field($request->get_param('captcha_a'));
$b = (int) sanitize_text_field($request->get_param('captcha_b'));
$ans = (int) sanitize_text_field($request->get_param('captcha_answer'));

// Rango razonable para evitar basura
if ($a < 1 || $a > 9 || $b < 1 || $b > 9) {
  return new WP_REST_Response(['ok' => false, 'error' => 'Captcha inválido'], 403);
}

if ($ans !== ($a + $b)) {
  return new WP_REST_Response(['ok' => false, 'error' => 'Captcha inválido'], 403);
}
```

---

### 1.5 CORS restringido

Agrega esto al plugin (si aún no lo pusiste):

```php
add_filter('rest_pre_serve_request', function ($served, $result, $request, $server) {
  $origin = $_SERVER['HTTP_ORIGIN'] ?? '';

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

  if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    status_header(204);
    exit;
  }

  return $served;
}, 10, 4);
```

---

## 2) Astro landing: cambios

Ya está implementado en el repo:

- El formulario muestra una pregunta tipo `¿cuánto es 3 + 7?`.
- Envía a WordPress:
  - `captcha_a`, `captcha_b`, `captcha_answer`
  - `website` (honeypot)

Archivo:
- `src/components/ContactForm.astro`

---

## 3) Requisitos de configuración

En `.env.development` y producción:

- `CMS_API_URL` debe apuntar a WordPress y preferentemente con HTTPS:

```dotenv
CMS_API_URL=https://admin.vipar.com.py/wp-json
```

---

## 4) Pruebas

1) Enviar formulario con captcha correcto → WP debe responder 201 y guardar el lead.
2) Captcha incorrecto → 403.
3) Muchas solicitudes rápidas → 429.
4) Honeypot completado → 400.

---

## 5) Recomendación extra (muy simple y útil)

- Si podés, agregá un rate limit adicional a nivel de servidor (Apache/Nginx) o WAF.
- Mantener logs y monitorear picos de 429/403.
