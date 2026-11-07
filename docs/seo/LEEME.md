# Datos de Search Console

El script `scripts/seo-comparar.mjs` usa dos archivos que solo puede bajar quien tenga acceso a Search Console de vipar.com.py.

1. Search Console, Rendimiento, rango de 16 meses.
2. Pestaña Páginas, exportar a CSV, guardar como `docs/seo/gsc-paginas.csv`.
3. Pestaña Consultas, exportar a CSV, guardar como `docs/seo/gsc-consultas.csv`.

Con esos archivos el informe `docs/seo/comparacion.md` marca:

- las consultas con clics cuya frase ya no está en el title ni en el H1;
- las notas del blog que traen clics y hoy están redirigidas.

Sin esos archivos el informe sigue saliendo, pero solo con las comprobaciones que no necesitan datos de tráfico. Mientras falten, no se deben publicar las redirecciones del blog.

`antes.json` es la foto del sitio vivo y se regenera con `node scripts/seo-antes.mjs`.
