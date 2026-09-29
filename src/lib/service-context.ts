export const contactServices = [
  { slug: "mamparas-divisorias", name: "Mamparas divisorias" },
  { slug: "ventanas", name: "Ventanas" },
  { slug: "box-de-bano", name: "Box de baño" },
  { slug: "cielo-raso", name: "Cielo raso" },
  { slug: "carpinteria-de-aluminio", name: "Carpintería de aluminio" },
  { slug: "vidrio-templado", name: "Vidrio templado" },
  { slug: "fachadas", name: "Fachadas" },
  { slug: "puertas", name: "Puertas" },
  { slug: "cortinas", name: "Cortinas" },
  { slug: "otro", name: "Otro" },
] as const;

export function findContactService(value = "") {
  const normalized = value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase();
  if (["cristales-templados", "cristales templados", "cristal templado", "blindex"].includes(normalized)) {
    return contactServices.find(service => service.slug === "vidrio-templado");
  }
  return contactServices.find((service) =>
    service.slug === normalized ||
    service.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").toLowerCase() === normalized
  );
}

export function serviceFromPath(pathname: string) {
  return findContactService(pathname.match(/^\/servicios\/([^/]+)\/?$/)?.[1]);
}

export function serviceForContact(url: URL, referrer: string) {
  const requested = findContactService(url.searchParams.get("servicio") || "");
  if (requested) return requested;
  try {
    const previous = new URL(referrer);
    if (previous.origin === url.origin) return serviceFromPath(previous.pathname);
  } catch { /* A direct visit has no referrer. */ }
  return undefined;
}
