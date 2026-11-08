// Compara el SEO del sitio vivo (docs/seo/antes.json) con dist/.
// Uso: npm run build && node scripts/seo-comparar.mjs
// Sale con código 1 si queda una pérdida sin justificar en docs/seo/justificaciones.json.
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { redirects } from "../redirects.mjs";

const ANTES = "docs/seo/antes.json";
if (!existsSync(ANTES)) {
	console.error("Falta docs/seo/antes.json. Corré: node scripts/seo-antes.mjs");
	process.exit(1);
}
const antes = JSON.parse(readFileSync(ANTES, "utf8"));
const justificaciones = existsSync("docs/seo/justificaciones.json")
	? JSON.parse(readFileSync("docs/seo/justificaciones.json", "utf8"))
	: {};

const conBarra = (ruta) => (ruta.endsWith("/") ? ruta : `${ruta}/`);
const redirigidas = new Map(Object.entries(redirects).map(([de, a]) => [conBarra(de), conBarra(a)]));

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

function leerDist(ruta) {
	const archivo = ruta === "/" ? "dist/index.html" : `dist${ruta}index.html`;
	if (!existsSync(archivo)) return null;
	const html = readFileSync(archivo, "utf8");
	if (/http-equiv="refresh"/i.test(html)) return { redireccion: true };
	const title = limpiar(html.match(/<title[^>]*>([\s\S]*?)<\/title>/i)?.[1] ?? "");
	const h1 = limpiar(html.match(/<h1[^>]*>([\s\S]*?)<\/h1>/i)?.[1] ?? "");
	const cuerpo = html.replace(/<script[\s\S]*?<\/script>/gi, " ").replace(/<style[\s\S]*?<\/style>/gi, " ");
	const palabras = limpiar(cuerpo).split(" ").filter(Boolean).length;
	return { title, h1, palabras };
}

const normal = (s) =>
	s
		.toLowerCase()
		.normalize("NFD")
		.replace(/[\u0300-\u036f]/g, "")
		.replace(/[^a-z0-9 ]/g, " ")
		.replace(/\s+/g, " ")
		.trim();
const PARLERAS = new Set(["de", "la", "el", "en", "y", "para", "un", "una", "los", "las", "del", "a", "al", "con", "por", "que", "o", "e", "se", "su"]);
const tokens = (s) => normal(s).split(" ").filter((t) => t && !PARLERAS.has(t));

function leerFilas(ruta) {
	const texto = readFileSync(ruta, "utf8").replace(/^\uFEFF/, "");
	const filas = [];
	let fila = [];
	let celda = "";
	let comillas = false;
	for (let i = 0; i < texto.length; i++) {
		const c = texto[i];
		if (comillas) {
			if (c === '"' && texto[i + 1] === '"') {
				celda += '"';
				i++;
			} else if (c === '"') comillas = false;
			else celda += c;
		} else if (c === '"') comillas = true;
		else if (c === ",") {
			fila.push(celda);
			celda = "";
		} else if (c === "\n" || c === "\r") {
			if (c === "\r" && texto[i + 1] === "\n") i++;
			fila.push(celda);
			celda = "";
			if (fila.some((x) => x !== "")) filas.push(fila);
			fila = [];
		} else celda += c;
	}
	if (celda !== "" || fila.length) {
		fila.push(celda);
		filas.push(fila);
	}
	return filas;
}

function csv(ruta) {
	if (!existsSync(ruta)) return null;
	const [cabecera, ...datos] = leerFilas(ruta);
	const iClics = cabecera.findIndex((h) => /^(clics|clicks)$/i.test(h.trim()));
	return datos.map((f) => ({ clave: f[0], clics: Number(String(f[iClics] ?? "0").replace(/[^\d]/g, "")) || 0 }));
}

const paginasGsc = csv("docs/seo/gsc-paginas.csv");
const consultasGsc = csv("docs/seo/gsc-consultas.csv");

