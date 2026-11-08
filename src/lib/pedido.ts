export type ServicioCalc = "box" | "ventana" | "puertas" | "vidrio" | "aluminio" | "mamparas" | "fachadas" | "cortinas" | "cielo";

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

/** Mes en que VIPAR pasó los precios por m². Se muestra junto a cada monto. */
export const preciosVigencia = "noviembre de 2026";

export type PrecioM2 = {
	m2: number;
	/** Por unidad, aparte de los m². */
	puerta?: number;
	/** Terminación perimetral, por metro lineal. */
	buna?: number;
	nota?: string;
};

/** Precios por m² que pasó VIPAR. La clave es `servicio:material`. */
export const preciosM2: Record<string, PrecioM2> = {
	"cielo:junta-tomada": { m2: 80000, buna: 25000 },
	"cielo:pvc": { m2: 100000 },
	"cielo:durlock": { m2: 110000, buna: 25000 },
	"cielo:foil": { m2: 125000 },
	"cielo:fibra-mineral": { m2: 135000 },
	"mamparas:eucatex-ciega": { m2: 170000, puerta: 500000, nota: "Con perfiles de chapa pintada." },
	"mamparas:eucatex-vidriada": { m2: 210000, puerta: 750000, nota: "Con perfiles de chapa pintada." },
};

export type Opcion = { id: string; label: string };

export type Config = {
	etiqueta: string;
	grupoMaterial: string;
	materiales: Opcion[];
	/** Índice del material marcado al empezar. */
	materialInicial: number;
	grupoApertura: string;
	aperturas: Opcion[];
	/** Cómo se leen las dos medidas. */
	medidaA: string;
	medidaB: string;
	ancho: number;
	alto: number;
	max: number;
};

const noSe = { id: "asesoria", label: "No sé, que me asesoren" };

