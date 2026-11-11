import type { ImageMetadata } from "astro";

const archivos = import.meta.glob<{ default: ImageMetadata }>("../assets/obras/*.{webp,jpg,jpeg,png}", {
	eager: true,
});

export function fotosDe(slug: string) {
	const deEstaObra = new RegExp(`/${slug}-\\d+\\.(webp|jpe?g|png)$`, "i");
	return Object.entries(archivos)
		.filter(([ruta]) => deEstaObra.test(ruta))
		.sort(([a], [b]) => a.localeCompare(b))
		.map(([, archivo]) => archivo.default);
}

/** Foto de portada. Si hay una de 1024 px al lado de una más grande, usa la grande: la de 1024 es una prueba y no es la obra. */
export function portadaDe(slug: string) {
	const fotos = fotosDe(slug);
	return fotos.find((foto) => foto.width > 1024) ?? fotos[0];
}

/** Foto principal de un servicio: la elegida para el hero o, si no hay, la primera de su obra de portada. */
export function fotoDeServicio(servicio: { foto: string; hero?: [string, number] }) {
	const [slug, n] = servicio.hero ?? [servicio.foto, 0];
	return fotosDe(slug)[n] ?? fotosDe(servicio.foto)[0];
}
