# VIPAR: tráfico, páginas, servicios y eventos

Para el profesional a cargo del rediseño, ver también [la guía de entrega](ENTREGA_PARA_REDISENO_VIPAR.md) y [la matriz de 80 rutas](MATRIZ_PAGINAS_REDISTRIBUCION_VIPAR.csv). La extracción histórica ampliada está en `ga4_vipar_historico_detallado.json`, `gsc_historical_pages.json`, `gsc_historical_queries.json` y `gsc_recent_page_query.json`.

**Corte principal:** 1 de agosto al 3 de noviembre de 2026 (95 días). **Fuentes:** GA4, propiedad `488034623`, zona horaria America/Asuncion; Search Console, propiedad `https://vipar.com.py/`, búsqueda web, datos finales. La extracción se hizo el 7 de noviembre de 2026. Se incluyen CSV y JSON con el detalle completo de las consultas.

## Resumen ejecutivo

VIPAR obtiene casi todo su tráfico medido de búsqueda orgánica: 760 de 893 sesiones en GA4 (85,1 %). En Google Search, el sitio recibió 1.960 clics y 63.885 impresiones, con CTR global de 3,07 % y posición media aproximada de 6,3. Los clics crecieron 108,5 % frente a los 95 días anteriores (940 clics), aunque el CTR bajó de 3,37 % a 3,07 %. Los cuatro destinos más fuertes son la portada y las páginas de box de baño, cielo raso y mamparas divisorias.

**Incidencia prioritaria de medición:** GA4 registra 84 eventos clave en todo el corte, pero **cero desde el 1 de octubre**. El tráfico sí siguió: octubre tuvo 329 sesiones y 746 clics de Search Console. En el mismo mes aparecieron 59 eventos `whatsapp_handoff`, mientras `whatsapp_click`, configurado como evento clave, desapareció. El código actual normaliza los enlaces de WhatsApp a `whatsapp_handoff`. Por eso, el dato de cero conversiones desde octubre **no demuestra cero contactos**; el evento nuevo no figura entre los eventos clave. Además, octubre tuvo cuatro `form_submit_attempt` y ningún `form_submit` registrado. Conviene revisar el formulario por separado.

## Indicadores principales

| Indicador | Valor |
|---|---:|
| GA4: usuarios totales / nuevos | 710 / 693 |
| GA4: sesiones / sesiones con interacción | 893 / 577 |
| GA4: tasa de interacción | 64,6 % |
| GA4: vistas de página | 1.370 |
| GA4: eventos totales | 8.216 |
| GA4: eventos clave | 84 |
| Search Console: clics / impresiones | 1.960 / 63.885 |
| Search Console: CTR / posición media aprox. | 3,07 % / 6,3 |

Los clics de Search Console y las sesiones de GA4 miden cosas distintas. Además, el código de VIPAR envía analítica después del consentimiento, lo cual puede reducir la cobertura de GA4. No se debe calcular una tasa de conversión dividiendo los eventos clave de GA4 por los clics de Search Console.

## Servicios y páginas con mayor demanda

| Página | Clics Google | Impresiones | CTR | Sesiones de entrada GA4 | Eventos clave asociados a la entrada |
|---|---:|---:|---:|---:|---:|
| Inicio `/` | 429 | 10.441 | 4,11 % | 213 | 18 |
| Box de baño | 352 | 8.247 | 4,27 % | 150 | 13 |
| Cielo raso | 337 | 15.443 | 2,18 % | 136 | 17 |
| Mamparas divisorias | 275 | 7.282 | 3,78 % | 103 | 16 |
| Blog: cuánto cuesta cielo raso | 166 | 8.469 | 1,96 % | 47 | 3 |
| Carpintería de aluminio | 100 | 2.458 | 4,07 % | 44 | 6 |
| Blog: costo mamparas divisorias | 89 | 1.604 | 5,55 % | 28 | 1 |
| Puertas | 51 | 1.568 | 3,25 % | 18 | 0 |
| Cortinas | 38 | 972 | 3,91 % | 19 | 2 |
| Blog: mamparas para oficinas | 21 | 1.323 | 1,59 % | 15 | 0 |
| Fachadas | 21 | 626 | 3,35 % | 14 | 1 |
| Ventanas | 19 | 1.545 | 1,23 % | 7 | 0 |

Las tres páginas de servicios líderes reúnen 964 clics de Search Console y 389 sesiones de entrada en GA4. Cielo raso tiene la mayor exposición entre servicios, pero un CTR de 2,18 %; allí hay margen para mejorar el título y la descripción en resultados de búsqueda. El artículo de precio de cielo raso combina 8.469 impresiones con un CTR de 1,96 % y solo 3 eventos clave asociados a sus sesiones de entrada: merece revisar el enlace y el llamado a cotizar, además del texto que aparece en Google. Los eventos clave por página de entrada corresponden a agosto y septiembre por la incidencia de octubre.