export const opciones: Record<ServicioCalc, Config> = {
	box: {
		etiqueta: "Box de baño",
		grupoMaterial: "Material",
		materiales: [
			{ id: "acrilico", label: "Acrílico" },
			{ id: "templado", label: "Cristal templado 8 mm" },
			{ id: "plegable", label: "Sistema plegable" },
		],
		materialInicial: 1,
		grupoApertura: "Apertura",
		aperturas: [
			{ id: "corrediza", label: "Corrediza" },
			{ id: "batiente", label: "Batiente" },
			{ id: "plegable", label: "Plegable" },
		],
		medidaA: "Ancho",
		medidaB: "Alto",
		ancho: 0.9,
		alto: 1.9,
		max: 3,
	},
	ventana: {
		etiqueta: "Ventana",
		grupoMaterial: "Material",
		materiales: [
			{ id: "aluminio", label: "Aluminio y vidrio" },
			{ id: "templado", label: "Cristal templado" },
		],
		materialInicial: 0,
		grupoApertura: "Apertura",
		aperturas: [
			{ id: "corrediza", label: "Corrediza" },
			{ id: "basculante", label: "Basculante" },
			{ id: "fijo", label: "Paño fijo" },
		],
		medidaA: "Ancho",
		medidaB: "Alto",
		ancho: 1.2,
		alto: 1.1,
		max: 8,
	},
	puertas: {
		etiqueta: "Puertas",
		grupoMaterial: "Material",
		materiales: [
			{ id: "aluminio", label: "Aluminio y vidrio" },
			{ id: "templado", label: "Cristal templado" },
		],
		materialInicial: 0,
		grupoApertura: "Apertura",
		aperturas: [
			{ id: "batiente", label: "Batiente" },
			{ id: "corrediza", label: "Corrediza" },
			{ id: "plegable", label: "Panorámica o plegable" },
		],
		medidaA: "Ancho",
		medidaB: "Alto",
		ancho: 0.9,
		alto: 2.1,
		max: 8,
	},
	vidrio: {
		etiqueta: "Vidrio templado",
		grupoMaterial: "Para qué",
		materiales: [
			{ id: "puerta", label: "Puerta o acceso" },
			{ id: "mampara", label: "Mampara o división" },
			{ id: "baranda", label: "Baranda" },
			{ id: "cerramiento", label: "Quincho o terraza" },
			{ id: "otro", label: "Otro" },
		],
		materialInicial: 0,
		grupoApertura: "",
		aperturas: [],
		medidaA: "Ancho",
		medidaB: "Alto",
		ancho: 1,
		alto: 2,
		max: 10,
	},
	aluminio: {
		etiqueta: "Carpintería de aluminio",
		grupoMaterial: "Qué es",
		materiales: [
			{ id: "puerta-batiente", label: "Puerta batiente" },
			{ id: "puerta-corrediza", label: "Puerta corrediza" },
			{ id: "ventana", label: "Ventana" },
			{ id: "otro", label: "Otro" },
		],
		materialInicial: 0,
		grupoApertura: "",
		aperturas: [],
		medidaA: "Ancho",
		medidaB: "Alto",
		ancho: 1.5,
		alto: 2.1,
		max: 10,
	},
	mamparas: {
		etiqueta: "Mamparas divisorias",
		grupoMaterial: "Material",
		materiales: [
			{ id: "eucatex-ciega", label: "Eucatex ciega" },
			{ id: "eucatex-vidriada", label: "Eucatex vidriada" },
			{ id: "cristal", label: "Cristal templado" },
			{ id: "durlock", label: "Tabique de Durlock" },
			noSe,
		],
		materialInicial: 0,
		grupoApertura: "Puertas",
		aperturas: [
			{ id: "0", label: "Sin puerta" },
			{ id: "1", label: "1 puerta" },
			{ id: "2", label: "2 puertas" },
			{ id: "3", label: "3 o más" },
		],
		medidaA: "Largo",
		medidaB: "Alto",
		ancho: 3,
		alto: 2.4,
		max: 40,
	},
	fachadas: {
		etiqueta: "Fachadas",
		grupoMaterial: "Sistema",
		materiales: [
			{ id: "entubada", label: "Fachada entubada" },
			{ id: "muro-cortina", label: "Muro cortina" },
			{ id: "glazing", label: "Sistema glazing" },
			noSe,
		],
		materialInicial: 3,
		grupoApertura: "",
		aperturas: [],
		medidaA: "Ancho del frente",
		medidaB: "Alto",
		ancho: 4,
		alto: 3,
		max: 60,
	},
	cortinas: {
		etiqueta: "Cortinas de vidrio",
		grupoMaterial: "Para",
		materiales: [
			{ id: "balcon", label: "Balcón" },
			{ id: "quincho", label: "Quincho o galería" },
			{ id: "comercial", label: "Frente comercial" },
		],
		materialInicial: 0,
		grupoApertura: "",
		aperturas: [],
		medidaA: "Ancho",
		medidaB: "Alto",
		ancho: 3,
		alto: 2.2,
		max: 20,
	},
	cielo: {
		etiqueta: "Cielo raso",
		grupoMaterial: "Sistema",
		materiales: [
			{ id: "junta-tomada", label: "Yeso junta tomada lisa" },
			{ id: "pvc", label: "PVC blanco" },
			{ id: "durlock", label: "Durlock (yeso cartón)" },
			{ id: "foil", label: "Desmontable, placa con foil" },
			{ id: "fibra-mineral", label: "Desmontable, fibra mineral" },
			noSe,
		],
		materialInicial: 5,
		grupoApertura: "",
		aperturas: [],
		medidaA: "Largo",
		medidaB: "Ancho",
		ancho: 4,
		alto: 3,
		max: 60,
	},
};

/** Mismo orden que los servicios: por demanda en Search Console. */
export const ids: ServicioCalc[] = ["box", "cielo", "mamparas", "aluminio", "puertas", "cortinas", "fachadas", "ventana", "vidrio"];

/** Del slug de la ficha de servicio al armador. */
export const calcPorSlug: Record<string, ServicioCalc> = {
	"box-de-bano": "box",
	ventanas: "ventana",
	puertas: "puertas",
	"vidrio-templado": "vidrio",
	"carpinteria-de-aluminio": "aluminio",
	"mamparas-divisorias": "mamparas",
	fachadas: "fachadas",
	cortinas: "cortinas",
	"cielo-raso": "cielo",
};

