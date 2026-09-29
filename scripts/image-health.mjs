import { readdir, readFile, mkdir, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import { createRequire } from "node:module";
import { resolve, relative, extname } from "node:path";
import { pathToFileURL } from "node:url";

// Sharp ships with Astro's default image service. Resolve from Astro, not a hoisted dependency.
const sharp = createRequire(import.meta.resolve("astro"))("sharp");
export const imageHost = "vipar.moochsoft.com";
const sourceTypes = new Set([".astro", ".ts", ".js", ".mjs", ".css", ".json"]);
export function cacheName(url) { return createHash("sha256").update(url).digest("hex"); }
export function escapeXml(value) { return value.replace(/[<>&"']/g, char => ({ "<": "&lt;", ">": "&gt;", "&": "&amp;", '"': "&quot;", "'": "&apos;" })[char]); }
function decodeHtml(value) {
  return value.replace(/&amp;/g, "&").replace(/&quot;/g, '"').replace(/&#(\d+);/g, (_, code) => String.fromCodePoint(Number(code)));
}
export function imageAttributes(html) {
  return [...html.matchAll(/<img\b[^>]*>/gi)].map(([tag]) => {
    const attributes = {};
    for (const match of tag.matchAll(/([\w:-]+)\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+))/g)) {
      attributes[match[1].toLowerCase()] = decodeHtml(match[2] ?? match[3] ?? match[4]);
    }
    return attributes;
  });
}
async function filesIn(directory) {
  const entries = await readdir(directory, { withFileTypes: true });
  const nested = await Promise.all(entries.map(entry => entry.isDirectory() ? filesIn(resolve(directory, entry.name)) : [resolve(directory, entry.name)]));
  return nested.flat();
}
function isRemoteImage(value) { try { return new URL(value).hostname === imageHost; } catch { return false; } }

export async function collectImages({ root = process.cwd(), dist = resolve(root, "dist"), site = "https://vipar.com.py" } = {}) {
  const inventory = new Map();
  const pages = [];
  const add = (url, reference, critical = false) => {
    if (!inventory.has(url)) inventory.set(url, { url, critical: false, references: [] });
    const entry = inventory.get(url);
    entry.critical ||= critical;
    entry.references.push(reference);
  };
  for (const file of await filesIn(resolve(root, "src"))) {
    if (!sourceTypes.has(extname(file))) continue;
    const source = await readFile(file, "utf8");
    for (const match of source.matchAll(/https:\/\/vipar\.moochsoft\.com\/[^\s"'<>`{}\\]+/g)) {
      if (!/\.(?:webp|png|jpe?g|gif|svg|avif)(?:\?|$)/i.test(match[0])) continue;
      add(match[0], { file: relative(root, file).replaceAll("\\", "/"), line: source.slice(0, match.index).split("\n").length });
    }
  }
  for (const file of await filesIn(dist)) {
    if (!file.endsWith(".html")) continue;
    const html = await readFile(file, "utf8");
    let route = relative(dist, file).replaceAll("\\", "/").replace(/index\.html$/, "");
    if (["404.html", "500.html", "404/", "500/"].includes(route)) continue;
    if (/<meta[^>]+name=["']robots["'][^>]+content=["'][^"']*noindex/i.test(html)) continue;
    if (/<meta[^>]+http-equiv=["']refresh["']/i.test(html)) continue;
    const page = new URL(route, site.endsWith("/") ? site : `${site}/`).href;
    const images = new Set();
    for (const attributes of imageAttributes(html)) {
      if (!attributes.src || attributes.src.startsWith("data:")) continue;
      const url = new URL(attributes.src, page).href;
      if (!["http:", "https:"].includes(new URL(url).protocol)) continue;
      images.add(url);
      if (isRemoteImage(url)) add(url, { file: relative(root, file).replaceAll("\\", "/"), page, alt: attributes.alt || "" }, attributes.fetchpriority === "high" || attributes.loading === "eager");
    }
    if (images.size) pages.push({ page, images: [...images] });
  }
  return { inventory: [...inventory.values()], pages };
}

export async function verifyImage(entry, { fetcher = fetch, cacheDirectory, timeout = 12000 } = {}) {
  let response;
  try {
    response = await fetcher(entry.url, { signal: AbortSignal.timeout(timeout), redirect: "manual" });
    const contentType = response.headers.get("content-type") || "";
    if (response.status !== 200) throw new Error(`HTTP ${response.status}`);
    if (!contentType.toLowerCase().startsWith("image/")) throw new Error(`Content-Type: ${contentType || "ausente"}`);
    if (Number(response.headers.get("content-length")) > 25_000_000) throw new Error("Imagen supera 25 MB");
    const reader = response.body.getReader();
    const chunks = [];
    let size = 0;
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      size += value.length;
      if (size > 25_000_000) { await reader.cancel(); throw new Error("Imagen supera 25 MB"); }
      chunks.push(value);
    }
    const bytes = Buffer.concat(chunks);
    const metadata = await sharp(bytes, { limitInputPixels: 80_000_000 }).metadata();
    if (!metadata.width || !metadata.height) throw new Error("Dimensiones ausentes");
    await sharp(bytes, { limitInputPixels: 80_000_000 }).resize(1, 1).raw().toBuffer();
    if (cacheDirectory) { await mkdir(cacheDirectory, { recursive: true }); await writeFile(resolve(cacheDirectory, cacheName(entry.url)), bytes); }
    return { ...entry, ok: true, status: response.status, contentType, width: metadata.width, height: metadata.height, bytes: size,
      ...(entry.critical && metadata.width < 800 ? { warning: "Hero menor a 800 px: solicitar original de mayor resolución" } : {}) };
  } catch (error) {
    await response?.body?.cancel().catch(() => {});
    return { ...entry, ok: false, ...(response ? { status: response.status } : {}), error: error.message };
  }
}

export function healthSummary(results, strict = false) {
  const failed = results.filter(result => !result.ok);
  return { total: results.length, passed: results.length - failed.length,
    criticalFailures: failed.filter(result => result.critical).length,
    secondaryFailures: failed.filter(result => !result.critical).length,
    resolutionWarnings: results.filter(result => result.warning).length,
    shouldFail: failed.some(result => strict || result.critical) };
}
export async function checkImages(inventory, { reportPath = "image-health-cache/report.json", strict = false, log = console.log } = {}) {
  // Vite can load the legacy TLS=0 flag from .env after Astro config has run.
  // The asset audit always verifies certificates, including in that environment.
  process.env.NODE_TLS_REJECT_UNAUTHORIZED = "1";
  const results = [];
  let next = 0;
  await Promise.all(Array.from({ length: 6 }, async () => {
    while (next < inventory.length) {
      const entry = inventory[next++];
      let result = await verifyImage(entry, { cacheDirectory: "image-health-cache" });
      // Retry transient failures once; a cached response never masks today's HTTP health.
      if (!result.ok) result = await verifyImage(entry, { cacheDirectory: "image-health-cache" });
      results.push(result);
      if (!result.ok) log(`${entry.critical ? "ERROR" : "WARN"} ${entry.url}: ${result.error} (${entry.references.map(ref => ref.file).join(", ")})`);
      if (results.length % 25 === 0) log(`Imágenes verificadas: ${results.length}/${inventory.length}`);
    }
  }));
  results.sort((a, b) => a.url.localeCompare(b.url));
  const summary = healthSummary(results, strict);
  await mkdir(resolve(reportPath, ".."), { recursive: true });
  await writeFile(reportPath, JSON.stringify({ checkedAt: new Date().toISOString(), policy: { critical: "fail", secondary: strict ? "fail" : "warn", resolution: "warn", http: "200 sin redirect", freshNetworkCheck: true, tlsVerification: process.env.NODE_TLS_REJECT_UNAUTHORIZED !== "0" }, summary, results }, null, 2));
  log(`Imágenes: ${summary.passed}/${summary.total} OK; ${summary.criticalFailures} fallos críticos; ${summary.secondaryFailures} secundarios; ${summary.resolutionWarnings} heroes <800 px.`);
  return summary;
}

export async function writeImageSitemap(pages, dist, site) {
  const xml = '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">\n'
    + pages.map(({ page, images }) => `<url><loc>${escapeXml(page)}</loc>${images.slice(0, 1000).map(url => `<image:image><image:loc>${escapeXml(url)}</image:loc></image:image>`).join("")}</url>`).join("\n") + "\n</urlset>\n";
  await writeFile(resolve(dist, "sitemap-images.xml"), xml);
  // Installed sitemap integration has no customSitemaps option. Append after its build hook.
  const indexFile = resolve(dist, "sitemap-index.xml");
  const index = await readFile(indexFile, "utf8");
  const loc = escapeXml(new URL("sitemap-images.xml", `${site.replace(/\/$/, "")}/`).href);
  if (!index.includes(`<loc>${loc}</loc>`)) await writeFile(indexFile, index.replace("</sitemapindex>", `<sitemap><loc>${loc}</loc></sitemap></sitemapindex>`));
}

if (process.argv[1] && import.meta.url === pathToFileURL(resolve(process.argv[1])).href) {
  try {
    const { inventory } = await collectImages();
    const summary = await checkImages(inventory, { strict: process.argv.includes("--strict") });
    if (summary.shouldFail) process.exitCode = 1;
  } catch (error) { console.error(error.message); process.exitCode = 1; }
}
