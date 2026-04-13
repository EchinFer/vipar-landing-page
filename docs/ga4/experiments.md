# Plan de experimentación — GA4 / VIPAR
Fecha: 2026-04-13

Descripción breve: tabla de experimentos de una sola variable basada en `docs/ga4/ux_changes_detailed.md`. Cada experimento cambia una cosa a la vez para mantener medición limpia.

| Hipótesis | Cambio propuesto | Página afectada | Métrica principal en GA4 | Métricas secundarias | Criterio de éxito | Duración sugerida | Prioridad |
|---|---|---:|---|---|---|---:|---|
| Si instrumentamos y marcamos `lead_submit`, podremos medir leads reales y evaluar experiments | Implementar evento `lead_submit` en todos los formularios, incluir parámetro `service` y marcarlo como conversión en GA4 | Todos (formularios) | Evento `lead_submit` (conteo, con dimension `service`) | Correlación con envíos de formulario, duplicados, latencia | `lead_submit` disponible en GA4 con `service` en >90% de envíos; duplicados <5% | 1 semana | Muy alta |
| Añadir un mini-form en el hero incrementa envíos de contacto | Insertar mini-form hero (nombre, teléfono, consentimiento) que dispare `lead_submit` | /servicios/cielo-raso | `lead_submit` (tasa por sesión) | `whatsapp_click`, engagementRate, avgSessionDuration | +25% tasa de `lead_submit` vs control o +10 leads/semana | 4 semanas | Alta |
| Un sticky bar móvil incrementa interacciones por WhatsApp | Añadir sticky bottom bar móvil con WhatsApp + `Cotizar` (abre modal form) | /servicios/cielo-raso (mobile) | Evento `whatsapp_click` (conteo) | `lead_submit`, engagementRate, bounceRate | +30% `whatsapp_click` vs control | 3 semanas | Alta |
| Cards de servicio en home aumentan el tráfico a landings de servicio | Añadir grid de 4 service cards con CTA directo a cada landing | / (Home) | Sessions a páginas de servicio (page_path sessions) | pages/session, lead_submit downstream | +20% sesiones hacia landings de servicio | 3 semanas | Media |
| Pedir `metros estimados` en el form mejora la calidad de leads | Añadir campo numérico `metros estimados` en el formulario y pasar `estimated_meters` en `lead_submit` | /servicios/mampara-divisoria | % de `lead_submit` con `estimated_meters` (share) | Form completion rate, time-to-submit, spam rate | >=50% de leads con `estimated_meters` y +15% leads cualificados | 4 semanas | Alta |
| Incluir ficha técnica aumenta engagement de usuarios profesionales | Añadir sección de especificaciones técnicas visible above-the-fold | /servicios/mampara-divisoria | engagementRate (por página) | `lead_submit`, avgSessionDuration, scroll depth | +15% engagementRate en la landing | 3 semanas | Media |
| Un helper "Cómo medir" incrementa leads con medidas útiles | Agregar modal helper y campo `width_estimate` en el form | /servicios/box-de-bano | % de `lead_submit` con `width_estimate` | `lead_submit`, `whatsapp_click` | >=40% de leads con `width_estimate` y +20% leads absolutas | 4 semanas | Media |
| Mostrar trust badges/testimonios en hero mejora confianza y leads | Añadir logos clientes + 3 testimonios en hero en landings de servicio (A/B) | /servicios/* | `lead_submit` (tasa) | engagementRate, bounceRate | +15% `lead_submit` vs control | 4 semanas | Media |
| Probar texto/color del CTA para mejorar CTR | A/B: `Pedir presupuesto` vs `Cotizar ahora` (color variante) | /servicios/cielo-raso (o cross-page) | Evento `cta_click` (o `lead_submit` si abre form) | `lead_submit`, CTR del botón, bounceRate | +15% CTA clicks y efecto positivo en `lead_submit` | 3 semanas | Baja-Media |

Notas:
- Antes de ejecutar experiments de conversión, completar el experimento de instrumentación (`lead_submit`) para garantizar medición fiable.
- Para criterios de éxito usar tanto porcentaje relativo como umbral absoluto de conversiones (ej.: mínimo 10–20 conversions por variante) para asegurar potencia estadística.
- Si falta un evento (p.ej. `cta_click`) instrumentar y validar en GA4 como paso previo simple (1 semana).

¿Querés que convierta estos experimentos en issues con checklist y estimaciones en horas? Si sí, indicá si preferís GitHub Issues o Jira.
