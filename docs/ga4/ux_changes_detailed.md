# Cambios UX detallados por landing — VIPAR
Fecha: 2026-04-13

Este documento transforma las oportunidades priorizadas en instrucciones concretas por página. Para cada cambio se indica: problema que resuelve, evidencia, modificación exacta, impacto esperado y riesgo.

---

## Página: /servicios/cielo-raso

### Hero
- Problema que resuelve: baja captura de leads desde la primera vista.
- Evidencia: `conversions` = 0 en GA4; sesiones subieron (17→37) sin leads.
- Qué se debería modificar exactamente: imagen hero de obra instalada; headline beneficio claro («Cielos rasos duraderos y de instalación profesional»); subheadline con 2–3 bullets (durabilidad, acabado, garantía); CTA primario prominente `Pedir presupuesto` (color primario) + CTA secundario WhatsApp; inline mini-form (nombre, teléfono, consentimiento) que dispare evento `lead_submit`; trust badges (años/proyectos/clientes) bajo CTA.
- Impacto esperado: captura inmediata de leads y aumento de leads cualificados (alto).
- Riesgo: bajo (cambios de copy/UX y pequeña integración GA4).

### Propuesta de valor
- Problema: beneficios técnicos no visibles rápidamente para decisores.
- Evidencia: engagementRate medio (0.52–0.62) — usuarios no convencidos al primer vistazo.
- Modificación: sección above-the-fold con 3 pilares (Durabilidad, Acabado, Instalación rápida) con iconos técnicos y micro-pruebas (p.ej. «15+ años», «500+ proyectos»).
- Impacto esperado: mayor intención de contacto; reduce fricción informativa (medio-alto).
- Riesgo: bajo.

### CTA principal
- Problema: CTA no persistente en mobile; WhatsApp clicks descendieron (12 → 7).
- Evidencia: evento `whatsapp_click` en reportes mostró caída.
- Modificación: sticky bottom bar en mobile con dos botones (WhatsApp destacado y `Cotizar` que abre el form modal); en desktop CTA fijo en hero y reproducción en sección sticky lateral.
- Impacto esperado: recuperación de contactos directos y aumento de envíos de formulario (alto).
- Riesgo: bajo (implementación front-end requerida).

### Jerarquía de secciones
- Problema: contenido disperso; visitantes tardan en encontrar specs y obras.
- Evidencia: varias filas `(not set)` y engagement moderado en algunas landing.
- Modificación: orden claro: Hero → Propuesta de valor → Galería/Obras (slider) → Testimonios (3) → Especificaciones (tabla simple) → FAQs → CTA final con formulario.
- Impacto esperado: recorrido más claro y mejor conversión general (medio).
- Riesgo: medio (requiere reorganización CMS/plantillas).

### Prueba social
- Problema: insuficiente credibilidad visible en primera parte de la página.
- Evidencia: baja prueba social en la landing; casos de éxito no destacados.
- Modificación: carrusel de logos clientes, 3 testimonios con foto/nombre/empresa, mini caso de estudio before/after con métrica (p.ej. satisfacción % o tiempo ejecución).
- Impacto esperado: mejora de confianza y calidad de leads (medio).
- Riesgo: bajo (necesita permisos para usar logos/testimonios).

### Formularios
- Problema: formularios no estandarizados ni marcados como conversión.
- Evidencia: `conversions`=0; no existe evento `lead_submit` marcado.
- Modificación: formulario minimalista (nombre, teléfono, email opcional, mensaje opcional, checkbox consentimiento); evento GA4 `lead_submit`; marcar `lead_submit` como conversión en GA4; enviar UTM y `service=cielo-raso` como propiedad del evento.
- Impacto esperado: medición real de leads y priorización comercial (muy alto).
- Riesgo: medio (revisión legal de texto de privacidad; pruebas en producción).

### Contenido de soporte
- Problema: falta de documentación técnica de materiales accesible.
- Evidencia: usuarios técnicos requieren specs antes de solicitar cotización.
- Modificación: ficha técnica descargable (PDF), tabla de especificaciones (materiales, espesores, tiempos instalación) y contacto técnico (teléfono/email horario).
- Impacto esperado: reducción de consultas técnicas previas y leads más cualificados (medio).
- Riesgo: bajo.

