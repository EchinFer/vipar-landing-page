export interface MamparaCaseItem {
  title: string;
  description: string;
}

export interface MamparaFactorItem {
  title: string;
  description: string;
}

export interface MamparaTypeCardItem {
  title: string;
  description: string;
  bullets: string[];
  note: string;
}

export interface MamparaComparisonRow {
  label: string;
  cristal: string;
  eucatex: string;
  durlock: string;
}

export interface MamparaSectorItem {
  title: string;
  description: string;
}

export interface MamparaSymptomItem {
  title: string;
  description: string;
}

export interface MamparaProcessStep {
  title: string;
  description: string;
}

export interface MamparaTrustStat {
  value: string;
  label: string;
}

export interface MamparaFaqItem {
  question: string;
  answer: string;
}

export const mamparaHeroImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDtZPhdR8GJ_E7xW7jb4gKVOWBalBQA9JvrUepR8PDiIRknf59Yk386a8xxjnGIZmwyEwal2wbWdcoe5ENTS-8jJlZsf_xs0mKn_zkZfOgMUAY18_qFjr6xTsgq0r-Vhc0-xx3W87pBUKcb8uh1oUbSVPS9rdruf6uf7uAiL9AMI6smSivdrt6WSuoGkg1UYqq9NnNbHUbUhhKeCxtnAdgAtTS6vpn2HcvUJSjPl7vkGZnMcCNNaTYHvaNi8B1qAgAFa0uNSsZ2_bqp";

export const mamparaHeroTags = ["Cristal templado", "Eucatex", "Durlock"];

export const mamparaProblemCases: MamparaCaseItem[] = [
  {
    title: "Salas de reuniones",
    description: "División de espacios para reuniones, atención o trabajo interno según el nivel de privacidad buscado.",
  },
  {
    title: "Despachos gerenciales",
    description: "Divisiones en cristal templado para mantener luz natural y una imagen más ordenada del espacio.",
  },
  {
    title: "Consultorios médicos",
    description: "Opciones higiénicas y de fácil limpieza en durlock o eucatex.",
  },
  {
    title: "Subdivisión industrial",
    description: "Soluciones económicas y rápidas de montar o desmontar.",
  },
];

export const mamparaFactors: MamparaFactorItem[] = [
  {
    title: "Acústica y privacidad",
    description: "El nivel de privacidad, luz, mantenimiento y tipo de instalación depende del material elegido y de las condiciones del espacio.",
  },
  {
    title: "Luz y estética",
    description: "El nivel de privacidad, luz, mantenimiento y tipo de instalación depende del material elegido y de las condiciones del espacio.",
  },
  {
    title: "Instalación",
    description: "El nivel de privacidad, luz, mantenimiento y tipo de instalación depende del material elegido y de las condiciones del espacio.",
  },
];

export const mamparaTypeCards: MamparaTypeCardItem[] = [
  {
    title: "Mamparas de cristal templado",
    description:
      "Ideales para oficinas, salas de reunión y espacios donde la transparencia y la luz natural son prioridad.",
    bullets: [
      "Imagen corporativa limpia y contemporánea",
      "Paso de luz sin bloquear visuales",
      "Opciones con perfilería o herrajes minimalistas",
    ],
    note: "Recomendadas cuando la estética y la luz pesan más que el aislamiento total.",
  },
  {
    title: "Mamparas Eucatex",
    description:
      "Solución modular, rápida y económica para subdivisiones operativas o administrativas.",
    bullets: [
      "Sistema modular según condiciones de obra",
      "Buena relación costo-beneficio",
      "Fácil ampliación o reubicación futura",
    ],
    note: "Adecuadas para oficinas funcionales que priorizan flexibilidad y velocidad de obra.",
  },
  {
    title: "Tabiques de durlock",
    description:
      "Divisiones de tabiquería seca con mejor desempeño acústico y posibilidad de ocultar instalaciones internas.",
    bullets: [
      "Puede aportar mayor privacidad según composición y terminación",
      "Permite instalaciones ocultas",
      "Terminación sólida y corporativa",
    ],
    note: "Una opción a considerar cuando se busca privacidad, robustez y acabado definitivo.",
  },
];

