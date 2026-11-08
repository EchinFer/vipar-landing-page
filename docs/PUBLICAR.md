# Publicar

El sitio es estático. Se genera con Node 24:

```
npm run build
```

La carpeta para subir es `dist/`. No hace falta base de datos ni servidor de aplicación.

Publicar sin rangos de precio es válido: la calculadora arma el WhatsApp y dice que el monto lo pasan por ahí. Publicar con `ejemplo: true` en `src/lib/pedido.ts` no.

## Redirecciones

Son 9 y viven en `redirects.mjs`. `node scripts/emit-redirects.mjs` escribe:

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
4. Averiguar de dónde sale la campaña `vipar-home-stitch` (27 sesiones). Si es un enlace pegado en algún perfil o anuncio, que apunte a una URL que siga existiendo.

## Qué mirar en Search Console la semana siguiente

- **Páginas**, cobertura: que no suban "No encontrada (404)" ni "Página con redirección" en URLs que tenían clics.
- **Rendimiento**, consultas: comparar clics e impresiones contra las 4 semanas anteriores. Una caída sostenida de una consulta que traía clics apunta a la página que la cubría.
- **Sitemaps**: enviar `https://vipar.com.py/sitemap-index.xml` y ver que lea las 61 páginas.
- **Inspección de URL** en la home y en `/servicios/box-de-bano/`: que Google vea el título nuevo y el canónico correcto.
- En GA4, Tiempo real: hacer clic en un botón de WhatsApp y confirmar que llega `whatsapp_click` con `servicio`, `origen` y `pagina`. Los clics solo se miden si la persona aceptó las cookies o si Consent Mode lo modela.
