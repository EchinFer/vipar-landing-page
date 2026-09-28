# 1. Executive Summary

Auditoría de VIPAR, realizada el 28/09/2026 con datos de GA4, Google Search Console y PostHog. **La mayor oportunidad observable está en recuperar y mejorar la captación comercial de cielo raso, box de baño y mamparas divisorias, y convertir la demanda de precios en consultas identificables. El impacto en leads calificados o ventas todavía no puede demostrarse.**

1. Organic Search aporta **651 de 783 sesiones** y **101 usuarios con intención de contacto** en los últimos 90 días. Es el principal canal de captación observado.
2. **117 usuarios / 118 sesiones** registraron intención de contacto. Esto no representa 117 leads recibidos o calificados.
3. Los **127 eventos clave de GA4** combinan WhatsApp y formularios que también abren WhatsApp. Usarlos como número de leads sobrecuenta journeys.
4. Las tres landings principales reúnen **408 sesiones y 76 sesiones con intención de contacto**: 52,1% del tráfico y 64,4% de las sesiones con contacto.
5. Cielo raso combina la mayor visibilidad de servicio, una tasa de contacto relevante y una caída reciente: **167 → 138 clics** entre dos ventanas consecutivas de 45 días.
6. El crecimiento del artículo de precios de cielo raso, **18 → 74 clics**, compensa esa caída en el total del sitio. Crecer en SEO no garantiza crecer en consultas comerciales.
7. En julio–agosto disminuyeron tanto las entradas a los tres servicios principales como su tasa de contacto. El cambio de mix explica parte del deterioro.
8. El formulario presenta fricción específica: **18 de 19 errores** corresponden a selecciones obligatorias; **7 de 27 personas** completaron el paso de inicio hacia WhatsApp en PostHog.
9. Móvil concentra **76,1% de las sesiones**, pero su tasa de contacto por usuario es mayor que desktop: **19,6% frente a 15,0%**. La debilidad observada está en el formulario, con muestra pequeña.
10. El botón flotante concentra **84 de 125 clics a WhatsApp en PostHog**. Reducir su participación no está respaldado como objetivo de negocio.
11. El histórico tiene dos distorsiones importantes: localhost representó **53,1% de las pageviews del periodo anterior**; la propiedad GSC disponible no cubre `www`, host que recibió gran parte del tráfico histórico.
12. Qualified Leads, presupuestos, ventas y revenue están **No disponible / no instrumentado**. Se necesita un registro comercial mínimo del cliente para cerrar esa brecha.

# 2. Estado actual

**Periodos y alcance**

| Ventana | Fechas inclusivas | Uso |
|---|---|---|
| Histórico | 26/12/2025–25/09/2026, 274 días | Aproximadamente nueve meses |
| Actual | 28/06/2026–25/09/2026, 90 días | Baseline |
| Anterior | 30/03/2026–27/06/2026, 90 días | Comparación |
| Comparación reciente adicional | 28/06–11/08 vs. 12/08–25/09 | Dos ventanas de 45 días con cobertura de host más estable |

GA4: propiedad **488034623**, zona America/Asuncion. GSC: **https://vipar.com.py/**, propiedad de prefijo URL, búsqueda Web y datos finales. PostHog: proyecto **441009**, historia observada desde **26/05/2026**, zona UTC; las consultas convierten los límites de Asunción a UTC. Las grabaciones tienen retención configurada de **30 días**. GA4 tiene más historia que los nueve meses estimados: se añadió septiembre 2025 como comparación contextual, manteniendo las ventanas principales solicitadas.

GA4 se limpia por hosts de producción `vipar.com.py` y `www.vipar.com.py`. PostHog también excluye el cohort interno/test configurado. Esto elimina contaminación conocida; no certifica que todo usuario de producción sea externo. No se comparan personas entre plataformas.

**Baseline de visibilidad y adquisición**

| Métrica | Últimos 90 días | 90 anteriores | Lectura |
|---|---:|---:|---|
| Impresiones Google | 51.517 | 11.297 | Comparación histórica afectada por host |
| Clics Google | 1.679 | 345 | No atribuir todo el aumento a mejoras SEO |
| CTR Google | 3,26% | 3,05% | Agregado, cambia con queries y dispositivos |
| Posición media Google | ≈6,51 | ≈6,22 | Ponderada por impresiones; menor es mejor |
| Usuarios GA4 | 627 | 338 | +85,5%, excluyendo localhost |
| Nuevos usuarios | 603 | 332 | Identidades observadas, no clientes |
| Sesiones GA4 | 783 | 444 | +76,4% |
| Sesiones Organic Search | 651 | 376 | +73,1% |
| Pageviews de producción | 1.179 | 744 | El dato anterior sin limpiar era 1.585 |
| Engagement rate | 65,4% | 59,9% | Señal intermedia |
| Usuarios con intención de contacto | 117 | 56 | Taxonomía y formulario cambiaron |
| Sesiones con intención de contacto | 118 | 56 | No equivalen a oportunidades recibidas |

Se observaron **1.603 queries con nombre**. Por posición media del periodo: **393 Top 3**, **1.402 Top 10** —incluye Top 3— y **161 en >10–20**. Con un mínimo descriptivo de 20 impresiones quedan 156 queries: 21 Top 3, 135 Top 10 y 19 en >10–20. El corte reduce el peso de búsquedas de una o pocas impresiones; no es un ranking diario ni un umbral de rentabilidad.

**Baseline de contacto**

| Señal GA4 | Eventos | Usuarios |
|---|---:|---:|
| WhatsApp | 128 | 117 |
| Formulario, que deriva a WhatsApp | 8 | 7 |
| Email capturado, dentro del mismo formulario | 8 | 7 |
| Inicio de formulario | 35 | 28 |
| Teléfono / email: clics registrados | 0 observados | 0 observados |

Los enlaces de teléfono/email y sus handlers existen. Los ceros observados no demuestran que no haya llamadas o emails; falta validar entrega de esos eventos y medir consultas recibidas.

**Tasas válidas como aproximaciones**

- Visitor → intención de contacto: **117 / 627 = 18,66%**.
- Organic Visitor → intención de contacto: **101 / 550 = 18,36%**.
- Session → intención de contacto: **118 / 783 = 15,07%**.
- Organic Session → intención de contacto: **102 / 651 = 15,67%**.
- Visitor → Lead, Organic Visitor → Lead y Landing → Lead: **No disponible / no instrumentado**.

La unión de eventos deduplica usuarios/sesiones de WhatsApp, formulario, teléfono/email y aliases históricos. No suma los usuarios de cada evento. El conteo por navegador/persona tampoco deduplica a una misma persona entre dispositivos.

# 3. Calidad de tracking

**Calidad de los datos:** útil para priorizar visibilidad e intención de contacto; insuficiente para medir negocio y frágil para varios funnels históricos.

