# VIPAR Post-Release Dashboard Pack

## Objetivo
Medir el impacto real del sprint de captacion en los primeros 28 dias posteriores al release, con foco en:

- mejorar la tasa `form_view -> form_submit`
- mejorar la tasa `service_page_viewed -> whatsapp_click`
- subir el CTR organico de `/servicios/cielo-raso/`
- confirmar que home y landings comerciales convierten mejor en mobile

## Ventana de analisis
- baseline principal: 28 dias previos al release
- ventana de validacion principal: 28 dias posteriores al release
- cortes recomendados:
  - dia 2: QA de eventos y payloads
  - dia 7: lectura inicial de friccion y atribucion
  - dia 14: lectura intermedia de tendencia
  - dia 28: validacion oficial contra KPIs

## Fuente de verdad por tema
- PostHog: embudos de comportamiento, errores de formulario, clics de CTA, lectura por paso
- GA4: sesiones, usuarios, landings, conversiones por canal, comparativa mobile vs desktop
- GSC: impresiones, clics, CTR y posicion media por pagina y consulta

## KPIs oficiales
- `form_view -> form_submit`
  - baseline: `2,4%`
  - target: `>= 5,0%`
  - fuente principal: PostHog
- `service_page_viewed -> whatsapp_click`
  - baseline: `7,34%`
  - target: `>= 10,0%`
  - fuente principal: PostHog
- CTR de `/servicios/cielo-raso/`
  - baseline: `1,58%`
  - target: `>= 2,5%`
  - restriccion: sin perder posicion media
  - fuente principal: GSC
- `cta_location = null` en `whatsapp_click`
  - baseline: existia trafico con nulos
  - target: `0%`
  - fuente principal: PostHog y GA4 DebugView en QA

## Dashboard 1: Executive Scorecard
Vista para direccion y lectura semanal.

- total de `form_submit` en 28 dias
- total de `whatsapp_click` en 28 dias
- tasa `form_view -> form_submit`
- tasa `service_page_viewed -> whatsapp_click`
- sesiones organicas a landings prioritarias
- CTR de `/servicios/cielo-raso/`
- participacion de mobile en sesiones y leads

## Dashboard 2: PostHog Conversion Funnel
Nombre sugerido: `VIPAR | Conversion Funnel`

### Insight 1
- tipo: funnel
- pasos:
  - `form_view`
  - `form_start`
  - `lead_email_captured`
  - `form_submit`
- breakdown principal: `form_id`
- breakdown secundario: `device_type`
- lectura:
  - comparar `vipar-home-form` vs `vipar-contact-form`
  - detectar si mobile sigue cayendo mas que desktop

### Insight 2
- tipo: funnel
- pasos:
  - `service_page_viewed`
  - `whatsapp_click`
- breakdown principal: `service_name`
- breakdown secundario: `device_type`
- lectura:
  - priorizar `Cielo raso`, `Box de baño`, `Mamparas divisorias`

### Insight 3
- tipo: trends o bar
- evento: `whatsapp_click`
- breakdown: `cta_location`
- lectura:
  - confirmar que `floating_fab` deja de monopolizar la captacion
  - validar que `service_cta`, `home_contact_form` y `final_cta` ganan peso

### Insight 4
- tipo: trends o table
- evento: `form_error`
- breakdowns:
  - `field_name`
  - `step_name`
  - `form_id`
- lectura:
  - detectar el punto exacto donde se rompe el flujo

### Insight 5
- tipo: trends o funnel step table
- evento: `form_step_viewed`
- breakdowns:
  - `step_name`
  - `form_id`
  - `device_type`
- lectura:
  - revisar si todos los pasos vistos terminan con continuidad razonable

## Dashboard 3: GA4 Landing Performance
Nombre sugerido: `VIPAR | Landing SEO + Leads`

### Widgets minimos
- sesiones por landing:
  - `/`
  - `/servicios/cielo-raso/`
  - `/servicios/box-de-bano/`
  - `/servicios/mamparas-divisorias/`
