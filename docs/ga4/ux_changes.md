# Cambios UX por landing — VIPAR (GA4 backlog → acciones)
Fecha: 2026-04-13

Este documento convierte las oportunidades priorizadas en cambios concretos de UX, contenido, estructura y conversión por landing page. Para cada cambio se indica: problema que resuelve, página/segmento afectado, evidencia, modificación exacta, impacto esperado y riesgo.

Pantallas generadas en Stitch (proyecto: VIPAR: Home Corporativa Premium):
- Cielos rasos (desktop): projects/11678542064190663790/screens/2bbddffdbc654e58a93549db1c7200fb
  - Captura: https://lh3.googleusercontent.com/aida/ADBb0uiPc3B-Zbo-ysOQZtDmZ_BjGAflIy9EU9INvIVKhaMFELnBVoysxn0F5EmjEruiejxZjk-aL_Yqz1kDKAN9woB3WN3sMmsGznLPXjZnYYHCcFMiMdO4MFy57yCUCMlzSC-j8FgnmixxHG2yj9RQ2J6rsCdHNlN6B_FybX9bz-jGlGy7VIIymGWLxszYI1N7ZAXxQQQaCwf_m7ZlfUJl5o6kmaT6m9vePmdxCrwbkeF3vs4Wwe9ERLjQY_05
- Home (desktop): projects/11678542064190663790/screens/2b2b6389262748cc942bc28849463b83
  - Captura: https://lh3.googleusercontent.com/aida/ADBb0uh27iDOmx0C259_NurqSfztHXZhtuXJJ7_spf82FhttYR0z8LCSVJb4z4EzR8MSIcDvNbK52N08gYENmuNF7OdtbQj0iBw8Q_VW5KepHjOe9FOTRBtnAOZ3NFHC2nVJHRdj7WnuDhxjd8ShJl-AcmsbXRPuTLs57_G6Lo4Guq60jngg3BWeFqnN145ZpvEFc59WEwZF1vQYCz6JcOaHGeXYpgQp6k446vgHC3JoATaanFluhGi9RvceKufF
- Mampara divisoria: projects/11678542064190663790/screens/1b205bd8d1a04688872a56e507c7ec7e
  - Captura: https://lh3.googleusercontent.com/aida/ADBb0ui_OydHdCT_a7hIMs3VbpoEAeKkWTrbVoOjEqqEHD-vDkSG5PkXxWJIf986ucsz6dSTeFB8fcQttgC1x8j1_DaF6mdCJbeiBwTiCBOtHAVln3kIriQ4U27xdUg_fuz15E2sDM71ReAylSV7WbokHUyWT979uSszNtJYOXfkE3CipOS_n2MxrncABLSzTRNHPW2kup7UugbWJfLRvPgdX8DLPpkFFBAOtMt516LGzNKx3sW0mYdNRIX8UD_a
- Boxes de baño: projects/11678542064190663790/screens/188921d63365481c8614249c53ccb79f
  - Captura: https://lh3.googleusercontent.com/aida/ADBb0ujjgOlcFWFxzKmFm1Gjhg7iQQSh8gMPQ65_71104eFzv8p_U1mZUW2kWTmGly3WY_uIz5T3SXwh6p5u1pPpquF-IkCFFrtd6doSBoUkC2_VPcRcTfqsSUSbA2ozal3GTFR5khUBQ9vTQ8SoOVgRIClWaqKspliyiwR8ZwANSNredt-7Uo5zQarGg4z7ZMHSv2MUjX7nhH16cBx0hXvh2ch8tlwb92ljqpB1uVavbXM3j_lHcA9rQR3z84HP

---

## 1) /servicios/cielo-raso

- Hero
  - Problema: hero no prioriza captura de lead ni confianza inmediata.
  - Evidencia: conversiones = 0 en GA4; la landing subió en sesiones (17→37) sin leads.
  - Modificación exacta: Hero con headline beneficio directo; subheadline con 2–3 bullets; CTA primario "Pedir presupuesto"; CTA secundario WhatsApp; inline mini-form (nombre, teléfono, consentimiento). Añadir trust badges bajo CTA.
  - Impacto esperado: aumento inmediato de leads (alto). Mejora en CTR del CTA hero (alto).
  - Riesgo: bajo (cambio de copy y pequeño componente UI).

- Propuesta de valor
  - Problema: beneficio técnico no visible de forma rápida para decisores.
  - Evidencia: engagement moderado; usuarios nuevos predominan (mobile new alto).
  - Modificación: sección 3 pilares con iconos técnicos + cifras (años/proyectos) arriba del fold.
  - Impacto: mayor claridad del offering → mayor intención de contacto (medio-alto).
  - Riesgo: bajo.

