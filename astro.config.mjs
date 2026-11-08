// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { redirects } from "./redirects.mjs";
import { preciosFecha } from "./src/lib/pedido.ts";

/** Páginas con precios: el sitemap le avisa a Google cuándo cambiaron. */
const conPrecios = ["/servicios/cielo-raso/", "/servicios/mamparas-divisorias/", "/blog/cuanto-cuesta-cielo-raso-paraguay/", "/blog/costo-mamparas-divisorias/"];

export default defineConfig({
	site: "https://vipar.com.py",
	trailingSlash: "always",
	redirects,
	integrations: [
		sitemap({
			serialize(item) {
				if (conPrecios.includes(new URL(item.url).pathname)) item.lastmod = preciosFecha;
				return item;
			},
		}),
	],
	vite: {
		plugins: [tailwindcss()],
	},
});
