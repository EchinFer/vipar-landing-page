import serviciosHeroImageAsset from "@assets/image/services-hero.png";
import type { ServicioFilterItem, ServicioListItem } from "@types";

export const serviciosHeroImage = serviciosHeroImageAsset;

export const staticServicios: ServicioListItem[] = [
  {
    key: "carpinteria-aluminio",
    title: "Carpintería de Aluminio",
    href: "/servicios/carpinteria-de-aluminio/",
    image: "https://vipar.moochsoft.com/obras/vivienda-trotte/aberturas-aluminio-cristal-vivienda-trotte-01.webp",
    alt: "Aberturas de aluminio y cristal instaladas en vivienda por VIPAR",
    description:
      "Carpintería de aluminio para viviendas, oficinas y comercios, según medidas y tipo de apertura requerido por la obra.",
  },
  {
    key: "ventanas",
    title: "Ventanas",
    href: "/servicios/ventanas/",
    image: "https://vipar.moochsoft.com/obras/recoleta-asuncion/ventana-puerta-corrediza-aluminio-recoleta-asuncion-01.webp",
    alt: "Ventanas y puertas corredizas de aluminio en edificio residencial",
    description:
      "Ventanas de aluminio y vidrio orientadas a proyectos residenciales y corporativos, según medidas y condiciones del vano.",
  },
  {
    key: "puertas",
    title: "Puertas",
    href: "/servicios/puertas/",
    image: "https://vipar.moochsoft.com/obras/vivienda-lc/puertas-aluminio-vivienda-lc-01.webp",
    alt: "Puerta de carpintería de aluminio instalada en vivienda",
    description:
      "Puertas de aluminio y vidrio templado para accesos, espacios comerciales y uso corporativo, según medidas y tipo de apertura.",
  },
  {
    key: "mamparas-divisorias",
    title: "Mamparas divisorias",
    href: "/servicios/mamparas-divisorias/",
    image: "https://vipar.moochsoft.com/obras/cooperativa-medalla-milagrosa-central/mamparas-vidrio-cooperativa-medalla-milagrosa-01.webp",
    alt: "Mamparas de vidrio para espacio institucional realizadas por VIPAR",
    description:
      "Mamparas divisorias para oficinas y espacios comerciales, con opciones en cristal y vidrio templado según requerimiento del proyecto.",
  },
  {
    key: "fachada",
    title: "Fachadas",
    href: "/servicios/fachadas/",
    image: "https://vipar.moochsoft.com/obras/sucursal-tigo-mariano-roque-alonso/fachada-comercial-sucursal-tigo-mra-01.webp",
    alt: "Fachada comercial con cristal templado en sucursal Tigo Mariano Roque Alonso",
    description:
      "Sistemas de fachadas en vidrio y aluminio para proyectos de escala comercial, corporativa o residencial, según especificación del proyecto.",
  },
  {
    key: "cortinas",
    title: "Cortinas",
    href: "/servicios/cortinas/",
    image: "https://vipar.moochsoft.com/obras/mariscal-lopez-asuncion/cerramiento-vidrio-cortinas-plegables-quincho-edificio-brasilia-01.webp",
    alt: "Cerramiento de vidrio con cortinas plegables en quincho de edificio",
    description:
      "Cortinas de vidrio y cerramientos para balcones y frentes, con distintas opciones de apertura según el espacio y tipo de obra.",
  },
  {
    key: "cielo-raso",
    title: "Cielo raso",
    href: "/servicios/cielo-raso/",
    image: "https://vipar.moochsoft.com/obras/virgen-del-huerto-asuncion/cielo-raso-panel-led-instalacion-medica-asuncion-01.webp",
    alt: "Cielo raso con paneles LED en instalación institucional",
    description:
      "Cielo raso para espacios corporativos y comerciales, con sistemas desmontables o fijos según la necesidad de cada proyecto.",
  },
  {
    key: "box-de-bano",
    title: "Box de baño",
    href: "/servicios/box-de-bano/",
    image: "https://vipar.moochsoft.com/obras/vivienda/box-bano-vidrio-templado-vivienda-01.webp",
    alt: "Box de baño en vidrio templado instalado en vivienda",
    description:
      "Box de baño en vidrio templado diseñado según las medidas y condiciones del espacio, con distintas configuraciones de apertura.",
  },
];

export const staticServicioFilters: ServicioFilterItem[] = [
  { key: "all", label: "Todas las Soluciones" },
  ...staticServicios.map((servicio) => ({
    key: servicio.key,
    label: servicio.title,
  })),
];