| Severidad | Dato / problema | Consecuencia | Acción concreta |
|---|---|---|---|
| Crítico | No existe registro accesible de consultas recibidas, calificación o ventas; confirmado por el usuario | No se puede calcular Qualified Leads, pipeline, revenue ni ROI por servicio | Crear registro mínimo con identificador y estados comerciales; requiere colaboración del cliente |
| Crítico | 127 key events = 119 WhatsApp + 8 formularios; el formulario genera también WhatsApp | Un mismo recorrido produce varias conversiones contabilizadas | Separar etapas y publicar una métrica deduplicada de contacto; no sumar todos los key events |
| Crítico | El formulario incluye email en payloads enviados por el dispatcher a GA4 | Riesgo de enviar información identificable; redacción efectiva no verificada | Eliminar email y datos personales antes del dispatch a GA4; usar ID opaco |
| Importante | 841 pageviews en localhost en el periodo anterior, de 1.585 totales | Distorsiona tráfico, engagement, páginas y comparaciones | Mantener baseline limpio; separar desarrollo y comprobar filtros internos de producción |
| Importante | GSC cubre únicamente el prefijo sin `www`; GA4 registra tráfico orgánico histórico en `www` | El descenso de febrero–abril y el rebote posterior coinciden con el cambio de host; la visibilidad global histórica no queda cubierta | Incorporar propiedad de dominio y/o propiedad de `www`; conservar ambas series sin asumir recuperación retroactiva |
| Importante | Cielo raso: 174 pageviews en PostHog frente a 46 `service_page_viewed`; GA4 registra 620 eventos de servicio y PostHog 254 en el periodo | El funnel basado en el evento custom omite visitas | Coordinar vista de página y consentimiento; emitir una sola vista válida cuando haya consentimiento y navegación nueva |
| Importante | `form_view` y `form_step_viewed` se emiten al inicializar el componente | Renderizado se interpreta como exposición real al formulario | Separar `form_rendered` de `form_impression` y de cada paso realmente visible |
| Importante | 1.138 `consent_accept` y 1.138 `consent_update`; el código reaplica aceptación guardada en cada carga | No permite calcular tasa de aceptación real | Diferenciar decisión explícita, estado restaurado y cambio de preferencias |
| Importante | `lead_source` usa el referrer de la página actual; 19 de 125 clics WhatsApp de PostHog se atribuyen al propio dominio | La navegación interna sustituye origen de adquisición por self-referral | Persistir origen de entrada de sesión y primer origen; conservar por separado la página anterior |
| Importante | Fuentes `vipar-home-stitch / (not set)` y `vipar-contacto / (not set)`: 37 sesiones; no hay dimensiones custom registradas en GA4 | Mezcla posible tráfico de prueba/campañas incompletas y limita análisis por servicio/CTA | Verificar si proceden de UTMs, campañas o instrumentación; quitar UTMs internos si existen, completar campañas externas y registrar dimensiones |
| Importante | 24 de 125 clics WhatsApp en PostHog no tienen servicio; aluminio aparece con variantes de mayúsculas | La clasificación por servicio queda incompleta y fragmentada | Usar service_slug estable, distinguir contexto inferido de selección declarada y conservar unknown |
| Importante | Los key events aparecen desde julio; antes había eventos WhatsApp sin marcar y aliases | Los ceros anteriores de conversiones no son ausencia de contacto | Versionar taxonomía y fecha de cambios; comparar uniones históricas con advertencia de comparabilidad |
| Menor | 32 sesiones actuales con landing `(not set)` | Falta página de entrada para 4,1% de las sesiones | QA de orden del pageview, consentimiento y sesiones que arrancan con evento custom |
| Menor | URL antigua `/servicios/box-bano/` responde 404; recibió 1 clic y 11 impresiones | Pérdida pequeña pero real de acceso a una URL de búsqueda | Redirigir a la URL canónica y revisar aliases restantes |

