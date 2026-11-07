// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";
import { redirects } from "./redirects.mjs";

export default defineConfig({
	site: "https://vipar.com.py",
	trailingSlash: "always",
	redirects,
	integrations: [sitemap()],
	vite: {
		plugins: [tailwindcss()],
	},
});
