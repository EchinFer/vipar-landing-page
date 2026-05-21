import type { APIRoute } from "astro";
import { staticObras } from "../lib/static-obras";

const SITE = "https://vipar.com.py";

export const GET: APIRoute = () => {
  const urls: string[] = [];

  for (const obra of staticObras) {
    const pageUrl = `${SITE}/obras/${obra.slug}/`;
    const images = [obra.imagen, ...(obra.imagenes ?? [])].filter(Boolean);

    if (images.length === 0) continue;

    const imageEntries = images
      .map((img) => {
        const loc = img.startsWith("http") ? img : `${SITE}${img}`;
        const title = `${obra.systemLabel} – ${obra.titulo} | VIPAR`;
        return `    <image:image>\n      <image:loc>${loc}</image:loc>\n      <image:title>${title}</image:title>\n    </image:image>`;
      })
      .join("\n");

    urls.push(`  <url>\n    <loc>${pageUrl}</loc>\n${imageEntries}\n  </url>`);
  }

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
${urls.join("\n")}
</urlset>`;

  return new Response(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  });
};
