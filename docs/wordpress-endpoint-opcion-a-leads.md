# Endpoint seguro en WordPress (Opción A) — Leads “server-to-server”

Objetivo: crear un endpoint REST en WordPress para recibir leads (contacto/cotización) de forma **segura**, validarlos y guardarlos en el admin.

> Recomendación clave: este endpoint debe ser llamado **desde tu backend** (Astro SSR / serverless / API route) y **NO** desde el navegador del usuario. Así no exponés credenciales.

---

## Requisitos

- WordPress **5.6+** (Application Passwords nativo).
- Sitio con **HTTPS** activo.
- Acceso a archivos del servidor (FTP/cPanel/SSH).
- Un usuario dedicado para API (recomendado).

---

## 1) Crear usuario dedicado para la API

1. WP Admin → **Usuarios → Añadir nuevo**.
2. Usuario sugerido: `vipar_api`.
3. Rol recomendado: **Editor** (permite `edit_posts`).
   - (Opcional avanzado) Crear un rol custom con permisos mínimos.

---

## 2) Generar Application Password

1. WP Admin → **Usuarios** → abrir `vipar_api`.
2. Sección **Application Passwords**.
3. Nombre: `Vipar Landing Leads`.
4. Click **Add New Application Password**.
5. Copiar y guardar la clave (se muestra una sola vez).

Con esto tendrás credenciales Basic Auth:

- `usuario`: `vipar_api`
- `password`: (Application Password)

---

## 3) Crear el plugin (no usar `functions.php`)

### 3.1 Estructura

Crear esta carpeta y archivo en el servidor:

- `wp-content/plugins/vipar-leads-api/`
- `wp-content/plugins/vipar-leads-api/vipar-leads-api.php`

### 3.2 Código del plugin

Pegar este contenido en `vipar-leads-api.php`:

```php
<?php
/**
 * Plugin Name: VIPAR Leads API
 * Description: Endpoint REST para recibir leads de contacto de forma segura (server-to-server).
 * Version: 1.0.0
 */

defined('ABSPATH') || exit;

add_action('init', function () {
  register_post_type('vipar_lead', [
    'label' => 'Leads',
    'public' => false,
    'show_ui' => true, // visible en WP Admin
    'supports' => ['title', 'editor'],
    'capability_type' => 'post',
    'menu_icon' => 'dashicons-email',
  ]);
});

add_action('rest_api_init', function () {
  register_rest_route('vipar/v1', '/leads', [
    'methods'  => 'POST',
    'callback' => 'vipar_create_lead',

    // Requiere autenticación (Application Password / Basic Auth)
    'permission_callback' => function () {
      return current_user_can('edit_posts');
    },

    'args' => [
      'name'    => ['type' => 'string', 'required' => true],
      'email'   => ['type' => 'string', 'required' => true],
      'phone'   => ['type' => 'string', 'required' => false],
      'city'    => ['type' => 'string', 'required' => false],
      'message' => ['type' => 'string', 'required' => true],
      'source'  => ['type' => 'string', 'required' => false],
      'page'    => ['type' => 'string', 'required' => false],
    ],
  ]);
});

function vipar_create_lead(WP_REST_Request $request) {
  // Sanitización / validación
  $name = sanitize_text_field($request->get_param('name'));
  $email = sanitize_email($request->get_param('email'));
  $phone = sanitize_text_field($request->get_param('phone'));
  $city = sanitize_text_field($request->get_param('city'));
  $message = wp_kses_post($request->get_param('message'));
  $source = sanitize_text_field($request->get_param('source'));
  $page = esc_url_raw($request->get_param('page'));

  if (!$name || !$email || !is_email($email) || !$message) {
    return new WP_REST_Response(['ok' => false, 'error' => 'Datos inválidos'], 400);
  }

  // Datos para auditoría
  $ip = $_SERVER['REMOTE_ADDR'] ?? '';
  $ua = $_SERVER['HTTP_USER_AGENT'] ?? '';

  // Guardar como CPT privado
  $post_id = wp_insert_post([
    'post_type'   => 'vipar_lead',
    'post_status' => 'private',
    'post_title'  => wp_strip_all_tags($name . ' - ' . $email),
    'post_content'=> $message,
    'meta_input'  => [
      'vipar_email' => $email,
      'vipar_phone' => $phone,
      'vipar_city'  => $city,
      'vipar_source'=> $source,
      'vipar_page'  => $page,
      'vipar_ip'    => $ip,
      'vipar_ua'    => $ua,
    ],
  ], true);

  if (is_wp_error($post_id)) {
    return new WP_REST_Response(['ok' => false, 'error' => 'No se pudo guardar'], 500);
  }

  // (Opcional) Notificar por email al admin
  // $admin_email = get_option('admin_email');
  // wp_mail($admin_email, 'Nuevo lead VIPAR', "Nombre: $name\nEmail: $email\nTel: $phone\nCiudad: $city\n\n$message");

  return new WP_REST_Response(['ok' => true, 'id' => $post_id], 201);
}
```

