# Publicar

El sitio es estático. Se genera con Node 24:

```
npm run build
```

La carpeta para subir es `dist/`. No hace falta base de datos ni servidor de aplicación.

Publicar sin rangos de precio es válido: la calculadora arma el WhatsApp y dice que el monto lo pasan por ahí. Publicar con `ejemplo: true` en `src/lib/pedido.ts` no.

## Redirecciones

Viven en `redirects.mjs` (23 al 9 de noviembre de 2026). `node scripts/emit-redirects.mjs` escribe:

- `public/_redirects` para Netlify y Cloudflare Pages
- `vercel.json`
- `deploy/nginx-vipar.conf`

En `astro dev` esas rutas responden 301. En el `dist/` de un hosting estático sin esas reglas, la página trae un meta refresh de 0 segundos, canónico a la ficha nueva y `noindex`. Google lo trata como redirección permanente, pero el 301 real lo pone el hosting. Hay que cargar el archivo que corresponda antes de apuntar el dominio.

## Dónde subirlo

Cualquiera de estos, con la carpeta `dist/`:

- Netlify o Cloudflare Pages: el `public/_redirects` ya va dentro de `dist` si se copia `public/` en el build. Astro copia `public/` a `dist/`, así que `_redirects` viaja solo.
- Vercel: el `vercel.json` de la raíz del repo.
- nginx: pegar `deploy/nginx-vipar.conf` en el server del dominio.

El dominio vipar.com.py no se cambia desde este repo. Cuando esté claro quién lo administra, se apunta el hosting nuevo y se dejan las 301 activas el mismo día, para no perder las URLs viejas.

## Antes de apuntar el dominio

1. Correr `node scripts/seo-comparar.mjs`. Ya usa los datos de Search Console de agosto a noviembre de 2026 (`docs/seo/gsc-*.csv`) y tiene que dar 0 sin resolver. Si pasan meses antes de publicar, exportar de nuevo.
2. Confirmar que `G-TZ2CL571FZ` (propiedad 488034623) sigue siendo la de VIPAR. La web manda `whatsapp_click`, que ya es evento clave en esa propiedad. Desde octubre de 2026 el sitio viejo mandaba `whatsapp_handoff`, que no es clave, y por eso GA4 muestra 0 contactos desde entonces.
3. El formulario de `/contacto/` del sitio viejo (7 envíos en 95 días) no existe en la web nueva: todo va por WhatsApp. Si VIPAR quiere seguir recibiendo pedidos por mail, hay que decidirlo antes.
4. **PostHog.** El sitio viejo carga PostHog (clave `phc_BVCc…`, también con consentimiento) y la web nueva no. Lo ya guardado en PostHog no se pierde, pero desde el cambio no entran datos nuevos. Si alguien de VIPAR lo usa (por ejemplo, grabaciones de sesión), hay que decidir si se agrega: suma unos 50 KB de JavaScript.
5. **Dimensiones personalizadas de GA4.** En Administrar → Definiciones personalizadas, ver qué parámetros están registrados. La web manda `servicio`, `origen` y `pagina`, y además los del sitio viejo `service_name`, `service_slug` y `cta_location`. Si `servicio` y `origen` no están registrados, registrarlos: si no, no aparecen en los informes (en Exploraciones sí).
6. Averiguar de dónde sale la campaña `vipar-home-stitch` (27 sesiones). Si es un enlace pegado en algún perfil o anuncio, que apunte a una URL que siga existiendo.

## Qué se conserva al cambiar de sitio

- Search Console y GA4 son de la propiedad, no del sitio: el historial no se borra al publicar.
- Mismo ID de GA4 y mismo aviso de cookies: el viejo también arrancaba con todo denegado, así que la cantidad de sesiones medidas no debería caer por el cambio.
- Eventos: `whatsapp_click` (evento clave), `phone_click` y `email_click` con los mismos nombres que el viejo. Nuevo: `mapa_click`. Ya no existen `form_submit` ni `whatsapp_handoff`: en la serie, sumar `whatsapp_handoff` de octubre y noviembre de 2026 con `whatsapp_click` desde el cambio.
- URLs: las que tenían clics siguen iguales; las demás tienen 301 (ver arriba). Títulos y descripciones: los controla `scripts/seo-comparar.mjs`.
- Al compartir por WhatsApp, cada página muestra su propia foto (JPG con proporción 1,91:1). WhatsApp y Facebook guardan la vista previa vieja varios días: pasar la home y las fichas de servicio por el [depurador de Facebook](https://developers.facebook.com/tools/debug/) y tocar "Volver a extraer".

## Qué mirar en Search Console la semana siguiente

- **Páginas**, cobertura: que no suban "No encontrada (404)" ni "Página con redirección" en URLs que tenían clics.
- **Rendimiento**, consultas: comparar clics e impresiones contra las 4 semanas anteriores. Una caída sostenida de una consulta que traía clics apunta a la página que la cubría.
- **Sitemaps**: enviar `https://vipar.com.py/sitemap-index.xml` y ver que lea las 61 páginas.
- **Inspección de URL** en la home y en `/servicios/box-de-bano/`: que Google vea el título nuevo y el canónico correcto.
- En GA4, Tiempo real: hacer clic en un botón de WhatsApp y confirmar que llega `whatsapp_click` con `servicio`, `origen` y `pagina`. Los clics solo se miden si la persona aceptó las cookies o si Consent Mode lo modela.
- Probar `/servicios/cielo-raso/`, `/servicios/mamparas-divisorias/` y las dos guías de precio en la [prueba de resultados enriquecidos](https://search.google.com/test/rich-results) y en el [validador de schema.org](https://validator.schema.org/). Tienen catálogo de precios por m² (`OfferCatalog`), preguntas frecuentes, migas y artículo con fecha.
- La guía de cielo raso cambió de título para que diga "precio por m²", que es lo que buscan (556 impresiones en posición 8,4 con 1,6 % de clics). Comparar en Search Console, 4 semanas contra 4 semanas, los clics y la posición de esa página. Si cae, se vuelve al título viejo, que está en el historial de git.
- En GA4, los `whatsapp_click` que salen del armador con precio traen `value` en guaraníes: es el monto de referencia que vio la persona, no una venta. Sirve para ver qué tamaño de trabajos llegan por la web.
- Los enlaces "Cómo llegar" mandan `mapa_click` con `origen` y `pagina`. Marcarlo como evento clave en GA4 si VIPAR quiere contar las visitas al showroom como contacto.