/** Consultas por página (page,query,clicks,...). Si está, cada consulta se mira solo en la página que la recibió. */
function csvPaginaConsulta(ruta) {
	if (!existsSync(ruta)) return null;
	const filas = leerFilas(ruta);
	const cab = filas.shift().map((h) => h.trim().toLowerCase());
	const iP = cab.indexOf("page"), iQ = cab.indexOf("query"), iC = cab.findIndex((h) => /^(clics|clicks)$/.test(h));
	const mapa = new Map();
	for (const f of filas) {
		let r;
		try {
			r = conBarra(new URL(f[iP]).pathname);
		} catch {
			continue;
		}
		const clics = Number(f[iC]) || 0;
		if (clics <= 0) continue;
		if (!mapa.has(r)) mapa.set(r, []);
		mapa.get(r).push({ clave: f[iQ], clics });
	}
	return mapa;
}
const porPagina = csvPaginaConsulta("docs/seo/gsc-pagina-consulta.csv");

const hallazgos = [];
const marcar = (ruta, tipo, detalle) => hallazgos.push({ ruta, tipo, detalle, clave: `${ruta}|${tipo}` });

for (const [ruta, viejo] of Object.entries(antes)) {
	if (viejo.error) continue;
	const nuevo = leerDist(ruta);
	const destino = redirigidas.get(conBarra(ruta));
	if (!nuevo) {
		if (!destino) marcar(ruta, "sin-destino", "La URL ya no existe y no tiene redirección.");
		continue;
	}
	if (nuevo.redireccion) continue;
	if (/paraguay/i.test(viejo.title) && !/paraguay/i.test(nuevo.title)) {
		marcar(ruta, "paraguay", `Title antes: «${viejo.title}». Ahora: «${nuevo.title}».`);
	}
	const esServicioOInicio = ruta === "/" || ruta === "/servicios/" || /^\/servicios\/[^/]+\/$/.test(ruta);
	if (esServicioOInicio && nuevo.palabras < viejo.palabras / 2) {
		marcar(ruta, "texto", `Palabras antes ${viejo.palabras}, ahora ${nuevo.palabras}.`);
	}
	const consultasDeEsta = porPagina ? (porPagina.get(conBarra(ruta)) ?? []) : consultasGsc;
	if (consultasDeEsta) {
		const viejoTexto = tokens(`${viejo.title} ${viejo.h1}`);
		const nuevoTexto = new Set(tokens(`${nuevo.title} ${nuevo.h1}`));
		for (const { clave: consulta, clics } of consultasDeEsta) {
			if (clics <= 0) continue;
			const t = tokens(consulta);
			if (t.length < 2) continue;
			if (!t.every((x) => viejoTexto.includes(x))) continue;
			if (!t.every((x) => nuevoTexto.has(x))) marcar(ruta, `consulta:${consulta}`, `«${consulta}» (${clics} clics) estaba en el title o el H1 y ya no.`);
		}
	}
}

if (paginasGsc) {
	for (const { clave, clics } of paginasGsc) {
		if (clics <= 0) continue;
		let ruta;
		try {
			ruta = conBarra(new URL(clave).pathname);
		} catch {
			continue;
		}
		const destino = redirigidas.get(ruta);
		if (destino) marcar(ruta, "redirige-con-clics", `Recibió ${clics} clics y hoy redirige a ${destino}.`);
	}
}

const injustificados = hallazgos.filter((h) => !justificaciones[h.clave]);
const justificados = hallazgos.filter((h) => justificaciones[h.clave]);

const lineas = [
	"# Comparación de SEO, sitio vivo contra dist/",
	"",
	`URLs del sitio vivo: ${Object.keys(antes).length}. Redirecciones: ${redirigidas.size}.`,
	paginasGsc && consultasGsc
		? "Datos de Search Console: cargados."
		: "Datos de Search Console: NO cargados (`docs/seo/gsc-paginas.csv` y `gsc-consultas.csv`). No se evaluaron consultas ni clics por página.",
	"",
	`## Sin resolver (${injustificados.length})`,
	"",
	...(injustificados.length ? injustificados.map((h) => `- \`${h.ruta}\` ${h.tipo}: ${h.detalle}`) : ["Ninguno."]),
	"",
	`## Justificados (${justificados.length})`,
	"",
	...(justificados.length ? justificados.map((h) => `- \`${h.ruta}\` ${h.tipo}: ${justificaciones[h.clave]}`) : ["Ninguno."]),
	"",
];
writeFileSync("docs/seo/comparacion.md", lineas.join("\n"));
console.log(lineas.slice(0, 4).join("\n"));
console.log(`sin resolver: ${injustificados.length}, justificados: ${justificados.length}`);
for (const h of injustificados) console.log(`- ${h.ruta} ${h.tipo}: ${h.detalle}`);
process.exit(injustificados.length ? 1 : 0);
