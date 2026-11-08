# Datos de VIPAR para el rediseño

**Sitio:** https://vipar.com.py/  
**Extracción:** 7 de noviembre de 2026  
**Fuentes:** GA4 (propiedad 488034623) y Google Search Console (propiedad `https://vipar.com.py/`).  
**Ventana para decisiones actuales:** 1 de agosto al 3 de noviembre de 2026 (95 días).  
**Histórico disponible:** GA4 desde mayo de 2025; Search Console con registros desde octubre de 2025. Las consultas de Search Console abarcan 7 de julio de 2025 a 3 de noviembre de 2026, pero no hay filas antes de octubre de 2025.

## Qué puede decidirse con estos datos

La demanda demostrada se concentra en **box de baño, cielo raso y mamparas divisorias**. Sus páginas de servicio registraron, respectivamente, 352, 337 y 275 clics de Google en 95 días. La portada recibió 429. Conviene conservar sus URL, cubrir esos temas con claridad y darles un camino visible hacia la cotización. Los artículos sobre precios de cielo raso y mamparas también atraen búsquedas comerciales: 166 y 89 clics, respectivamente.

La [matriz de páginas](MATRIZ_PAGINAS_REDISTRIBUCION_VIPAR.csv) cruza 80 rutas normalizadas con clics e impresiones de Search Console, sesiones de entrada y eventos clave de GA4, tanto recientes como históricos. Marca 12 rutas de prioridad alta por demanda observada. **La columna de orientación es una señal para revisar, no una orden automática de eliminar el resto.** Una página de obras, contacto o información institucional puede ser necesaria aunque reciba pocos clics de Google.

Si se cambia una URL, conservar una redirección hacia la URL nueva y mantener la intención del contenido. Hay rutas históricas con señales propias, como `/servicios/mampara-divisoria/` (62 clics en el histórico); el código actual ya presenta una redirección hacia `/servicios/mamparas-divisorias/`. También existen rutas de redirección para `/servicios/fachada/` y `/servicios/ventana/`. El rediseño debe preservar estos caminos.

## Incidencia que afecta las decisiones

Los **84 eventos clave** de GA4 del período principal ocurrieron en agosto y septiembre. En octubre se registraron **329 sesiones, 746 clics de Google y 59 eventos `whatsapp_handoff`**, pero cero eventos clave. La propiedad tiene `whatsapp_click` configurado como evento clave y el código actual envía `whatsapp_handoff` para los enlaces de WhatsApp. Por eso, **no se puede usar la columna de eventos clave para concluir que una página dejó de generar contactos desde octubre**. También hubo cuatro intentos `form_submit_attempt` y ningún `form_submit` en octubre; hay que revisar el flujo del formulario antes de evaluar su rendimiento.

GA4 registra 893 sesiones en los 95 días, mientras Search Console registra 1.960 clics de Google. Las métricas no son equivalentes y el código de VIPAR condiciona la analítica al consentimiento. No mezclar ambos denominadores para calcular conversiones.

## Cómo usar los archivos

1. Leer el [informe interpretado](INFORME_GA4_GSC_VIPAR_2026-11-07.md) para métricas, tendencias y prioridades.
2. Abrir [MATRIZ_PAGINAS_REDISTRIBUCION_VIPAR.csv](MATRIZ_PAGINAS_REDISTRIBUCION_VIPAR.csv) y ordenar por clics recientes, sesiones y función de negocio. Tomar cada URL de baja actividad como una decisión editorial o comercial pendiente.
3. Consultar [gsc_recent_page_query.csv](gsc_recent_page_query.csv) para ver qué búsquedas llegan a cada URL; [gsc_historical_pages.csv](gsc_historical_pages.csv) y [gsc_historical_queries.csv](gsc_historical_queries.csv) amplían el contexto histórico.
4. Consultar [ga4_historical_landing.csv](ga4_historical_landing.csv), [ga4_historical_pages.csv](ga4_historical_pages.csv) y [ga4_historical_events.csv](ga4_historical_events.csv) para contrastar entradas, vistas y eventos a lo largo de la vida de la propiedad. Los archivos `ga4_historical_monthly_events.csv` y `ga4_historical_monthly_landing.csv` muestran cuándo cambió la actividad.
5. Usar los JSON con las respuestas originales cuando se necesite auditar o rehacer el análisis. Los CSV están codificados en UTF-8 con BOM para abrirlos en Excel.

Search Console oculta parte de las consultas por privacidad. Por eso, las filas de consultas no suman todos los clics del sitio: en la ventana reciente se ven 2.067 consultas que suman 629 clics frente al total global de 1.960. Esto limita la lectura de términos exactos, pero no invalida los totales de páginas o la tendencia diaria. Algunas URL con y sin barra final se agruparon en la matriz; los archivos originales conservan esas variantes por separado.

## Información que aún requiere criterio del negocio

Para decidir **qué sacar**, además del tráfico hace falta saber cuáles servicios VIPAR quiere vender, cuáles tienen mejor margen, capacidad de entrega y valor estratégico, qué obras sirven como prueba comercial y cuántas consultas de WhatsApp terminaron en presupuestos o ventas. Esos resultados ocurren fuera de GA4 y Search Console. Sin ellos, una página con pocas visitas puede seguir siendo importante para una propuesta, una campaña o un cliente de alto valor.

Con esta entrega el profesional puede empezar el mapa de contenidos y la arquitectura del rediseño. Antes de cerrar una lista de páginas a eliminar, conviene validar la medición de contactos y cruzar la matriz con las prioridades comerciales de VIPAR.
