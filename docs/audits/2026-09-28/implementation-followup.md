# VIPAR: captación y medición v2

28/09/2026 · Cambios preparados en el repositorio, sin publicar ni modificar GA4, GSC o PostHog. La auditoría y sus JSON conservan el baseline previo a estos cambios.

Continuación: [SEO visual, vidrio templado/Blindex y prueba de obra](visual-seo-followup.md). Incluye la nueva landing, la curación visual y los chequeos de imágenes del build.

## Diagnóstico y orden operativo

Organic Search aporta 651/783 sesiones y 101/117 usuarios con intención de contacto. Cielo, Mamparas y Box concentran 408 sesiones y 76 sesiones con intención. Conviene capturar esa demanda y conectar el contenido existente antes de ampliar servicios o artículos. Esto identifica captación observable; no permite afirmar qué servicio genera más ventas.

20,7%, 18,9% y 16,0% son tasas de intención con muestras pequeñas; no se declara una diferencia significativa entre las landings. Cielo tiene prioridad por su visibilidad y caída reciente: 167 → 138 clics del servicio, frente a 18 → 74 de la guía de precios entre ventanas de 45 días. No se confirmó canibalización.

| Orden | Acción | Estado y alcance |
|---|---|---|
| 1 · P0 | Quitar PII de GA4 | Email retirado de eventos del formulario y lista permitida de propiedades en el dispatcher. |
| 2 · P0 | Simplificar formulario | Servicio contextual preseleccionado, selectores opcionales, Presupuesto por defecto, email opcional y elecciones conservadas para reintentar. |
| 3 · P0 | Corregir vistas y atribución | Un dispatcher; vistas después del consentimiento y disponibilidad del SDK; adquisición persistida separada del referrer actual. |
| 4 · P1 | Recuperar cielo raso | Title/H1 transaccionales implementados; medir ranking, CTR y captación. El cambio no garantiza recuperación. |
| 5 · P1 | Servicio ↔ contenido existente | Tres clusters conectados: precio/comparación desde servicios, retorno comercial desde guías y enlaces entre artículos del tema. Sin artículos nuevos. |
| 6 · P1 | Box y “mamparas para baño” | Title, H1 y descripción ajustados a la nomenclatura detectada en GSC. |
| 7 · P1 | Preservar Mamparas | Contenido principal y title/H1 conservados; enlaces de apoyo y casos pertinentes. |
| 8 · P2 | Intención local Asunción | Home/Contacto explican la base en Ñemby y solicitan localidad para confirmar cobertura. Una landing local requiere confirmación comercial. |
| 9 · P2 | Redirect box-bano | Regla 301 en `.htaccess` y `public/.htaccess`, incluido en el build. El alias sigue 404 en producción antes de publicar. |
| 10 · P0 de negocio | Registrar consultas reales | No disponible / no instrumentado. Requiere participación del cliente. No se generan leads sintéticos desde clics. |

Los casos se integran como prueba contextual, sin imponer una visita al portfolio. Se usan referencias existentes: Vivienda – Box de Baño, Virgen del Huerto, Oficina – Divisorias y Cielo Raso y CARDE APF. Los servicios aplicados de una obra enlazan a su landing cuando existe correspondencia. El FAB conserva interfaz y disponibilidad, incluida la configuración previa de páginas que lo ocultan.

## Contrato de eventos

| Evento | Significado |
|---|---|
| `$pageview` / `page_view` | Página observada con consentimiento. No se envía a producción desde localhost/previews. |
| `service_page_viewed` | Landing comercial, una vista por página y proveedor; espera al SDK y al consentimiento. |
| `form_view`, `form_step_viewed` | Formulario/sección visible mediante IntersectionObserver; no mero renderizado. |
| `form_start` | Primera interacción o intento de continuar. La preselección automática no cuenta como inicio. |
| `form_submit_attempt` | Intento de continuar, incluyendo validación fallida. |
| `form_error` | Error con `field` y `error_type`, sin valor del campo. |
| `form_validated` | Datos válidos para preparar WhatsApp; paso intermedio. |
| `whatsapp_handoff` | Interacción que intenta abrir WhatsApp: formulario, FAB y enlaces. No confirma mensaje enviado, recepción ni cualificación. |
| `phone_click`, `email_click` | Intención de contactar, sin confirmar llamada atendida/email enviado. |

