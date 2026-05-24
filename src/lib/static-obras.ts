export interface StaticObraCategory {
  name: string;
  slug: string;
}

export interface StaticObra {
  slug: string;
  titulo: string;
  descripcion: string;
  resumen: string;
  imagen: string;
  imagenes: string[];
  cliente: string;
  fecha: string;
  ubicacion: string;
  sector: string;
  sectorLabel: string;
  systemLabel: string;
  displayTags: string[];
  filterTags: string[];
  category: StaticObraCategory[];
  featured?: boolean;
}

export type RelatedServiceKey =
  | "box-de-bano"
  | "carpinteria-de-aluminio"
  | "cielo-raso"
  | "mampara-divisoria"
  | "puerta"
  | "ventana"
  | "cortina"
  | "fachadas";

export const obraFilters = [
  { key: "all", label: "Todos" },
  { key: "cristal-templado", label: "Cristal templado" },
  { key: "aluminio", label: "Aluminio" },
  { key: "fachadas", label: "Fachadas" },
  { key: "mamparas", label: "Mamparas" },
  { key: "cielos-rasos", label: "Cielos rasos" },
  { key: "puertas", label: "Puertas" },
  { key: "ventanas", label: "Ventanas" },
];

export const obrasHeroImage =
  "https://vipar.moochsoft.com/obras/showroom-vipar/fachadas-vidrio-aluminio-showroom-vipar-01.webp";

