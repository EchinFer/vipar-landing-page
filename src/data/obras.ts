export type TipoObra = "residencial" | "comercial" | "institucional";

export type Obra = {
	slug: string;
	titulo: string;
	tipo: TipoObra;
	ciudad: string;
	hecho: string;
	servicios: string[];
	sinFoto?: string;
};

export const tipos: { id: TipoObra | "todas"; label: string; href: string }[] = [
	{ id: "todas", label: "Todas", href: "/obras/" },
	{ id: "residencial", label: "Residencial", href: "/obras/tipo/residencial/" },
	{ id: "comercial", label: "Comercial", href: "/obras/tipo/comercial/" },
	{ id: "institucional", label: "Institucional", href: "/obras/tipo/institucional/" },
];

export const obras: Obra[] = [
	{
		slug: "showroom-vipar",
		titulo: "Showroom VIPAR",
		tipo: "comercial",
		ciudad: "Ñemby",
		hecho: "Fachadas de vidrio y aluminio en el showroom, donde se ven los sistemas antes de encargar.",
		servicios: ["fachadas", "vidrio-templado"],
	},
	{
		slug: "sucursal-tigo-mra",
		titulo: "Sucursal Tigo",
		tipo: "comercial",
		ciudad: "Mariano Roque Alonso",
		hecho: "Fachada comercial en cristal templado.",
		servicios: ["fachadas", "vidrio-templado"],
	},
	{
		slug: "edificio-concordia",
		titulo: "Edificio Concordia",
		tipo: "residencial",
		ciudad: "",
		hecho: "Aberturas de aluminio para el edificio.",
		servicios: ["carpinteria-de-aluminio", "ventanas"],
	},
	{
		slug: "cooperativa-medalla",
		titulo: "Cooperativa Medalla Milagrosa",
		tipo: "institucional",
		ciudad: "Fernando de la Mora",
		hecho: "Divisiones de cristal con perfilería a medida.",
		servicios: ["mamparas-divisorias", "vidrio-templado"],
	},
	{
		slug: "residencia-san-lorenzo",
		titulo: "Residencia San Lorenzo",
		tipo: "residencial",
		ciudad: "San Lorenzo",
		hecho: "Aberturas de aluminio y paños de vidrio.",
		servicios: ["ventanas", "carpinteria-de-aluminio"],
		sinFoto: "La foto publicada en el sitio anterior es de Recoleta, no de esta vivienda.",
	},
	{
		slug: "oficinas-corporativas-itau",
		titulo: "Oficinas Itaú",
		tipo: "comercial",
		ciudad: "",
		hecho: "Tabiques de vidrio para oficinas.",
		servicios: ["mamparas-divisorias"],
		sinFoto: "La foto publicada en el sitio anterior es de la Cooperativa Medalla Milagrosa, no de estas oficinas.",
	},
	{
		slug: "vivienda-trotte",
		titulo: "Vivienda Trotte",
		tipo: "residencial",
		ciudad: "",
		hecho: "Ventanas proyectantes y puertas de vidrio templado, con aluminio color verde.",
		servicios: ["carpinteria-de-aluminio", "ventanas", "puertas"],
	},
	{
		slug: "vivienda-seket",
		titulo: "Vivienda Seket",
		tipo: "residencial",
		ciudad: "",
		hecho: "Baranda de vidrio templado.",
		servicios: ["vidrio-templado"],
	},
	{
		slug: "local-comercial-capiata",
		titulo: "Local comercial",
		tipo: "comercial",
		ciudad: "Capiatá",
		hecho: "Fachada de vidrio templado 10 mm incoloro.",
		servicios: ["fachadas", "vidrio-templado"],
	},
	{
		slug: "oficina-divisorias",
		titulo: "Oficina con divisorias",
		tipo: "comercial",
		ciudad: "",
		hecho: "Cielo raso desmontable y divisorias de vidrio templado con aluminio entubado.",
		servicios: ["mamparas-divisorias", "cielo-raso"],
	},
	{
		slug: "vivienda-box-de-bano",
		titulo: "Box de baño",
		tipo: "residencial",
		ciudad: "",
		hecho: "Box de vidrio templado 8 mm incoloro, con perfiles de aluminio fosco natural.",
		servicios: ["box-de-bano", "vidrio-templado"],
	},
	{
		slug: "vivienda-lc",
		titulo: "Vivienda LC",
		tipo: "residencial",
		ciudad: "",
		hecho: "Puerta de aluminio color fosco.",
		servicios: ["puertas", "carpinteria-de-aluminio"],
	},
	{
		slug: "oficina-cooperativa-medalla-milagrosa",
		titulo: "Oficina Cooperativa Medalla Milagrosa",
		tipo: "institucional",
		ciudad: "",
		hecho: "Cortinas y divisorias en la oficina de la cooperativa.",
		servicios: ["cortinas", "mamparas-divisorias"],
	},
	{
		slug: "tigo-central",
		titulo: "Tigo Central",
		tipo: "comercial",
		ciudad: "",
		hecho: "Cielo raso de yeso y vidrios fijos.",
		servicios: ["cielo-raso", "vidrio-templado"],
	},
	{
		slug: "maria-antonieta-shopping-mariano-roque-alonso",
		titulo: "María Antonieta",
		tipo: "comercial",
		ciudad: "Shopping Mariano Roque Alonso",
		hecho: "Vidrieras de paño fijo.",
		servicios: ["vidrio-templado", "fachadas"],
	},
	{
		slug: "galeria-senador-long",
		titulo: "Galería Senador Long",
		tipo: "comercial",
		ciudad: "",
		hecho: "Vidrieras de paño fijo y puertas batientes de cristal.",
		servicios: ["puertas", "vidrio-templado", "fachadas"],
	},
	{
		slug: "cooperativa-medalla-milagrosa-concepcion",
		titulo: "Cooperativa Medalla Milagrosa",
		tipo: "institucional",
		ciudad: "Concepción",
		hecho: "Cielo raso desmontable, mamparas divisorias y cortinas horizontales.",
		servicios: ["cielo-raso", "mamparas-divisorias", "cortinas"],
	},
	{
		slug: "recoleta-asuncion",
		titulo: "Edificio en Recoleta",
		tipo: "residencial",
		ciudad: "Recoleta, Asunción",
		hecho: "Ventanas y puertas corredizas de aluminio.",
		servicios: ["ventanas", "puertas", "carpinteria-de-aluminio"],
	},
	{
		slug: "virgen-del-huerto-asuncion",
		titulo: "Instalación médica Virgen del Huerto",
		tipo: "institucional",
		ciudad: "Virgen del Huerto, Asunción",
		hecho: "Cielo raso con paneles LED.",
		servicios: ["cielo-raso"],
	},
	{
		slug: "san-lorenzo-central",
		titulo: "Local comercial",
		tipo: "comercial",
		ciudad: "San Lorenzo",
		hecho: "Cielo raso con LED y vidriera de aluminio.",
		servicios: ["cielo-raso", "fachadas"],
	},
	{
		slug: "canada-del-ybyray",
		titulo: "Laboratorio de microbiología del IPS",
		tipo: "institucional",
		ciudad: "Asunción",
		hecho: "Puertas de cristal esmerilado para el laboratorio.",
		servicios: ["puertas", "vidrio-templado"],
	},
	{
		slug: "pedro-juan-caballero",
		titulo: "Universidad del Pacífico",
		tipo: "institucional",
		ciudad: "Pedro Juan Caballero",
		hecho: "Muro cortina de vidrio reflectivo azul.",
		servicios: ["fachadas", "vidrio-templado"],
	},
	{
		slug: "alto-parana-presidente-franco",
		titulo: "Local comercial",
		tipo: "comercial",
		ciudad: "Presidente Franco",
		hecho: "Ventanas de aluminio de gran formato.",
		servicios: ["ventanas", "carpinteria-de-aluminio"],
	},
	{
		slug: "san-antonio-central",
		titulo: "Local comercial",
		tipo: "comercial",
		ciudad: "San Antonio",
		hecho: "Cielo raso y drywall en la remodelación del local.",
		servicios: ["cielo-raso"],
	},
	{
		slug: "torre-provenza-asuncion",
		titulo: "Torre Provenza",
		tipo: "residencial",
		ciudad: "Asunción",
		hecho: "Ventanas de vidrio templado y cielo raso desmontable Armstrong.",
		servicios: ["ventanas", "cielo-raso", "vidrio-templado"],
	},
	{
		slug: "ips-central-asuncion",
		titulo: "IPS Central",
		tipo: "institucional",
		ciudad: "Asunción",
		hecho: "Cielo raso Durlock y mamparas en salas de atención.",
		servicios: ["cielo-raso", "mamparas-divisorias"],
	},
	{
		slug: "edificio-longvillage-asuncion",
		titulo: "Edificio Longvillage",
		tipo: "residencial",
		ciudad: "Asunción",
		hecho: "Ventanas corredizas de aluminio en varias plantas.",
		servicios: ["ventanas", "carpinteria-de-aluminio"],
	},
	{
		slug: "edificio-fortaleza-milano-asuncion",
		titulo: "Edificio Fortaleza Milano",
		tipo: "residencial",
		ciudad: "Asunción",
		hecho: "Barandas de acero inoxidable y vidrio templado en escalera y terraza.",
		servicios: ["vidrio-templado"],
	},
	{
		slug: "natatorio-cit-luque",
		titulo: "Natatorio del CIT",
		tipo: "institucional",
		ciudad: "Luque",
		hecho: "Fachada de vidrio y aluminio del natatorio del Club Internacional de Tenis.",
		servicios: ["fachadas", "vidrio-templado"],
	},
	{
		slug: "tienda-go-caaguazu",
		titulo: "Tienda GO!",
		tipo: "comercial",
		ciudad: "Caaguazú",
		hecho: "Mamparas de baño con puertas de celosía de aluminio y paneles compactos.",
		servicios: ["box-de-bano", "mamparas-divisorias"],
	},
	{
		slug: "auditorio-arandu-loma-pyta",
		titulo: "Auditorio Arandú",
		tipo: "institucional",
		ciudad: "Loma Pyta, Asunción",
		hecho: "Vidrio templado semi-polarizado y puerta batiente de aluminio.",
		servicios: ["vidrio-templado", "puertas"],
	},
	{
		slug: "quincho-edificio-brasilia-asuncion",
		titulo: "Quincho Edificio Brasília",
		tipo: "residencial",
		ciudad: "Av. Brasilia 1840, Asunción",
		hecho: "Cierre del quincho con vidrio y cortinas plegables.",
		servicios: ["cortinas", "vidrio-templado"],
	},
	{
		slug: "carde-apf-ypane",
		titulo: "CARDE, APF",
		tipo: "institucional",
		ciudad: "Ypané",
		hecho: "Cielo raso de PVC en el Centro de Alto Rendimiento de la APF.",
		servicios: ["cielo-raso"],
	},
];

export function obraPorSlug(slug: string) {
	return obras.find((obra) => obra.slug === slug);
}

export function obrasDe(tipo: TipoObra) {
	return obras.filter((obra) => obra.tipo === tipo);
}

export function obrasDelServicio(slug: string) {
	return obras.filter((obra) => obra.servicios.includes(slug));
}

export const portada = [
	"sucursal-tigo-mra",
	"natatorio-cit-luque",
	"pedro-juan-caballero",
	"ips-central-asuncion",
	"recoleta-asuncion",
	"edificio-concordia",
].map((slug) => obraPorSlug(slug)!);