### 3.3 Activar el plugin

WP Admin → **Plugins** → activar **VIPAR Leads API**.

---

## 4) URL del endpoint

Una vez activo, el endpoint queda en:

- `https://TU-DOMINIO/wp-json/vipar/v1/leads`

Método:
- `POST`

Auth:
- **Basic Auth** con Application Password.

---

## 5) Probar el endpoint desde Windows (PowerShell)

> Reemplazar `TU-DOMINIO`, `vipar_api` y `TU_APPLICATION_PASSWORD`.

### 5.1 Crear header Basic Auth

```powershell
$user = "vipar_api"
$pass = "TU_APPLICATION_PASSWORD"
$bytes = [System.Text.Encoding]::UTF8.GetBytes("$user`:$pass")
$basic = [Convert]::ToBase64String($bytes)
$headers = @{ Authorization = "Basic $basic"; "Content-Type"="application/json" }
```

### 5.2 Enviar un lead

```powershell
$body = @{
  name="Juan Perez"
  email="juan@test.com"
  phone="+595981111111"
  city="Ñemby"
  message="Quiero cotizar un box de baño. Medidas aprox 1.2m x 2m."
  source="vipar-landing"
  page="https://vipar.com.py/contacto/"
} | ConvertTo-Json

Invoke-RestMethod -Method Post -Uri "https://TU-DOMINIO/wp-json/vipar/v1/leads" -Headers $headers -Body $body
```

Respuesta esperada:

```json
{ "ok": true, "id": 123 }
```

---

## 6) Ver leads en el Admin

WP Admin → menú **Leads** (CPT `vipar_lead`).

- Se guardan como `private`.
- Incluyen metadatos (email/teléfono/ciudad/source/page + ip/user-agent).

---

## 7) Seguridad recomendada (hardening)

Aunque la Opción A ya usa autenticación, agregá estas capas:

1. **HTTPS obligatorio**.
2. **Usuario API dedicado** (no usar el admin principal).
3. **Rotación** de Application Password (cada 60–90 días o ante sospecha).
4. **Rate limiting** en WAF/Cloudflare para `/wp-json/vipar/v1/leads`.
5. (Opcional top) **Allowlist de IP** si tu backend sale desde IP fija.
6. Mantener `post_status: private` para que no sea público.

---

## 8) Cómo consumirlo desde Astro (idea general)

- Crear una ruta server-side (API Route) en Astro:
  - Recibe el formulario.
  - Valida.
  - Llama al endpoint de WP con Basic Auth.
- Guardar credenciales en variables de entorno del servidor (ej.: `WP_API_USER`, `WP_APP_PASSWORD`, `WP_API_BASE_URL`).

> Nunca pongas `WP_APP_PASSWORD` en JS del cliente.

---

## Checklist final

- [ ] Endpoint responde 401/403 sin autenticación.
- [ ] Con autenticación correcta responde 201.
- [ ] Lead aparece en WP Admin → Leads.
- [ ] HTTPS activo.
- [ ] Rate limit configurado (si hay WAF/Cloudflare).