- CTA principal
  - Problema: CTA no persistente en mobile; WhatsApp clicks bajaron (12→7).
  - Evidencia: evento `whatsapp_click` decreciente en reports.
  - Modificación: Sticky CTA mobile (bottom bar) con botón WhatsApp + botón formulario; en desktop CTA sticky header o side CTA.
  - Impacto: recuperación de contactos vía WhatsApp y formularios (alto).
  - Riesgo: bajo; requerimiento de front-end para sticky bar.

- Jerarquía de secciones
  - Problema: contenido disperso; usuarios no encuentran specs técnico/galería rápidamente.
  - Modificación: Hero → PV (3 bloques) → Galería/Obras → Testimonios → Especificaciones → FAQs → CTA final.
  - Impacto: mejora en recorrido del usuario y en conversión media (medio).
  - Riesgo: medio (requiere reorganización de contenido / CMS).

- Prueba social
  - Problema: prueba social limitada.
  - Modificación: añadir 3 testimonios + carrusel logos + mini caso de estudio before/after.
  - Impacto: confianza y aumento de lead quality (medio).
  - Riesgo: bajo (requiere contenido/permiso de clientes).

- Formularios
  - Problema: formularios insuficientes y sin evento definido como conversión.
  - Evidencia: conversions = 0.
  - Modificación: formulario minimalista (name, phone, mensaje opcional, consentimiento); enviar evento GA4 `lead_submit`; marcar ese evento como conversión en GA4.
  - Impacto: medición real y leads (muy alto).
  - Riesgo: bajo-medio (revisión legal de privacidad).

- Contenido de soporte
  - Modificación: ficha técnica descargable, specs en tabla, contacto técnico.
  - Impacto: reduce fricción para compradores técnicos (medio).
  - Riesgo: bajo.

- Versión mobile
  - Modificación: hero compacto; sticky bottom CTA (WhatsApp + Cotizar); gallery como slider; formularios en modal; CTAs thumb-friendly.
  - Impacto: mejora conversiones mobile (alto).
  - Riesgo: bajo.

Referencias Stitch: pantalla: projects/11678542064190663790/screens/2bbddffdbc654e58a93549db1c7200fb

---

## 2) / (Home — hub de servicios)

- Hero
  - Problema: home no captura leads como hub (poca acción inmediata).
  - Evidencia: home sesiones prev/current similares; sin conversiones generales.
  - Modificación: Hero con CTA inline (Contactar) + trust badges + phone visible; microform de servicio select.
  - Impacto: más derivación hacia landings de servicio y leads (alto).
  - Riesgo: bajo.

- Propuesta de valor
  - Modificación: tarjetas de servicio (Cielos, Mamparas, Boxes, Carpintería) con CTA directo a cada landing; microcopy de beneficio en cada tarjeta.
  - Impacto: mejora del funnel y mayor CTR a páginas de servicio (medio).
  - Riesgo: bajo.

- CTA principal
  - Modificación: sticky action bar en desktop + bottom bar mobile con WhatsApp y Contacto rápido.
  - Impacto: mayor accesibilidad al contacto (alto).
  - Riesgo: bajo.

- Jerarquía
  - Modificación: Hero → Servicios destacados → Obras → Testimonios → FAQ → CTA final.
  - Impacto: guía la navegación y reduce tasa de rebote (medio).
  - Riesgo: bajo.

- Prueba social
  - Modificación: logo cloud, testimonios destacados y KPIs (años/proyectos).
  - Impacto: incremento de confianza (medio).
  - Riesgo: bajo.

- Formularios
  - Modificación: formulario en hero con select service; trackear `lead_submit` y segmentar por servicio.
  - Impacto: mejor atribución y calidad de leads (alto).
  - Riesgo: bajo.

- Contenido de soporte
  - Modificación: sección "¿Por qué VIPAR?" y FAQs.
  - Impacto: reduce dudas y mejora conversión (medio).
  - Riesgo: bajo.

- Mobile
  - Modificación: cards apiladas; modal form; CTAs thumb-friendly.
  - Impacto: mejora engagement móvil (alto).
  - Riesgo: bajo.

Referencias Stitch: projects/11678542064190663790/screens/2b2b6389262748cc942bc28849463b83

---

## 3) /servicios/mampara-divisoria

