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
