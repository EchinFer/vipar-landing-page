// @ts-check
import { defineConfig } from "astro/config";
import { loadEnv } from "vite";
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
const site = process.env.ASTRO_SITE_URL || "https://example.com";

// https://astro.build/config
export default defineConfig({
  output: "static",
  base: "/",
  site,
  integrations: [
    sitemap(),
  ],
  vite: {
    plugins: [compress()],
  },
});