Google prohíbe enviar emails y otros identificadores personales a Analytics; la corrección debe hacerse antes de enviar el evento. [Documentación oficial de Analytics](https://support.google.com/analytics/answer/6366371?hl=en).

**Lo que no se confirmó:** no apareció evidencia de duplicación instantánea generalizada de clics WhatsApp; las ocho sesiones con dos clics tenían intervalos de 11–1.329 segundos. Direct representa 8,9% de las sesiones y no resulta anormalmente alto en este conjunto. No hay evidencia de que spam masivo explique el crecimiento. No se confirmó un fallo general de navegación SPA o páginas principales sin tag.

Las pageviews GA4/PostHog son próximas, **1.179 frente a 1.185** antes del filtro de test en ese agregado. La diferencia de eventos custom es mucho mayor. Por otra parte, **1.679 clics GSC no equivalen a 635 sesiones google/organic GA4**: consentimiento, repetición, identidad y definiciones impiden convertir la diferencia en un porcentaje probado de tráfico perdido. La cobertura completa de tags, filtros IP y proporción real de consentimiento rechazado queda **No disponible / no verificada**.

# 4. Evolución de los últimos 9 meses

| Mes | Usuarios GA4 producción | Sesiones producción | Sesiones orgánicas | Clics GSC del prefijo | Impresiones GSC | Usuarios con intención |
|---|---:|---:|---:|---:|---:|---:|
| Dic. 26–31 | 38 | 43 | 29 | 20 | 809 | 2 |
| Enero | 104 | 150 | 114 | 152 | 5.299 | 11 |
| Febrero | 75 | 86 | 79 | 13 | 376 | 10 |
| Marzo | 98 | 111 | 88 | 0 | 10 | 7 |
| Abril | 96 | 124 | 111 | 0 | 3 | 10 |
| Mayo | 113 | 152 | 121 | 11 | 517 | 19 |
| Junio | 137 | 174 | 147 | 362 | 11.830 | 28 |
| Julio | 235 | 286 | 248 | 584 | 16.010 | 48 |
| Agosto | 219 | 270 | 219 | 584 | 17.998 | 34 |
| Sept. 1–25 | 178 | 213 | 173 | 483 | 16.455 | 35 |

En el acumulado de producción: **1.260 usuarios, 1.606 sesiones y 2.487 pageviews**. GSC del prefijo: **2.209 clics / 69.307 impresiones**, con la discontinuidad indicada. Las sumas de usuarios mensuales no son usuarios únicos del histórico; los agregados de sesiones pueden variar ligeramente según dimensiones.

**Anomalía de mayo:** las 962 pageviews sin limpiar bajan a 262 en producción; 700 eran localhost. No fue un boom de consumo de contenido por potenciales clientes.

**Cambio de cobertura GSC:** GA4 sigue registrando sesiones orgánicas en febrero–abril, principalmente en `www`, mientras el prefijo sin `www` casi no tiene clics. Esto impide afirmar una desindexación total y una posterior recuperación de +386,7%. Las landings principales inspeccionadas están actualmente indexadas.

**Deterioro comercial de julio–agosto**

| Tres landings principales juntas | Julio | Agosto |
|---|---:|---:|
| Sesiones totales | 174 | 118 |
| Sesiones orgánicas | 158 | 105 |
| Sesiones con intención | 37 | 19 |
| Tasa de intención por sesión | 21,3% | 16,1% |
| Peso sobre todas las sesiones del sitio | 60,8% | 43,7% |

El sitio pasó de 286 a 270 sesiones, pero perdió más entradas a servicios con mayor tasa de contacto y ganó participación de otras páginas. Además bajó la tasa dentro de esos servicios. Ambas señales explican el descenso observado de intención; no identifican por sí solas un cambio de UX, estacionalidad o menor calidad de los leads.

Ejemplos: cielo raso pasó de 63 a 43 sesiones orgánicas; box de 44 a 30; mamparas de 51 a 32. Los dos artículos de precios principales pasaron de 6 a 18 sesiones orgánicas. En septiembre parcial box recupera entradas —45 orgánicas— y mamparas registra 9 sesiones con intención; cielo raso queda en 19 entradas orgánicas y 4 sesiones con intención.

El proxy de contacto por usuario pasa de 16,6% en los 90 días anteriores a 18,7% en los actuales. Los cambios de eventos y de formulario impiden atribuir la diferencia a una mejora de CRO.

**Tendencia reciente con cobertura más estable:** entre dos ventanas de 45 días, las impresiones suben **23,1%**, los clics **5,5%** y el CTR baja **3,54% → 3,03%**. La expansión hacia artículos de precios/comparación contribuye al cambio de mix. Se verificó además historia GA4 anterior a la ventana solicitada: hay tráfico desde mayo de 2025. Para septiembre 1–25, las sesiones de producción pasan de 34 en 2025 a 213 en 2026 y las orgánicas de 24 a 173; usuarios, 28 a 178. Esto muestra una base de adquisición mayor, pero dos cortes de un sitio en crecimiento no permiten identificar estacionalidad. La consulta GSC de septiembre 2025 no devolvió datos para el prefijo disponible: ese equivalente queda No disponible, no cero tráfico. Septiembre y diciembre son meses parciales en la tabla principal.

# 5. SEO / Search Console

**Brand vs non-brand:** de 1.679 clics totales, las queries visibles explican solamente 544. Entre ellas: **39 branded** y **505 non-branded**; **1.135 clics quedan sin clasificación por query disponible**. Se clasificó marca mediante VIPAR y variantes claras. Non-brand representa 92,8% de los clics con query conocida, no 92,8% del total.

Google omite queries por privacidad y limita las filas disponibles. No se imputaron los clics desconocidos a marca o no marca. [Limitaciones oficiales del informe](https://support.google.com/webmasters/answer/17011259?hl=en).

**Grupo A — Quick wins.** Datos de pares query–página de los últimos 90 días. “Alta oportunidad” significa exposición existente e intención potencial; no volumen de mercado ni incremento de leads previsto.

| Query | Página actual | Impresiones | Clics | CTR | Pos. | Intención / oportunidad | Recomendación |
|---|---|---:|---:|---:|---:|---|---|
| cielo raso | Servicio cielo raso | 3.556 | 19 | 0,53% | 6,9 | Mixta; gran exposición del servicio | Revisar recuperación de posición, oferta de instalación y fragmento; conectar con precios/materiales |
| mamparas para baño | Box de baño | 1.042 | 17 | 1,63% | 6,4 | Comercial, nomenclatura distinta de la página | Incorporar “mamparas para baño” en propuesta y snippet de box |
| mampara para baño precio paraguay | Box de baño | 417 | 14 | 3,36% | 5,2 | Precio / cotización | Explicar variables y qué datos enviar para presupuestar |
| cielo raso de pvc | Servicio cielo raso | 402 | 5 | 1,24% | 10,9 | Material / instalación | Fortalecer sección PVC y enlaces internos; evaluar subservicio si el alcance lo justifica |
| cielo raso pvc precio m2 paraguay | Artículo de precio cielo | 358 | 5 | 1,40% | 9,6 | Precio por m² | Responder alcance, inclusiones/exclusiones y ejemplos aprobados; CTA con metros/ciudad |
| cielo raso durlock | Servicio cielo raso | 343 | 3 | 0,87% | 6,7 | Material / solución | Contenido específico y caso relevante, conectado con cotización |
| carpinteria de aluminio | Servicio aluminio | 175 | 2 | 1,14% | 7,2 | Servicio comercial | Mejorar claridad de aplicaciones y entrada a presupuesto; escalar con cautela |

La query genérica **“mampara”** tiene 1.467 impresiones / 4 clics / posición 8,1 en mamparas divisorias. Su intención es ambigua entre baño, oficina y otros usos. No dirigir todo ese tráfico a la misma oferta sin revisar queries relacionadas y resultados por país/dispositivo.

**Grupo B — Buena posición y CTR candidato a revisión**

- `cielo raso de durlock`: 228 impresiones, 3 clics, CTR 1,32%, posición 1,8 en el servicio.
- `box de baño`: 146 impresiones, 0 clics, posición 5,9 en la landing de box.
- `vidrieria asuncion`: 464 impresiones, 5 clics, CTR 1,08%, posición 5,7 en home.

No hay una curva de CTR esperable ajustada por dispositivo, país y características de SERP. Estos son candidatos; una posición media buena no prueba un snippet defectuoso. La SERP local exacta y sus módulos no quedaron verificados como ranking estable.

Los títulos actuales ya contienen palabras relevantes. Propuestas de prueba, sujetas a correspondencia con el contenido y el servicio real:

| Página | Propuesta de title | Cambio que busca |
|---|---|---|
| Cielo raso | Cielo raso en Paraguay: instalación y cotización \| VIPAR | Priorizar oferta comercial frente a enumeración de materiales |
| Box | Mamparas para baño en Paraguay \| Box a medida \| VIPAR | Alinear nomenclatura con las queries comerciales |
| Precio cielo raso | Precio de cielo raso en Paraguay: materiales y costo por m² \| VIPAR | Responder explícitamente la intención de precio por superficie |
| Home | Vidriería en Paraguay \| Cristal templado y aluminio \| VIPAR | Dar cabida a la intención “vidriería” sin inventar una ubicación en Asunción |

Ejemplo de descripción para box: “Mamparas para baño y box a medida. Consultá opciones, medidas e instalación. Enviá medidas y ubicación por WhatsApp para solicitar una cotización”. No publicar precios, garantías, certificaciones o tiempos no confirmados. Estas propuestas deben contrastarse con queries estables, no con el CTR agregado solamente.

**Grupo C — Exposición con posiciones débiles**

- `tipos sistemas apertura mamparas` → artículo de tipos de apertura de box: **228 impresiones, 0 clics, posición 83,1**. Mejorar la página existente y su relación con la landing; comprobar intención y pertinencia antes de invertir.
- `durlock paraguay` → cielo raso: **172 impresiones, 2 clics, posición 11,7**. Fortalecer una sección de aplicación/instalación y enlaces de casos reales.
- `cielo raso de pvc`, posición 10,9, ya pertenece al grupo A por su cercanía al Top 10. No hace falta crear de inmediato otra guía genérica.

**Grupo D — Pérdidas recientes**

| Página / query | Primeros 45 días | Últimos 45 días | Lectura |
|---|---|---|---|
| Servicio cielo raso | 167 clics; 7.493 imp.; pos. 6,19 | 138; 6.625; pos. 6,54 | −17,4% clics; también caen exposición y posición |
| Query “cielo raso”, todas sus páginas | 15 clics; 2.049 imp.; pos. 6,28 | 5; 1.753; pos. 8,06 | Pérdida relevante de ranking y clics en búsqueda principal |
| Aluminio | 47 clics; 1.096 imp.; pos. 6,39 | 39; 1.161; pos. 7,47 | Más impresiones, menos clics y peor posición |
| Home | 196 clics; CTR 5,09% | 187; CTR 4,01% | Impresiones aumentan, captura relativa baja |
| Precio cielo raso | 18 clics; 1.094 imp. | 74; 3.821 | Ganancia que oculta parcialmente la caída del servicio |

Causas posibles: cambio de intención/mix, competencia, modificaciones de contenido o ranking. No se confirmó una causa técnica de indexación: cielo raso, box, mamparas y el artículo de precio de cielo raso pasaron la inspección actual. Servicio y artículo de precio aparecen para algunas queries comunes; eso **no demuestra canibalización**. Comparar pares query–URL semanalmente antes de consolidar o eliminar páginas.

**Arquitectura e internal linking:** en las tres landings revisadas hay enlaces al índice del blog, pero no enlaces contextuales a sus guías específicas de precio. Las guías sí enlazan al servicio. Corregir la relación bidireccional: servicio → precio/comparación → servicio/CTA, y servicio → caso pertinente → servicio relacionado.

Cielo raso y mamparas reutilizan la misma selección de proyectos; box no enlaza al caso específico `vivienda-box-de-bano` en la selección revisada. Elegir obras que demuestren el problema de cada servicio. No se hizo un crawl completo del grafo ni un análisis de backlinks: autoridad y páginas huérfanas de todo el sitio, **No disponible / no verificadas**.

Una futura landing de cristal templado o subservicio PVC requiere oferta diferenciada y queries propias. La demanda local “vidriería Asunción” permite mejorar cobertura de zonas realmente atendidas en home/contacto; no justifica un conjunto de páginas locales duplicadas. La propiedad de prefijo solo cubre ese protocolo y host. [Definición oficial de propiedades GSC](https://support.google.com/webmasters/answer/34592?hl=en).

# 6. Landing Pages

Todas las filas son del periodo actual. **Leads reales = No disponible / no instrumentado en todas las páginas.** Para poder comparar se muestra intención de contacto deduplicada por sesión, no key events ni leads.

| Landing | Organic Sessions | Total Sessions | Sesiones con intención | CVR de intención por sesión | GSC Impresiones | Clics | Posición |
|---|---:|---:|---:|---:|---:|---:|---:|
| Home | 134 | 174 | 22 | 12,6% | 8.510 | 383 | 6,3 |
| Cielo raso | 127 | 145 | 30 | 20,7% | 14.118 | 305 | 6,4 |
| Mamparas divisorias | 119 | 132 | 25 | 18,9% | 7.006 | 297 | 5,3 |
| Box de baño | 123 | 131 | 21 | 16,0% | 7.238 | 292 | 5,7 |
| Aluminio | 27 | 28 | 6 | 21,4% | 2.257 | 86 | 6,9 |
| Precio cielo raso | 24 | 25 | 3 | 12,0% | 4.915 | 92 | 6,3 |
| Precio mamparas | 20 | 21 | 2 | 9,5% | 1.422 | 94 | 4,8 |
| Cortinas | 11 | 13 | 1 | 7,7% | 739 | 31 | 4,8 |
| Contacto | 2 | 10 | 2 | 20,0% | 449 | 6 | 4,2 |
| Fachadas | 7 | 9 | 2 | 22,2% | 555 | 15 | 4,6 |
| Puertas | 9 | 10 | 0 | 0 observado | 606 | 17 | 6,1 |
| Ventanas | 4 | 4 | 0 | 0 observado | 747 | 9 | 7,1 |
| Portfolio, índice | 2 | 11 | 1 | 9,1% | 267 | 3 | 5,3 |

GSC incluye a usuarios no medidos por GA4 y puede asignar resultados a URL canónica. No dividir clics GSC por sesiones GA4 para calcular CVR. Las impresiones por página no siempre suman las impresiones de la propiedad.

**Winners observables:** cielo raso y mamparas combinan volumen e intención de contacto. Box también aporta captación; su tasa mensual cayó de 23,4% en julio a 12,9% en agosto, con solo 11 y 4 sesiones de contacto respectivamente. Requiere seguimiento, no una declaración estadística de pérdida causada por diseño.

**Más tráfico / menor contacto relativo:** home, 174 sesiones y 12,6%, frente a 18,6% conjunto en las tres landings principales. Hipótesis: intención más amplia o menor facilidad para elegir servicio. Revisar origen de las visitas y clics de selección antes de rediseñar el hero.

**Poco tráfico / mayor contacto observado:** aluminio, 6 de 28 sesiones. Es una oportunidad SEO plausible con muestra pequeña. Fachadas tiene 2 de 9 en GA4 y 0 de 7 entradas en la consulta de sesiones PostHog; no priorizar inversión comercial basándose en ese porcentaje aislado.

**Poco tráfico / sin contacto observado:** puertas y ventanas. La muestra no permite concluir que los servicios no venden o que conviene retirarlos.

# 7. Servicios

El rendimiento por landing de servicio se observa en la tabla anterior. Al sumar sus principales guías de entrada, estos clusters quedan así:

| Cluster de entrada definido | Sesiones totales | Orgánicas | Sesiones con intención | Tasa de intención |
|---|---:|---:|---:|---:|
| Cielo: servicio + precio + PVC vs. yeso | 174 | 153 | 33 | 19,0% |
| Mamparas: servicio + precio + oficinas | 161 | 146 | 27 | 16,8% |
| Box: servicio + precio + medidas | 142 | 134 | 21 | 14,8% |

Estas agrupaciones son por página de entrada y alcance declarado; no atribuyen una venta al servicio consultado. Las visitas asistidas posteriores tampoco se suman como oportunidades nuevas. Queries ambiguas como “mampara” no se asignan automáticamente a B2B o B2C.

**Tráfico vs. negocio:** cielo, box y mamparas dominan la captación web observada. No sabemos si dominan facturación, margen o calidad comercial. Fachadas podría representar proyectos de mayor valor, pero ese valor y la duración del journey están **No disponible / no instrumentado**.

PostHog registra contexto de servicio en 36 clics WhatsApp de cielo, 29 de mamparas y 26 de box; 24 clics carecen de servicio. Es contexto inferido por página o declarado en formulario, no lead validado. Aluminio se fragmenta entre dos etiquetas por mayúsculas. Cristal templado tiene 1 interacción contextual y su query de precio aparece en home con 57 impresiones / 3 clics / posición 6,9: no se puede atribuirle todo el tráfico de home. Ventanas también tiene 1 clic contextual en PostHog; cero contactos atribuidos a su landing de entrada no equivale a cero interés asistido.

**Segmentación residencial/corporativa:** box sugiere afinidad residencial; mamparas de oficinas/fachadas sugieren afinidad comercial. Son proxies de contenido, no el tipo real de cliente. No hay campo fiable de segmento, pipeline ni identidad entre dispositivos para comparar ambos journeys. Añadir uso del proyecto —vivienda, comercio/oficina, obra corporativa u otro— como dato declarado, sin añadir fricción innecesaria al primer contacto.

# 8. Acquisition Channels

| Canal actual | Usuarios | Sesiones | Usuarios con intención | CVR de intención por usuario |
|---|---:|---:|---:|---:|
| Organic Search | 550 | 651 | 101 | 18,4% |
| Direct | 64 | 70 | 9 | 14,1% |
| Unassigned | 34 | 40 | 5 | 14,7% |
| AI Assistant | 7 | 14 | 1 | 14,3%, muestra mínima |
| Referral | 6 | 9 | 1 | 16,7%, muestra mínima |
| Paid Search | 1 | 1 | 0 | Sin volumen para evaluar |
| Organic Social / Paid Social | Sin sesiones registradas | Sin sesiones registradas | Sin eventos registrados | No evaluable |

Leads y qualified leads por canal: **No disponible / no instrumentado**. Un usuario puede aparecer en varios canales; no sumar los usuarios de las filas como audiencia única.

Organic Search es el canal con mayor volumen de intención observado. El cambio de 45 a 101 usuarios orgánicos con contacto tiene una base de tráfico mayor y cambios de medición; no prueba un lift de CRO. Paid/Social carecen de muestra y datos de inversión. Los pequeños porcentajes de AI/Referral no permiten decidir un presupuesto.

Paraguay concentra **691 de 783 sesiones GA4** y **1.566 de 1.679 clics GSC**. El tráfico extranjero no debe llamarse spam sin evidencia. Revisar UTMs incompletos y atribución interna antes de interpretar Unassigned.

# 9. Conversion Funnel

Embudo de negocio deseado:

```text
Entrada → interés en servicio → intención de contacto
       → consulta recibida → lead calificado → presupuesto → venta
                ↘ proyectos como posible paso opcional
```

Desde “consulta recibida” en adelante: **No disponible / no instrumentado**. `form_submit` prepara y abre WhatsApp; no hay confirmación de que el mensaje se envió o llegó a VIPAR.

Funnels PostHog por personas, ordenados y con ventana de conversión de 24 horas, hosts de producción y test excluidos:

| Recorrido medible | Inicio | Paso final | Tasa | Límite |
|---|---:|---:|---:|---|
| Pageview → WhatsApp | 649 | 115 | 17,7% | Intención observada |
| Vista real de landing de servicio → WhatsApp | 488 | 88 | 18,0% | Pageview con ruta de servicio |
| Evento custom de servicio → WhatsApp | 162 | 22 | 13,6% | Denominador incompleto; no usar como KPI principal |
| `form_view` → `form_start` → `form_submit` | 79 → 18 | 6 | 7,6% total | `form_view` mide render, no exposición |
| `form_start` → `form_submit` | 27 | 7 | 25,9% | Final es handoff hacia WhatsApp |

El drop-off defendible del formulario es **20 de 27 personas sin handoff de formulario en 24 horas**, no “20 leads perdidos”. Algunas usan un CTA directo de WhatsApp. Los pasos de portfolio no deben ser obligatorios para contabilizar contacto; eso excluiría journeys directos comunes.

Los funnels cuentan personas y orden temporal; las tablas GA4 por landing cuentan sesiones. No mezclar ambos denominadores ni usar el total de eventos como personas. [Cómo interpreta PostHog los funnels](https://posthog.com/docs/product-analytics/funnels).

# 10. PostHog / User Behavior

**Paths y diferencia entre sesiones con y sin contacto**

| Señal, dentro de la sesión | Con WhatsApp | Sin WhatsApp |
|---|---:|---:|
| Sesiones | 117 | 686 |
| Pageviews promedio | 1,45 | 1,47 |
| Sesiones que visitan rutas de servicios | 91 | 466 |
| Sesiones que visitan portfolio | 4, 3,4% | 74, 10,8% |
| Sesiones que visitan Nosotros | 2 | 9 |

Un mismo usuario puede tener sesiones en ambos grupos. No hay evidencia de que visitar más páginas sea un diferenciador positivo de contacto en esta ventana.

Los paths detectan transiciones directas servicio → WhatsApp: cielo raso 26, mamparas 23, box 18 y home 14. Son conteos de transiciones, no leads independientes. El recorrido email capturado → formulario → WhatsApp aparece siete veces y confirma que son etapas del mismo journey.

Las últimas páginas observadas de sesión más frecuentes fueron cielo raso (158 sesiones, 28 con contacto), mamparas (141, 24), box (138, 21), home (127, 19) y contacto (31, 7). Una salida desde un servicio puede ser un handoff exitoso hacia WhatsApp; no contabilizar automáticamente esas salidas como abandono.

**Portfolio:** usando pageviews, hubo **73 personas, 78 sesiones y 114 vistas** de rutas de obras; 50 personas vieron el índice y 40 detalles, con solapamiento. Solo **2 de las 117 sesiones con WhatsApp** tenían una visita al portfolio anterior al primer contacto de esa sesión.

GA4 registra entre los detalles más vistos showroom e Itaú —7 vistas cada uno—, vivienda con box y tienda GO —5 cada uno—. Los paths muestran mamparas → obras en 9 transiciones, cielo → obras en 6 y box → obras en 4.

Interpretación: las obras tienen audiencia, pero no constituyen un paso frecuente inmediatamente previo al contacto observado. Hipótesis: podrían servir a journeys B2B más largos o contactos offline no medidos. Acción: probar casos pertinentes integrados en servicios y medir exposición/asistencia entre sesiones. No hay evidencia suficiente para declarar que el portfolio es el gran motor de conversión ni para quitarlo.

**Grabaciones: selección por segmentos, no aleatoria**

Se eligieron cinco sesiones por cada segmento: A) orgánico + contacto, B) orgánico sin contacto, C) servicio sin contacto, D) inicio de formulario sin envío y E) móvil + servicio sin contacto. Son **17 sesiones únicas** por solapamiento; **16 tenían grabación disponible**. La selección privilegia sesiones recientes dentro de la retención, no representa probabilísticamente a todos los usuarios.

