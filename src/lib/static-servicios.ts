import type { ServicioFilterItem, ServicioListItem } from "@types";

export const serviciosHeroImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCLC931dzH1AA9QK0jvOTqs7MwamibyZM3lb9_JrmtMs0_LMKYOSboN4_RY_XsxV0f5mdYJ1Nc5VPC6sdkmlHas55OPPMQJEw-G38NaFywqf76K2ARaOJyg4gilb6Abt-ed4i3D9r9y-wlzCqdO2d7XklU1MWe7PubfL9JDzdMJRmUN6-enGxzaLg8tJ2aMS8OROseP_RLon76e8LLkjw-sSAoxFndmPeZWhXYPx8d6oQhrdAwyKld3j7Y0zadQwIwt58I0oBO9dYi6";

export const staticServicios: ServicioListItem[] = [
  {
    key: "carpinteria-aluminio",
    title: "Carpintería de Aluminio",
    href: "/servicios/carpinteria-de-aluminio/",
    image: "/img/home/service-construction.webp",
    description:
      "Fabricación e instalación de carpintería de aluminio para viviendas, oficinas y comercios, con perfiles de alta durabilidad y excelente terminación.",
  },
  {
    key: "ventana",
    title: "Ventana",
    href: "/servicios/ventana/",
    image: "/img/home/hero-home.jpg",
    description:
      "Ventanas de aluminio y vidrio con diseño funcional, mejor aislamiento térmico y soluciones a medida para proyectos residenciales y corporativos.",
  },
  {
    key: "puerta",
    title: "Puerta",
    href: "/servicios/puerta/",
    image: "/img/home/hero-home.webp",
    description:
      "Puertas de aluminio y vidrio templado con instalación profesional, pensadas para seguridad, estética moderna y uso intensivo diario.",
  },
  {
    key: "mampara-divisoria",
    title: "Mampara divisoria",
    href: "/servicios/mampara-divisoria/",
    image: "/img/about.jpg",
    description:
      "Mamparas divisorias para oficinas y espacios comerciales, optimizando iluminación natural, privacidad y distribución eficiente de ambientes.",
  },
  {
    key: "fachada",
    title: "Fachadas",
    href: "/servicios/fachadas/",
    image: "/img/breadcrumbs-bg.jpg",
    description:
      "Sistemas de fachadas en vidrio y aluminio para mejorar imagen arquitectónica, rendimiento técnico y protección en proyectos de gran escala.",
  },
  {
    key: "cortina",
    title: "Cortina",
    href: "/servicios/cortina/",
    image: "/img/home/footer-bg.jpg",
    description:
      "Cortinas de vidrio y soluciones de cerramiento para balcones y frentes, combinando apertura práctica, estética limpia y resistencia estructural.",
  },
  {
    key: "cielo-raso",
    title: "Cielo raso",
    href: "/servicios/cielo-raso/",
    image: "/img/home/service-construction.webp",
    description:
      "Cielo raso desmontable y técnico para espacios corporativos y comerciales, facilitando mantenimiento de instalaciones y acabado uniforme.",
  },
  {
    key: "box-de-bano",
    title: "Box de baño",
    href: "/servicios/box-de-bano/",
    image: "/img/about.jpg",
    description:
      "Box de baño en vidrio templado con herrajes de calidad, diseñado a medida para lograr funcionalidad, seguridad y estilo contemporáneo.",
  },
];

export const staticServicioFilters: ServicioFilterItem[] = [
  { key: "all", label: "Todas las Soluciones" },
  ...staticServicios.map((servicio) => ({
    key: servicio.key,
    label: servicio.title,
  })),
];