En vistas de página de GA4, el orden principal es: inicio 281; box de baño 202; cielo raso 165; mamparas 144; índice de servicios 75; carpintería de aluminio 62; obras 58; contacto 56. Las sesiones de entrada y las vistas de página no son equivalentes: una página puede recibir visitas desde otra sección del sitio.

## Búsquedas que atraen clics

| Consulta visible en GSC | Clics | Impresiones | Posición media |
|---|---:|---:|---:|
| vipar | 39 | 158 | 2,0 |
| mamparas divisorias precios paraguay | 32 | 333 | 2,2 |
| cielo raso de yeso | 28 | 746 | 2,4 |
| mamparas para baño | 22 | 1.133 | 6,0 |
| mamparas divisorias | 20 | 596 | 2,6 |
| cielo raso paraguay | 16 | 62 | 1,6 |
| cielo raso | 15 | 4.407 | 6,8 |
| mampara para baño precio paraguay | 15 | 445 | 4,2 |
| mamparas para baño precios paraguay | 15 | 244 | 4,3 |
| mamparas de acrílico para baño en paraguay | 12 | 184 | 4,6 |

Search Console devolvió **2.067 consultas visibles**. Esas filas suman 629 clics, menos que los 1.960 clics totales, por la anonimización y los límites de desglose de consultas de Google. Para totales y tendencias se usan los datos por día, dispositivo y país; no se suman las consultas como si fueran el total del sitio. Las filas por página también pueden sumar más que los clics totales porque una búsqueda puede mostrar varias URL del mismo sitio.

## Eventos y contactos

| Evento GA4 | Recuento | Lectura |
|---|---:|---|
| `service_page_viewed` | 658 | Interés en páginas de servicio |
| `form_step_viewed` | 476 | Vistas de pasos del formulario; no son personas únicas |
| `form_view` | 224 | Visualizaciones del formulario |
| `form_service_selected` | 99 | Selección de un servicio |
| `whatsapp_click` | 77 | Evento clave configurado; solo agosto y septiembre |
| `whatsapp_handoff` | 71 | Salidas a WhatsApp; 59 en octubre y 5 del 1 al 3 de noviembre; no figura como evento clave |
| `form_start` | 49 | Inicios de formulario |
| `contact_cta_click` | 26 | Clics en llamados a contacto |
| `form_error` | 18 | Errores registrados |
| `form_submit_attempt` | 7 | Intentos de envío; 4 en octubre |
| `form_submit` | 7 | Evento clave configurado; 2 en agosto y 5 en septiembre |

De los 84 eventos clave, 77 son `whatsapp_click` y 7 son `form_submit`. `purchase` y `whatsapp_fab_click` también figuran configurados como eventos clave, pero no tuvieron registros en este corte. En cuanto a ubicación del evento, los `whatsapp_handoff` aparecen sobre todo en box de baño (18), inicio (16) y cielo raso (13). Los 6 `form_submit` ubicados en una URL ocurrieron en `/contacto/` y uno en inicio. El recuento de eventos no equivale a 84 clientes o presupuestos recibidos.

La lectura técnica del repositorio respalda la incidencia: `src/lib/tracking.ts` asigna `whatsapp_handoff` a los enlaces de WhatsApp, y la configuración de GA4 devuelve `whatsapp_click` como evento clave. La fecha exacta del cambio de despliegue no se verificó aquí. Antes de usar conversiones para evaluar octubre y noviembre, hay que ajustar la definición del evento clave o construir una serie histórica que trate ambos nombres como el mismo resultado, sin duplicar contactos.

## Canales, dispositivos y geografía

| Canal GA4 | Sesiones | Eventos clave |
|---|---:|---:|
| Organic Search | 760 | 70 |
| Direct | 80 | 6 |
| Unassigned | 35 | 6 |
| AI Assistant | 10 | 1 |
| Referral | 9 | 1 |

Dentro de búsqueda orgánica, `google / organic` aportó 742 sesiones y Bing 15. La fuente `vipar-home-stitch / (not set)` aportó 27 sesiones clasificadas como `Unassigned`; conviene verificar ese etiquetado para que los informes de adquisición sean más claros.

En GA4, móvil concentró 703 sesiones (78,7 %) y 66 eventos clave; escritorio, 187 sesiones y 18 eventos clave. En Search Console, móvil aportó 1.229 clics (62,7 %) con CTR de 2,49 %, frente a 722 clics de escritorio y CTR de 5,01 %. La posición media es similar en ambos (6,3), por lo que revisar la presentación móvil de los resultados de mayor impresión puede ser útil. Paraguay concentró 771 sesiones GA4 (86,3 %) y 1.818 clics de Google (92,8 %).

