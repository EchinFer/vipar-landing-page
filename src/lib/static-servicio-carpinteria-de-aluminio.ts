export interface AluminumSystemCard {
  image: string;
  title: string;
  description: string;
  idealFor: string[];
  solvedProblems: string[];
  tags: string[];
  ctaLabel: string;
}

export interface AluminumChallengeItem {
  icon: string;
  title: string;
  description: string;
}

export const aluminumHeroImage =
  "https://vipar.moochsoft.com/obras/vivienda-trotte/aberturas-aluminio-cristal-vivienda-trotte-01.webp";

export const aluminumHeroSpecs = [
  { label: "Perfilaría", value: "Aluminio según proyecto" },
  { label: "Vidriado", value: "Vidrio según requerimiento" },
  { label: "Cierre", value: "Según sistema y uso" },
];

export const aluminumChallengeItems: AluminumChallengeItem[] = [
  {
    icon: "bi-droplet",
    title: "Control de entrada de luz y ventilación",
    description: "Definir el tipo de apertura según ventilación, entrada de luz y condiciones del espacio.",
  },
  {
    icon: "bi-arrows-collapse",
    title: "Deformación por calor",
    description:
      "El sistema se define según el tipo de uso, exposición y condiciones del espacio.",
  },
  {
    icon: "bi-lock",
    title: "Tipos de cierre según sistema",
    description: "Distintas opciones de herrajes y cerraduras según el tipo de puerta y uso del espacio.",
  },
];

export const aluminumSystems: AluminumSystemCard[] = [
  {
    image:
      "https://vipar.moochsoft.com/obras/vivienda-lc/puertas-aluminio-vivienda-lc-01.webp",
    title: "Puertas batientes de aluminio",
    description:
      "Sistema de apertura pivotante para accesos principales e interiores donde el espacio de barrido no es una limitante.",
    idealFor: [
      "Accesos principales a viviendas",
      "Puertas interiores en comercios",
      "Sectores de circulación frecuente",
    ],
    solvedProblems: [
      "Apertura controlada con cierre limpio",
      "Adaptable a distintos tipos de herrajes",
    ],
    tags: ["Apertura frontal", "Cierre limpio"],
    ctaLabel: "Cotizar batiente",
  },
  {
    image:
      "https://vipar.moochsoft.com/obras/recoleta-asuncion/ventana-puerta-corrediza-aluminio-recoleta-asuncion-01.webp",
    title: "Puertas corredizas de aluminio",
    description:
      "Sistemas de desplazamiento sobre rieles que amplían la percepción visual y el aprovechamiento espacial. Útiles para integrar ambientes interiores con exteriores.",
    idealFor: [
      "Salidas a galerías y patios",
      "Balcones en departamentos",
      "Divisiones de ambientes amplios",
    ],
    solvedProblems: [
      "Mayor espacio disponible al abrir",
      "Continuidad visual entre ambientes",
    ],
    tags: ["Desplazamiento horizontal", "Sistema según apertura"],
    ctaLabel: "Cotizar corrediza",
  },
];
