import { whatsappNumber } from "src/constants";

interface WhatsappMessageOptions {
  serviceName?: string;
  pageLabel?: string;
  prompt?: string;
}

export function buildWhatsappMessage({
  serviceName,
  pageLabel,
  prompt,
}: WhatsappMessageOptions = {}) {
  if (!serviceName) {
    return "Hola VIPAR, quiero hacer una consulta. Vengo desde su sitio web.";
  }

  const normalizedService = serviceName.toLowerCase();
  const originLabel = pageLabel ?? serviceName;
  const followUp = prompt ?? "Puedo enviar fotos, medidas o plano.";

  return `Hola VIPAR, quiero cotizar ${normalizedService}. Vengo desde la pagina de ${originLabel}. ${followUp}`;
}

export function buildWhatsappUrl(message: string, number = whatsappNumber) {
  return `https://wa.me/${number}?text=${encodeURIComponent(message)}`;
}
