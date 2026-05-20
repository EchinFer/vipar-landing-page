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
    description: "Confort acústico y calidez visual para espacios íntimos y modernos.",
    featured: true,
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCBOb1PWZbu4lMjUJGA5v2Lepb5LeYYd33bc_Tjl1w9-XWwwYSD1T7AZuQhNoapbmvbPJ9RxxWaHC4Cy6iPfpUb0jfbl0oVGOi-3Q3cNwmG_4OA5BMMLvgtVsCw36TJtCfNCBTzl9VNBczkFvUFWXbq9QEx1gZ_wmz0hdflAt2UGORhdiTtyzbWj4hsB_SQk5LA8xC73NTwxg4D1rRUerhM8E1WFErW7PcC9BzVfUjdaKnIo5TTar5XJPXILkjGGsd_-LYAHgSG4BVl",
    title: "Comercial",
    description: "Versatilidad y mantenimiento ágil para áreas de alto tránsito.",
  },
  {
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuAsbiypoa941La3MDHPCUvlLgFgDL22MMmAgJru4tqwgvqM8pbGwT226yd6rV0OqfjVsVIGPFh6Za-05qV-IeBzJ7IJojQJ8xAlnM01MvWLwyj3DZgZbnr3iF4KJWvPKv5SL21OmcmDvrDFLw1R_Iw40UAt367KXCSgOutIDQiQvMS3i0WkSp8_TELcgprE4SYSK0l-5AY_o_RT7GyzsWYZrntjDhfAgPMezSi5RgRUw1xduSAmnJDAD4zbrzXvlMDd_V5qPddp6sP4",
    title: "Corporativo",
    description: "Soluciones para espacios de trabajo con requerimientos de gestión acústica.",
  },
];

export const ceilingMetrics: CeilingMetricItem[] = [
  { value: "3", label: "Sistemas disponibles" },
  { value: "3", label: "Ambientes tipo" },
];

export const ceilingSystems: CeilingSystemItem[] = [
  {
    icon: "bi-grid-3x3-gap",
    title: "Modulares PVC / Armstrong",
    description:
      "Estructuras desmontables ideales para acceso a instalaciones técnicas y mantenimiento rápido.",
    bullets: ["Resistente a la humedad", "Acceso fácil a instalaciones"],
  },
  {
    icon: "bi-layers",
    title: "Junta tomada Durlock",
    description:
      "Superficies continuas de acabado monolítico para diseño arquitectónico.",
    bullets: ["Acabado liso premium", "Flexibilidad formal"],
  },
  {
    icon: "bi-soundwave",
    title: "Bafles y nubes acústicas",
    description:
      "Soluciones suspendidas para corrección fónica en espacios abiertos y diseño industrial.",
    bullets: ["Alta absorción acústica", "Estética escultórica"],
  },
];

export const ceilingDetailImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuARSNj5BWtTallB4nWBrw4ct7nGMG243G079B9dM7Vw-WSZKQGmkgCwPNycJMI7QFEhfGbx8_X4gUc0Y5AbEWePYK85rX-txsh5FMttBch9bDWKtvdv1ferzTfH0cp4ee_z-Vrp8tkTp_QOjNl7DDLwxItzaHx0xg4CLhgGazCGWQl4PbNo_FnO4ZuFM-jQA8hRa9cwSStVVJbAKm1MkvUg0ynesDakMq7jCxPAETO_bMsqu_7IZVUpm5KvbcJq_Bi1vL_CaSgqJH5t";

export const ceilingDetails: CeilingDetailItem[] = [
  {
    icon: "bi-tools",
    title: "Mantenimiento simplificado",
    description:
      "Sistemas diseñados para el registro fácil de plenos técnicos, instalaciones eléctricas y climatización sin comprometer la estructura.",
  },
  {
    icon: "bi-volume-mute",
    title: "Acondicionamiento acústico",
    description:
      "Utilizamos materiales de porosidad controlada que contribuyen a reducir el eco y mejorar la inteligibilidad en el ambiente.",
  },
  {
    icon: "bi-stars",
    title: "Estética atemporal",
    description:
      "Integración invisible de luminarias y difusores. El cielo raso deja de ser un techo para convertirse en una pieza de diseño.",
  },
];

export const ceilingFaqs: CeilingFaqItem[] = [
  {
    question: "¿Cuál es el sistema ideal para una oficina de planta abierta?",
    answer:
      "Recomendamos sistemas de bafles acústicos o techos modulares de fibra mineral con alto coeficiente de absorción (NRC) para controlar la reverberación del sonido en espacios de trabajo compartidos.",
  },
  {
    question: "¿Qué altura mínima se requiere para instalar un cielo raso?",
    answer:
      "Depende del sistema y las instalaciones que se deseen ocultar. Generalmente, se requiere un pleno mínimo de 10 a 15 cm para estructuras de junta tomada y hasta 20 cm para sistemas modulares con conductos de aire.",
  },
  {
    question: "¿Son los materiales resistentes al fuego?",
    answer:
      "Sí, trabajamos con materiales con buenas propiedades de resistencia al fuego, como placas de yeso y fibras minerales. Las especificaciones aplicables dependen del tipo de proyecto y la normativa local vigente.",
  },
];
