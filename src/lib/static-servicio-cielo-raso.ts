export interface CeilingEnvironmentItem {
  image: string;
  title: string;
  description: string;
  featured?: boolean;
}

export interface CeilingMetricItem {
  value: string;
  label: string;
}

export interface CeilingSystemItem {
  icon: string;
  title: string;
  description: string;
  bullets: string[];
}

export interface CeilingDetailItem {
  icon: string;
  title: string;
  description: string;
}

export interface CeilingFaqItem {
  question: string;
  answer: string;
}

export const ceilingHeroImage =
  "https://vipar.moochsoft.com/obras/virgen-del-huerto-asuncion/cielo-raso-panel-led-instalacion-medica-asuncion-01.webp";

export const ceilingEnvironments: CeilingEnvironmentItem[] = [
  {
    image:
      "https://vipar.moochsoft.com/obras/virgen-del-huerto-asuncion/cielo-raso-panel-led-instalacion-medica-asuncion-02.webp",
    title: "Residencial",
    description: "Mejora visual y orden de instalaciones para tu hogar.",
    featured: true,
  },
  {
    image:
      "https://vipar.moochsoft.com/obras/san-lorenzo-central/cielo-raso-led-vidriera-aluminio-san-lorenzo-central-01.webp",
    title: "Comercial",
    description: "Versatilidad y opciones de mantenimiento ágil para tu local.",
  },
  {
    image:
      "https://vipar.moochsoft.com/obras/asuncion-norte-2017/cielo-raso-torre-provenza-asuncion-01.webp",
    title: "Corporativo",
    description: "Soluciones para oficinas con terminación continua o modular.",
  },
];

export const ceilingMetrics: CeilingMetricItem[] = [
  { value: "✓", label: "Permite ordenar instalaciones" },
  { value: "✓", label: "Mejora la terminación visual del ambiente" },
  { value: "✓", label: "Facilita mantenimiento según el sistema" },
  { value: "✓", label: "Adapta el espacio a su uso" },
];

export const ceilingSystems: CeilingSystemItem[] = [
  {
    icon: "bi-grid-3x3-gap",
    title: "Cielo raso desmontable",
    description:
      "Estructuras ideales para acceso a instalaciones y mantenimiento rápido.",
    bullets: ["Fácil registro de instalaciones", "Mantenimiento ágil"],
  },
  {
    icon: "bi-layers",
    title: "Cielo raso de Durlock / junta tomada",
    description:
      "Superficies continuas de acabado liso para un mejor diseño interior.",
    bullets: ["Terminación continua", "Adaptable a distintos diseños"],
  },
  {
    icon: "bi-aspect-ratio",
    title: "Cielo raso de PVC",
    description:
      "Solución práctica y lavable, ideal para diversos ambientes.",
    bullets: ["Fácil limpieza", "Montaje según condiciones del espacio"],
  },
  {
    icon: "bi-view-list",
    title: "Cielo raso Eucatex / modular",
    description:
      "Placas modulares que se adaptan a diferentes tipos de proyectos.",
    bullets: ["Terminación prolija", "Opciones variadas"],
  },
];

export const ceilingDetailImage =
  "https://vipar.moochsoft.com/obras/san-antonio-central/drywall-cielo-raso-local-comercial-san-antonio-central-01.webp";

export const ceilingDetails: CeilingDetailItem[] = [
  {
    icon: "bi-tools",
    title: "Mantenimiento",
    description:
      "Sistemas que pueden facilitar el registro de instalaciones eléctricas y aire acondicionado según las opciones elegidas.",
  },
  {
    icon: "bi-check-circle",
    title: "Terminación y acabado",
    description:
      "Permite ocultar estructuras del techo original y obtener una superficie renovada en el ambiente.",
  },
  {
    icon: "bi-house",
    title: "Versatilidad de uso",
    description:
      "Opciones adecuadas tanto para viviendas particulares como para proyectos comerciales o corporativos.",
  },
];

export const ceilingFaqs: CeilingFaqItem[] = [
  {
    question: "¿Qué tipos de cielo raso ofrece VIPAR?",
    answer:
      "VIPAR puede orientar opciones como PVC, Durlock, desmontable, Eucatex u otros sistemas según el tipo de ambiente y condiciones de la obra.",
  },
  {
    question: "¿Qué datos necesito para cotizar?",
    answer:
      "Fotos del espacio, medidas aproximadas, ubicación de la obra, tipo de ambiente y referencias del resultado esperado.",
  },
  {
    question: "¿Qué cielo raso conviene para una oficina?",
    answer:
      "Depende de si se necesita acceso a instalaciones, mantenimiento frecuente, terminación continua o una solución modular.",
  },
  {
    question: "¿Puedo cotizar sin plano?",
    answer:
      "Sí. Podés enviar fotos, medidas aproximadas y una descripción del espacio para recibir orientación inicial.",
  },
  {
    question: "¿Cuánto tarda la instalación?",
    answer:
      "Depende del sistema, medidas, preparación del espacio y coordinación de obra. El plazo se confirma al cotizar.",
  },
];