export const staticObras: StaticObra[] = [
  {
    slug: "showroom-vipar",
    titulo: "Showroom VIPAR",
    descripcion:
      "Instalación completa de sistemas de cerramiento interior y exterior, con integración de perfiles de aluminio y paños de vidrio de gran formato según el proyecto.",
    resumen:
      "Soluciones integrales en vidrio y aluminio para nuestro propio espacio de exhibición técnico.",
    imagen: "https://vipar.moochsoft.com/obras/showroom-vipar/fachadas-vidrio-aluminio-showroom-vipar-01.webp",
    imagenes: [
      "https://vipar.moochsoft.com/obras/showroom-vipar/fachadas-vidrio-aluminio-showroom-vipar-02.webp",
    ],
    cliente: "VIPAR S.A.",
    fecha: "2025",
    ubicacion: "Ñemby, Central",
    sector: "corporativo",
    sectorLabel: "Corporativo",
    systemLabel: "Fachadas de vidrio y aluminio",
    displayTags: ["Cristal", "Aluminio", "Terminaciones"],
    filterTags: ["cristal-templado", "aluminio", "fachadas"],
    category: [{ name: "Corporativo", slug: "corporativo" }],
  },
  {
    slug: "sucursal-tigo-mra",
    titulo: "Sucursal Tigo - M.R.A.",
    descripcion:
      "Cerramientos y terminaciones integrales con fachada principal en cristal templado para alto tránsito comercial.",
    resumen:
      "Cerramientos y terminaciones integrales. Fachada principal en cristal templado.",
    imagen: "https://vipar.moochsoft.com/obras/sucursal-tigo-mariano-roque-alonso/fachada-comercial-sucursal-tigo-mra-01.webp",
    imagenes: [
      "https://vipar.moochsoft.com/obras/sucursal-tigo-mariano-roque-alonso/fachada-comercial-sucursal-tigo-mra-02.webp",
      "https://vipar.moochsoft.com/obras/sucursal-tigo-mariano-roque-alonso/fachada-comercial-sucursal-tigo-mra-03.webp",
    ],
    cliente: "Tigo",
    fecha: "2024",
    ubicacion: "Mariano Roque Alonso",
    sector: "comercial",
    sectorLabel: "Comercial",
    systemLabel: "Sistemas de fachada comercial",
    displayTags: ["Fachadas", "Cristal templado"],
    filterTags: ["fachadas", "cristal-templado", "aluminio"],
    category: [{ name: "Comercial", slug: "comercial" }],
    featured: true,
  },
  {
    slug: "edificio-concordia",
    titulo: "Edificio Concordia",
    descripcion:
      "Soluciones integrales para obra con provisión e instalación de aberturas de aluminio según medidas y condiciones del proyecto.",
    resumen:
      "Provisión e instalación de aberturas de aluminio según medidas y condiciones del proyecto.",
    imagen: "https://vipar.moochsoft.com/obras/edificio-concordia/vidrio-aluminio-edificio-concordia-01.webp",
    imagenes: [
      "https://vipar.moochsoft.com/obras/edificio-concordia/vidrio-aluminio-edificio-concordia-02.webp",
      "https://vipar.moochsoft.com/obras/edificio-concordia/vidrio-aluminio-edificio-concordia-03.webp",
      "https://vipar.moochsoft.com/obras/edificio-concordia/vidrio-aluminio-edificio-concordia-04.webp",
    ],
    cliente: "Desarrollo Concordia",
    fecha: "2024",
    ubicacion: "Asunción",
    sector: "residencial",
    sectorLabel: "Residencial",
    systemLabel: "Soluciones residenciales en vidrio",
    displayTags: ["Residencial", "Aluminio"],
    filterTags: ["aluminio", "ventanas", "cristal-templado"],
    category: [{ name: "Residencial", slug: "residencial" }],
    featured: true,
  },
  {
    slug: "cooperativa-medalla",
    titulo: "Cooperativa Medalla Milagrosa",
    descripcion:
      "Terminaciones arquitectónicas interiores con divisiones en cristal y perfilería a medida.",
    resumen:
      "Terminaciones arquitectónicas interiores. Divisiones en cristal y perfilería a medida.",
    imagen: "https://vipar.moochsoft.com/obras/cooperativa-medalla-milagrosa-central/mamparas-vidrio-cooperativa-medalla-milagrosa-01.webp",
    imagenes: [],
    cliente: "Cooperativa Medalla",
    fecha: "2023",
    ubicacion: "Fernando de la Mora",
    sector: "institucional",
    sectorLabel: "Institucional",
    systemLabel: "Particiones institucionales en vidrio",
    displayTags: ["Mamparas", "Cristal"],
    filterTags: ["mamparas", "cristal-templado", "aluminio"],
    category: [{ name: "Institucional", slug: "institucional" }],
  },
  {
    slug: "residencia-san-lorenzo",
    titulo: "Residencia San Lorenzo",
    descripcion:
      "Aberturas de aluminio y grandes paños de vidrio para residencia, con foco en cierre, durabilidad y lectura arquitectónica limpia.",
    resumen:
      "Aberturas de aluminio y grandes paños de vidrio para residencia.",
    imagen:
      "https://vipar.moochsoft.com/obras/recoleta-asuncion/ventana-puerta-corrediza-aluminio-recoleta-asuncion-01.webp",
    imagenes: [],
    cliente: "Residencia privada",
    fecha: "2023",
    ubicacion: "San Lorenzo",
    sector: "residencial",
    sectorLabel: "Residencial",
    systemLabel: "Ventanas residenciales premium",
    displayTags: ["Ventanas", "Aluminio"],
    filterTags: ["ventanas", "aluminio", "cristal-templado"],
    category: [{ name: "Residencial", slug: "residencial" }],
  },
  {
    slug: "oficinas-corporativas-itau",
    titulo: "Oficinas Corporativas Itau",
    descripcion:
      "Tabiques de vidrio con tratamiento acústico y perfilería de aluminio para oficinas corporativas que requieren privacidad sin perder apertura visual.",
    resumen:
      "Tabiques de vidrio con tratamiento acústico y perfilería de aluminio.",
    imagen:
      "https://vipar.moochsoft.com/obras/cooperativa-medalla-milagrosa-central/mamparas-vidrio-cooperativa-medalla-milagrosa-01.webp",
    imagenes: [],
    cliente: "Itau",
    fecha: "2022",
    ubicacion: "Asunción",
    sector: "corporativo",
    sectorLabel: "Corporativo",
    systemLabel: "Particiones acústicas en vidrio",
    displayTags: ["Mamparas", "Aluminio"],
    filterTags: ["mamparas", "aluminio", "cristal-templado"],
    category: [{ name: "Corporativo", slug: "corporativo" }],
  },
  {
    slug: "vivienda-trotte",
    titulo: "Vivienda Trotte",
    descripcion:
      "Barandas con herrajes. Ventanas proyectante de carpintería de aluminio, puertas de vidrio templado todo en color verde.",
    resumen:
      "Ventanas proyectantes y puertas de vidrio templado en carpintería de aluminio color verde.",
    imagen: "https://vipar.moochsoft.com/obras/vivienda-trotte/aberturas-aluminio-cristal-vivienda-trotte-01.webp",
    imagenes: [
      "https://vipar.moochsoft.com/obras/vivienda-trotte/aberturas-aluminio-cristal-vivienda-trotte-02.webp",
      "https://vipar.moochsoft.com/obras/vivienda-trotte/aberturas-aluminio-cristal-vivienda-trotte-03.webp",
    ],
    cliente: "Vivienda privada",
    fecha: "2025",
    ubicacion: "Paraguay",
    sector: "residencial",
    sectorLabel: "Residencial",
    systemLabel: "Aberturas de aluminio y cristal",
    displayTags: ["Aluminio", "Ventanas", "Cristal templado"],
    filterTags: ["aluminio", "ventanas", "cristal-templado"],
    category: [{ name: "Residencial", slug: "residencial" }],
  },
  {
    slug: "vivienda-seket",
    titulo: "Vivienda Seket",
    descripcion:
      "Baranda de vidrio templado de diseño moderno.",
    resumen:
      "Baranda en vidrio templado para vivienda residencial.",
    imagen: "https://vipar.moochsoft.com/obras/vivienda-seket/barandas-vidrio-templado-vivienda-seket-01.webp",
    imagenes: [],
    cliente: "Vivienda privada",
    fecha: "2025",
    ubicacion: "Paraguay",
    sector: "residencial",
    sectorLabel: "Residencial",
    systemLabel: "Barandas de vidrio templado",
    displayTags: ["Cristal", "Aluminio"],
    filterTags: ["cristal-templado", "aluminio"],
    category: [{ name: "Residencial", slug: "residencial" }],
  },
  {
    slug: "local-comercial-capiata",
    titulo: "Local Comercial – Capiatá",
    descripcion:
      "Vidrio templado 10mm incoloro para frente comercial de alto tránsito.",
    resumen:
      "Fachada en vidrio templado 10mm incoloro para local comercial.",
    imagen: "https://vipar.moochsoft.com/obras/local-comercial-capiata/vidriera-fachada-local-comercial-capiata-01.webp",
    imagenes: [],
    cliente: "Cliente comercial",
    fecha: "2025",
    ubicacion: "Capiatá",
    sector: "comercial",
    sectorLabel: "Comercial",
    systemLabel: "Vidrieras y fachadas",
    displayTags: ["Fachadas", "Cristal templado"],
    filterTags: ["fachadas", "cristal-templado"],
    category: [{ name: "Comercial", slug: "comercial" }],
  },
  {
    slug: "oficina-divisorias",
    titulo: "Oficina – Divisorias y Cielo Raso",
    descripcion:
      "Cielo raso desmontable de placas de yeso cartón 60x60 con perfilería fosco. Divisorias de oficina de vidrio templado con perfiles de aluminio entubado.",
    resumen:
      "Cielo raso desmontable y divisorias de vidrio templado con aluminio entubado.",
    imagen: "https://vipar.moochsoft.com/obras/oficina/cielo-raso-mamparas-oficina-01.webp",
    imagenes: [],
    cliente: "Cliente corporativo",
    fecha: "2025",
    ubicacion: "Paraguay",
    sector: "corporativo",
    sectorLabel: "Corporativo",
    systemLabel: "Cielo raso y mamparas",
    displayTags: ["Cielo raso", "Mamparas", "Aluminio"],
    filterTags: ["cielos-rasos", "mamparas", "aluminio"],
    category: [{ name: "Corporativo", slug: "corporativo" }],
  },
  {
    slug: "vivienda-box-de-bano",
    titulo: "Vivienda – Box de Baño",
    descripcion:
      "Box de baño de vidrio templado 8mm incoloro con perfiles de aluminio color fosco natural.",
    resumen:
      "Box de baño en vidrio templado 8mm con perfiles de aluminio fosco.",
    imagen: "https://vipar.moochsoft.com/obras/vivienda/box-bano-vidrio-templado-vivienda-01.webp",
    imagenes: [],
    cliente: "Vivienda privada",
    fecha: "2025",
    ubicacion: "Paraguay",
    sector: "residencial",
    sectorLabel: "Residencial",
    systemLabel: "Box de baño en vidrio templado",
    displayTags: ["Box de baño", "Cristal"],
    filterTags: ["cristal-templado", "aluminio"],
    category: [{ name: "Residencial", slug: "residencial" }],
  },
  {
    slug: "vivienda-lc",
    titulo: "Vivienda LC",
    descripcion:
      "Puerta de carpintería de aluminio color fosco.",
    resumen:
      "Puerta de carpintería de aluminio color fosco para vivienda residencial.",
    imagen: "https://vipar.moochsoft.com/obras/vivienda-lc/puertas-aluminio-vivienda-lc-01.webp",
    imagenes: [
      "https://vipar.moochsoft.com/obras/vivienda-lc/puertas-aluminio-vivienda-lc-02.webp",
      "https://vipar.moochsoft.com/obras/vivienda-lc/puertas-aluminio-vivienda-lc-03.webp",
    ],
    cliente: "Vivienda privada",
    fecha: "2025",
    ubicacion: "Paraguay",
    sector: "residencial",
    sectorLabel: "Residencial",
    systemLabel: "Puertas de carpintería de aluminio",
    displayTags: ["Puertas", "Aluminio"],
    filterTags: ["puertas", "aluminio"],
    category: [{ name: "Residencial", slug: "residencial" }],
  },
  {
    slug: "oficina-cooperativa-medalla-milagrosa",
    titulo: "Oficina Cooperativa Medalla Milagrosa",
    descripcion:
      "Cortina vertical de tela poliéster para control solar en espacios de trabajo.",
    resumen:
      "Cortinas verticales de tela poliéster para oficina de cooperativa.",
    imagen: "https://vipar.moochsoft.com/obras/oficina-cooperativa-medalla-milagrosa/cortinas-divisorias-oficina-cooperativa-medalla-01.webp",
    imagenes: [],
    cliente: "Cooperativa Medalla Milagrosa",
    fecha: "2025",
    ubicacion: "Paraguay",
    sector: "institucional",
    sectorLabel: "Institucional",
    systemLabel: "Cortinas y divisorias",
    displayTags: ["Cortinas", "Mamparas"],
    filterTags: ["mamparas"],
    category: [{ name: "Institucional", slug: "institucional" }],
  },
  {
    slug: "tigo-central",
    titulo: "Tigo – Central",
    descripcion:
      "Cielo raso de yeso y vidrios de paños fijo para sucursal comercial.",
    resumen:
      "Cielo raso de yeso y vidriería de paños fijos para Tigo Central.",
    imagen: "https://vipar.moochsoft.com/obras/tigo-central/cielo-raso-vidrio-tigo-central-01.webp",
    imagenes: [],
    cliente: "Tigo",
    fecha: "2025",
    ubicacion: "Central",
    sector: "comercial",
    sectorLabel: "Comercial",
    systemLabel: "Cielo raso y vidrios fijos",
    displayTags: ["Cielo raso", "Cristal"],
    filterTags: ["cielos-rasos", "cristal-templado"],
    category: [{ name: "Comercial", slug: "comercial" }],
  },
  {
    slug: "maria-antonieta-shopping-mariano-roque-alonso",
    titulo: "María Antonieta – Shopping MRA",
    descripcion:
      "Vidrieras de paño fijo incoloro para local en shopping de alto tránsito.",
    resumen:
      "Vidrieras de paño fijo para local comercial en Shopping Mariano Roque Alonso.",
    imagen: "https://vipar.moochsoft.com/obras/maria-antonieta-shopping-mariano-roque-alonso/vidriera-pano-fijo-maria-antonieta-shopping-mra-01.webp",
    imagenes: [],
    cliente: "María Antonieta",
    fecha: "2025",
    ubicacion: "Mariano Roque Alonso",
    sector: "comercial",
    sectorLabel: "Comercial",
    systemLabel: "Vidrieras de paño fijo",
    displayTags: ["Fachadas", "Cristal"],
    filterTags: ["fachadas", "cristal-templado"],
    category: [{ name: "Comercial", slug: "comercial" }],
  },
  {
    slug: "galeria-senador-long",
    titulo: "Galería Senador Long",
    descripcion:
      "Paños fijos de vidriera incoloro con puertas batientes de abrir para galería comercial.",
    resumen:
      "Vidrieras de paño fijo y puertas batientes de cristal para galería comercial.",
    imagen: "https://vipar.moochsoft.com/obras/galeria-senador-long/fachadas-puertas-vidrio-galeria-senador-long-01.webp",
    imagenes: ["https://vipar.moochsoft.com/obras/galeria-senador-long/fachadas-puertas-vidrio-galeria-senador-long-02.webp"],
    cliente: "Lino Pederzani",
    fecha: "2025",
    ubicacion: "Paraguay",
    sector: "comercial",
    sectorLabel: "Comercial",
    systemLabel: "Fachadas y puertas de vidrio",
    displayTags: ["Fachadas", "Cristal templado"],
    filterTags: ["fachadas", "cristal-templado"],
    category: [{ name: "Comercial", slug: "comercial" }],
  },
  {
    slug: "cooperativa-medalla-milagrosa-concepcion",
    titulo: "Cooperativa Medalla Milagrosa – Concepción",
    descripcion:
      "Cielo raso desmontable de placas de durlock pintadas con perfilería de aluminio 1.20×60. Mamparas divisorias de eucatex y cortinas horizontales de aluminio.",
    resumen:
      "Cielo raso desmontable, mamparas divisorias y cortinas horizontales para cooperativa en Concepción.",
    imagen: "https://vipar.moochsoft.com/obras/cooperativa-medalla-milagrosa-concepcion/cielo-raso-mamparas-cooperativa-medalla-concepcion-01.webp",
    imagenes: [
      "https://vipar.moochsoft.com/obras/cooperativa-medalla-milagrosa-concepcion/cielo-raso-mamparas-cooperativa-medalla-concepcion-02.webp",
      "https://vipar.moochsoft.com/obras/cooperativa-medalla-milagrosa-concepcion/cielo-raso-mamparas-cooperativa-medalla-concepcion-03.webp",
    ],
    cliente: "Cooperativa Medalla Milagrosa",
    fecha: "2025",
    ubicacion: "Concepción",
    sector: "institucional",
    sectorLabel: "Institucional",
    systemLabel: "Cielo raso y mamparas divisorias",
    displayTags: ["Cielo raso", "Mamparas"],
    filterTags: ["cielos-rasos", "mamparas", "aluminio"],
    category: [{ name: "Institucional", slug: "institucional" }],
  },
  {
    slug: "recoleta-asuncion",
    titulo: "Edificio Residencial – Recoleta",
    descripcion:
      "Instalación de ventanas y puertas corredizas de perfilería de aluminio con vidrio incoloro de gran formato en edificio residencial de alta gama. Los cerramientos permiten integrar los ambientes interiores con terrazas y aprovechar al máximo la vista panorámica de Asunción.",
    resumen:
      "Ventanas y puertas corredizas de aluminio y vidrio en edificio residencial premium en Recoleta, Asunción.",
    imagen: "https://vipar.moochsoft.com/obras/recoleta-asuncion/ventana-puerta-corrediza-aluminio-recoleta-asuncion-01.webp",
    imagenes: [
      "https://vipar.moochsoft.com/obras/recoleta-asuncion/ventana-puerta-corrediza-aluminio-recoleta-asuncion-02.webp",
      "https://vipar.moochsoft.com/obras/recoleta-asuncion/ventana-puerta-corrediza-aluminio-recoleta-asuncion-03.webp",
      "https://vipar.moochsoft.com/obras/recoleta-asuncion/ventana-puerta-corrediza-aluminio-recoleta-asuncion-04.webp",
      "https://vipar.moochsoft.com/obras/recoleta-asuncion/ventana-puerta-corrediza-aluminio-recoleta-asuncion-05.webp",
      "https://vipar.moochsoft.com/obras/recoleta-asuncion/ventana-puerta-corrediza-aluminio-recoleta-asuncion-06.webp",
      "https://vipar.moochsoft.com/obras/recoleta-asuncion/ventana-puerta-corrediza-aluminio-recoleta-asuncion-07.webp",
      "https://vipar.moochsoft.com/obras/recoleta-asuncion/ventana-puerta-corrediza-aluminio-recoleta-asuncion-08.webp",
      "https://vipar.moochsoft.com/obras/recoleta-asuncion/ventana-puerta-corrediza-aluminio-recoleta-asuncion-09.webp",
      "https://vipar.moochsoft.com/obras/recoleta-asuncion/ventana-puerta-corrediza-aluminio-recoleta-asuncion-10.webp",
      "https://vipar.moochsoft.com/obras/recoleta-asuncion/ventana-puerta-corrediza-aluminio-recoleta-asuncion-11.webp",
      "https://vipar.moochsoft.com/obras/recoleta-asuncion/ventana-puerta-corrediza-aluminio-recoleta-asuncion-12.webp",
    ],
    cliente: "Edificio Residencial Recoleta",
    fecha: "2017",
    ubicacion: "Recoleta, Asunción",
    sector: "residencial",
    sectorLabel: "Residencial",
    systemLabel: "Ventanas y puertas corredizas de aluminio",
    displayTags: ["Aluminio", "Cristal", "Ventanas"],
    filterTags: ["ventanas", "aluminio", "cristal-templado"],
    category: [{ name: "Residencial", slug: "residencial" }],
  },
  {
    slug: "virgen-del-huerto-asuncion",
    titulo: "Instalación Médica – Virgen del Huerto",
    descripcion:
      "Instalación de cielo raso desmontable con placas de mineral fiber y paneles LED integrados para corredor y áreas clínicas de institución médica. El sistema facilita el acceso para mantenimiento de instalaciones y acompaña los requerimientos de higiene propios del sector salud.",
    resumen:
      "Cielo raso con paneles LED para institución médica en Barrio Virgen del Huerto, Asunción.",
    imagen: "https://vipar.moochsoft.com/obras/virgen-del-huerto-asuncion/cielo-raso-panel-led-instalacion-medica-asuncion-01.webp",
    imagenes: [
      "https://vipar.moochsoft.com/obras/virgen-del-huerto-asuncion/cielo-raso-panel-led-instalacion-medica-asuncion-02.webp",
      "https://vipar.moochsoft.com/obras/virgen-del-huerto-asuncion/cielo-raso-panel-led-instalacion-medica-asuncion-03.webp",
      "https://vipar.moochsoft.com/obras/virgen-del-huerto-asuncion/cielo-raso-panel-led-instalacion-medica-asuncion-04.webp",
      "https://vipar.moochsoft.com/obras/virgen-del-huerto-asuncion/cielo-raso-panel-led-instalacion-medica-asuncion-05.webp",
      "https://vipar.moochsoft.com/obras/virgen-del-huerto-asuncion/cielo-raso-panel-led-instalacion-medica-asuncion-06.webp",
      "https://vipar.moochsoft.com/obras/virgen-del-huerto-asuncion/cielo-raso-panel-led-instalacion-medica-asuncion-07.webp",
      "https://vipar.moochsoft.com/obras/virgen-del-huerto-asuncion/cielo-raso-panel-led-instalacion-medica-asuncion-08.webp",
      "https://vipar.moochsoft.com/obras/virgen-del-huerto-asuncion/cielo-raso-panel-led-instalacion-medica-asuncion-09.webp",
      "https://vipar.moochsoft.com/obras/virgen-del-huerto-asuncion/cielo-raso-panel-led-instalacion-medica-asuncion-10.webp",
      "https://vipar.moochsoft.com/obras/virgen-del-huerto-asuncion/cielo-raso-panel-led-instalacion-medica-asuncion-11.webp",
      "https://vipar.moochsoft.com/obras/virgen-del-huerto-asuncion/cielo-raso-panel-led-instalacion-medica-asuncion-12.webp",
    ],
    cliente: "Institución Médica",
    fecha: "2017",
    ubicacion: "Virgen del Huerto, Asunción",
    sector: "institucional",
    sectorLabel: "Institucional",
    systemLabel: "Cielo raso con paneles LED",
    displayTags: ["Cielo raso", "Institucional"],
    filterTags: ["cielos-rasos"],
    category: [{ name: "Institucional", slug: "institucional" }],
  },
  {
    slug: "san-lorenzo-central",
    titulo: "Local Comercial – San Lorenzo",
    descripcion:
      "Proyecto integral de local comercial que incluyó la instalación de cielo raso con placas desmontables y paneles LED empotrados, y vidriera frontal de aluminio y vidrio templado. El resultado es un espacio luminoso y de fácil mantenimiento, apto para retail.",
    resumen:
      "Cielo raso con LED y vidriera de aluminio para local comercial en San Lorenzo.",
    imagen: "https://vipar.moochsoft.com/obras/san-lorenzo-central/cielo-raso-led-vidriera-aluminio-san-lorenzo-central-01.webp",
    imagenes: [
      "https://vipar.moochsoft.com/obras/san-lorenzo-central/cielo-raso-led-vidriera-aluminio-san-lorenzo-central-02.webp",
      "https://vipar.moochsoft.com/obras/san-lorenzo-central/cielo-raso-led-vidriera-aluminio-san-lorenzo-central-03.webp",
      "https://vipar.moochsoft.com/obras/san-lorenzo-central/cielo-raso-led-vidriera-aluminio-san-lorenzo-central-04.webp",
      "https://vipar.moochsoft.com/obras/san-lorenzo-central/cielo-raso-led-vidriera-aluminio-san-lorenzo-central-05.webp",
      "https://vipar.moochsoft.com/obras/san-lorenzo-central/cielo-raso-led-vidriera-aluminio-san-lorenzo-central-06.webp",
      "https://vipar.moochsoft.com/obras/san-lorenzo-central/cielo-raso-led-vidriera-aluminio-san-lorenzo-central-07.webp",
      "https://vipar.moochsoft.com/obras/san-lorenzo-central/cielo-raso-led-vidriera-aluminio-san-lorenzo-central-08.webp",
      "https://vipar.moochsoft.com/obras/san-lorenzo-central/cielo-raso-led-vidriera-aluminio-san-lorenzo-central-09.webp",
    ],
    cliente: "Local Comercial San Lorenzo",
    fecha: "2019",
    ubicacion: "San Lorenzo, Central",
    sector: "comercial",
    sectorLabel: "Comercial",
    systemLabel: "Cielo raso y vidriera de aluminio",
    displayTags: ["Cielo raso", "Aluminio", "Cristal"],
    filterTags: ["cielos-rasos", "aluminio", "fachadas"],
    category: [{ name: "Comercial", slug: "comercial" }],
  },
  {
    slug: "canada-del-ybyray",
    titulo: "IPS – Laboratorio Microbiología",
    descripcion:
      "Construcción y equipamiento de área de laboratorio clínico para el Instituto de Previsión Social del Paraguay. El proyecto incluyó tabiques de estructura metálica con placa, y la provisión e instalación de puertas de cristal templado esmerilado con perfilería de aluminio y logo institucional.",
    resumen:
      "Tabiques metálicos y puertas de cristal templado para laboratorio del IPS, Asunción.",
    imagen: "https://vipar.moochsoft.com/obras/canada-del-ybyray/puerta-cristal-esmerilado-laboratorio-ips-asuncion-01.webp",
    imagenes: [
      "https://vipar.moochsoft.com/obras/canada-del-ybyray/puerta-cristal-esmerilado-laboratorio-ips-asuncion-02.webp",
      "https://vipar.moochsoft.com/obras/canada-del-ybyray/puerta-cristal-esmerilado-laboratorio-ips-asuncion-03.webp",
      "https://vipar.moochsoft.com/obras/canada-del-ybyray/puerta-cristal-esmerilado-laboratorio-ips-asuncion-04.webp",
      "https://vipar.moochsoft.com/obras/canada-del-ybyray/puerta-cristal-esmerilado-laboratorio-ips-asuncion-05.webp",
      "https://vipar.moochsoft.com/obras/canada-del-ybyray/puerta-cristal-esmerilado-laboratorio-ips-asuncion-06.webp",
      "https://vipar.moochsoft.com/obras/canada-del-ybyray/puerta-cristal-esmerilado-laboratorio-ips-asuncion-07.webp",
      "https://vipar.moochsoft.com/obras/canada-del-ybyray/puerta-cristal-esmerilado-laboratorio-ips-asuncion-08.webp",
      "https://vipar.moochsoft.com/obras/canada-del-ybyray/puerta-cristal-esmerilado-laboratorio-ips-asuncion-09.webp",
      "https://vipar.moochsoft.com/obras/canada-del-ybyray/puerta-cristal-esmerilado-laboratorio-ips-asuncion-10.webp",
      "https://vipar.moochsoft.com/obras/canada-del-ybyray/puerta-cristal-esmerilado-laboratorio-ips-asuncion-11.webp",
      "https://vipar.moochsoft.com/obras/canada-del-ybyray/puerta-cristal-esmerilado-laboratorio-ips-asuncion-12.webp",
    ],
    cliente: "Instituto de Previsión Social (IPS)",
    fecha: "2022",
    ubicacion: "Cañada del Ybyray, Asunción",
    sector: "institucional",
    sectorLabel: "Institucional",
    systemLabel: "Puertas de cristal templado esmerilado",
    displayTags: ["Cristal templado", "Mamparas", "Institucional"],
    filterTags: ["cristal-templado", "mamparas", "puertas"],
    category: [{ name: "Institucional", slug: "institucional" }],
  },
  {
    slug: "pedro-juan-caballero",
    titulo: "Universidad Pacífico – Ciencias Médicas",
    descripcion:
      "Fachada acristalada de gran escala para sede universitaria en Pedro Juan Caballero. El muro cortina de vidrio reflectivo azul con estructura de aluminio cubre la totalidad de la fachada principal, según las condiciones del proyecto, aportando presencia visual e identidad arquitectónica al edificio.",
    resumen:
      "Muro cortina de vidrio reflectivo azul para edificio de la Universidad Pacífico en Pedro Juan Caballero.",
    imagen: "https://vipar.moochsoft.com/obras/pedro-juan-caballero/fachada-vidrio-universidad-pacifico-pedro-juan-caballero-01.webp",
    imagenes: [
      "https://vipar.moochsoft.com/obras/pedro-juan-caballero/fachada-vidrio-universidad-pacifico-pedro-juan-caballero-02.webp",
      "https://vipar.moochsoft.com/obras/pedro-juan-caballero/fachada-vidrio-universidad-pacifico-pedro-juan-caballero-03.webp",
      "https://vipar.moochsoft.com/obras/pedro-juan-caballero/fachada-vidrio-universidad-pacifico-pedro-juan-caballero-04.webp",
      "https://vipar.moochsoft.com/obras/pedro-juan-caballero/fachada-vidrio-universidad-pacifico-pedro-juan-caballero-05.webp",
      "https://vipar.moochsoft.com/obras/pedro-juan-caballero/fachada-vidrio-universidad-pacifico-pedro-juan-caballero-06.webp",
    ],
    cliente: "Universidad Pacífico",
    fecha: "2022",
    ubicacion: "Pedro Juan Caballero, Amambay",
    sector: "institucional",
    sectorLabel: "Institucional",
    systemLabel: "Muro cortina de vidrio reflectivo",
    displayTags: ["Fachadas", "Cristal templado", "Aluminio"],
    filterTags: ["fachadas", "cristal-templado", "aluminio"],
    category: [{ name: "Institucional", slug: "institucional" }],
    featured: true,
  },
  {
    slug: "alto-parana-presidente-franco",
    titulo: "Local Comercial – Presidente Franco",
    descripcion:
      "Suministro e instalación de ventanas de aluminio de gran formato con vidrio templado incoloro para nuevo local comercial en construcción en Presidente Franco, Alto Paraná. Las ventanas de piso a techo maximizan la iluminación natural y refuerzan la imagen moderna del establecimiento.",
    resumen:
      "Ventanas de aluminio de gran formato para local comercial nuevo en Presidente Franco, Alto Paraná.",
    imagen: "https://vipar.moochsoft.com/obras/alto-parana-presidente-franco/ventanas-aluminio-local-comercial-presidente-franco-01.webp",
    imagenes: [
      "https://vipar.moochsoft.com/obras/alto-parana-presidente-franco/ventanas-aluminio-local-comercial-presidente-franco-02.webp",
      "https://vipar.moochsoft.com/obras/alto-parana-presidente-franco/ventanas-aluminio-local-comercial-presidente-franco-03.webp",
      "https://vipar.moochsoft.com/obras/alto-parana-presidente-franco/ventanas-aluminio-local-comercial-presidente-franco-04.webp",
      "https://vipar.moochsoft.com/obras/alto-parana-presidente-franco/ventanas-aluminio-local-comercial-presidente-franco-05.webp",
    ],
    cliente: "Local Comercial Presidente Franco",
    fecha: "2025",
    ubicacion: "Presidente Franco, Alto Paraná",
    sector: "comercial",
    sectorLabel: "Comercial",
    systemLabel: "Ventanas de aluminio de gran formato",
    displayTags: ["Aluminio", "Ventanas", "Cristal"],
    filterTags: ["ventanas", "aluminio", "cristal-templado"],
    category: [{ name: "Comercial", slug: "comercial" }],
  },
  {
    slug: "san-antonio-central",
    titulo: "Remodelación Comercial – San Antonio",
    descripcion:
      "Remodelación integral de local comercial que incluyó la construcción de tabiques de drywall con terminación de masilla, instalación de cielo raso con artefactos de iluminación empotrados y pisos de porcelanato de gran formato.",
    resumen:
      "Drywall, cielo raso e iluminación empotrada para remodelación de local comercial en San Antonio.",
    imagen: "https://vipar.moochsoft.com/obras/san-antonio-central/drywall-cielo-raso-local-comercial-san-antonio-central-01.webp",
    imagenes: [
      "https://vipar.moochsoft.com/obras/san-antonio-central/drywall-cielo-raso-local-comercial-san-antonio-central-02.webp",
      "https://vipar.moochsoft.com/obras/san-antonio-central/drywall-cielo-raso-local-comercial-san-antonio-central-03.webp",
    ],
    cliente: "Local Comercial San Antonio",
    fecha: "2026",
    ubicacion: "San Antonio, Central",
    sector: "comercial",
    sectorLabel: "Comercial",
    systemLabel: "Drywall y cielo raso",
    displayTags: ["Cielo raso", "Mamparas"],
    filterTags: ["cielos-rasos", "mamparas"],
    category: [{ name: "Comercial", slug: "comercial" }],
  },
  {
    slug: "torre-provenza-asuncion",
    titulo: "Torre Provenza",
    descripcion:
      "Provisión e instalación de ventanas de vidrio templado con perfilería de aluminio y cielo raso desmontable de placas Armstrong en edificio residencial de altura. Trabajo integral de terminaciones realizado en múltiples niveles durante la etapa final de la obra.",
    resumen:
      "Ventanas de vidrio templado y cielo raso desmontable Armstrong para edificio residencial Torre Provenza, Asunción.",
    imagen: "https://vipar.moochsoft.com/obras/asuncion-norte-2017/cielo-raso-torre-provenza-asuncion-01.webp",
    imagenes: [
      "https://vipar.moochsoft.com/obras/asuncion-norte-2017/cielo-raso-torre-provenza-asuncion-02.webp",
      "https://vipar.moochsoft.com/obras/asuncion-norte-2017/cielo-raso-torre-provenza-asuncion-03.webp",
    ],
    cliente: "Marilú Alsina",
    fecha: "2017",
    ubicacion: "Asunción",
    sector: "residencial",
    sectorLabel: "Residencial",
    systemLabel: "Ventanas de vidrio templado y cielo raso",
    displayTags: ["Cielo raso", "Ventanas", "Cristal templado", "Aluminio"],
    filterTags: ["cielos-rasos", "aluminio", "ventanas", "cristal-templado"],
    category: [{ name: "Residencial", slug: "residencial" }],
  },
  {
    slug: "ips-central-asuncion",
    titulo: "IPS Central – Salas de Atención",
    descripcion:
      "Instalación de cielo raso de durlock y mamparas separadoras para salas de atención médica con camillas en el Hospital Central del IPS. Las divisiones permiten generar privacidad entre los puestos de atención manteniendo una circulación fluida dentro del área.",
    resumen:
      "Cielo raso durlock y mamparas divisorias para salas de atención médica en Hospital Central del IPS, Asunción.",
    imagen: "https://vipar.moochsoft.com/obras/asuncion-sur-2020/cielo-raso-mamparas-ips-central-asuncion-01.webp",
    imagenes: [
      "https://vipar.moochsoft.com/obras/asuncion-sur-2020/cielo-raso-mamparas-ips-central-asuncion-02.webp",
      "https://vipar.moochsoft.com/obras/asuncion-sur-2020/cielo-raso-mamparas-ips-central-asuncion-03.webp",
    ],
    cliente: "IPS – Instituto de Previsión Social",
    fecha: "2020",
    ubicacion: "Asunción",
    sector: "institucional",
    sectorLabel: "Institucional",
    systemLabel: "Cielo raso y mamparas institucionales",
    displayTags: ["Cielo raso", "Mamparas", "Institucional"],
    filterTags: ["cielos-rasos", "mamparas", "aluminio"],
    category: [{ name: "Institucional", slug: "institucional" }],
  },
  {
    slug: "edificio-longvillage-asuncion",
    titulo: "Edificio Longvillage",
    descripcion:
      "Provisión e instalación de ventanas corredizas de perfilería de aluminio en múltiples plantas del patio interior de edificio residencial. Trabajo ejecutado en toda la elevación posterior del edificio, logrando uniformidad de terminaciones en cada nivel.",
    resumen:
      "Ventanas corredizas de aluminio en múltiples plantas de edificio residencial Longvillage, Asunción.",
    imagen: "https://vipar.moochsoft.com/obras/asuncion-centro-2020/ventanas-aluminio-edificio-longvillage-asuncion-01.webp",
    imagenes: [],
    cliente: "Edificio Longvillage",
    fecha: "2020",
    ubicacion: "Asunción",
    sector: "residencial",
    sectorLabel: "Residencial",
    systemLabel: "Ventanas corredizas de aluminio",
    displayTags: ["Ventanas", "Aluminio", "Residencial"],
    filterTags: ["ventanas", "aluminio"],
    category: [{ name: "Residencial", slug: "residencial" }],
  },
  {
    slug: "edificio-fortaleza-milano-asuncion",
    titulo: "Edificio Fortaleza Milano",
    descripcion:
      "Instalación de barandas con herrajes en acero inoxidable y paños de vidrio templado en escalera exterior y perímetro de terraza de edificio residencial. El sistema combina postes de acero inoxidable pulido con vidrio transparente, logrando una estética moderna y una lectura limpia del conjunto.",
    resumen:
      "Barandas de acero inoxidable con vidrio templado en escalera y terraza de edificio residencial Fortaleza Milano, Asunción.",
    imagen: "https://vipar.moochsoft.com/obras/asuncion-centro-2021/barandas-vidrio-templado-escalera-fortaleza-milano-01.webp",
    imagenes: [],
    cliente: "Edificio Fortaleza Milano",
    fecha: "2021",
    ubicacion: "Asunción",
    sector: "residencial",
    sectorLabel: "Residencial",
    systemLabel: "Barandas de vidrio templado y acero inoxidable",
    displayTags: ["Barandas", "Cristal templado", "Acero inoxidable"],
    filterTags: ["cristal-templado", "aluminio"],
    category: [{ name: "Residencial", slug: "residencial" }],
  },
  {
    slug: "natatorio-cit-luque",
    titulo: "Natatorio – Club Internacional de Tenis",
    descripcion:
      "Diseño y ejecución de fachada completa en vidrio y aluminio para el natatorio del Club Internacional de Tenis. La envolvente de gran formato genera una visual impactante desde el exterior, permite el ingreso de luz natural a la piscina cubierta y define la imagen arquitectónica del edificio deportivo.",
    resumen:
      "Fachada completa de vidrio y aluminio para el natatorio del Club Internacional de Tenis (CIT), Luque.",
    imagen: "https://vipar.moochsoft.com/obras/asuncion-norte-2025/fachada-vidrio-natatorio-club-internacional-tenis-01.webp",
    imagenes: [],
    cliente: "Club Internacional de Tenis",
    fecha: "2025",
    ubicacion: "Luque, Central",
    sector: "institucional",
    sectorLabel: "Institucional",
    systemLabel: "Fachada de vidrio y aluminio",
    displayTags: ["Fachadas", "Cristal templado", "Aluminio"],
    filterTags: ["fachadas", "cristal-templado", "aluminio"],
    category: [{ name: "Institucional", slug: "institucional" }],
  },
  {
    slug: "tienda-go-caaguazu",
    titulo: "Tienda GO! – Caaguazú III",
    descripcion:
      "Instalación de sistema completo de cubículos sanitarios con mamparas de panel compacto textura granito y puertas de celosía de aluminio color champagne. El sistema ofrece durabilidad, fácil limpieza y estética uniforme para el área de baños de la tienda comercial.",
    resumen:
      "Mamparas de baño con puertas de celosía de aluminio y paneles compactos para Tienda GO! Caaguazú.",
    imagen: "https://vipar.moochsoft.com/obras/caaguazu/mamparas-bano-aluminio-tienda-go-caaguazu-01.webp",
    imagenes: [],
    cliente: "Tienda GO!",
    fecha: "2021",
    ubicacion: "Caaguazú",
    sector: "comercial",
    sectorLabel: "Comercial",
    systemLabel: "Mamparas y puertas de baño en aluminio",
    displayTags: ["Mamparas", "Aluminio", "Comercial"],
    filterTags: ["mamparas", "aluminio"],
    category: [{ name: "Comercial", slug: "comercial" }],
  },
  {
    slug: "auditorio-arandu-loma-pyta",
    titulo: "Salón Auditorio Arandú – Ex Caballería",
    descripcion:
      "Instalación de cerramiento con vidrio templado semi-polarizado y puerta batiente de aluminio para el Salón Auditorio Arandú, ubicado en las instalaciones del Ex Comando de Caballería en Loma Pyta. El vidrio templado con tinte polarizado aporta privacidad y control lumínico al espacio de eventos.",
    resumen:
      "Vidrio templado semi-polarizado y puerta batiente de aluminio para el Auditorio Arandú, Loma Pyta.",
    imagen: "https://vipar.moochsoft.com/obras/loma-pyta-asuncion/vidrio-templado-puerta-batiente-auditorio-arandu-loma-pyta-01.webp",
    imagenes: [
      "https://vipar.moochsoft.com/obras/loma-pyta-asuncion/vidrio-templado-puerta-batiente-auditorio-arandu-loma-pyta-02.webp",
      "https://vipar.moochsoft.com/obras/loma-pyta-asuncion/vidrio-templado-puerta-batiente-auditorio-arandu-loma-pyta-03.webp",
      "https://vipar.moochsoft.com/obras/loma-pyta-asuncion/vidrio-templado-puerta-batiente-auditorio-arandu-loma-pyta-04.webp",
    ],
    cliente: "Salón Auditorio Arandú – Ex Caballería",
    fecha: "2016",
    ubicacion: "Loma Pyta, Asunción",
    sector: "institucional",
    sectorLabel: "Institucional",
    systemLabel: "Vidrio templado polarizado y puerta batiente",
    displayTags: ["Vidrio Templado", "Polarizado", "Aluminio", "Institucional"],
    filterTags: ["cristal-templado", "aluminio"],
    category: [{ name: "Institucional", slug: "institucional" }],
  },
  {
    slug: "quincho-edificio-brasilia-asuncion",
    titulo: "Quincho – Edificio Brasília",
    descripcion:
      "Cerramiento integral del quincho del Edificio Brasília con vidrio transparente y cortinas plegables para control solar. El sistema permite cerrar completamente el espacio protegiéndolo del viento y la lluvia, mientras las cortinas plegables regulan la entrada de luz y calor sin perder la vista al exterior.",
    resumen:
      "Cierre de quincho con vidrio transparente y cortinas plegables para protección solar en Edificio Brasília, Asunción.",
    imagen: "https://vipar.moochsoft.com/obras/mariscal-lopez-asuncion/cerramiento-vidrio-cortinas-plegables-quincho-edificio-brasilia-01.webp",
    imagenes: [
      "https://vipar.moochsoft.com/obras/mariscal-lopez-asuncion/cerramiento-vidrio-cortinas-plegables-quincho-edificio-brasilia-02.webp",
    ],
    cliente: "Edificio Brasília",
    fecha: "2020",
    ubicacion: "Av. Brasilia 1840, Asunción",
    sector: "residencial",
    sectorLabel: "Residencial",
    systemLabel: "Cerramiento de quincho en vidrio con cortinas plegables",
    displayTags: ["Vidrio", "Cortinas Plegables", "Quincho", "Residencial"],
    filterTags: ["cristal-templado", "aluminio"],
    category: [{ name: "Residencial", slug: "residencial" }],
  },
  {
    slug: "carde-apf-ypane",
    titulo: "CARDE – Centro de Alto Rendimiento APF",
    descripcion:
      "Instalación de cielo raso de PVC en el Centro de Alto Rendimiento Deportivo (CARDE) de la Asociación Paraguaya de Fútbol, ubicado en Ypané. El cielo raso de PVC fue elegido por su alta resistencia a la humedad, fácil mantenimiento y acabado limpio, ideal para instalaciones deportivas de uso intensivo.",
    resumen:
      "Cielo raso de PVC para el Centro de Alto Rendimiento de la Asociación Paraguaya de Fútbol, Ypané.",
    imagen: "https://vipar.moochsoft.com/obras/ypane-central/cielo-raso-pvc-carde-apf-ypane-01.webp",
    imagenes: [],
    cliente: "APF – Asociación Paraguaya de Fútbol",
    fecha: "2020",
    ubicacion: "Ypané, Central",
    sector: "institucional",
    sectorLabel: "Institucional",
    systemLabel: "Cielo raso de PVC",
    displayTags: ["Cielo Raso", "PVC", "Institucional", "Deportivo"],
    filterTags: ["cielo-raso", "pvc"],
    category: [{ name: "Institucional", slug: "institucional" }],
  },
];

