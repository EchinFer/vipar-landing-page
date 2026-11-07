# Publicar

El sitio es estático. Se genera con Node 24:

```
npm run build
```

La carpeta para subir es `dist/`. No hace falta base de datos ni servidor de aplicación.

Publicar sin rangos de precio es válido: la calculadora arma el WhatsApp y dice que el monto lo pasan por ahí. Publicar con `ejemplo: true` en `src/lib/pedido.ts` no.

## Redirecciones

Son 12 y viven en `redirects.mjs`. `node scripts/emit-redirects.mjs` escribe:

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
