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
  { label: "Perfilería", value: "Línea Herrero / Alta Prestación" },
  { label: "Vidriado", value: "Templado 10 mm / DVH" },
  { label: "Cierre", value: "Multipunto Seguridad" },
];

export const aluminumChallengeItems: AluminumChallengeItem[] = [
  {
    icon: "bi-droplet",
    title: "Filtraciones de agua y aire",
    description: "Resuelto con doble burlete perimetral y felpas densas.",
  },
  {
    icon: "bi-arrows-collapse",
    title: "Deformación por calor",
    description:
      "El aluminio mantiene su rigidez estructural independientemente de la temperatura.",
  },
  {
    icon: "bi-lock",
    title: "Vulnerabilidad de seguridad",
    description: "Integración de cerraduras multipunto en perfilerías robustas.",
  },
];

export const aluminumSystems: AluminumSystemCard[] = [
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAmaxrsGImcIX8kmQzBUrkxyJH9EVhvCEc3yGMizUZDp53uVGg7Rwtd9fdGUPVs0mt23UF_2hTPomv0Unomt7kx0NRZXjmst-jpcwo-Spm_LSIvUzqsDLWksoxtnBtcYGEluUClIDcr5IO-35rqEb1tmQNZofC90NOzTPB51KTwqdMC2-moGbfGLVoV5FJ60a_nvYoC9kk4LSyg7tcCwNLuAkRZHjUg8gXDH4ODEY9mveHA67q4Wco_dmY7MJjmHFlhD9QhnvrLAXyj",
    title: "Puertas batientes de aluminio",
    description:
      "Sistema de apertura pivotante tradicional optimizado para máxima estanqueidad. Ideal para accesos principales e interiores donde el espacio de barrido no es una limitante.",
    idealFor: [
      "Accesos principales a viviendas",
      "Puertas interiores de alto tránsito comercial",
      "Salidas de emergencia",
    ],
    solvedProblems: [
      "Máxima hermeticidad acústica y térmica",
      "Integración sencilla de cerraduras electromagnéticas",
    ],
    tags: ["Bisagras reforzadas", "Doble contacto"],
    ctaLabel: "Cotizar batiente",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAgUPSovzoXWYbZs0PrcdjMlwX1piiO2BZdJkK_HfqcWNcmoU448Be-h-3urpeSTgmWeT8z9aVyudKvTfi9OjRkH763ozCl5vnmwY9lM9blMR-p0GBh0bVOULiHICJ7l8DFHjIUguP7qAn1EQRSGDUOG3U4V8drC-x7MVLBSjVOsLsEp1GlK-GWXoPG9vjxymzwhJainhCVq8T7nd1NHd5ZVtG9Yy7dfr3OG6isHLoJ3sF_GCgGGuSAk6Ym3I9yMI9fWC7coC7tUQnQ",
    title: "Puertas corredizas de aluminio",
    description:
      "Sistemas de desplazamiento sobre rieles que maximizan la amplitud visual y el aprovechamiento espacial. Perfectas para integrar ambientes interiores con exteriores.",
    idealFor: [
      "Salidas a galerías y patios",
      "Balcones en departamentos",
      "Divisiones de ambientes amplios",
    ],
    solvedProblems: [
      "Ahorro total de espacio de barrido",
      "Grandes luces de acristalamiento",
    ],
    tags: ["Rodamientos regulables", "Felpa perimetral"],
    ctaLabel: "Cotizar corrediza",
  },
];