Los aliases de WhatsApp se normalizan a `whatsapp_handoff`. El formulario activo deja de emitir `lead_email_captured` y `form_submit`; el dispatcher rechaza esos dos eventos antiguos para evitar reintroducir conversiones duplicadas.

Propiedades: `service_slug`, nombre normalizado, `form_id`, `form_source`, `cta_location`, `consultation_type`, `has_email` booleano, atribución y `measurement_version=2`. Email, dominio del email, nombre, teléfono, texto del mensaje, URL completa de WhatsApp y objetos anidados quedan fuera del payload permitido. El email opcional se incluye únicamente en el mensaje destinado al contacto por WhatsApp; también se retiró la identificación automática por email del formulario activo en PostHog. Los inputs de grabaciones siguen enmascarados. [Política de PII de GA4](https://support.google.com/analytics/answer/6366371?hl=en).

## Atribución y consentimiento

- `first_touch_*`: primera adquisición observada con consentimiento en este navegador, persistida 180 días. No reconstruye actividad sin consentimiento ni otros dispositivos.
- `session_*`: contexto del mismo tab; nueva adquisición tras 30 minutos de inactividad. Es atribución propia de navegador, independiente del modelo nativo de GA4.
- `current_referrer`: hostname actual, sin query. Puede ser VIPAR sin sustituir la adquisición de Google.
- Sin historial consentido, una entrada desde una página interna se clasifica `unattributed / unknown`; no se inventa Google o Direct.
- UTMs sin medium siguen `unknown` en el contexto propio. Esto no prueba el origen de las anomalías históricas con fuentes VIPAR.
- `form_source` describe el formulario y no sobrescribe adquisición. La configuración de GA4 conserva UTMs válidas e identificadores anónimos de Google Ads, eliminando otros valores de query y fragmentos.
- Rechazar/retirar consentimiento bloquea los eventos propios y borra el contexto persistido. WhatsApp y el formulario funcionan sin aceptar analytics.

La nueva cobertura debe verificarse en producción contra vistas reales de `/servicios/...` antes de adoptar el evento semántico como denominador. Consentimiento, blockers y SDKs pueden seguir generando diferencias entre herramientas. [Configuración de GA4](https://developers.google.com/analytics/devguides/collection/ga4/reference/config).

## Migración al publicar

1. Registrar fecha/hora reales del release y separar v1/v2. Los tests locales no demuestran publicación o ingestión de los proveedores.
2. En GA4 configurar `whatsapp_handoff` como evento clave de intención. Retirar la suma de `form_submit` y `lead_email_captured` como supuestos leads; `form_validated` queda intermedio. Incorporar teléfono/email a la unión de contactos después de QA.
3. Registrar dimensiones necesarias: `service_slug`, `cta_location`, `form_id`, `form_source`, `measurement_version`, `session_source`, `session_medium`, `first_touch_source`. Para canales, landing y dispositivo usar dimensiones nativas de GA4.
4. PostHog: vista real de servicio → handoff; formulario visible → inicio → intento → validación → handoff. Deduplicar usuarios/sesiones con ventanas explícitas.
5. Para historia, unir eventos legacy y v2 por usuario/sesión. Los 127 key events y 117 usuarios son unidades diferentes: la diferencia de diez no cuantifica duplicados por sí sola. La secuencia del mismo flujo confirma la duplicación.
6. No comparar `form_view` renderizado antiguo con impresión visible nueva como si tuvieran el mismo significado. No interpretar una caída de key events después de la limpieza como pérdida comercial automática.
7. Verificar consentimiento nuevo/guardado/rechazado, SDK tardío, preselección, payloads sin PII y una vista semántica por página/proveedor. Revisar cobertura real con datos nuevos.
8. Verificar redirects tras publicar. Apache necesita aplicar el `.htaccess` incluido en `dist`; un proveedor estático diferente requiere reglas equivalentes. No sustituir HTTP 301 por meta refresh. [Redirects estáticos en Astro](https://docs.astro.build/en/guides/routing/#redirects).
9. Crear propiedad GSC de dominio cuando exista acceso autorizado para validar DNS.

Revisar también la medición mejorada de formularios de GA4: sus eventos automáticos no pasan por el dispatcher del sitio. Validar/desactivar esa captura si duplica `form_start` o conserva un `form_submit` automático; nunca contarlo como lead recibido ni evento clave adicional. El smoke test con SDKs simulados no audita esa configuración remota.

## HTTP de producción antes de publicar

GET sin seguir redirects, 28/09/2026:

| URL probada | Código | Resultado |
|---|---:|---|
| `https://www.vipar.com.py/` | 301 | `https://vipar.com.py/` |
| `https://www.vipar.com.py/servicios/cielo-raso/?utm_source=redirect-check` | 301 | Path y query conservados bajo non-www. |
| `http://www.vipar.com.py/blog/cuanto-cuesta-cielo-raso-paraguay/` | 301 | Path conservado bajo HTTPS non-www. |
| `https://vipar.com.py/servicios/box-bano/` | 404 | Sin Location. |

Estos casos confirman un 301 funcional; no enumeran exhaustivamente todas las URLs. Los snippets históricos no prueban un redirect roto. La propiedad GSC de dominio sigue siendo útil para ambos hosts/protocolos.

## Registro comercial y seguimiento

North Star: **Qualified Website Leads / mes**. Hoy: **No disponible / no instrumentado**. Un handoff no la reemplaza.

El mínimo necesario es un registro del cliente con `lead_id` opaco, recepción real, servicio, tipo residencial/comercial cuando se conozca, estado, motivo de descarte y origen web confirmado. El cliente debe acordar criterios de cualificación y registrar presupuesto solicitado/enviado y venta. Puede comenzar con una planilla sin acceso completo de la agencia al CRM.

`lead_received`, `lead_qualified`, `quote_requested`, `quote_sent` y `sale_closed` deben proceder de ese registro o una integración que confirme los hechos. Conectar mediante IDs opacos y consentimiento, sin PII en GA4. No se implementan webhook, recepción o venta ficticios sin el acceso/registro requerido.

Monitorear usuarios/sesiones únicos con intención, Organic → intención, landing → intención, inicio → handoff, errores, coverage de vistas y query–página de Cielo/Box. Revisar semanalmente controlando mix de landing/dispositivo y cambio de taxonomía. Con 27 inicios en 90 días no se fija duración A/B ni significancia a 28 días: la simplificación es una corrección directa con QA.

30 días: publicar tras revisión, migrar medición, verificar cobertura/PII, seguir Cielo/Box, confirmar cobertura local y solicitar registro comercial. 31–60: evaluar cluster, queries por dispositivo/país y formularios; ajustar con evidencia. 61–90: expansión local confirmada y experimentos cuando exista volumen y resultado comercial definido.

## Validación local

Tests de analytics cubren PII, URLs, persistencia/expiración, consentimiento, deduplicación, preselección y exclusión de localhost/previews. Smoke test en 390×844 y 1440×900 con SDKs sustituidos por mocks y requests externos bloqueados: valida lógica y payloads; no ingestión real o incremento de negocio. QA encontró y corrigió un error previo de imports Bootstrap en el script inline de Layout; Astro ahora procesa esos imports y AOS puede iniciar después de `load`.

Comandos: `node --test tests/analytics.test.mjs`, `pnpm exec astro check`, `pnpm exec astro build`. El smoke test reutiliza Playwright mediante `VIPAR_PLAYWRIGHT_MODULE` y Chrome/Chromium local mediante `VIPAR_BROWSER_PATH`: `node tests/browser-smoke.mjs` después del build. Sin dependencias nuevas ni eventos de producción durante el test.

Resultado final: 10/10 tests; Astro Check con 0 errores, 0 warnings y 87 hints; build de 62 páginas; ambos viewports pasaron el smoke test. Ejecución con Node 24.18.0. El detalle reproducible está en [implementation-verification.json](implementation-verification.json).
