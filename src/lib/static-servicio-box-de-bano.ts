export interface BoxBenefitItem {
  icon: string;
  title: string;
  description: string;
}

export interface BoxOptionItem {
  icon: string;
  title: string;
  chip: string;
  description: string;
  idealFor: string[];
  featured?: boolean;
}

export interface BoxCompareRow {
  feature: string;
  acrylic: string;
  temperedGlass: string;
  folding: string;
}

export interface BoxProcessStep {
  number: string;
  title: string;
  description: string;
  active?: boolean;
}

export const boxHeroImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuAL9ocVDcgbbeeTWUGXZwUIVJXbW0oQ7O035-ByZsSHDjAZAVaqTQrfxwNY5ML9tXU72LOCASsvPef8WimJp6BYh6D6IGL3cHsnsxTBcvdeTNVphrHdn9MFS-vqzF-VxngQnoa2IshCT2QQszxMJ6DY3eK75sNlPySM2qfmxPHr727-r3c4vKr9i4BMRgn0fyCxhbdfjxqZuwuXNTwOvfZ6knNfQH0hQcI1r1NpeS9u0Nv00IKv9mjBtnage4CLgo5M5q4AetVczoxf";

export const boxHeroTags = [
  "Acrílico",
  "Cristal templado",
  "Safonadas / plegables",
  "Instalación según medidas",
];

export const boxBenefits: BoxBenefitItem[] = [
  {
    icon: "bi-droplet",
    title: "Adiós a las filtraciones",
    description:
      "Un box a medida contribuye a reducir filtraciones, manteniendo el resto del baño seco y más seguro.",
  },
  {
    icon: "bi-stars",
    title: "Higiene superior",
    description:
      "Superficies no porosas como el cristal templado y acrílico facilitan la limpieza y reducen la retención de humedad.",
  },
  {
    icon: "bi-arrows-angle-expand",
    title: "Amplitud visual",
    description:
      "Las estructuras transparentes y de perfiles finos mejoran la percepción del espacio, ideal para baños compactos.",
  },
  {
    icon: "bi-bounding-box",
    title: "Mejora visual del ambiente",
    description:
      "Una terminación prolija eleva la estética del baño y aporta un detalle moderno al espacio.",
  },
];

export const boxOptions: BoxOptionItem[] = [
  {
    icon: "bi-grid-1x2",
    title: "Acrílico",
    chip: "Económico",
    description:
      "Estructura de aluminio con paneles de acrílico texturizado. Ligero, seguro y de fácil montaje.",
    idealFor: [
      "Baños de uso intensivo",
      "Proyectos de presupuesto ajustado",
      "Estructuras livianas",
    ],
  },
  {
    icon: "bi-stop",
    title: "Cristal templado",
    chip: "Premium",
    featured: true,
    description:
      "Cristal de seguridad con herrajes de aluminio o acero según el sistema elegido.",
    idealFor: [
      "Baños principales y suites",
      "Estética minimalista",
      "Máxima durabilidad",
    ],
  },
  {
    icon: "bi-arrow-left-right",
    title: "Safonadas / plegables",
    chip: "Funcional",
    description:
      "Sistemas de hojas plegables que permiten apertura total, maximizando el área de acceso.",
    idealFor: [
      "Baños muy pequeños",
      "Accesibilidad para personas mayores",
      "Aperturas atípicas",
    ],
  },
];

export const boxCompareRows: BoxCompareRow[] = [
  {
    feature: "Estética y acabado",
    acrylic: "Funcional",
    temperedGlass: "Moderna",
    folding: "Práctica",
  },
  {
    feature: "Durabilidad",
    acrylic: "Estándar",
    temperedGlass: "Alta",
    folding: "Buena",
  },
  {
    feature: "Requerimiento de espacio",
    acrylic: "Estándar (corredizo)",
    temperedGlass: "Estándar (corredizo/batiente)",
    folding: "Mínimo (se pliega)",
  },
  {
    feature: "Facilidad de limpieza",
    acrylic: "Buena",
    temperedGlass: "Muy buena",
    folding: "Buena",
  },
  {
    feature: "Nivel de inversión",
    acrylic: "$ (Económico)",
    temperedGlass: "$$$ (Superior)",
    folding: "$$ (Medio)",
  },
];

export const boxProcessSteps: BoxProcessStep[] = [
  {
    number: "01",
    title: "Fotos y medidas",
    description:
      "Envío de referencias preliminares por WhatsApp para evaluación inicial.",
  },
  {
    number: "02",
    title: "Revisión técnica",
    description:
      "Toma de medidas para adaptar la estructura al espacio disponible.",
  },
  {
    number: "03",
    title: "Presupuesto",
    description:
      "Propuesta formal con especificaciones de cristales, aluminios y herrajes.",
  },
  {
    number: "04",
    title: "Preparación",
    description:
      "Corte y armado de materiales según medidas.",
  },
  {
    number: "05",
    title: "Instalación",
    description:
      "Montaje de la estructura y paneles en el ambiente.",
    active: true,
  },
];