export const getStaticObraBySlug = (slug: string) =>
  staticObras.find((obra) => obra.slug === slug);

const relatedObraPresets: Record<
  RelatedServiceKey,
  {
    preferredSlugs: string[];
    fallbackTags: string[];
  }
> = {
  "box-de-bano": {
    preferredSlugs: ["showroom-vipar", "residencia-san-lorenzo", "edificio-concordia"],
    fallbackTags: ["cristal-templado", "aluminio", "ventanas"],
  },
  "carpinteria-de-aluminio": {
    preferredSlugs: ["showroom-vipar", "edificio-concordia", "residencia-san-lorenzo"],
    fallbackTags: ["aluminio", "ventanas", "puertas"],
  },
  "cielo-raso": {
    preferredSlugs: ["showroom-vipar", "cooperativa-medalla", "oficinas-corporativas-itau"],
    fallbackTags: ["mamparas", "aluminio", "cristal-templado"],
  },
  "mampara-divisoria": {
    preferredSlugs: ["cooperativa-medalla", "oficinas-corporativas-itau", "showroom-vipar"],
    fallbackTags: ["mamparas", "cristal-templado", "aluminio"],
  },
  ventana: {
    preferredSlugs: ["residencia-san-lorenzo", "edificio-concordia", "showroom-vipar"],
    fallbackTags: ["ventanas", "aluminio", "cristal-templado"],
  },
  cortina: {
    preferredSlugs: ["showroom-vipar", "sucursal-tigo-mra", "residencia-san-lorenzo"],
    fallbackTags: ["cristal-templado", "fachadas", "aluminio"],
  },
  fachadas: {
    preferredSlugs: ["showroom-vipar", "sucursal-tigo-mra", "edificio-concordia"],
    fallbackTags: ["fachadas", "cristal-templado", "aluminio"],
  },
  puerta: {
    preferredSlugs: ["showroom-vipar", "edificio-concordia", "residencia-san-lorenzo"],
    fallbackTags: ["aluminio", "cristal-templado", "puertas"],
  },
};

export const getRelatedStaticObras = (
  serviceKey: RelatedServiceKey,
  limit = 3,
): StaticObra[] => {
  const preset = relatedObraPresets[serviceKey];
  const picked = new Map<string, StaticObra>();

  for (const slug of preset.preferredSlugs) {
    const obra = getStaticObraBySlug(slug);

    if (obra) {
      picked.set(obra.slug, obra);
    }
  }

  for (const obra of staticObras) {
    if (picked.size >= limit) {
      break;
    }

    if (picked.has(obra.slug)) {
      continue;
    }

    if (obra.filterTags.some((tag) => preset.fallbackTags.includes(tag))) {
      picked.set(obra.slug, obra);
    }
  }

  return Array.from(picked.values()).slice(0, limit);
};