export const mamparaComparisonRows: MamparaComparisonRow[] = [
  {
    label: "Privacidad visual",
    cristal: "Baja a media",
    eucatex: "Alta",
    durlock: "Alta",
  },
  {
    label: "Aislamiento acústico",
    cristal: "Medio",
    eucatex: "Medio",
    durlock: "Alto",
  },
  {
    label: "Paso de luz natural",
    cristal: "Alto",
    eucatex: "Nulo",
    durlock: "Nulo",
  },
  {
    label: "Velocidad de instalación",
    cristal: "Media",
    eucatex: "Alta",
    durlock: "Media",
  },
  {
    label: "Reubicación futura",
    cristal: "Media",
    eucatex: "Alta",
    durlock: "Nula",
  },
];

export const mamparaSectorItems: MamparaSectorItem[] = [
  { title: "Oficinas corporativas", description: "Estética premium y control de luz." },
  { title: "Locales comerciales", description: "Divisiones rápidas para áreas de atención y apoyo." },
  { title: "Empresas e industrias", description: "Durabilidad y seguridad para operación diaria." },
  { title: "Clínicas médicas", description: "Higiene, privacidad y limpieza sencilla." },
  { title: "Obras temporales", description: "Cerramientos desmontables y escalables." },
];

export const mamparaSymptoms: MamparaSymptomItem[] = [
  {
    title: "Ruido excesivo en áreas operativas",
    description:
      "Si las conversaciones cruzan las oficinas afectando la concentración, falta aislamiento acústico adecuado.",
  },
  {
    title: 'Espacios oscuros o "encerrados"',
    description:
      "Las paredes ciegas actuales bloquean la luz natural y aumentan el consumo eléctrico.",
  },
  {
    title: "Falta de privacidad en reuniones",
    description:
      "Cuando no existen boxes cerrados para llamadas sensibles o reuniones con clientes, la operación pierde calidad.",
  },
];

export const mamparaProcessSteps: MamparaProcessStep[] = [
  {
    title: "Contacto",
    description: "Recepción de la necesidad inicial vía web o WhatsApp.",
  },
  {
    title: "Revisión de medidas",
    description: "Toma de medidas exactas y evaluación del sitio.",
  },
  {
    title: "Orientación del sistema",
    description: "Recomendación del material más adecuado según uso, espacio y presupuesto.",
  },
  {
    title: "Cotización según alcance",
    description: "Envío de cotización con alcances y plazos.",
  },
  {
    title: "Preparación",
    description: "Preparación de materiales según proyecto.",
  },
  {
    title: "Montaje según condiciones del espacio",
    description: "Instalación en obra por personal calificado.",
  },
];

export const mamparaTrustStats: MamparaTrustStat[] = [
  { value: "3", label: "Tipos de sistema" },
  { value: "Sectores de aplicación", label: "Diversos rubros" },
  { value: "PY", label: "Operaciones en Paraguay" },
];

export const mamparaEditorialTags = [
  "Tabiques de oficina",
  "Cerramientos de vidrio",
  "Paredes de durlock",
  "Divisores de ambientes",
  "Instalación de blindex",
  "Mamparas acústicas",
  "Estructuras de aluminio",
];

export const mamparaFaqs: MamparaFaqItem[] = [
  {
    question: "¿Qué tipo de mampara conviene para una oficina?",
    answer: "La elección ideal depende de medidas, uso, condiciones del espacio y sistema elegido.",
  },
  {
    question: "¿Qué datos necesito para cotizar?",
    answer: "Conviene contar con medidas aproximadas, uso del ambiente y condiciones del espacio para orientar el sistema adecuado.",
  },
  {
    question: "¿Puedo cotizar sin plano?",
    answer: "Sí, es posible brindar una cotización inicial o rango de precios; aunque el presupuesto final depende de medidas, uso y condiciones del espacio.",
  },
  {
    question: "¿Qué diferencia hay entre cristal templado, Durlock y Eucatex?",
    answer: "Las diferencias radican en el aislamiento, estética y tiempos de obra. La mejor opción depende de medidas, uso, condiciones del espacio y sistema elegido.",
  },
  {
    question: "¿Cuánto tarda la instalación?",
    answer: "El plazo de obra varía de acuerdo al volumen y la complejidad. Depende de medidas, uso, condiciones del espacio y sistema elegido.",
  },
];