- Hero
  - Problema: no hay formulario técnico ni campo para medidas; friction para solicitar cotización.
  - Evidencia: leads generales bajos; visitantes técnicos necesitan medidas.
  - Modificación: Hero con mini-formulario (name, phone, metro estimado, tipo de vidrio) + CTA 'Solicitar Cotización' + WhatsApp.
  - Impacto: incremento de leads calificados (alto).
  - Riesgo: bajo.

- Propuesta de valor
  - Modificación: 3 pilares técnicos (vidrio templado, perfiles, instalación) con micro-pruebas.
  - Impacto: mayor confianza técnica (medio).
  - Riesgo: bajo.

- CTA
  - Modificación: Sticky CTA mobile; en desktop CTA visible en hero y sección lateral.
  - Impacto: más contactos directos (alto).
  - Riesgo: bajo.

- Jerarquía
  - Modificación: Hero → Beneficios técnicos → Before/After gallery → Specs → FAQs → CTA.
  - Impacto: recorrido más claro para decisores técnicos (medio).
  - Riesgo: bajo.

- Prueba social
  - Modificación: testimonios de arquitectos/constructores y logos.
  - Impacto: aumenta lead quality (medio).
  - Riesgo: bajo.

- Formularios
  - Modificación: form con field específico (metros) y select acabado; enviar `lead_submit` y añadir como conversión en GA4.
  - Impacto: mejores leads y medición (muy alto).
  - Riesgo: medio (validación de campos y UX).

- Contenido de soporte
  - Modificación: ficha técnica descargable + ejemplos de opacidad/vidrio; how-to-measure quick guide.
  - Impacto: reduce dudas técnicas (medio).
  - Riesgo: bajo.

- Mobile
  - Modificación: slider gallery, sticky CTA, modal form con prefilled 'Servicio: Mampara'.
  - Impacto: mejora conversiones mobile (alto).
  - Riesgo: bajo.

Referencias Stitch: projects/11678542064190663790/screens/1b205bd8d1a04688872a56e507c7ec7e

---

## 4) /servicios/box-de-bano

- Hero
  - Problema: visitantes no encuentran cómo medir/solicitar cotización con precisión.
  - Evidencia: pocas conversiones desde mobile; necesidad de guía de medición.
  - Modificación: Hero con short form (name, phone, width estimate, finish select) + CTA 'Cotizar mi Box' + WhatsApp.
  - Impacto: mayor leads precisos (alto).
  - Riesgo: bajo.

- Propuesta de valor
  - Modificación: 3 beneficios (seguridad, limpieza, garantía) con iconos y micro-copy.
  - Impacto: mejora intención de compra (medio).
  - Riesgo: bajo.

- CTA
  - Modificación: bottom sticky CTA mobile (WhatsApp + Cotizar), desktop CTA visible in hero + repeated CTA after gallery.
  - Impacto: aumento de contactos (alto).
  - Riesgo: bajo.

- Jerarquía
  - Modificación: Hero → Tipos de box → Gallery → How-to-measure → Testimonials → CTA.
  - Impacto: recorrido más directo a la compra (medio).
  - Riesgo: bajo.

- Prueba social
  - Modificación: fotos reales y valoraciones de clientes residenciales; logos de partners.
  - Impacto: confianza y conversión (medio).
  - Riesgo: bajo.

- Formularios
  - Modificación: short form con 'how to measure' helper; send `lead_submit` event; mark as conversion in GA4.
  - Impacto: leads accionables (alto).
  - Riesgo: medio.

- Contenido de soporte
  - Modificación: guía de medición paso a paso y PDF descargable; garantía y mantenimiento.
  - Impacto: reduce fricción y consultas repetidas (medio).
  - Riesgo: bajo.

- Mobile
  - Modificación: sticky CTA, touch-friendly gallery, modal measurement helper.
  - Impacto: mejora en conversion mobile (alto).
  - Riesgo: bajo.

Referencias Stitch: projects/11678542064190663790/screens/188921d63365481c8614249c53ccb79f

---

## Notas generales de ejecución y medición
- Marcar en GA4 el evento `lead_submit` como conversión para poder medir impacto real.
- Validar y corregir eventos `consent_accept`/`consent_update` para evitar doble disparo.
- Revisar y filtrar sessions outliers que distorsionan `averageSessionDuration` antes de usar esa métrica como KPIs.

---

Si querés, convierto cada cambio en tickets (GitHub issues) con checklist y estimaciones en horas. También puedo generar variantes mobile desde Stitch para cada landing (si querés que genere versiones mobile separadas las creo ahora).