export type Pedido = {
	servicio: ServicioCalc;
	material: string;
	apertura: string;
	ancho: number;
	alto: number;
	ciudad?: string;
};

export function rangoDe(servicio: ServicioCalc, material: string, apertura: string) {
	if (servicio === "box") return precios[`box:${material}`] ?? null;
	if (servicio === "ventana") return precios[`ventana:${apertura}`] ?? null;
	return null;
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

export function tienePrecios(servicio: ServicioCalc) {
	return Object.keys(preciosM2).some((clave) => clave.startsWith(`${servicio}:`));
}

export function estimar(pedido: Pedido) {
	const precio = preciosM2[`${pedido.servicio}:${pedido.material}`];
	if (!precio || !(pedido.ancho > 0) || !(pedido.alto > 0)) return null;
	const area = Math.round(pedido.ancho * pedido.alto * 100) / 100;
	const puertas = precio.puerta ? Number(pedido.apertura) || 0 : 0;
	const montoPuertas = puertas * (precio.puerta ?? 0);
	const redondear = (n: number) => Math.round(n / 1000) * 1000;
	const metrosBuna = Math.round(2 * (pedido.ancho + pedido.alto) * 100) / 100;
	return {
		precio,
		area,
		puertas,
		total: redondear(area * precio.m2 + montoPuertas),
		/** "3 o más" puertas: el monto es un piso. */
		desde: puertas >= 3,
		metrosBuna,
		buna: precio.buna ? redondear(metrosBuna * precio.buna) : 0,
	};
}

export function detalleEstimado(estimado: NonNullable<ReturnType<typeof estimar>>) {
	let detalle = `${formatM(estimado.area)} m² × ${formatGs(estimado.precio.m2)} por m²`;
	if (estimado.puertas > 0 && estimado.precio.puerta) {
		detalle += ` + ${estimado.puertas} ${estimado.puertas === 1 ? "puerta" : "puertas"} × ${formatGs(estimado.precio.puerta)}`;
	}
	return detalle;
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
	const config = opciones[pedido.servicio];
	const material = etiqueta(pedido.servicio, "materiales", pedido.material);
	const ancho = formatM(pedido.ancho);
	const alto = formatM(pedido.alto);
	const medidas = ancho && alto ? `${ancho} m × ${alto} m (${config.medidaA.toLowerCase()} × ${config.medidaB.toLowerCase()})` : "a confirmar";
	const lineas = ["Hola VIPAR, quiero un presupuesto.", `Servicio: ${config.etiqueta}`, `${config.grupoMaterial}: ${material}`];
	if (config.aperturas.length > 0) lineas.push(`${config.grupoApertura}: ${etiqueta(pedido.servicio, "aperturas", pedido.apertura)}`);
	lineas.push(`Medidas aproximadas: ${medidas}`);
	const ciudad = pedido.ciudad?.trim();
	if (ciudad) lineas.push(`Ciudad o zona de la obra: ${ciudad}`);
	const rango = rangoDe(pedido.servicio, pedido.material, pedido.apertura);
	let calculo: ReturnType<typeof calcular> | null = null;
	if (rango && ancho && alto) calculo = calcular(rango, pedido.ancho, pedido.alto);
	if (calculo) {
		const marca = calculo.ejemplo ? " (PRECIO DE EJEMPLO)" : "";
		lineas.push(`Rango que vi en la web${marca}: ${formatGs(calculo.min)} a ${formatGs(calculo.max)}`);
	}
	const estimado = estimar(pedido);
	if (estimado) {
		lineas.push(`Referencia que vi en la web (${preciosVigencia}): ${estimado.desde ? "desde " : ""}${formatGs(estimado.total)}, ${detalleEstimado(estimado)}`);
	}
	lineas.push("El precio final se define en la medición.");
	return { texto: lineas.join("\n"), calculo, estimado };
}

export function waUrl(texto: string) {
	return `https://wa.me/595981256510?text=${encodeURIComponent(texto)}`;
}

export function mensajeLibre(asunto: string) {
	return `Hola VIPAR, quiero un presupuesto.\n${asunto}\nEl precio final se define en la medición.`;
}
