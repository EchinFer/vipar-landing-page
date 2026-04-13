# Backlog priorizado — GA4 (property 488034623)
Fecha: 2026-04-13

Prioridad calculada según: impacto potencial, confianza en la evidencia, esfuerzo estimado y cercanía a negocio.

---

## Quick Wins

1) Asegurar definiciones de conversiones (tracking)
- Problema detectado: `conversions` = 0 en reports de landing pages y eventos.
- Página / segmento afectado: toda la propiedad (páginas de servicios, home).
- Evidencia: métrica `conversions` reportada como 0 en los reports consultados (landing pages y events).
- Causa probable: no hay eventos marcados como conversiones en GA4 o los eventos que indican leads no se envían correctamente.
- Impacto esperado: Muy alto — permite medir leads y ROI inmediatamente.
- Confianza: Alta (evidencia directa en los datos).
- Esfuerzo estimado: Bajo (0.5–1 día: identificar evento candidato y marcarlo como conversión o ajustar gtag/GTM).
- Prioridad final: Alta — Quick Win (cercanía a negocio: Muy alta).

2) Restaurar/validar seguimiento de `whatsapp_click`
- Problema detectado: caida en `whatsapp_click` (12 → 7).
- Página / segmento afectado: páginas con CTA WhatsApp; especialmente mobile.
- Evidencia: evento `whatsapp_click` en el reporte de eventos: previous=12, current=7.
- Causa probable: cambio en DOM/atributos del botón o trigger en GTM/etiqueta roto en versiones recientes.
- Impacto esperado: Alto — recuperación de leads directos.
- Confianza: Media.
- Esfuerzo estimado: Bajo (0.5–1 día: inspección DOM y ajuste del trigger).
- Prioridad final: Alta — Quick Win (cercanía a negocio: Alta).

3) Corregir dobles disparos de `consent_*`
- Problema detectado: `consent_accept` y `consent_update` subieron de 92 → 165 (ambos).
- Página / segmento afectado: toda la propiedad (CMP relacionado).
- Evidencia: eventos `consent_accept` y `consent_update` con incrementos idénticos en el periodo actual.
- Causa probable: configuración del CMP o reglas de GTM que disparan ambos eventos (o doble-instrumentación).
- Impacto esperado: Medio — contamina métricas de eventos/engagement y complica segmentación.
- Confianza: Media-Alta.
- Esfuerzo estimado: Bajo (medio día a 1 día: probar y ajustar triggers).
- Prioridad final: Media-Alta — Quick Win.

4) Reducir `(not set)` en `landingPage` / `sessionSource`
- Problema detectado: filas con valor `(not set)` en landingPage y sessionSource.
- Página / segmento afectado: múltiples filas (impide identificar top landing pages / fuentes correctamente).
- Evidencia: aparición recurrente de `(not set)` en report de landing pages y source/medium.
- Causa probable: etiqueta ejecutándose antes de que estén disponibles variables (page_path/page_location) o parámetros no enviados.
- Impacto esperado: Medio — mejora la calidad de análisis de páginas principales.
- Confianza: Media.
- Esfuerzo estimado: Bajo-Medio (0.5–2 días: ajustar timing del tag o parámetros enviados).
- Prioridad final: Media — Quick Win.

---

## Mejoras Medianas

5) Investigar y corregir outliers en `averageSessionDuration`
- Problema detectado: saltos extremos en duración media de sesión: `google/organic` 106s → 1370.7s; `/servicios/cielo-raso` 150.35s → 3946.05s.
- Página / segmento afectado: canal `google / organic` y landing `/servicios/cielo-raso` (ejemplo claro).
- Evidencia: valores de `averageSessionDuration` extraídos del runReport (valores extremos en periodo actual).
- Causa probable: few outlier sessions (sesiones muy largas), timers/heartbeats o eventos que mantienen la sesión abierta, o error en la instrumentación que impide cerrar sesiones.
- Impacto esperado: Alto — distorsiona engagementRate, average session y conversion rate denominadores.
- Confianza: Alta.
- Esfuerzo estimado: Medio (1–3 días: extracción de sesiones largas, análisis y cambio en lógica de eventos/timers).
- Prioridad final: Alta — Mejora Mediana (cercanía a negocio: Alta).

