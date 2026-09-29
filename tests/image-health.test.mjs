import test from "node:test";
import assert from "node:assert/strict";
import { mkdir, writeFile, readFile } from "node:fs/promises";
import { resolve } from "node:path";
import { verifyImage, healthSummary, imageAttributes, collectImages, writeImageSitemap } from "../scripts/image-health.mjs";

const entry = { url: "https://vipar.moochsoft.com/example.webp", critical: true, references: [{ file: "example.astro" }] };
const image = '<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="900"><rect width="1200" height="900" fill="blue"/></svg>';
test("image verification reads and decodes real image bytes and dimensions", async () => {
  const result = await verifyImage(entry, { fetcher: async () => new Response(image, { headers: { "content-type": "image/svg+xml" } }) });
  assert.equal(result.ok, true);
  assert.equal(result.width, 1200);
  assert.equal(result.height, 900);
});
test("HTTP failures, redirects, HTML responses and corrupt image bytes cannot pass", async () => {
  for (const response of [new Response("missing", { status: 404 }), new Response(null, { status: 301, headers: { location: "/image.webp" } }), new Response("<html>error</html>", { headers: { "content-type": "text/html" } }), new Response("not an image", { headers: { "content-type": "image/webp" } })]) {
    const result = await verifyImage(entry, { fetcher: async () => response });
    assert.equal(result.ok, false);
    assert.ok(result.error);
  }
});
test("a hero failure blocks build while a secondary failure is reported; strict blocks either", () => {
  assert.equal(healthSummary([{ ok: false, critical: true }]).shouldFail, true);
  assert.equal(healthSummary([{ ok: false, critical: false }]).shouldFail, false);
  assert.equal(healthSummary([{ ok: false, critical: false }], true).shouldFail, true);
});
test("build HTML identifies eager images and decodes query parameters without losing URLs", () => {
  const [result] = imageAttributes('<img src="https://vipar.moochsoft.com/image.webp?a=1&amp;b=2" alt="Obra" loading="eager" fetchpriority="high">');
  assert.equal(result.src, "https://vipar.moochsoft.com/image.webp?a=1&b=2");
  assert.equal(result.fetchpriority, "high");
});
test("inventory links rendered hero to its source and generates escaped sitemap/index", async () => {
  const root = resolve("image-health-cache/test-fixtures");
  const dist = resolve(root, "dist");
  await mkdir(resolve(root, "src"), { recursive: true });
  await mkdir(resolve(dist, "servicios/vidrio-templado"), { recursive: true });
  await writeFile(resolve(root, "src/example.ts"), `const image = '${entry.url}';`);
  await writeFile(resolve(dist, "servicios/vidrio-templado/index.html"), `<img src="${entry.url}" fetchpriority="high"><img src="/local.webp?a=1&amp;b=2">`);
  await writeFile(resolve(dist, "404.html"), '<img src="/404.webp">');
  await writeFile(resolve(dist, "sitemap-index.xml"), '<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></sitemapindex>');
  const { inventory, pages } = await collectImages({ root, dist });
  assert.equal(inventory.length, 1);
  assert.equal(inventory[0].critical, true);
  assert.equal(inventory[0].references.length, 2);
  assert.equal(pages.length, 1);
  assert.equal(pages[0].page, "https://vipar.com.py/servicios/vidrio-templado/");
  await writeImageSitemap(pages, dist, "https://vipar.com.py");
  await writeImageSitemap(pages, dist, "https://vipar.com.py");
  const sitemap = await readFile(resolve(dist, "sitemap-images.xml"), "utf8");
  assert.ok(sitemap.includes("/local.webp?a=1&amp;b=2"));
  assert.ok(sitemap.includes(entry.url));
  assert.ok(!sitemap.includes("404.webp"));
  const index = await readFile(resolve(dist, "sitemap-index.xml"), "utf8");
  assert.equal(index.match(/sitemap-images.xml/g).length, 1);
});
