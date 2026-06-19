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
  "https://vipar.moochsoft.com/obras/cooperativa-medalla-milagrosa-central/mamparas-vidrio-cooperativa-medalla-milagrosa-01.webp";

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
    description: "Define cuánto aislamiento visual y acústico necesita cada sala, puesto o área de reunión antes de elegir cristal, Durlock o Eucatex.",
  },
  {
    title: "Luz y estética",
    description: "El cristal suele favorecer el paso de luz y la imagen corporativa; otras soluciones priorizan separación y lectura más opaca del ambiente.",
  },
  {
    title: "Instalación",
    description: "Los tiempos de obra, el tipo de montaje y la posibilidad de reconfigurar el espacio cambian según el sistema elegido.",
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
    note: "Recomendadas cuando la estética y la luz pesan más que la separación acústica.",
  },
  {
    title: "Mamparas Eucatex",
    description:
      "Solución modular para subdivisiones operativas o administrativas donde importa flexibilidad de layout y velocidad de ejecución.",
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
    label: "Control de ruido",
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
  { title: "Oficinas corporativas", description: "Divisiones interiores para puestos, salas, directorios y recepciones con imagen más ordenada." },
  { title: "Locales comerciales", description: "Divisiones funcionales para atención, back office y áreas de apoyo." },
  { title: "Empresas e industrias", description: "Separación de áreas operativas según uso, circulación y necesidad de mantenimiento." },
  { title: "Clínicas médicas", description: "Privacidad, limpieza y operación según el sistema elegido." },
  { title: "Obras temporales", description: "Cerramientos desmontables y escalables para reorganizar rápido el espacio." },
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
    answer: "Depende del nivel de privacidad buscado, el paso de luz deseado, la imagen corporativa y la velocidad de obra que necesita el proyecto.",
  },
  {
    question: "¿Qué datos necesito para cotizar?",
    answer: "Conviene contar con medidas aproximadas, uso del ambiente, fotos o plano, y saber si priorizás privacidad, luz o flexibilidad de layout.",
  },
  {
    question: "¿Puedo cotizar sin plano?",
    answer: "Sí, es posible brindar una cotización inicial o rango de precios; aunque el presupuesto final depende de medidas, uso y condiciones del espacio.",
  },
  {
    question: "¿Qué diferencia hay entre cristal templado, Durlock y Eucatex?",
    answer: "Las diferencias radican en la privacidad, la estética, la flexibilidad futura y los tiempos de obra. La mejor opción depende del uso del ambiente y de cómo querés operar ese espacio.",
  },
  {
    question: "¿Cuánto tarda la instalación?",
    answer: "El plazo de obra varía de acuerdo al volumen y la complejidad. Depende de medidas, uso, condiciones del espacio y sistema elegido.",
  },
];
