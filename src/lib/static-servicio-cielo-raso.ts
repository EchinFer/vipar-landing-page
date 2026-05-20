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
  "https://lh3.googleusercontent.com/aida-public/AB6AXuBTThe-DxuXVPa_P17jGDfd043E1s_vY_i_qkWdwLXZVxVu_3o5z7rUMcyfiFYPy1HQMC9UORhzngw326OMUEKpd5DSqZg-mnD_Lf5zUsf_nKMrRrUPndkmaWoiDle8sYkGmPcAuCt1MRatKqatl-T10NIPPdEOJUOpjx3-UfdnbHmCzN5oBko3b82sbFRgIrMbFY_CF6D39InpQBBw1ylDjJ1-PYEH11u3pjFy_jKekDaswBjxaRUnvsJwpRg_W5Knf1Bw5IvIun5K";

export const ceilingEnvironments: CeilingEnvironmentItem[] = [
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDus0MUds3B1q_uSq8q7mQzDhk29OBssfBjXZqiZhSIxRklfZrheXv1NoIT-eyXUXQVedbz0f1hEhhIpIQQn8iMxLaMtslhGMDXtSs-90Hsoj3KPyBn04wG_9vyy_96-eCqdBw6_vx_8zytqM-uURHNhzcmvkHTVFDZnEvmMMKpqOaLoR7F3hFLvYBKz4u3thFbXv7dsMbJG3KDU8HhyrGXlKUxvgJfdLHUQuxr_g3vJgzH_qSYtD1lT0d_IwHQdK3zvCDxCfKv8yGQ",
    title: "Residencial",
    description: "Mejora visual y orden de instalaciones para tu hogar.",
    featured: true,
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCBOb1PWZbu4lMjUJGA5v2Lepb5LeYYd33bc_Tjl1w9-XWwwYSD1T7AZuQhNoapbmvbPJ9RxxWaHC4Cy6iPfpUb0jfbl0oVGOi-3Q3cNwmG_4OA5BMMLvgtVsCw36TJtCfNCBTzl9VNBczkFvUFWXbq9QEx1gZ_wmz0hdflAt2UGORhdiTtyzbWj4hsB_SQk5LA8xC73NTwxg4D1rRUerhM8E1WFErW7PcC9BzVfUjdaKnIo5TTar5XJPXILkjGGsd_-LYAHgSG4BVl",
    title: "Comercial",
    description: "Versatilidad y opciones de mantenimiento ágil para tu local.",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAsbiypoa941La3MDHPCUvlLgFgDL22MMmAgJru4tqwgvqM8pbGwT226yd6rV0OqfjVsVIGPFh6Za-05qV-IeBzJ7IJojQJ8xAlnM01MvWLwyj3DZgZbnr3iF4KJWvPKv5SL21OmcmDvrDFLw1R_Iw40UAt367KXCSgOutIDQiQvMS3i0WkSp8_TELcgprE4SYSK0l-5AY_o_RT7GyzsWYZrntjDhfAgPMezSi5RgRUw1xduSAmnJDAD4zbrzXvlMDd_V5qPddp6sP4",
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
  "https://lh3.googleusercontent.com/aida-public/AB6AXuARSNj5BWtTallB4nWBrw4ct7nGMG243G079B9dM7Vw-WSZKQGmkgCwPNycJMI7QFEhfGbx8_X4gUc0Y5AbEWePYK85rX-txsh5FMttBch9bDWKtvdv1ferzTfH0cp4ee_z-Vrp8tkTp_QOjNl7DDLwxItzaHx0xg4CLhgGazCGWQl4PbNo_FnO4ZuFM-jQA8hRa9cwSStVVJbAKm1MkvUg0ynesDakMq7jCxPAETO_bMsqu_7IZVUpm5KvbcJq_Bi1vL_CaSgqJH5t";

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
