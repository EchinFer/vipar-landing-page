import { fileURLToPath } from "node:url";
import { collectImages, checkImages, writeImageSitemap } from "./image-health.mjs";

export default function imageAudit(site) {
  return {
    name: "vipar-image-audit",
    hooks: {
      "astro:build:done": async ({ dir, logger }) => {
        const dist = fileURLToPath(dir);
        const { inventory, pages } = await collectImages({ dist, site });
        await writeImageSitemap(pages, dist, site);
        const summary = await checkImages(inventory, { log: message => logger.info(message) });
        if (summary.shouldFail) throw new Error("Imagen crítica inválida. Ver image-health-cache/report.json; este build no es publicable.");
      },
    },
  };
}
