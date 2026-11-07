/**
 * Única lista de 301. La leen Astro, Netlify, Vercel y nginx.
 * Las tres notas "cuánto cuesta" no están acá: se reescribieron en su misma URL.
 * Las otras seis se redirigen hasta tener datos de Search Console (docs/seo/LEEME.md).
 */
export const redirects = {
	"/blog/box-de-bano-vidrio-vs-acrilico": "/servicios/box-de-bano/",
	"/blog/como-elegir-box-de-bano-ideal": "/servicios/box-de-bano/",
	"/blog/medidas-estandar-box-de-bano": "/servicios/box-de-bano/",
	"/blog/mamparas-divisorias-oficinas": "/servicios/mamparas-divisorias/",
	"/blog/como-dividir-oficinas-sin-obras-mayores": "/servicios/mamparas-divisorias/",
	"/blog/como-elegir-cielo-raso": "/servicios/cielo-raso/",
	"/servicios/fachada": "/servicios/fachadas/",
	"/servicios/ventana": "/servicios/ventanas/",
	"/servicios/mampara-divisoria": "/servicios/mamparas-divisorias/",
};
