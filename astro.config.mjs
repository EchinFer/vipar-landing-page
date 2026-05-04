// @ts-nocheck
import { defineConfig } from "astro/config";
import { loadEnv } from "vite";
import tailwindcss from "@tailwindcss/vite";
import compress from "vite-plugin-compression";
import sitemap from "@astrojs/sitemap";

const { NODE_TLS_REJECT_UNAUTHORIZED } = loadEnv(
  // @ts-ignore
  process.env.NODE_ENV,
  // @ts-ignore
  process.cwd(),
  ""
);
process.env.NODE_TLS_REJECT_UNAUTHORIZED = NODE_TLS_REJECT_UNAUTHORIZED;
// @ts-ignore
const site = process.env.ASTRO_SITE_URL || "https://vipar.com.py";

// https://astro.build/config
export default defineConfig({
  output: "static",
  base: "/",
  site,
  integrations: [
    sitemap({
      // Función para personalizar cada URL en el sitemap
      // @ts-ignore - Los valores de changefreq son válidos pero TypeScript no los reconoce correctamente
      serialize(item) {
        const url = item.url;
        
        // Página principal
        if (url === site || url === `${site}/`) {
          item.priority = 1.0;
          item.changefreq = 'daily';
        } 
        // Páginas de listado principales
        else if (url === `${site}/servicios/` || url === `${site}/obras/`) {
          item.priority = 0.9;
          item.changefreq = 'weekly';
        }
        // Páginas estáticas (Nosotros, Contacto)
        else if (url === `${site}/nosotros/` || url === `${site}/contacto/`) {
          item.priority = 0.8;
          item.changefreq = 'monthly';
        }
        // Páginas individuales de servicios
        else if (url.includes('/servicios/')) {
          item.priority = 0.8;
          item.changefreq = 'monthly';
        }
        // Páginas individuales de obras
        else if (url.includes('/obras/')) {
          item.priority = 0.7;
          item.changefreq = 'monthly';
        }
        // Otras páginas
        else {
          item.priority = 0.6;
          item.changefreq = 'yearly';
        }
        
        // Añadir lastmod a todas las URLs
        item.lastmod = new Date().toISOString();
        
        return item;
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss(), compress()],
  },
});
