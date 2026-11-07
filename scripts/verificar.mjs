import { readdirSync, readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { mensajePedido } from "../src/lib/pedido.ts";

function walk(dir, acc = []) {
	for (const name of readdirSync(dir)) {
		const ruta = join(dir, name);
		if (statSync(ruta).isDirectory()) walk(ruta, acc);
		else if (name.endsWith(".html")) acc.push(ruta);
	}
	return acc;
}

const faltantes = [];
for (const archivo of walk("dist")) {
	const html = readFileSync(archivo, "utf8");
	for (const coincidencia of html.matchAll(/href="([^"]+)"/g)) {
		const href = coincidencia[1];
		if (/^(https?:|mailto:|tel:|#)/.test(href)) continue;
		const path = href.split(/[?#]/)[0];
		const relativo = path.endsWith("/") ? `${path}index.html` : path;
		try {
			statSync(join("dist", relativo));
		} catch {
			faltantes.push(`${archivo} -> ${href}`);
		}
	}
}

const pedido = mensajePedido({
	servicio: "box",
	material: "templado",
	apertura: "corrediza",
	ancho: 0.9,
	alto: 1.9,
});
const errores = [];
if (pedido.calculo !== null) errores.push("el rango no está vacío");
if (pedido.texto.includes("Gs.")) errores.push("el mensaje trae un monto");
if (!pedido.texto.includes("Cristal templado 8 mm")) errores.push("falta el material");
if (!pedido.texto.includes("Corrediza")) errores.push("falta la apertura");
if (!pedido.texto.includes("0,90 m × 1,90 m")) errores.push(`medidas raras: ${pedido.texto}`);
if (!pedido.texto.includes("El precio final se define en la medición.")) errores.push("falta el cierre");

const html = readFileSync("dist/calculadora/index.html", "utf8");
const href = html.match(/data-pedir href="([^"]+)"/)?.[1] ?? "";
const texto = decodeURIComponent(href.split("text=")[1] ?? "");
if (!href.startsWith("https://wa.me/595981256510")) errores.push("el enlace no es wa.me");
if (texto.includes("Gs.")) errores.push("el href publicado trae un monto");
if (!texto.includes("Box de baño")) errores.push("el href no nombra el box");

if (faltantes.length || errores.length) {
	console.error(faltantes.join("\n"));
	console.error(errores.join("\n"));
	process.exit(1);
}
console.log("enlaces internos ok");
console.log(texto);
