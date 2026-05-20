import type { ServicioFilterItem, ServicioListItem } from "@types";

export const serviciosHeroImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCLC931dzH1AA9QK0jvOTqs7MwamibyZM3lb9_JrmtMs0_LMKYOSboN4_RY_XsxV0f5mdYJ1Nc5VPC6sdkmlHas55OPPMQJEw-G38NaFywqf76K2ARaOJyg4gilb6Abt-ed4i3D9r9y-wlzCqdO2d7XklU1MWe7PubfL9JDzdMJRmUN6-enGxzaLg8tJ2aMS8OROseP_RLon76e8LLkjw-sSAoxFndmPeZWhXYPx8d6oQhrdAwyKld3j7Y0zadQwIwt58I0oBO9dYi6";

export const staticServicios: ServicioListItem[] = [
  {
    key: "carpinteria-aluminio",
    title: "CarpinterÃ­a de Aluminio",
    href: "/servicios/carpinteria-de-aluminio/",
    image: "/img/home/service-construction.webp",
    description:
      "FabricaciÃ³n e instalaciÃ³n de carpinterÃ­a de aluminio para viviendas, oficinas y comercios, con perfiles de alta durabilidad y excelente terminaciÃ³n.",
  },
  {
    key: "ventanas",
    title: "Ventanas",
    href: "/servicios/ventanas/",
    image: "/img/home/hero-home.jpg",
    description:
      "Ventanas de aluminio y vidrio con diseÃ±o funcional, mejor aislamiento tÃ©rmico y soluciones a medida para proyectos residenciales y corporativos.",
  },
  {
    key: "puertas",
    title: "Puertas",
    href: "/servicios/puertas/",
    image: "/img/home/hero-home.webp",
    description:
      "Puertas de aluminio y vidrio templado con instalaciÃ³n profesional, pensadas para seguridad, estÃ©tica moderna y uso intensivo diario.",
  },
  {
    key: "mamparas-divisorias",
    title: "Mamparas divisorias",
    href: "/servicios/mamparas-divisorias/",
    image: "/img/about.jpg",
    description:
      "Mamparas divisorias para oficinas y espacios comerciales, optimizando iluminaciÃ³n natural, privacidad y distribuciÃ³n eficiente de ambientes.",
  },
  {
    key: "fachada",
    title: "Fachadas",
    href: "/servicios/fachadas/",
    image: "/img/breadcrumbs-bg.jpg",
    description:
      "Sistemas de fachadas en vidrio y aluminio para mejorar imagen arquitectÃ³nica, rendimiento tÃ©cnico y protecciÃ³n en proyectos de gran escala.",
  },
  {
    key: "cortinas",
    title: "Cortinas",
    href: "/servicios/cortinas/",
    image: "/img/home/footer-bg.jpg",
    description:
      "Cortinas de vidrio y soluciones de cerramiento para balcones y frentes, combinando apertura prÃ¡ctica, estÃ©tica limpia y resistencia estructural.",
  },
  {
    key: "cielo-raso",
    title: "Cielo raso",
    href: "/servicios/cielo-raso/",
    image: "/img/home/service-construction.webp",
    description:
      "Cielo raso desmontable y tÃ©cnico para espacios corporativos y comerciales, facilitando mantenimiento de instalaciones y acabado uniforme.",
  },
  {
    key: "box-de-bano",
    title: "Box de baÃ±o",
    href: "/servicios/box-de-bano/",
    image: "/img/about.jpg",
    description:
      "Box de baÃ±o en vidrio templado con herrajes de calidad, diseÃ±ado a medida para lograr funcionalidad, seguridad y estilo contemporÃ¡neo.",
  },
];

export const staticServicioFilters: ServicioFilterItem[] = [
  { key: "all", label: "Todas las Soluciones" },
  ...staticServicios.map((servicio) => ({
    key: servicio.key,
    label: servicio.title,
  })),
];

