import type { ImageMetadata } from "astro";

const archivos = import.meta.glob<{ default: ImageMetadata }>("../assets/obras/*.{webp,jpg,jpeg,png}", {
	eager: true,
});

export function fotosDe(slug: string) {
	return Object.entries(archivos)
		.filter(([ruta]) => ruta.includes(`/${slug}-`))
		.sort(([a], [b]) => a.localeCompare(b))
		.map(([, archivo]) => archivo.default);
}

/** Foto principal de un servicio: la elegida para el hero o, si no hay, la primera de su obra de portada. */
export function fotoDeServicio(servicio: { foto: string; hero?: [string, number] }) {
	const [slug, n] = servicio.hero ?? [servicio.foto, 0];
	return fotosDe(slug)[n] ?? fotosDe(servicio.foto)[0];
}
