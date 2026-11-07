// Foto del SEO del sitio vivo. Guarda title, description, H1, H2 y palabras por URL.
// Uso: node scripts/seo-antes.mjs
import { mkdirSync, writeFileSync } from "node:fs";

const ORIGEN = "https://vipar.com.py";

function limpiar(texto) {
	return texto
		.replace(/<[^>]+>/g, " ")
		.replace(/&nbsp;/g, " ")
		.replace(/&amp;/g, "&")
		.replace(/&quot;/g, '"')
		.replace(/&#39;|&#x27;/g, "'")
		.replace(/\s+/g, " ")
		.trim();
}

function analizar(html) {
	const title = limpiar(html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] ?? "");
	const description = html.match(/<meta[^>]+name="description"[^>]+content="([^"]*)"/i)?.[1] ?? "";
	const h1 = limpiar(html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1] ?? "");
	const h2 = [...html.matchAll(/<h2[^>]*>([\s\S]*?)<\/h2>/gi)].map((m) => limpiar(m[1])).filter(Boolean);
	const cuerpo = html
		.replace(/<script[\s\S]*?<\/script>/gi, " ")
		.replace(/<style[\s\S]*?<\/style>/gi, " ");
	const palabras = limpiar(cuerpo).split(" ").filter(Boolean).length;
	return { title, description: limpiar(description), h1, h2, palabras };
}

async function pedir(url) {
	const respuesta = await fetch(url, { redirect: "follow" });
	if (!respuesta.ok) throw new Error(`${respuesta.status} ${url}`);
	return respuesta.text();
}

const indice = await pedir(`${ORIGEN}/sitemap-index.xml`).catch(() => "");
let mapas = [...indice.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
if (mapas.length === 0) mapas = [`${ORIGEN}/sitemap-0.xml`];

const urls = new Set();
for (const mapa of mapas) {
	const xml = await pedir(mapa);
	for (const m of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) urls.add(m[1]);
}

const resultado = {};
for (const url of [...urls].sort()) {
	const ruta = new URL(url).pathname;
	try {
		resultado[ruta] = analizar(await pedir(url));
	} catch (error) {
		resultado[ruta] = { error: String(error.message ?? error) };
	}
}

mkdirSync("docs/seo", { recursive: true });
writeFileSync("docs/seo/antes.json", `${JSON.stringify(resultado, null, "\t")}\n`);
console.log(`${Object.keys(resultado).length} URLs guardadas en docs/seo/antes.json`);