## Tendencia y comparación

| Mes 2026 | Clics Google | Impresiones Google | Sesiones GA4 | Eventos clave GA4 |
|---|---:|---:|---:|---:|
| Junio | 362 | 11.830 | 177 | 0 |
| Julio | 584 | 16.010 | 286 | 44 |
| Agosto | 584 | 17.998 | 270 | 39 |
| Septiembre | 579 | 19.582 | 259 | 45 |
| Octubre | 746 | 24.319 | 329 | 0 |
| 1–3 noviembre | 51 | 1.986 | 35 | 0 |

Octubre creció 28,8 % en clics de Google y 27,0 % en sesiones GA4 respecto de septiembre. La desaparición simultánea de los eventos clave es incompatible con interpretar automáticamente que cayó la demanda. En la comparación de 95 días, los clics aumentaron de 940 a 1.960 (+108,5 %) y las impresiones de 27.856 a 63.885 (+129,3 %). El CTR pasó de 3,37 % a 3,07 %. Las mayores subidas por URL fueron inicio (+201 clics), box de baño (+164), artículo de precio de cielo raso (+153), cielo raso (+125) y mamparas (+92). Es una comparación descriptiva; no atribuye el crecimiento a una causa concreta.

La extracción histórica incluye la serie diaria de Search Console desde octubre de 2025, cuando aparece el primer dato del período solicitado, y la serie mensual de GA4 desde la creación de la propiedad en mayo de 2025. Entre febrero y mayo de 2026, Search Console muestra muy pocos clics aunque GA4 registra sesiones. Vale la pena revisar los cambios de sitio, indexación y medición de esas fechas antes de analizar esa etapa como una tendencia comercial.

## Acciones recomendadas

1. **Corregir la medición de contactos:** marcar `whatsapp_handoff` como evento clave si representa el contacto deseado y comprobar el flujo con una visita de prueba; revisar por qué `form_submit_attempt` no llega a `form_submit` desde octubre. Conservar `whatsapp_click` en la lectura histórica hasta que la serie esté reconciliada.
2. **Priorizar las tres páginas de servicios líderes:** actualizar la información de box de baño, cielo raso y mamparas, especialmente precios orientativos, opciones, fotos reales y acceso claro a cotización. Son las que más tráfico y contactos medidos concentran.
3. **Mejorar los resultados con muchas impresiones y bajo CTR:** empezar por cielo raso, el artículo de su precio, ventanas y `cielo-raso-pvc-vs-yeso` (2.906 impresiones, 14 clics, CTR 0,48 %). Revisar título, descripción y ajuste entre consulta y contenido; evaluar el cambio con un nuevo período comparable.
4. **Conectar artículos con páginas comerciales:** los artículos sobre costos atraen búsquedas relevantes. Medir sus clics hacia servicios y WhatsApp con eventos consistentes para saber si generan oportunidades reales.
5. **Revisar etiquetado de adquisición y cobertura de medición:** inspeccionar `vipar-home-stitch / (not set)` y la proporción de clics de Google que termina visible en GA4, teniendo en cuenta el consentimiento y las definiciones diferentes de cada plataforma.

## Archivos de datos

- **GA4 bruto:** `ga4_vipar_2026-08-01_2026-11-03.json`, `ga4_vipar_extra.json`, `ga4_vipar_long.json`.
- **Search Console bruto:** `gsc_vipar_2026-08-01_2026-11-03.json`, `gsc_vipar_historico_diario.json`.
- **CSV de GA4:** `ga4_channels.csv`, `ga4_sources.csv`, `ga4_landing.csv`, `ga4_pages.csv`, `ga4_events.csv`, `ga4_event_pages.csv`, `ga4_devices.csv`, `ga4_countries.csv`, `ga4_months.csv`, `ga4_organic_landing.csv`, `ga4_monthly_events.csv`, `ga4_monthly_landing.csv`, `ga4_monthly_channels.csv`, `ga4_long_months.csv`.
- **CSV de Search Console:** `gsc_pages.csv`, `gsc_all_queries.csv`, `gsc_devices.csv`, `gsc_countries.csv`, `gsc_dates.csv`, `gsc_comparison.csv`, `gsc_historico_diario.csv`.

Los JSON conservan la respuesta original de cada consulta y los CSV facilitan filtrar y ordenar. El histórico de Search Console es diario; el histórico de GA4 es mensual. Ninguna consulta modificó la configuración de las propiedades.
