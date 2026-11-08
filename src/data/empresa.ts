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
	/** Ficha de Google Maps. El pin está bien ubicado; el texto de la dirección en la ficha no coincide (ver docs/PENDIENTES.md). */
	geo: { lat: -25.3975108, lng: -57.553853 },
	mapa: "https://maps.google.com/?cid=11603711632091616687",
	comoLlegar: "https://www.google.com/maps/dir/?api=1&destination=VIPAR%20S.A&destination_place_id=ChIJmWtkhIerXZQRr5XjEkCqCKE",
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
