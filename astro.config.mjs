// @ts-check
import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel";
import { loadEnv } from "vite";

const { NODE_TLS_REJECT_UNAUTHORIZED } = loadEnv(
  // @ts-ignore
  process.env.NODE_ENV,
  // @ts-ignore
  process.cwd(),
  ""
);

// https://astro.build/config
export default defineConfig({
  output: "server",
  adapter: vercel(),
});