- engagement rate por landing
- conversiones por landing:
  - `form_submit`
  - `whatsapp_click`
- sesiones por dispositivo en esas landings
- organic sessions vs direct vs referral para esas landings

### Cortes recomendados
- `page_path`
- `deviceCategory`
- `sessionDefaultChannelGroup`
- `landingPage`

### Lectura
- confirmar si el home deriva mejor trafico a landings comerciales
- validar que las landings no solo atraen sesiones sino que inician contacto

## Dashboard 4: GSC SEO Performance
Nombre sugerido: `VIPAR | GSC Priority Pages`

### Paginas a monitorear
- `/servicios/cielo-raso/`
- `/servicios/box-de-bano/`
- `/servicios/mamparas-divisorias/`
- `/`

### Widgets minimos
- clics por pagina
- impresiones por pagina
- CTR por pagina
- posicion media por pagina
- top queries para cada pagina

### Filtros recomendados
- rango: ultimos 28 dias
- comparacion: periodo anterior
- dimension principal: `page`
- dimension secundaria: `query`

### Lectura
- `cielo raso`: buscar mejora en CTR antes que en posicion
- `box de baño`: buscar crecimiento en clics long-tail de precio, medidas o materiales
- `mamparas divisorias`: buscar consolidacion en consultas B2B y oficinas

## Dashboard 5: Pre/Post Release Comparison
Nombre sugerido: `VIPAR | Release Lift`

### Comparativas obligatorias
- `form_submit` pre vs post
- `whatsapp_click` pre vs post
- `form_view -> form_submit` pre vs post
- `service_page_viewed -> whatsapp_click` pre vs post
- sesiones organicas por landing pre vs post
- CTR de `/servicios/cielo-raso/` pre vs post

### Segmentos obligatorios
- mobile vs desktop
- home vs service landings
- `vipar-home-form` vs `vipar-contact-form`

## Contrato de eventos a validar antes de leer resultados
Eventos esperados en GA4 y PostHog:

- `service_page_viewed`
- `form_view`
- `form_step_viewed`
- `form_start`
- `form_service_selected`
- `form_consultation_selected`
- `lead_email_captured`
- `form_submit`
- `form_error`
- `whatsapp_click`

Propiedades obligatorias:

- `form_id`
- `page_path`
- `page_type`
- `service_name`
- `consultation_type`
- `cta_location`
- `source`
- `variant`
- `lead_source`
- `lead_medium`

## Reglas de lectura
- Si sube `form_view` pero no sube `form_submit`, revisar `form_error` y `form_step_viewed`.
- Si sube `whatsapp_click` pero sigue concentrado en `floating_fab`, todavia no gano la jerarquia comercial nueva.
- Si suben impresiones en GSC pero no el CTR de `cielo raso`, tocar snippets y hero de nuevo.
- Si mobile mantiene mayor abandono que desktop, revisar otra vez banner, sticky CTA y largo de bloques previos al formulario.

## Alertas tempranas
- `cta_location = unknown` o nulo por encima de `1%`: problema de instrumentacion
- `form_error` concentrado en `email`: revisar UX o validacion
- `service_page_viewed` sin `service_name`: problema de payload
- `form_submit` en PostHog sin espejo en GA4: problema de dispatch cruzado

## Implementacion manual cuando vuelva el acceso a MCP
- Crear 1 dashboard ejecutivo
- Crear 1 dashboard de PostHog para funnels y errores
- Crear 1 dashboard GA4 o exploracion compartida para landings
- Crear 1 tablero GSC con paginas prioritarias
- Cargar el scorecard de 28 dias con baseline, target y valor post-release

## Entregables minimos
- dashboard pack creado
- scorecard de 28 dias actualizado
- screenshot o link de cada dashboard
- nota corta con:
  - que subio
  - que no subio
  - que se toca en el siguiente sprint
