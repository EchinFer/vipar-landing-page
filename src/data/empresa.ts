export const empresa = {
	nombre: "VIPAR S.A.",
	telefono: "+595981256510",
	whatsapp: "595981256510",
	email: "info@vipar.com.py",
	direccion: "San Francisco 770 c/ Sexta, Bo. Salinas",
	ciudad: "Ñemby",
	departamento: "Central",
	horario: "Lunes a viernes, 7:30 a 17:00",
	desde: 2000,
	site: "https://vipar.com.py",
};

export function canonical(path: string) {
	const normal = path.startsWith("/") ? path : `/${path}`;
	const conBarra = normal.endsWith("/") ? normal : `${normal}/`;
	return new URL(conBarra, empresa.site).href;
}

/** Identificador del negocio en los datos estructurados: las demás entidades lo referencian. */
export const negocioId = `${empresa.site}/#negocio`;

export function migas(...pasos: [string, string][]) {
	return {
		"@type": "BreadcrumbList",
		itemListElement: [["Inicio", "/"] as [string, string], ...pasos].map(([nombre, ruta], indice) => ({
			"@type": "ListItem",
			position: indice + 1,
			name: nombre,
			item: canonical(ruta),
		})),
	};
}
