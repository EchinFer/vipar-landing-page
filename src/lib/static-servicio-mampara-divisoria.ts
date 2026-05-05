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
    description: "Aislamiento acústico y privacidad visual controlada.",
  },
  {
    title: "Despachos gerenciales",
    description: "Estética premium con cristal templado de seguridad.",
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
    title: "Acústica requerida",
    description:
      "No todos los materiales aíslan el sonido igual. El cristal simple difiere del doble vidriado o del durlock con lana de vidrio.",
  },
  {
    title: "Paso de luz natural",
    description:
      "Si la oficina interior requiere luz de las ventanas externas, el cristal total o parcial se vuelve determinante.",
  },
  {
    title: "Instalaciones eléctricas",
    description:
      "El durlock permite ocultar cables y cajas de luz dentro del tabique; el cristal requiere ductos visibles o perfiles especiales.",
  },
  {
    title: "Seguridad estructural",
    description:
      "En áreas de alto tránsito o industriales, se exigen cristales templados o laminados que no astillen en caso de impacto.",
  },
  {
    title: "Mantenimiento e higiene",
    description:
      "Clínicas, laboratorios y cocinas necesitan superficies de limpieza frecuente y buena respuesta a humedad o productos químicos.",
  },
  {
    title: "Flexibilidad futura",
    description:
      "No es lo mismo una división definitiva que un sistema desmontable para reorganizar la planta dentro de algunos meses.",
  },
];

export const mamparaTypeCards: MamparaTypeCardItem[] = [
  {
    title: "Mamparas de cristal templado",
    description:
      "Ideales para oficinas premium, salas de reunión y espacios donde la transparencia y la luz natural son prioridad.",
    bullets: [
      "Imagen corporativa limpia y contemporánea",
      "Paso de luz sin bloquear visuales",
      "Opciones con perfilería o herrajes minimalistas",
    ],
    note: "Recomendadas cuando la estética y la luz pesan más que el aislamiento total.",
  },
  {
    title: "Mamparas de eucatex o melamina",
    description:
      "Solución modular, rápida y económica para subdivisiones operativas, administrativas o temporales.",
    bullets: [
      "Montaje y desmontaje ágil",
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
      "Excelente base para aislamiento acústico",
      "Permite instalaciones ocultas",
      "Terminación sólida y corporativa",
    ],
    note: "La mejor opción cuando se busca privacidad, robustez y acabado definitivo.",
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
    title: "Relevamiento",
    description: "Visita técnica para toma de medidas exactas y evaluación del sitio.",
  },
  {
    title: "Asesoría",
    description: "Recomendación del sistema más adecuado según uso, normativa y presupuesto.",
  },
  {
    title: "Presupuesto",
    description: "Envío de cotización formal detallada con alcances y plazos.",
  },
  {
    title: "Fabricación",
    description: "Preparación de perfiles, paneles o cristales según proyecto aprobado.",
  },
  {
    title: "Montaje",
    description: "Instalación limpia en obra por personal técnico calificado.",
  },
];

export const mamparaTrustStats: MamparaTrustStat[] = [
  { value: "15+", label: "Años de experiencia" },
  { value: "500+", label: "Proyectos ejecutados" },
  { value: "100%", label: "Garantía de obra" },
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
    question: "¿Cuánto tiempo demora la instalación de una mampara?",
    answer:
      "Depende del material y de los metros cuadrados. Eucatex suele resolverse en pocos días; cristal templado requiere medición previa y fabricación a medida antes del montaje.",
  },
  {
    question: "¿Se pueden desmontar y reutilizar si cambia la oficina?",
    answer:
      "Las mamparas de eucatex son las más modulares. Las de cristal pueden reubicarse si las medidas acompañan. Los tabiques de durlock no son reutilizables.",
  },
  {
    question: "¿Las mamparas de cristal aíslan bien el ruido?",
    answer:
      "Ofrecen un aislamiento básico o medio. Para necesidades de privacidad alta conviene evaluar doble vidriado o combinar con tabiques ciegos de mejor desempeño acústico.",
  },
];
