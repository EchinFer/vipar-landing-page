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
    description: "Divisiones para consultorios o espacios de atención según el nivel de privacidad y mantenimiento requerido.",
  },
  {
    title: "Subdivisión industrial",
    description: "Divisiones funcionales para separar áreas operativas según el tipo de espacio.",
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
      "Solución modular para subdivisiones operativas o administrativas.",
    bullets: [
      "Sistema modular según condiciones de obra",
      "Alternativa funcional según presupuesto y uso del espacio",
      "Puede adaptarse a cambios futuros según el sistema instalado",
    ],
    note: "Adecuadas para oficinas funcionales que priorizan flexibilidad y velocidad de obra.",
  },
  {
    title: "Tabiques de durlock",
    description:
      "Divisiones de tabiquería seca con mayor privacidad visual o separación física según composición y terminación.",
    bullets: [
      "Puede aportar mayor privacidad según composición y terminación",
      "Puede permitir integración de instalaciones según diseño y condiciones de obra",
      "Terminación continua para espacios interiores",
    ],
    note: "Una opción a considerar cuando se busca privacidad, robustez y acabado definitivo.",
  },
];

export const mamparaComparisonRows: MamparaComparisonRow[] = [
  {
    label: "Privacidad visual",
    cristal: "Depende del sistema",
    eucatex: "Mayor",
    durlock: "Mayor",
  },
  {
    label: "Aislamiento acústico",
    cristal: "Depende del sistema",
    eucatex: "Limitado",
    durlock: "Puede ser mayor según composición",
  },
  {
    label: "Paso de luz natural",
    cristal: "Mayor",
    eucatex: "No aplica / limitado",
    durlock: "No aplica / limitado",
  },
  {
    label: "Condiciones de montaje",
    cristal: "Depende del sistema",
    eucatex: "Puede variar según el sistema",
    durlock: "Depende del sistema",
  },
  {
    label: "Posibilidad de adaptación futura",
    cristal: "Limitada",
    eucatex: "Posible",
    durlock: "No aplica / limitado",
  },
];

export const mamparaSectorItems: MamparaSectorItem[] = [
  { title: "Oficinas corporativas", description: "Divisiones interiores con paso de luz según el sistema elegido." },
  { title: "Locales comerciales", description: "Divisiones funcionales para áreas de atención y apoyo." },
  { title: "Empresas e industrias", description: "Separación de áreas operativas según uso y condiciones del espacio." },
  { title: "Clínicas médicas", description: "Privacidad y mantenimiento según el sistema elegido." },
  { title: "Obras temporales", description: "Cerramientos desmontables y escalables." },
];

export const mamparaSymptoms: MamparaSymptomItem[] = [
  {
    title: "Ruido excesivo en áreas operativas",
    description:
      "Si las conversaciones cruzan las oficinas afectando la concentración, puede ser necesario revisar una división más adecuada del ambiente.",
  },
  {
    title: 'Espacios oscuros o "encerrados"',
    description:
      "Las paredes ciegas actuales pueden limitar el aprovechamiento de la luz natural.",
  },
  {
    title: "Falta de privacidad en reuniones",
    description:
      "Cuando no existen boxes cerrados para llamadas sensibles o reuniones con clientes, puede ser necesario definir espacios más reservados.",
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
    description: "Montaje según medidas, sistema elegido y condiciones del espacio.",
  },
];

export const mamparaTrustStats: MamparaTrustStat[] = [
  { value: "3", label: "Tipos de sistema" },
  { value: "Sectores de aplicación", label: "Diversos rubros" },
  { value: "PY", label: "Operaciones en Paraguay" },
];

export const mamparaEditorialTags = [
  "Mamparas para oficinas",
  "Divisiones interiores",
  "Mamparas de cristal templado",
  "Tabiques de Durlock",
  "Mamparas Eucatex",
  "Divisores de ambientes",
  "Cerramientos interiores",
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

