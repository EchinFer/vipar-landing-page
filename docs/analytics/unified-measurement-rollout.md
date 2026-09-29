# VIPAR Unified Measurement Rollout — v2

Estado: preparado en el repositorio, sin publicar. Contrato y migración: [implementation-followup.md](../audits/2026-09-28/implementation-followup.md).

## Eventos

- `whatsapp_handoff`: intención en enlaces, FAB y formulario. Abrir WhatsApp no confirma consulta recibida.
- Formulario: `form_view` visible, `form_start`, `form_submit_attempt`, `form_error` y `form_validated`. Email y servicio opcionales; Presupuesto por defecto; preselección contextual.
- `service_page_viewed`: después del consentimiento y disponibilidad del proveedor, una vez por página/herramienta. Validar contra vistas reales de servicio.
- El formulario activo deja de emitir `lead_email_captured` y `form_submit`; aliases de WhatsApp se normalizan a `whatsapp_handoff`.
- Leads recibidos/calificados, presupuestos enviados, ventas y revenue: **No disponible / no instrumentado**.

## Privacidad y atribución

Lista permitida de propiedades sin email, nombre, teléfono, mensaje, URL completa de WhatsApp u objetos anidados. Email opcional únicamente en el mensaje destinado al receptor de WhatsApp; `has_email` booleano. Identificación por email retirada del formulario activo en PostHog.

`form_source` es contexto del formulario. `first_touch_*`, `session_*` y `current_referrer` son conceptos distintos; referrers internos no sustituyen la adquisición. No enviar analytics de producción desde localhost/previews.

## Acciones manuales al publicar

1. Anotar fecha/hora real y separar versiones.
2. Marcar `whatsapp_handoff` como Key event de intención en GA4. Retirar la suma de eventos de validación/email/formulario como supuestos leads.
3. Actualizar dimensiones y dashboards; usar usuarios/sesiones únicos y unión de contactos.
4. QA de consentimiento nuevo, guardado y rechazado, SDK tardío, preselección, payloads y deduplicación.
5. Verificar aliases HTTP: box-bano sigue 404 en producción al 28/09/2026. Apache debe aplicar el `.htaccess` incluido en `dist`; otros proveedores necesitan reglas equivalentes.
6. Crear propiedad GSC de dominio cuando haya acceso autorizado de DNS.

Baseline: [audit-vipar.md](../audits/2026-09-28/audit-vipar.md). Los antiguos funnels y targets requieren revalidación de periodo, semántica y muestra antes de aplicarlos a v2.
