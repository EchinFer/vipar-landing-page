import { getImage } from "astro:assets";
import type { ImageMetadata } from "astro";
import { empresa } from "../data/empresa";
import { fotosDe } from "./fotos";

/** Imagen al compartir el enlace: JPG 1200×630, el formato que WhatsApp y Facebook muestran en todos los equipos. */
export async function imagenSocial(src: ImageMetadata = fotosDe("auditorio-arandu-loma-pyta").at(-1)!) {
	// No se agranda: con una foto chica se recorta a su ancho y se mantiene la proporción 1,91:1.
	const width = Math.min(1200, src.width);
	const height = Math.round((width * 630) / 1200);
	const imagen = await getImage({ src, width, height, fit: "cover", format: "jpg", quality: 80 });
	return { url: new URL(imagen.src, empresa.site).href, width, height };
}
