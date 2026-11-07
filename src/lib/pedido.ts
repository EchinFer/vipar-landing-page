export type ServicioCalc = "box" | "ventana";

export type Rango = {
	ejemplo: boolean;
	min: number;
	max: number;
	refAncho: number;
	refAlto: number;
};

/** Vacío a propósito. Un monto entra acá solo cuando VIPAR lo pasa. */
export const precios: Record<string, Rango | null> = {
	"box:acrilico": null,
	"box:templado": null,
	"box:plegable": null,
	"ventana:corrediza": null,
	"ventana:basculante": null,
	"ventana:fijo": null,
};

export const opciones = {
	box: {
		etiqueta: "Box de baño",
		materiales: [
			{ id: "acrilico", label: "Acrílico" },
			{ id: "templado", label: "Cristal templado 8 mm" },
			{ id: "plegable", label: "Sistema plegable" },
		],
		aperturas: [
			{ id: "corrediza", label: "Corrediza" },
			{ id: "batiente", label: "Batiente" },
			{ id: "plegable", label: "Plegable" },
		],
		ancho: 0.9,
		alto: 1.9,
	},
	ventana: {
		etiqueta: "Ventana",
		materiales: [
			{ id: "aluminio", label: "Aluminio y vidrio" },
			{ id: "templado", label: "Cristal templado" },
		],
		aperturas: [
			{ id: "corrediza", label: "Corrediza" },
			{ id: "basculante", label: "Basculante" },
			{ id: "fijo", label: "Paño fijo" },
		],
		ancho: 1.2,
		alto: 1.1,
	},
} as const;

export type Pedido = {
	servicio: ServicioCalc;
	material: string;
	apertura: string;
	ancho: number;
	alto: number;
};

export function rangoDe(servicio: ServicioCalc, material: string, apertura: string) {
	if (servicio === "box") return precios[`box:${material}`] ?? null;
	return precios[`ventana:${apertura}`] ?? null;
}

export function calcular(rango: Rango, ancho: number, alto: number) {
	const ref = rango.refAncho * rango.refAlto;
	const area = ancho * alto;
	let factor = area / ref;
	const fuera = factor < 0.7 || factor > 2.5;
	factor = Math.min(2.5, Math.max(0.7, factor));
	const redondear = (n: number) => Math.round(n / 50000) * 50000;
	return {
		min: redondear(rango.min * factor),
		max: redondear(rango.max * factor),
		ejemplo: rango.ejemplo,
		fuera,
	};
}

export function formatM(n: number) {
	if (!Number.isFinite(n) || n <= 0) return "";
	return n.toLocaleString("es-PY", { minimumFractionDigits: 2, maximumFractionDigits: 2 });
}

export function formatGs(n: number) {
	return `Gs. ${new Intl.NumberFormat("es-PY", { maximumFractionDigits: 0 }).format(n)}`;
}

export function etiqueta(servicio: ServicioCalc, grupo: "materiales" | "aperturas", id: string) {
	return opciones[servicio][grupo].find((item) => item.id === id)?.label ?? id;
}

export function mensajePedido(pedido: Pedido) {
	const material = etiqueta(pedido.servicio, "materiales", pedido.material);
	const apertura = etiqueta(pedido.servicio, "aperturas", pedido.apertura);
	const ancho = formatM(pedido.ancho);
	const alto = formatM(pedido.alto);
	const medidas = ancho && alto ? `${ancho} m × ${alto} m` : "a confirmar";
	const lineas = [
		"Hola VIPAR, quiero un presupuesto.",
		`Servicio: ${opciones[pedido.servicio].etiqueta}`,
		`Material: ${material}`,
		`Apertura: ${apertura}`,
		`Medidas aproximadas: ${medidas}`,
	];
	const rango = rangoDe(pedido.servicio, pedido.material, pedido.apertura);
	let calculo: ReturnType<typeof calcular> | null = null;
	if (rango && ancho && alto) calculo = calcular(rango, pedido.ancho, pedido.alto);
	if (calculo) {
		const marca = calculo.ejemplo ? " (PRECIO DE EJEMPLO)" : "";
		lineas.push(`Rango que vi en la web${marca}: ${formatGs(calculo.min)} a ${formatGs(calculo.max)}`);
	}
	lineas.push("El precio final se define en la medición.");
	return { texto: lineas.join("\n"), calculo };
}

export function waUrl(texto: string) {
	return `https://wa.me/595981256510?text=${encodeURIComponent(texto)}`;
}

export function mensajeLibre(asunto: string) {
	return `Hola VIPAR, quiero un presupuesto.\n${asunto}\nEl precio final se define en la medición.`;
}
