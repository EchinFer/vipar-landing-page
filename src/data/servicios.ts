export type Servicio = {
	slug: string;
	nombre: string;
	title: string;
	description: string;
	resumen: string;
	foto: string;
	incluye: string[];
	noIncluye: string[];
	hechos: string[];
	calculadora: boolean;
};

export const servicios: Servicio[] = [
	{
		slug: "vidrio-templado",
		nombre: "Vidrio templado",
		title: "Vidrio templado y Blindex",
		description: "Vidrio templado para puertas, mamparas, boxes, barandas y fachadas. Lo proveemos y lo instalamos.",
		resumen: "Puertas, mamparas, boxes, barandas y fachadas.",
		foto: "local-comercial-capiata",
		incluye: ["Vidrio cortado a la medida de la obra", "Perfiles y herrajes del sistema", "Instalación"],
		noIncluye: ["Albañilería, plomería y electricidad"],
		hechos: [
			"En Capiatá la fachada es templado de 10 mm incoloro.",
			"El box de una vivienda es templado de 8 mm, con perfil fosco.",
			"Blindex es una marca. Si la obra la pide, queda escrita en el presupuesto.",
		],
		calculadora: false,
	},
	{
		slug: "carpinteria-de-aluminio",
		nombre: "Carpintería de aluminio",
		title: "Carpintería de aluminio",
		description: "Puertas, ventanas y cerramientos de aluminio, medidos e instalados en la obra.",
		resumen: "Puertas, ventanas y cerramientos a medida.",
		foto: "vivienda-trotte",
		incluye: ["Perfiles de aluminio", "Vidrio del sistema elegido", "Instalación"],
		noIncluye: ["Albañilería para corregir el vano"],
		hechos: [
			"En la vivienda Trotte el aluminio es color verde, con ventanas proyectantes.",
			"En Recoleta las aberturas son corredizas.",
			"En Longvillage las ventanas corredizas recorren varias plantas.",
		],
		calculadora: false,
	},
	{
		slug: "ventanas",
		nombre: "Ventanas",
		title: "Ventanas de aluminio",
		description: "Ventanas corredizas, basculantes y paños fijos. Armá las medidas y pedí el presupuesto por WhatsApp.",
		resumen: "Corredizas, basculantes y paños fijos.",
		foto: "recoleta-asuncion",
		incluye: ["Marco de aluminio", "Vidrio", "Instalación en el vano existente"],
		noIncluye: ["Revoque o modificación del vano"],
		hechos: [
			"En Presidente Franco se instalaron ventanas de aluminio de gran formato.",
			"En Recoleta, ventanas y puertas corredizas.",
			"En la vivienda Trotte, ventanas proyectantes.",
		],
		calculadora: true,
	},
	{
		slug: "puertas",
		nombre: "Puertas",
		title: "Puertas de aluminio y cristal",
		description: "Puertas batientes, corredizas y de cristal templado para viviendas y locales.",
		resumen: "Batientes, corredizas y de cristal.",
		foto: "galeria-senador-long",
		incluye: ["Hoja, marco y herrajes", "Instalación"],
		noIncluye: ["Cerradura electrónica, salvo que se pida en el pedido"],
		hechos: [
			"En la Galería Senador Long hay puertas batientes de cristal.",
			"En la vivienda LC, una puerta de aluminio fosco.",
			"En el laboratorio del IPS, puertas de cristal esmerilado.",
		],
		calculadora: false,
	},
	{
		slug: "mamparas-divisorias",
		nombre: "Mamparas divisorias",
		title: "Mamparas divisorias",
		description: "Divisiones de vidrio o panel para oficinas, cooperativas y locales. Separan sin una obra de mampostería.",
		resumen: "Vidrio o panel para separar ambientes.",
		foto: "cooperativa-medalla",
		incluye: ["Perfilería", "Paño de vidrio o panel", "Instalación"],
		noIncluye: ["Aire acondicionado y electricidad de los puestos"],
		hechos: [
			"En la Cooperativa Medalla Milagrosa las divisiones son de cristal.",
			"En el IPS Central hay mamparas en salas de atención, junto con cielo raso Durlock.",
			"En una oficina combinamos divisorias de templado con cielo raso desmontable.",
		],
		calculadora: false,
	},
	{
		slug: "fachadas",
		nombre: "Fachadas",
		title: "Fachadas de vidrio y aluminio",
		description: "Fachadas, muros cortina y vidrieras para locales y edificios. El monto sale de la medición, no de una tabla.",
		resumen: "Vidrieras, fachadas y muros cortina.",
		foto: "sucursal-tigo-mra",
		incluye: ["Sistema de aluminio y vidrio", "Instalación"],
		noIncluye: ["Estructura de hormigón y losa"],
		hechos: [
			"Sucursal Tigo en Mariano Roque Alonso: fachada de cristal templado.",
			"Natatorio del CIT, en Luque: fachada de vidrio y aluminio.",
			"Universidad del Pacífico, en Pedro Juan Caballero: muro cortina de vidrio reflectivo azul.",
		],
		calculadora: false,
	},
	{
		slug: "cortinas",
		nombre: "Cortinas de vidrio",
		title: "Cortinas de vidrio",
		description: "Cerramientos de cristal para quinchos, galerías y balcones. Se abren cuando el espacio tiene que quedar libre.",
		resumen: "Para quinchos, galerías y balcones.",
		foto: "quincho-edificio-brasilia-asuncion",
		incluye: ["Hojas de vidrio", "Herrajes de apertura", "Instalación"],
		noIncluye: ["Techo ni piso del quincho"],
		hechos: [
			"En el quincho del Edificio Brasília el cierre es de vidrio con cortinas plegables.",
			"En la cooperativa de Concepción también instalamos cortinas horizontales.",
		],
		calculadora: false,
	},
	{
		slug: "cielo-raso",
		nombre: "Cielo raso",
		title: "Cielo raso",
		description: "PVC, yeso, Durlock y desmontable. El sistema se elige según si hay que lavarlo, pintarlo o abrir el techo.",
		resumen: "PVC, yeso, Durlock y desmontable.",
		foto: "virgen-del-huerto-asuncion",
		incluye: ["Estructura y placas del sistema elegido", "Instalación"],
		noIncluye: ["Artefactos, salvo que estén en el pedido", "Aire acondicionado"],
		hechos: [
			"CARDE de la APF, en Ypané: PVC.",
			"Tigo Central: yeso.",
			"IPS Central: Durlock. Virgen del Huerto: paneles LED.",
		],
		calculadora: false,
	},
	{
		slug: "box-de-bano",
		nombre: "Box de baño",
		title: "Box de baño",
		description: "Box de acrílico, cristal templado 8 mm o sistema plegable. Elegí apertura y medidas, y pedí el presupuesto por WhatsApp.",
		resumen: "Acrílico, templado 8 mm o plegable.",
		foto: "vivienda-box-de-bano",
		incluye: ["Paños y perfiles", "Herrajes", "Instalación y sellado"],
		noIncluye: ["Revestimiento, grifería y plato de ducha"],
		hechos: [
			"En una vivienda el box es templado de 8 mm incoloro, con aluminio fosco.",
			"Las aperturas que armamos: corrediza, batiente y plegable.",
			"En Tienda GO! Caaguazú hay mamparas de baño con puerta de celosía.",
		],
		calculadora: true,
	},
];

export function servicioPorSlug(slug: string) {
	return servicios.find((servicio) => servicio.slug === slug);
}