6) Auditoría de calidad de tráfico orgánico
- Problema detectado: aumento de `google / organic` (66 → 112 sesiones) con métricas inconsistente.
- Página / segmento afectado: canal orgánico, páginas de aterrizaje principales.
- Evidencia: sessions google/organic 66 -> 112; newUsers 58 -> 91; pero averageSessionDuration presenta valores anómalos.
- Causa probable: mejoras SEO reales o tráfico de baja calidad (spam/bots / redirecciones).
- Impacto esperado: Medio-Alto — afecta decisiones de adquisición y presupuesto SEO.
- Confianza: Media.
- Esfuerzo estimado: Medio (2–3 días: revisar fuentes, consultas, comparar landing pages y filtrar tráfico sospechoso).
- Prioridad final: Media — Mejora Mediana.

7) Auditoría UX móvil y caminos de conversión
- Problema detectado: predominio de usuarios nuevos en mobile (mobile new 56 → 83) y señales de baja retención/engagement para `returning` en desktop.
- Página / segmento afectado: usuarios mobile (nuevos) y usuarios returning (desktop).
- Evidencia: device/new_vs_returning report: mobile new current=83 (prev 56); desktop returning engagementRate baja (ejemplo: 0.25 para desktop returning current).
- Causa probable: fricción en el funnel móvil, CTAs poco visibles o problemas de rendimiento.
- Impacto esperado: Medio — posible pérdida de leads y menor conversión.
- Confianza: Media.
- Esfuerzo estimado: Medio (2–5 días, incluye pruebas UX y recorridos analíticos).
- Prioridad final: Media — Mejora Mediana.

---

## Cambios Estructurales

8) Auditoría completa de implementación (GTM / gtag / duplicados / measurement IDs)
- Problema detectado: múltiples problemas de calidad de datos (duración outliers, `(not set)`, eventos duplicados, conversions=0).
- Página / segmento afectado: toda la propiedad.
- Evidencia: combinación de anomalías en varios reportes (ver resumen y datos extraídos).
- Causa probable: implementación inconsistente entre páginas, etiquetas duplicadas, configuración de GTM o deploys incompletos.
- Impacto esperado: Muy alto — integridad de todo el dataset.
- Confianza: Media.
- Esfuerzo estimado: Alto (1–2 semanas según complejidad: auditoría, correcciones, pruebas y despliegue).
- Prioridad final: Alta — Cambio Estructural (cercanía a negocio: Muy alta).

9) Definir conversiones de negocio, funnel y dashboards de control
- Problema detectado: ausencia de conversiones definidas y monitorización.
- Página / segmento afectado: toda la propiedad y paneles de negocio.
- Evidencia: `conversions` = 0; ausencia de funnels/alerts en los datos consultados.
- Causa probable: falta de definición de eventos de negocio en GA4 o implementación incompleta.
- Impacto esperado: Muy alto — habilita reporting de rendimiento comercial.
- Confianza: Alta.
- Esfuerzo estimado: Medio-Alto (3–5 días: definir KPIs, configurar conversiones, crear dashboards básicos).
- Prioridad final: Alta — Cambio Estructural (cercanía a negocio: Muy alta).

10) Implementar filtrado/bot-detection y procesos de calidad de datos
- Problema detectado: posible tráfico spam/bot y anomalías sin detección automática.
- Página / segmento afectado: adquisición y engagement reports.
- Evidencia: outliers en duración y fuentes inusuales / `(not set)`.
- Causa probable: falta de filtros y controles; posible tráfico no legítimo.
- Impacto esperado: Medio-Alto (mejora la calidad histórica de datos).
- Confianza: Media.
- Esfuerzo estimado: Alto (1–2 semanas si se implementa server-side o reglas complejas).
- Prioridad final: Media-Alta — Cambio Estructural.

---

Orden sugerido de ejecución:
- Quick Wins (ejecutar inmediatamente): items 1, 2, 3, 4
- Mejoras Medianas (analizar y ejecutar tras quick wins): items 5, 6, 7
- Cambios Estructurales (plan de proyecto): items 8, 9, 10

Siguiente paso opcional: convertir cada ítem en tickets con checklist y estimaciones en horas/días, o ejecutar queries adicionales (series diarias, listado de conversiones definidas, top sesiones por duración) para afinar confianza y esfuerzo.
