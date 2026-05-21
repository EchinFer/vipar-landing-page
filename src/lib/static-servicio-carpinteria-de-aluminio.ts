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
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBzBy-5zjDXmXv4IGeZo9dwkWwvA8U-JVxNkqkwGd7K8dSoNtRkK8lQxhf_hMqtOTz78ErPCEAcqR3riFuMThijhFGT865URpyXwlUuLMJdrs6RmwLsR4VslpUaA57sD6Sbpr5Zd7GPXwnKVRXtZ08un-oeMfsHlU2W2FEse9AkkLq5oloe2vIPIV5e9k0UAOvl16itbdB5WxovEUJBgQupxQC0I1TQxdTUbxDnAYBfdbxJsLc-1mULCLNYElfxUeHL1dYtwOQ07dzj";

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
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAmaxrsGImcIX8kmQzBUrkxyJH9EVhvCEc3yGMizUZDp53uVGg7Rwtd9fdGUPVs0mt23UF_2hTPomv0Unomt7kx0NRZXjmst-jpcwo-Spm_LSIvUzqsDLWksoxtnBtcYGEluUClIDcr5IO-35rqEb1tmQNZofC90NOzTPB51KTwqdMC2-moGbfGLVoV5FJ60a_nvYoC9kk4LSyg7tcCwNLuAkRZHjUg8gXDH4ODEY9mveHA67q4Wco_dmY7MJjmHFlhD9QhnvrLAXyj",
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
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAgUPSovzoXWYbZs0PrcdjMlwX1piiO2BZdJkK_HfqcWNcmoU448Be-h-3urpeSTgmWeT8z9aVyudKvTfi9OjRkH763ozCl5vnmwY9lM9blMR-p0GBh0bVOULiHICJ7l8DFHjIUguP7qAn1EQRSGDUOG3U4V8drC-x7MVLBSjVOsLsEp1GlK-GWXoPG9vjxymzwhJainhCVq8T7nd1NHd5ZVtG9Yy7dfr3OG6isHLoJ3sF_GCgGGuSAk6Ym3I9yMI9fWC7coC7tUQnQ",
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