La revisión combina eventos, metadatos y análisis visual asistido de PostHog. Se completó el análisis visual asistido de siete grabaciones; otras siete resultaron demasiado cortas o inactivas y dos devolvieron error 503 del proveedor incluso tras un segundo intento. Estos límites se documentan en el anexo de verificación. No se trató una sesión no revisable como prueba de que no hay fricción.

Observaciones contrastadas:

- **Bloqueo por selección obligatoria:** en una sesión de contacto, dos intentos se detienen por falta de tipo de consulta; la persona vuelve a modificar servicios en vez de completar ese paso. Coincide con los eventos de error y la validación del código. [Grabación, alrededor de 22 segundos](https://us.posthog.com/project/441009/replay/01a0c8e5-77d1-7170-a33e-01203a968156?t=22).
- **Formulario sustituido por WhatsApp directo:** una persona inicia la selección del formulario de home y usa después el botón flotante; no hay `form_submit`, pero sí contacto observado. [Recorrido de selección y contacto](https://us.posthog.com/project/441009/replay/01a0da6a-e9bd-740e-942f-1bd40b867e4d?t=13).
- **Lectura sin una falla visible:** una sesión de box explora contenido y sale por Instagram. No se observó bloqueo del CTA en esa grabación; no sabemos por qué eligió ese recorrido. [Grabación, alrededor de 27 segundos](https://us.posthog.com/project/441009/replay/01a0d71f-8f52-7d3d-9e38-74208c62d8d9?t=27).
- **Exploración sin contacto:** una sesión recorre home → servicios → ventanas y ve CTAs, sin activarlos. No permite diagnosticar intención de compra ni información faltante por sí sola.
- **Diferencia entre replay y evento final:** en una sesión del segmento D, el análisis visual señala una interacción con el CTA final que no tiene evento final equivalente en el extracto. Es una discrepancia para validar, no un lead recibido confirmado.

Se descartó una inferencia automática de “pérdida de datos por reset del formulario”: el código construye y abre WhatsApp antes de limpiar la UI, y los eventos finales de esa sesión conservan servicio y tipo de consulta. El mensaje efectivamente recibido permanece no disponible. Esta comprobación evita convertir una interpretación visual automática en un bug confirmado.

**Rage/dead clicks y errores:** se observó un rage click de producción, sobre un selector de cielo raso en home. No hay muestra suficiente para llamarlo patrón. Dead clicks y excepciones JS no tienen una serie utilizable confirmada; cero errores de consola en las 16 grabaciones seleccionadas no prueba ausencia global de errores.

**Suposiciones previas que los datos no respaldan:** el dashboard anterior proponía reducir el monopolio del botón flotante y tratar ciertos funnels custom como KPIs oficiales. El botón aporta **67,2% de los clics WhatsApp** y esos denominadores custom son incompletos. Sus metas deben sustituirse por contacto total deduplicado y posterior calificación; la cuota de un botón no es un objetivo comercial.

# 11. Mobile vs Desktop

| Dispositivo GA4 | Usuarios | Sesiones | Engagement | Usuarios con intención | CVR de intención por usuario |
|---|---:|---:|---:|---:|---:|
| Mobile | 484 | 596 | 61,7% | 95 | 19,6% |
| Desktop | 140 | 183 | 77,6% | 21 | 15,0% |
| Tablet | 3 | 3 | 66,7% | 1 | No interpretar con n=3 |

La mayor engagement de desktop no se traduce aquí en una mayor tasa de contacto. Móvil tiene mayor peso comercial observable.

En el funnel PostHog **form_start → handoff**, mobile registra **3/17 = 17,6%** y desktop **4/10 = 40,0%**. Es una señal de investigación, con muestra insuficiente para afirmar una diferencia estadística o una causa móvil específica. Los errores de selecciones aparecen en ambos dispositivos.

La mediana de scroll en eventos de salida de box es 26,6% móvil frente a 54,1% desktop; en cielo raso, 57,4% frente a 91,3%. Son mediciones por evento de salida, no una métrica deduplicada por sesión. El contacto rápido vía WhatsApp puede coexistir con poco scroll. No concluir “contenido ignorado” sin exposición y contexto.

PostHog mide p75 LCP móvil 1.813 ms —568 mediciones— e INP 176 ms —257—; desktop 1.704 ms y 96 ms. Son datos de la muestra instrumentada, no CrUX ni una evaluación de todos los visitantes. No hay evidencia suficiente para colocar una reescritura general de performance por encima de formularios/SEO.

# 12. Contenido

Priorizar respuestas a demanda registrada. Varias piezas ya existen: mejorar y conectar antes de crear duplicados. Impresiones son volumen relativo observado por VIPAR, no volumen total de búsqueda.

| Query detectada | Impresiones / posición del par | Página actual | Intención y contenido recomendado | Servicio / CTA / etapa |
|---|---|---|---|---|
| cielo raso pvc precio m2 paraguay | 358 / 9,6 | Precio cielo raso | Precio por superficie: qué incluye material, estructura, instalación y alcance; ejemplos aprobados si existen | Cielo; enviar metros/ubicación; evaluación |
| mamparas divisorias precios paraguay | 343 / 2,4 | Precio mamparas | Mantener la respuesta que ya captura 37 clics; explicar privacidad, material y alcance con casos reales | Mamparas; enviar medidas y uso; evaluación |
| mampara para baño precio paraguay | 417 / 5,2 | Box de baño | Sección de variables de cotización y enlace a la guía de precio ya existente | Box; medidas, foto y ciudad; decisión |
| que es mejor cielo raso de yeso o pvc | 134 / 6,5 | PVC vs. yeso | Mejorar comparación por ambiente/uso y sus límites; el par tiene 0 clics | Cielo; consultar material para el ambiente; consideración |
| tipos sistemas apertura mamparas | 228 / 83,1 | Tipos de apertura de box | Revisar intención; explicar aperturas con espacio disponible y ejemplos de instalación verificados | Box; enviar medidas/foto; consideración |
| cielo raso de pvc | 402 / 10,9 | Servicio cielo raso | Desarrollar aplicación PVC dentro del servicio; derivar a comparación/precios cuando corresponda | Cielo; cotización de instalación; decisión |
| vidrieria asuncion | 464 / 5,7 | Home | Explicar zonas efectivamente atendidas y tipo de trabajos; verificar datos locales con el cliente | Servicios pertinentes; ciudad/proyecto; decisión |

La query **“mampara de pvc para baño precio paraguay”** genera 380 impresiones en box, pero no se verificó que VIPAR ofrezca ese producto. Validar catálogo antes de captar solicitudes con esa promesa. Puede revelar tráfico de intención parcialmente desalineada; no confirma leads de mala calidad sin clasificación comercial.

Arquitectura recomendada: mantener la landing de instalación separada de la guía de precios y la comparación. Evaluar subservicios solo con alcance propio; reservar guías para preguntas informacionales y casos para resultados reales. Las FAQs deben responder dudas detectadas, no repetir una lista genérica de keywords.

# 13. CRO

Los cambios recomendados se apoyan en errores registrados, paths, grabaciones y exposición aproximada. Cuando la evidencia es una heurística, se indica. Los experimentos son propuestas; no se activaron flags ni variantes en producción.

**Experimento 1 — Reducir fricción en selecciones del formulario**

- **Problema observado:** se bloquea el paso hacia contacto por selecciones obligatorias.
- **Evidencia:** 18/19 errores de selección; 7/27 inicios completan handoff; una grabación confirma dos bloqueos y cambios del servicio.
- **Hipótesis:** si el servicio llega preseleccionado desde su landing y el tipo de consulta se simplifica o vuelve opcional, más personas completarán el contacto porque habrá menos requisitos ambiguos.
- **Cambio:** preselección contextual, validación junto al campo pendiente y simplificación de consulta. Mantener la salida directa a WhatsApp.
- **KPI primario:** usuarios con contacto total / usuarios que iniciaron formulario; separar handoff del formulario como métrica de diagnóstico. Qualified Leads cuando existan.
- **Guardrails:** errores, duplicados, contacto total, contexto de servicio conservado y calidad posterior de consultas.
- **Segmento:** inicios de formulario, con cortes mobile/desktop y home/contacto.
- **Duración / volumen:** no fijar 14 o 28 días; solo hubo 27 inicios en 90 días. Corregir el problema claro con QA y monitoreo; una prueba A/B necesita un cálculo de muestra posterior.

**Experimento 2 — Convertir la lectura de precios en una consulta contextual**

- **Problema observado:** precio cielo crece en SEO, pero registra 3 sesiones con contacto entre 25 entradas; precio mamparas, 2 entre 21.
- **Evidencia:** 92 y 94 clics GSC; demanda explícita de precios y costo por m²; las guías existen.
- **Hipótesis:** explicar alcance y ofrecer un CTA que pida los datos mínimos de cotización facilitará consultas pertinentes al reducir incertidumbre.
- **Cambio:** CTA contextual cerca de la respuesta principal y al final; mensaje WhatsApp con servicio y datos a aportar. Usar únicamente precios/ejemplos autorizados y verificables.
- **KPI primario:** sesiones orgánicas de esas guías con contacto deduplicado / entradas orgánicas. Posteriormente, qualified leads por guía.
- **Guardrails:** clics non-brand de queries estables, posición, contacto total, errores y proporción de consultas fuera de catálogo.
- **Segmento:** lectores de ambas guías; separar servicio y dispositivo.
- **Duración / volumen:** 46 entradas totales en 90 días entre ambas páginas; insuficiente para una prueba rápida. Medir exposición/CTR de CTA y monitorear una implementación por etapas.

**Experimento 3 — CTA visible y contextual en servicio móvil**

- **Problema observado:** contacto muy concentrado en el flotante; la exposición de CTAs integrados no está instrumentada.
- **Evidencia:** 84 clics FAB frente a 24 en CTA de servicio; scroll móvil de box con mediana 26,6%.
- **Hipótesis:** un CTA visible antes de secciones de baja exposición, con contexto de servicio y requisitos claros, puede aumentar contacto total.
- **Cambio:** instrumentar exposición primero; probar un CTA que mantenga servicio y explique cómo solicitar cotización con medidas/fotos/ciudad, sin bloquear el FAB.
- **KPI primario:** sesiones de servicio con contacto deduplicado / entradas al servicio; no cuota de clics del nuevo botón.
- **Guardrails:** contacto de todos los CTAs, errores, taps accidentales/repetidos y calidad posterior.
- **Segmento:** mobile en box, cielo y mamparas, separando páginas.
- **Duración / volumen:** las tres landings reúnen 408 sesiones en 90 días. La duración estadística queda por estimar tras definir efecto mínimo y unidad de asignación; no prometer significancia por página en semanas.

**Experimento 4 — Prueba de obra pertinente dentro de la landing**

- **Problema observado:** poca asistencia de visitas externas al portfolio; la selección de obras se reutiliza entre servicios.
- **Evidencia:** solo 2 sesiones con portfolio antes de WhatsApp. No confirma valor causal de obras.
- **Hipótesis, confianza baja-media:** una prueba breve de trabajo real relacionada con el servicio podría resolver dudas técnicas sin exigir otra navegación.
- **Cambio:** caso integrado con imágenes propias, servicio ejecutado y alcance confirmado; enlazar al detalle y al servicio.
- **KPI primario:** contacto de visitantes expuestos al caso; luego qualified leads por uso del proyecto.
- **Guardrails:** exposición del CTA, contacto total, performance y exactitud de los datos del proyecto.
- **Segmento:** mamparas/aluminio y usos comerciales declarados cuando estén disponibles.
- **Duración / volumen:** no estimable con el volumen actual por caso. Prioridad P2; no reemplaza los arreglos de formulario ni la recuperación de cielo raso.

Las pruebas de titles/snippets de SEO se evalúan aparte por query–URL, país y dispositivo. Un antes/después sin control no demuestra causalidad.

# 14. Top Findings

**1. La medición de negocio termina antes de que exista un lead confirmado.**
**Dato:** solo hay intención web y no hay registro comercial accesible. **Interpretación:** no sabemos qué consultas llegan o califican. **Impacto:** impide elegir servicios por valor. **Hipótesis:** el ranking por contactos podría diferir del ranking por negocio. **Acción:** acordar registro mínimo y criterios de calificación con el cliente.

**2. El crecimiento histórico GSC está parcialmente confundido con cobertura de host.**
**Dato:** GA4 registra sesiones orgánicas en www durante meses casi vacíos en el prefijo GSC sin www. **Interpretación:** la serie no representa uniformemente al sitio completo. **Impacto:** exagera recuperación SEO aparente. **Hipótesis:** cambio de host/canónica contribuye al salto; no se cuantificó su peso exacto. **Acción:** ampliar cobertura y priorizar comparación reciente estable.

**3. El tráfico de desarrollo distorsionó mayo y el periodo anterior.**
**Dato:** 841 de 1.585 pageviews anteriores eran localhost. **Interpretación:** gran parte de ese consumo no pertenece al mercado. **Impacto:** decisiones erróneas de engagement y UX. **Hipótesis:** podría existir también tráfico interno en producción no identificado. **Acción:** mantener históricos limpios y exclusiones verificadas.

**4. Los eventos clave sobrecuentan recorridos de contacto.**
**Dato:** el formulario emite email capturado, submit y WhatsApp; hay 127 key events. **Interpretación:** varias etapas del mismo journey se contabilizan como conversiones distintas. **Impacto:** falsa lectura de leads y CVR. **Hipótesis:** el usuario puede además repetir el intento; no hay duplicación instantánea generalizada demostrada. **Acción:** deduplicar por interacción, sesión y futura consulta.

**5. El funnel custom de servicio omite visitas.**
**Dato:** cielo tiene 174 pageviews y 46 eventos custom en PostHog; denominadores de funnel 488 por vista real frente a 162 por evento. **Interpretación:** esos funnels no miden la misma población. **Impacto:** falsas tasas y comparaciones de cambios. **Hipótesis:** orden de inicialización/consentimiento contribuye. **Acción:** validar dispatch y usar pageviews mientras se corrige.

**6. El crecimiento total oculta pérdida del servicio cielo raso.**
**Dato:** servicio 167→138 clics; guía de precio 18→74 en ventanas de 45 días. **Interpretación:** la ganancia editorial compensa deterioro comercial. **Impacto:** posible menor captura de demanda de instalación. **Hipótesis:** ranking e intención están cambiando; canibalización no confirmada. **Acción:** investigar query–URL y recuperar el servicio sin eliminar la guía.

**7. La caída de contactos de agosto tiene un componente de mix.**
**Dato:** los tres servicios pasan de 60,8% a 43,7% de las sesiones, y su tasa de intención de 21,3% a 16,1%. **Interpretación:** llega menos tráfico a páginas que suelen iniciar contacto y también cae su rendimiento observado. **Impacto:** menos intención aunque el total de tráfico cambie poco. **Hipótesis:** mix de queries, demanda o UX; no hay causa única probada. **Acción:** monitorear por servicio/query/dispositivo y versión.

**8. El formulario bloquea principalmente por selectores.**
**Dato:** 18/19 errores y una grabación con dos fallos por consulta no seleccionada. **Interpretación:** la fricción concreta está en esos requisitos. **Impacto:** algunos intentos no llegan al handoff. **Hipótesis:** jerarquía y obligatoriedad no resultan claras. **Acción:** simplificar, preseleccionar y validar junto al campo.

**9. Móvil funciona mejor en contacto general, pero peor en el pequeño funnel de formulario.**
**Dato:** intención GA4 19,6% móvil vs. 15,0% desktop; formulario PostHog 3/17 vs. 4/10. **Interpretación:** son comportamientos distintos. **Impacto:** una optimización basada solo en engagement priorizaría mal. **Hipótesis:** WhatsApp directo reduce pasos en móvil. **Acción:** conservar ese recorrido y resolver la fricción de formulario.

**10. El FAB es un acceso usado, no una métrica que deba reducirse.**
**Dato:** 84 de 125 clics WhatsApp; una sesión cambia del formulario al flotante. **Interpretación:** sirve como alternativa de contacto. **Impacto:** quitarlo o restringirlo podría bajar intención total. **Hipótesis:** facilidad y exposición explican uso, pero no se midieron impresiones. **Acción:** medir exposición y probar CTAs por contacto total.

**11. Las obras no son un paso frecuente antes del contacto observado.**
**Dato:** 73 personas visitan obras, pero solo 2 sesiones las ven antes de WhatsApp. **Interpretación:** no hay evidencia de asistencia fuerte dentro de la sesión. **Impacto:** no justifica hacer obligatorio ese recorrido. **Hipótesis:** valor B2B entre sesiones/offline no medido. **Acción:** casos contextuales y seguimiento comercial, sin afirmar efecto negativo del portfolio.

**12. Aluminio tiene una señal favorable con muestra pequeña.**
**Dato:** 6 sesiones con contacto entre 28 entradas; 175 impresiones en su query de servicio, posición 7,2. **Interpretación:** podría beneficiarse de mayor descubrimiento relevante. **Impacto:** oportunidad adicional al núcleo de tres servicios. **Hipótesis:** visitantes actuales tienen intención más específica. **Acción:** mejorar SEO y ampliar muestra antes de una inversión grande.

# 15. Prioritized Backlog

**Oportunidades por área**

- **SEO:** recuperar query “cielo raso”, adaptar box a “mamparas para baño” y revisar ranking/CTR de aluminio.
- **CRO:** simplificar selectores y medir contacto total, incluidos recorridos que cambian del formulario al FAB.
- **Content:** mejorar las guías existentes de precio por m² y comparaciones con ejemplos aprobados; responder intención detectada.
- **Tracking:** corregir semántica de vistas, consentimiento, deduplicación y origen persistente.
- **UX:** dirigir validación al campo pendiente y presentar pruebas de obra pertinentes sin exigir navegación adicional.
- **Business analytics:** unir consulta recibida, calificación, presupuesto y venta mediante un identificador de oportunidad.

Impacto, confianza y esfuerzo son cualitativos; no se inventa un ICE numérico ni revenue previsto.

| Prioridad | Acción | Área | Impacto | Confianza | Esfuerzo | Evidencia |
|---|---|---|---|---|---|---|
| P0 | Separar intención de lead y deduplicar conversiones | Tracking | Alto para decisiones | Alta | Medio | Formulario y WhatsApp comparten journey |
| P0 | Eliminar email de payload GA4; IDs opacos | Tracking | Alto para calidad/política de medición | Alta en código | Bajo–medio | Dispatcher recibe email |
| P0 | Corregir vistas de servicio/formulario y consentimiento | Tracking | Alto para funnels | Alta en brecha; media en causa exacta | Medio | 174 vs. 46 en cielo; vistas de formulario al render |
| P0 | Separar localhost y validar personal interno | Tracking | Alto para histórico | Alta | Bajo–medio | 53,1% de pageviews anteriores |
| P0 | Diseñar registro mínimo de consulta/calificación con cliente | Business | Alto para North Star | Alta en necesidad | Depende del cliente | Ausencia de registro/acceso |
| P1 | Recuperar cielo raso por query, contenido y snippet | SEO | Alto potencial observado | Media–alta | Medio | 14.118 imp.; caída reciente de clics/ranking |
| P1 | Simplificar selecciones y errores del formulario | CRO / UX | Medio–alto potencial | Alta en problema; media en lift | Bajo–medio | 18/19 errores; replay confirmado |
| P1 | Adaptar box a intención “mamparas para baño” | SEO / Content | Medio–alto potencial | Media–alta | Bajo–medio | 1.042 imp., pos. 6,4 |
| P1 | Mejorar respuestas/CTAs de guías de precios | Content / CRO | Medio–alto potencial | Media | Medio | 358 imp. de precio PVC; crecimiento de guías |
| P1 | Enlazar servicio ↔ precio/comparación de forma contextual | SEO / UX | Medio potencial | Alta en brecha de enlaces revisados | Bajo | Enlace al índice sin guías específicas en tres servicios |
| P1 | Ampliar cobertura GSC y versionar series | SEO / Tracking | Alto para análisis histórico | Alta | Depende de permisos/DNS | Prefijo sin www |
| P2 | Normalizar fuentes/campañas y registrar dimensiones GA4 | Tracking | Medio | Alta en anomalía; media en origen | Medio | 37 sesiones con fuentes VIPAR y medium vacío |
| P2 | Potenciar aluminio y seguir sus contactos | SEO | Medio potencial, incierto en negocio | Media | Medio | 6/28 entradas con intención |
| P2 | Probar casos pertinentes integrados en servicios | UX / CRO | Incierto | Baja–media | Medio | Portfolio poco frecuente antes de contacto |
| P2 | Redirigir box-bano y auditar aliases históricos | SEO / UX | Bajo con evidencia actual | Alta | Bajo | 404, 1 clic |
| P2 | Medir intentos/validación nativa, teléfono/email y errores JS | Tracking | Medio | Alta en necesidad; QA pendiente | Medio | Sin serie completa de estos resultados |
| P3 | Evaluar nuevas páginas PVC/cristal templado/locales | Arquitectura | No estimable aún | Baja–media | Medio–alto | Demanda existente; diferenciación/oferta a validar |
| P3 | Integrar CRM/WhatsApp comercial y revenue automatizados | Business | Alto potencial futuro | Dependiente de acceso | Alto / no estimable | Registro mínimo todavía inexistente |

P0 de registro comercial no exige que la agencia obtenga acceso completo al CRM: un listado mínimo de IDs y estados del cliente puede ser suficiente para empezar. Sin su participación, esa parte seguirá no disponible.

# 16. 30 / 60 / 90 Day Plan

**Próximos 30 días**

1. Agencia/desarrollo: corregir deduplicación, payloads personales, vistas/exposición, consentimiento y contaminación interna.
2. Agencia/analytics: publicar baseline limpio y documentar fecha/versión de eventos; reemplazar metas del scorecard que dependen de denominadores incorrectos.
3. Cliente + agencia: definir lead recibido, calificado y causas de descarte; preparar registro mínimo. Su disponibilidad depende del cliente.
4. SEO: investigar la pérdida de cielo raso por query–URL y validar cambios de snippet/contenido; corregir el alias 404.
5. UX: simplificar validaciones de formulario y QA de handoff en móvil/desktop, con consentimiento nuevo y guardado.

Criterio de salida: los journeys probados registran cada etapa una vez, preservan origen/contexto y no tratan clic como lead. Si el cliente no registra estados, el dashboard debe mostrar explícitamente la limitación.

**31–60 días**

1. Conectar servicios con guías de precio/comparación y casos pertinentes.
2. Publicar mejoras de contenido que respondan queries detectadas, usando solo datos comerciales aprobados.
3. Instrumentar exposición de CTAs y ejecutar la primera iteración CRO; revisar contacto total y errores por servicio/dispositivo.
4. Activar registro de consultas recibidas y calificación si el cliente lo habilita; contrastar intención web con recepción real.
5. Revisar aluminio y la recuperación de box/mamparas por cohortes temporales y fuentes.

Criterio de salida: una lectura comparable por landing/query y al menos una iteración evaluable; no declarar ganador por pocos formularios.

**61–90 días**

1. Evaluar cambios por queries estables, dispositivo y fecha de versión; distinguir efecto descriptivo de resultado causal.
2. Repriorizar usando qualified leads por servicio si ya están disponibles; incorporar presupuestos enviados y estado comercial.
3. Continuar las mejoras con señal favorable y abandonar hipótesis contradichas.
4. Diseñar pruebas con muestra suficiente; considerar expansión de arquitectura solo con demanda, oferta e intención diferenciadas.
5. Definir siguiente trimestre sin promesas de revenue basadas únicamente en clicks.

Este plan es una recomendación de ejecución. La auditoría no modificó tags, contenido, campañas, flags ni settings de producción.

# 17. Tracking Improvements

**Contrato de eventos propuesto**

| Evento / estado | Cuándo se considera válido | Propiedades necesarias |
|---|---|---|
| `page_view` / `service_page_viewed` | Vista válida de página/ruta; una vez por navegación con consentimiento aplicable | ruta normalizada, page_type, service_slug, versión |
| `cta_impression` | CTA realmente visible según criterio de exposición definido | cta_id, cta_location, servicio, página, exposición |
| `cta_click` / `whatsapp_click` | Interacción real, con ID por intento | CTA, servicio, entry landing, origen de sesión, event_id |
| `form_rendered` / `form_impression` | Inicialización y visibilidad real diferenciadas | form_id, form_version, página |
| `form_start` | Primera acción del usuario, sin contar la preselección automática | form_id, paso de entrada |
| `form_step_viewed` | Paso realmente expuesto, no todos los pasos al cargar | step_name, form_id |
| `form_submit_attempt` / `form_error` | Intento y error, incluyendo validación nativa del navegador | attempt_id, field_name, error_type; sin valores personales |
| `form_validated` / `whatsapp_handoff` | Validación y salida a WhatsApp; no consulta recibida | attempt_id, servicio, tipo de consulta |
| `phone_click` / `email_click` | Interacción con tel/mailto; QA de envío | ubicación, página; sin número/email del visitante |
| `lead_received` | Recepción confirmada por backend, webhook comercial o registro del cliente | lead_id, received_at, canal, servicio, origen |
| `lead_qualified` / `lead_disqualified` | Revisión con criterio acordado y causa documentada | lead_id, qualified_at, criterio/versión, motivo |
| `quote_requested` / `quote_sent` | Solicitud recibida / presupuesto efectivamente enviado | lead_id, quote_id, fechas, servicio |
| `sale_closed` | Venta confirmada por registro comercial | lead_id, sale_id, fecha, value, currency |

Guardar primer origen y origen de la sesión por separado, sin sustituirlos por referrer interno. Preservar UTMs de entrada válidas; usar nombres propios para contexto del formulario y evitar confundirlo con adquisición. [Tratamiento oficial de campañas y fuentes](https://support.google.com/analytics/answer/11242841?hl=en).

Registrar como dimensiones categóricas GA4: servicio, tipo de página, CTA, form_id, versión y tipo de consulta. Usar categoría de dispositivo del SDK; el cálculo custom por ancho de viewport no identifica tablets de forma fiable. Los IDs individuales sirven para unión/deduplicación en el registro o exportación, sin convertir emails ni datos personales en dimensiones.

El formulario actual abre WhatsApp y no confirma recepción. Si se agrega captura en backend, definir claramente para el usuario qué consulta se registra y cuándo. Para WhatsApp directo, una referencia de consulta en el mensaje puede facilitar unión con el registro del cliente; la referencia generada sigue siendo intención hasta que se confirma recepción.

**Registro comercial mínimo, sin pedir acceso completo:** ID de consulta, fecha recibida, origen web, servicio/uso declarado, estado, calificado sí/no y motivo, fecha/presupuesto enviado, venta/valor/moneda cuando existan. Al principio puede ser un registro manual del cliente con IDs opacos. No se puede reconstruir el histórico comercial mediante GA4/PostHog solamente.

# 18. KPIs

Dashboard recomendado con tres vistas: visibilidad/adquisición, contacto/calidad de medición y pipeline comercial. Revisar semanas para anomalías y meses para negocio.

| KPI | Estado actual / baseline de 90 días | Definición o mejora requerida |
|---|---|---|
| Organic Impressions | 51.517 | GSC, cobertura de host explícita |
| Organic Clicks | 1.679 | GSC; separar query conocida/desconocida |
| Organic CTR | 3,26% | Por query–URL, dispositivo y país |
| Average Position | ≈6,51 | Promedio de periodo, no ranking diario |
| Non-Branded Clicks | 505 observables; 1.135 clics sin clasificación | No imputar desconocidos |
| Branded Clicks | 39 observables | Variantes claras de marca |
| Top 3 / Top 10 / >10–20 | 393 / 1.402 / 161 | Añadir vista con mínimo 20 imp.: 21 / 135 / 19 |
| Organic Users | 550 | GA4 producción |
| Organic Landing Sessions | 651 | GA4, desglosar landing y desconocidos |
| Website Contact Intent Users | 117 | Unión deduplicada; proxy |
| Organic Contact Intent Users | 101 | Unión dentro de Organic Search |
| Visitor → Contact Intent | 18,66% | Usuarios con intención / usuarios |
| Organic Visitor → Contact Intent | 18,36% | Mismo canal y unidad |
| WhatsApp Visitor CVR | 18,66% observado | Click intent, no conversación recibida |
| Visitor → Form Handoff | 7/627 = 1,12% GA4 | El submit actual deriva a WhatsApp |
| Form Start → Handoff | 7/27 = 25,9% PostHog | Personas, ordenado 24h |
| Service → Contact Intent | 88/488 = 18,0% PostHog | Vista real de servicio, no evento custom incompleto |
| Leads / Organic Leads | No disponible / no instrumentado | Recepción confirmada + origen |
| Lead CVR / Organic Lead CVR | No disponible / no instrumentado | Leads recibidos deduplicados / visitantes pertinentes |
| Qualified Leads | No disponible / no instrumentado | Criterio y registro del cliente |
| Quote Requests / Quotes Sent | No disponible / no instrumentado | Solicitudes recibidas y presupuestos enviados |
| Sales / Revenue | No disponible / no instrumentado | Registro comercial y atribución acordada |
| Lead → Qualified → Quote → Sale | No disponible / no instrumentado | Cohortes por fecha de consulta y maduración |

El revenue cero devuelto por Analytics no demuestra que el sitio no genere ventas: no hay una instrumentación comercial que permita usarlo como revenue real.

Añadir controles de salud: hosts no productivos, tasa de campos faltantes, vistas de servicio por pageview comparable, consentimiento decidido/restaurado, intentos duplicados, fuentes internas y cobertura de queries. Evitar metas únicas de pageviews, engagement o tiempo promedio.

# 19. North Star

**Qualified Website Leads / mes.**

Definición propuesta: número de **consultas/oportunidades únicas originadas en el sitio**, confirmadas como recibidas y calificadas por primera vez durante el mes conforme a criterios acordados. Deduplicar por oportunidad/proyecto, no solamente por email: una persona puede tener varios proyectos legítimos.

Criterios a acordar con el cliente, todavía no confirmados: consulta comercial real; servicio ofrecido y zona cubierta; contexto suficiente del trabajo; contacto utilizable; exclusión de spam, empleo, proveedores y duplicados. El registro debe guardar versión del criterio y motivo de descarte.

Métricas secundarias: Organic Qualified Leads; Non-Branded Clicks conocidos con su cobertura; Visitor → Lead; Service → Lead; Quote Requests; Lead → Qualified; Qualified → Quote; Quote → Sale. Reportar revenue atribuido o influenciado solo cuando exista unión verificable con ventas.

**Hoy no se puede calcular esta North Star.** Como indicador provisional: usuarios únicos con intención de contacto por mes, separados de consultas recibidas. Julio 48, agosto 34 y septiembre 1–25 35. No renombrar estos conteos como qualified leads. Sin participación del cliente, la medición comercial seguirá no disponible.

# 20. Conclusión

**La mayor oportunidad de crecimiento digital observable está en el conjunto cielo raso–box–mamparas, con prioridad inmediata en recuperar la demanda comercial de cielo raso y mejorar la transición desde contenido de precios hacia contacto contextual.**

La elección se fundamenta en 408 entradas y 76 sesiones con intención en las tres landings, 369 entradas orgánicas y 70 sesiones orgánicas con intención. Cielo raso aporta 14.118 impresiones, 127 entradas orgánicas y 30 sesiones con contacto, pero pierde clics y posición recientemente. Existe demanda adicional de precio/material que VIPAR ya alcanza; las guías están creciendo.

En CRO, el cambio con evidencia más concreta es simplificar los selectores del formulario y sus validaciones. Proteger el acceso directo a WhatsApp y medir contacto total es coherente con el uso observado. Portfolio, nuevas páginas y una expansión grande de aluminio quedan detrás por menor confianza o muestra.

**No se puede determinar todavía cuál oportunidad genera más ventas, margen o leads calificados.** Ese ranking depende del registro comercial que hoy falta. La primera prioridad de medición es cerrar la diferencia entre intención web y consulta calificada; la primera prioridad de captación es recuperar y convertir mejor la demanda existente de los servicios principales.

Datos reproducibles y límites de consulta: [evidence.json](evidence.json). Verificación adicional de portfolio y grabaciones: [behavior-verification.json](behavior-verification.json). Se consultaron datos en vivo, código y siete páginas principales en producción; las recomendaciones no fueron desplegadas.