### Versión mobile
- Problema: experiencia mobile no optimizada para conversiones (CTA fuera de reach).
- Evidencia: mobile new users aumentaron; WhatsApp clicks bajaron.
- Modificación: hero compacto (headline 2 líneas), bottom sticky bar con WhatsApp + `Cotizar`; gallery en slider vertical; form en modal con inputs grandes (≥44px touch); prefill `service`.
- Impacto esperado: mejora de conversiones mobile (alto).
- Riesgo: bajo.

---

## Página: / (Home — Hub de servicios)

### Hero
- Problema que resuelve: home no funciona como hub de conversión.
- Evidencia: home sesiones not enough → pocas derivaciones y `conversions` globales = 0.
- Qué modificar: hero corporativo con headline beneficio (p.ej. «Soluciones en vidrio y aluminio para proyectos residenciales y comerciales»), subheadline 3 bullets, inline micro-form (name, phone, select service), CTA primario `Contacto comercial`, trust badges y número telefónico visible.
- Impacto: más derivaciones a landings de servicio y leads (alto).
- Riesgo: bajo.

### Propuesta de valor
- Problema: los servicios no están enlazados como CTAs directos.
- Evidencia: navegación sin foco a landings específicos.
- Modificación: grid de 4 cards de servicio (Cielos, Mamparas, Boxes, Carpintería) con imagen, 1–2 líneas de beneficio y CTA `Ver solución` que linkea a cada landing.
- Impacto: aumento de CTR a landings (medio-alto).
- Riesgo: bajo.

### CTA principal
- Problema: acceso al contacto poco visible en todo el recorrido.
- Evidencia: datos de eventos de interacción y baja conversión.
- Modificación: sticky action bar en desktop + bottom bar mobile con WhatsApp y `Contacto rápido` (modal form prefilled con `service`).
- Impacto: mejora de accesibilidad y contactos (alto).
- Riesgo: bajo.

### Jerarquía de secciones
- Modificación exacta: Hero → Servicios destacados → Obras/Portfolio → Testimonios → Certificaciones → FAQs → CTA final.
- Impacto: guía la navegación y reduce tasa de rebote (medio).
- Riesgo: bajo.

### Prueba social
- Modificación: logo cloud, KPIs (años/proyectos), 4 testimonios destacados.
- Impacto: aumenta percepción de marca y confianza (medio).
- Riesgo: bajo.

### Formularios
- Modificación: inline form en hero con `service` select; evento `lead_submit` con dimensión `service` para segmentación.
- Impacto: atribución por servicio y leads estructurados (alto).
- Riesgo: bajo.

### Contenido de soporte
- Modificación: sección «¿Por qué elegir VIPAR?» con 5 bullets (experiencia, materiales, garantía, soporte técnico, cobertura) y FAQ breve.
- Impacto: reduce dudas y acelera decisión (medio).
- Riesgo: bajo.

### Versión mobile
- Modificación: cards apiladas, modal form, bottom bar CTAs optimizados para thumb, imágenes responsivas.
- Impacto: mejora engagement y conversiones mobile (alto).
- Riesgo: bajo.

---

## Página: /servicios/mampara-divisoria

### Hero
- Problema que resuelve: falta de formulario técnico y campo para medidas; fricción para cotizar.
- Evidencia: bajos leads técnicos; visitantes requieren especificaciones.
- Qué modificar exactamente: hero con foto de instalación; headline beneficio; subheadline 2 bullets; short form: nombre, teléfono, metro estimado (campo numérico), tipo de vidrio select; CTA `Solicitar Cotización` + WhatsApp; evento `lead_submit` con `estimated_meters`.
- Impacto esperado: leads más cualificados y reducción de intercambio previo e-mails (alto).
- Riesgo: bajo (validación UX de campo numérico).

### Propuesta de valor
- Problema: beneficios técnicos no ordenados para profesionales.
- Evidencia: need for technical details (audiencia: arquitectos/constructores).
- Modificación: 3 pilares (Vidrio templado, perfiles aluminio, instalación rápida) con micro-pruebas y links a ficha técnica.
- Impacto: mayor credibilidad técnica (medio).
- Riesgo: bajo.

