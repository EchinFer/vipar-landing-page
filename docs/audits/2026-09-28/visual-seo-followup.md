# VIPAR: implementación de SEO visual y prueba de obra

Fecha: 28/09/2026. Cambios preparados en el repositorio; publicación pendiente.

## Evidencia y alcance

La confirmación comercial del usuario permite ofrecer vidrio templado y Blindex. No se atribuye la marca Blindex a una foto de obra, ni se afirma que VIPAR sea distribuidor oficial o que tenga certificaciones no documentadas. Blindex es una marca, según su [información de producto](https://www.blindex.com.br/pt-br/comercios/vitrines).

Fuente de demanda: `evidence.json`, `gsc.namedQueriesCurrent` y `gsc.queryPageCurrent`, del 28/06 al 25/09/2026. El filtro literal `vidrio templado|cristal templado|blindex` reproduce **43 queries visibles, 182 impresiones y 3 clics**. Incluyendo el plural «cristales templados», son 44 queries, 185 impresiones y los mismos 3 clics. Blindex por sí solo: 4 queries, 4 impresiones y 1 clic. No son estimaciones de volumen total del mercado ni incluyen las consultas anonimizadas por Google.

| Query visible | Impresiones | Clics | Posición | Página observada |
|---|---:|---:|---:|---|
| vidrio templado precio paraguay | 27 | 1 | 3,3 | Home |
| vidrio templado | 29 | 0 | 8,0 | Principalmente Home: 28 impresiones, posición 8,2 |
| vidrio templado para baño | 15 | 0 | 6,3 | Home; también aparece Box en el desglose por página |
| box de baño vidrio templado | 49 | 0 | 6,1 | Box y guías relacionadas |

Las métricas query y query+página pertenecen a agregaciones distintas: no se suman las impresiones de varias páginas para reconstruir el total de una query.

**Interpretación:** existe relevancia orgánica para vidrio templado, pero falta una respuesta comercial dedicada. **Hipótesis:** una landing con aplicaciones, obras y enlaces a los servicios específicos puede responder mejor que Home. **Acción:** crearla y observar rendimiento después de publicar. La evidencia de Cielo, Box y Mamparas sigue siendo mucho mayor; esta expansión no cambia su prioridad comercial ni demuestra que vidrio templado generará más leads.

## Implementación

- Nueva `/servicios/vidrio-templado/`, con title/H1 de vidrio templado y Blindex, canonical, metadata social, WebPage/Service, aplicaciones visuales y cotización según datos reales del proyecto. Sin precios ni promesas de rendimiento inventados.
- Home y catálogo de servicios apuntan a la landing dedicada. Las guías de vidrio vs acrílico y mamparas de oficina enlazan a ella; la landing enlaza a esas guías y a Box, Mamparas, Puertas, Fachadas y obras.
- El servicio tiene contexto propio de tracking y formulario. El alias histórico `cristales-templados` se reconoce como `vidrio-templado`, evitando perder preselección en enlaces antiguos.
- Cielo, Box y Mamparas presentan: hero → opciones resumidas → obras reales → comparación → WhatsApp contextual → contenido técnico/proceso/guías/FAQ → contacto final. Se preserva el contenido profundo de las secciones existentes; las descripciones de las opciones se pueden desplegar con `<details>`.
- Hero Box: vivienda con box de ducha de vidrio templado de 8 mm; Hero Mamparas: oficina con divisiones de vidrio. Se eliminó la afirmación «Más elegido» del destacado de Box, que no tenía evidencia de ventas.
- Solo los materiales con una referencia apropiada reciben fotografía en sus cards. Acrílico, plegables y Eucatex no se ilustran con una foto de otro sistema.
- Mamparas muestra una obra de oficina claramente pertinente. Se retiraron de ese preset las referencias cuya foto no respalda la aplicación o se reutiliza para otro cliente.
- Home presenta los tres servicios principales, luego Tigo, Universidad Pacífico y APF, antes del resto de soluciones. El CTA muestra **33 obras del catálogo**, calculadas desde los registros actuales; no se usa «40+».
- Fotos con alt/contexto de sistema, obra y ubicación. Se corrige mediante CSS la orientación de la foto de APF; el archivo original no se modifica.
- Se ajustó el tamaño del H1 de las tres landings para evitar que palabras largas quedaran recortadas en móvil. Las galerías de una sola obra aprovechan el ancho de escritorio.

El valor visual es una hipótesis UX basada en pertinencia del producto, facilidad de escaneo y las observaciones del audit. Estos cambios **no prueban causalidad entre ver fotos y convertir**, y portfolio no se convierte en paso obligatorio.

## Control de imágenes y sitemap

`scripts/image-health.mjs` inventaría URLs de imágenes del CDN en `src/` y en el HTML generado. Registra URL, archivo, línea cuando está disponible y página que la utiliza. Descarga respuestas nuevas en cada ejecución, verifica HTTP 200 sin redirección, `image/*`, dimensiones y decodificación con Sharp, y reintenta una vez cuando hay un fallo.

La integración `vipar-image-audit` se ejecuta al terminar **cada build de Astro**, incluido un build invocado directamente. Su política es:

| Situación | Build normal | Chequeo estricto |
|---|---|---|
| Imagen remota `fetchpriority=high` o `loading=eager` inválida | Falla | Falla |
| Imagen remota secundaria inválida | Warning y reporte | Falla |
| Imagen crítica de menos de 800 px de ancho | Warning de resolución | Warning de resolución |

El umbral de 800 px es una política de revisión visual, no una condición de Google ni una prueba de que la foto sea mala. El informe completo se genera en `image-health-cache/report.json`. La caché conserva bytes para revisar el build local, pero nunca reemplaza la comprobación HTTP fresca. La auditoría fuerza verificación TLS activa aun si Vite carga el flag antiguo desde `.env`; el config ya no establece TLS=0.

Comandos:

```text
pnpm build
pnpm images:check
pnpm images:check:strict
pnpm test:analytics
pnpm test:images
```

Los chequeos independientes de imágenes requieren un `dist/` generado. En CI, `pnpm build` ya aplica la política; `images:check:strict` permite bloquear también imágenes secundarias. No se configura despliegue automático.

Se genera `dist/sitemap-images.xml` desde los `<img src>` de páginas públicas y se incorpora al índice existente de sitemaps. El último build incluyó imágenes de **60 páginas**. Se excluyen errores 404/500, redirecciones y páginas con noindex. El sitemap puede incluir el CDN externo, como permite [Google Search Central](https://developers.google.com/search/docs/crawling-indexing/sitemaps/image-sitemaps). Las fotos se mantienen como HTML rastreable y se vinculan al contenido pertinente, siguiendo sus [recomendaciones de imágenes](https://developers.google.com/search/docs/appearance/google-images).

## Hallazgos de assets y pendientes

- **111/111 URLs remotas válidas**, sin imágenes rotas en esta ejecución. Esto no equivale a validar semánticamente todo el catálogo.
- **15 URLs críticas** tienen menos de 800 px de ancho. Box, Oficina y Tigo miden 550 px; conviene conseguir originales de mayor resolución. Cambiar la foto por una imagen más grande que represente otro producto no resuelve esta limitación.
- La foto principal de Showroom muestra cortinas y no demuestra una fachada; no se usa como prueba nueva de vidrio templado.
- El registro de Itau reutiliza una URL de Cooperativa Medalla. Se excluye de la nueva curación de Mamparas. Su ficha histórica requiere foto y asociación comercial verificadas; no se inventó una sustitución.
- La foto de Torre Provenza muestra ejecución de obra. Su caption residencial se identifica como «en ejecución».
- Verificar con acceso al CDN su rastreabilidad/robots y, cuando sea posible, propiedad GSC del dominio del CDN. Un HTTP 200 no garantiza indexación.
- Envío del sitemap a GSC, propiedad de dominio, migración de eventos clave GA4 y publicación siguen pendientes. El cliente todavía no proporciona registro de consultas recibidas, leads calificados ni ventas.

## Medición del siguiente ciclo

Separar periodo anterior/posterior a publicación con anotación de fecha y versión. No comparar directamente el cambio de taxonomía v1/v2 como si fuera crecimiento comercial.

1. Para vidrio templado: impresiones, clics y query+página; comprobar si el tráfico comercial llega a la landing nueva. Mantener Box como destino específico de ducha, Mamparas como destino de oficina y Fachadas como destino de sistemas de fachada. Investigar antes de afirmar canibalización.
2. Para las tres landings: sesiones con intención única / sesiones de entrada, por canal y dispositivo. Seguir contando el FAB; mover el uso de un CTA a otro no es una ganancia por sí mismo.
3. Comparar paths con/sin visita a obra y aperturas de detalles como asociaciones. Revisar grabaciones de orgánico sin contacto y móvil de alta intención; no convertir una correlación en causalidad.
4. KPI comercial: `Qualified Website Leads / mes` permanece **No disponible / no instrumentado**. WhatsApp handoff no demuestra consulta recibida, calificación, presupuesto o venta.

No se fija duración de un A/B test: el tráfico disponible no permite justificarla todavía. Primero observar el cambio directo y la estabilidad de la medición.

## Validación

La evidencia técnica y del navegador se guarda en `visual-verification.json`, `image-health.json` y `visual-browser-verification.json`. Las comprobaciones del navegador usan el build local, fotos reales de la caché y SDKs simulados, con todo envío externo a GA4/PostHog bloqueado. Verifican contrato y funcionamiento local; no prueban ingestión en producción ni uplift de conversión.
