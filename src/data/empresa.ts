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