### CTA principal
- Problema: ausencia de CTA persistente para cerrar la consulta rápidamente.
- Evidencia: drop en `whatsapp_click` y bajas conversiones.
- Modificación: sticky CTA mobile (WhatsApp + Cotizar), en desktop CTA visible en hero y repetido en sidebar.
- Impacto: aumento de conversiones directas (alto).
- Riesgo: bajo.

### Jerarquía de secciones
- Modificación: Hero → Beneficios técnicos → Before/After gallery → Testimonios técnicos → Especificaciones/variantes → FAQs → CTA final.
- Impacto: recorrido claro para decisores técnicos (medio-alto).
- Riesgo: bajo.

### Prueba social
- Modificación: testimonios de arquitectos/constructores, logo cloud, caso técnico destacado.
- Impacto: mejora en calidad de leads (medio).
- Riesgo: bajo.

### Formularios
- Modificación: short form with campo `metros estimados` y `tipo de vidrio`; validación mínima; evento `lead_submit`; marcar conversión.
- Impacto: leads accionables para presupuesto (muy alto).
- Riesgo: medio (UX de validación y spam protection).

### Contenido de soporte
- Modificación: ficha técnica descargable (variantes de vidrio/opacidad/biseles), guía rápida para medir y contacto técnico.
- Impacto: reduce fricción técnica y llamadas de aclaración (medio).
- Riesgo: bajo.

### Versión mobile
- Modificación: hero compacto, gallery como slider, sticky CTA, form en modal con inputs grandes; prefill `service=Mampara`.
- Impacto: mejora en captación mobile (alto).
- Riesgo: bajo.

---

## Página: /servicios/box-de-bano

### Hero
- Problema que resuelve: usuarios no saben cómo medir ni qué acabado elegir.
- Evidencia: pocas conversiones desde mobile y consulta previa frecuente.
- Modificación exacta: hero con imagen baño terminado; headline claro; inline short form (nombre, teléfono, ancho estimado, acabado select); CTA `Cotizar mi Box` + WhatsApp; evento `lead_submit` con `width_estimate` y `finish`.
- Impacto esperado: aumento de leads con medidas y opciones seleccionadas (alto).
- Riesgo: bajo.

### Propuesta de valor
- Modificación: 3 beneficios (seguridad, limpieza, instalación precisa) con iconos y micro-pruebas (garantía, años).
- Impacto: mejora intención de compra (medio).
- Riesgo: bajo.

### CTA principal
- Modificación: bottom sticky CTA mobile (WhatsApp + Cotizar) y CTA repetido tras gallery en desktop.
- Impacto: mayor tasa de contacto (alto).
- Riesgo: bajo.

### Jerarquía de secciones
- Modificación: Hero → Tipos de box (slider) → Before/After → Guia "Cómo medir" → Testimonios residenciales → FAQs → CTA final.
- Impacto: reduce dudas y acelera la compra (medio).
- Riesgo: bajo.

### Prueba social
- Modificación: fotos de proyectos reales, valoraciones, logos partners.
- Impacto: confianza y conversión (medio).
- Riesgo: bajo.

### Formularios
- Modificación: short form con helper "Cómo medir" (modal); evento `lead_submit`; marcar conversión GA4; incluir checkbox consentimiento.
- Impacto: leads accionables y menos idas y vueltas (alto).
- Riesgo: medio.

### Contenido de soporte
- Modificación: guía paso a paso para medir, enlaces a fichas técnicas y garantía, sección de mantenimiento.
- Impacto: reduce consultas de soporte y mejora conversión (medio).
- Riesgo: bajo.

### Versión mobile
- Modificación: bottom sticky CTAs, gallery swipe, modal form con measurement helper y botones thumb-friendly; ensure 44px tap targets.
- Impacto: mayor conversión mobile (alto).
- Riesgo: bajo.

---

## Notas de medición y control
- Definir y marcar en GA4 el evento `lead_submit` como conversión y pasar `service` y campos relevantes (metros/finish) para segmentación.
- Revisar `consent_accept` / `consent_update` para eliminar dobles disparos antes de interpretar cambios de eventos.
- Extraer series diarias para `averageSessionDuration` y validar outliers antes de usarla como KPI.

---

Si querés, convierto cada cambio en issues con checklist y estimaciones en horas. También puedo generar las versiones mobile en Stitch y exportar HTML/CSS de las pantallas.
