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
}

export const obraFilters = [
  { slug: "all", label: "Todos" },
  { slug: "cristal-templado", label: "Cristal templado" },
  { slug: "aluminio", label: "Aluminio" },
  { slug: "fachadas", label: "Fachadas" },
  { slug: "mamparas", label: "Mamparas" },
  { slug: "cielos-rasos", label: "Cielos rasos" },
  { slug: "puertas", label: "Puertas" },
  { slug: "ventanas", label: "Ventanas" },
];

export const obrasHeroImage =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuDzOkMJrP0BidDmeBUr5ZXvSdYG_OOsM600QUAHHF0Zaz1v5PLe_vT8XA1oAvJ6sMnMOMZg4v6FfMQ1TyTXMadeHc7NNokmFcPIfrduEPXnADO2kFOOo5EeavJTbh-1BYKO9vqSQjg5X7Oc6QFoCYMFXhc8oxgUHJoxjNCU83Q1epBLDof1Lv0OhdpygGTQB8rN0hrYo6x9k_KiySi14cSCLEYfwywp944pjWkVHV7GaOQcmitV3PgO3aWDCporCxeSO30jbCClP4LE";

export const staticObras: StaticObra[] = [
  {
    slug: "showroom-vipar",
    titulo: "Showroom VIPAR",
    descripcion:
      "Instalación completa de sistemas de cerramiento interior y exterior, demostrando la capacidad de integración de perfiles de aluminio de alta prestación con cristales de seguridad de gran formato.",
    resumen:
      "Soluciones integrales en vidrio y aluminio para nuestro propio espacio de exhibición técnico.",
    imagen:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBBUpTN--qBQP1qc3SCers9X65XCQCJTeBOMvsJUWk2o_Xo7750FRY9iZXpvCuugTwIqTJZv9ZJWUQlwQYgSnJSEtccSY4_aVC7lkpgJEObrDfU1pq5UrgPkwlpEfzOEvyMCb_yo7oogdNuWuPt_nabsCuc74aRFvde5M5KnsYFXk09mRPQtcinVjueO1aoGIsgbv4ihat2_-hyrxPxinU2jQV6GmA5DlhbE4TVJaRKdkjchADXNsX0qNGqzLzaiDc7RUbeJn9kTchx",
    imagenes: [],
    cliente: "VIPAR S.A.",
    fecha: "2025",
    ubicacion: "Nemby, Central",
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
    imagen:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDY8DHyzD0WpoxvZK76Fa9SlGDoVLOa6qsluCAGQbIZexUiW975Ex8qINya8aRnOTqvKr7gVDTHKDkYcxMpLBjXZr4AqmrM6dbM2Dhr2Qx1Gx9dCXTqJiqFByNfqndRHPOMqdmLpXfuP6V4lGSCfrcfxNGuW65C0lnnwqtrN75Kp0U2wkxUUrNnKONcdwFdxygnS2Gae0gdLW3-hEVNj1Gaen8ewXNichQJ-6FidWIlOOZo62gEe1_EVpYDiNdatETWrkCoM6DNUlia",
    imagenes: [],
    cliente: "Tigo",
    fecha: "2024",
    ubicacion: "Mariano Roque Alonso",
    sector: "comercial",
    sectorLabel: "Comercial",
    systemLabel: "Sistemas de fachada comercial",
    displayTags: ["Fachadas", "Cristal templado"],
    filterTags: ["fachadas", "cristal-templado", "aluminio"],
    category: [{ name: "Comercial", slug: "comercial" }],
  },
  {
    slug: "edificio-concordia",
    titulo: "Edificio Concordia",
    descripcion:
      "Soluciones integrales para obra con provisión e instalación de aberturas de aluminio de alta prestación.",
    resumen:
      "Soluciones integrales para obra. Provisión e instalación de aberturas de aluminio de alta prestación.",
    imagen:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuDhz11UaTdbnMGlFVF4Mxow1klU1bItYJba_DYsr3hdwgPOqUZsbj14Tq1xAEzNg1HlsBw5YIpCwCpEUBtO52EXF9kR6oq6zWII49xjoWelaejEjXSbW-ybP2DWO7u84rhIrcoEoTt0NIjHRYKfspFANbWXm8zqTp7IFMQBjtyjES63RGXSwdx2jMruEWXNae1LvKRbgQ7rl8-2h0ny0vBVI1ApUUIV4aL7PJnyt6J9CK3dRoPSrpYd9phUOZveAQtpUQ91G4-bO6P1",
    imagenes: [],
    cliente: "Desarrollo Concordia",
    fecha: "2024",
    ubicacion: "Asuncion",
    sector: "residencial",
    sectorLabel: "Residencial",
    systemLabel: "Soluciones residenciales en vidrio",
    displayTags: ["Residencial", "Aluminio"],
    filterTags: ["aluminio", "ventanas", "cristal-templado"],
    category: [{ name: "Residencial", slug: "residencial" }],
  },
  {
    slug: "cooperativa-medalla",
    titulo: "Cooperativa Medalla Milagrosa",
    descripcion:
      "Terminaciones arquitectónicas interiores con divisiones en cristal y perfilería a medida.",
    resumen:
      "Terminaciones arquitectónicas interiores. Divisiones en cristal y perfilería a medida.",
    imagen:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuCGdSLkuoH-YgubTKW_OxI3bHk9GCALaSS6EUl5yGx0ZGiRcWib5xdFyGmSvjrUFplohms3m_WA1Nr_zfee4tJHYaictyp3qUeJGM7aErPKkf-KCVzu6Flr3ipaQ4g5W7KhJ-KdG_q4O_f_UM7-BVuEgf1sTUe9lTE-jihS29Kg9DBB5v3ErlnvQwHHqhJsyhE7vvei4iBCe1ptq-0zTlVXUioTaGM3eOZk-F2lxK0gHwmHvkYuEZ9JzlDTJqXLI11dXMq56Ofib1WS",
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
      "Aberturas de aluminio de alta prestacion y grandes paños de vidrio para residencia de lujo, con enfasis en hermeticidad, durabilidad y lectura arquitectonica limpia.",
    resumen:
      "Aberturas de aluminio de alta prestacion y grandes paños de vidrio para residencia de lujo.",
    imagen:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBEJiTJqpXth_MfquO_J3E-v_DDe0TyRJVLYYzzpH16eej51C8CFf80j_7iewEE7wYqXWcK7k16I9_f1JkfutQcc-s6C2LqxW64b5y9AKSTYoKtjdq8XFNxyvhdnqOgdfftQ8pVWflL4n9KbPUBhmwKhBLIf2ChNbt7mzufk7h46LxtScejB6AU8wTmvocHbchdvLVbqbCXRennx3hNVqFojmj3YAuXgFUCjF4tAzCATY4Mk9ADk9LJ8vlq5KOhXRBkjg7t_xFPG2O-",
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
      "Tabiques de vidrio con control acustico y perfileria de aluminio de diseño exclusivo para oficinas corporativas que requieren privacidad sin perder apertura visual.",
    resumen:
      "Tabiques de vidrio con control acustico y perfileria de aluminio de diseño exclusivo.",
    imagen:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuBfr3lDxjuQgQuq-kF5745xz48eaIdcKbOBogIRFUaDADvg_gCQaTkAaaucoTCHTKpZYBxETH-mS-geejW8tAYiFd5V444kiJB8qUqaEowcgez5AUo-hCE7qsjAR7zDLP07Oxh-soYheX2QMD3oo1pHdD7VARtI6XU3wCUIFdmDQ-gKxYjEkO6ivouG7z1Z96J4KSpcubIdqs66NQdt9t-wwM5uPSEV0P7IVumwVvwzziOVsD9862jjbPN6vo7Mlm7e1mBcm1Up4mw8",
    imagenes: [],
    cliente: "Itau",
    fecha: "2022",
    ubicacion: "Asuncion",
    sector: "corporativo",
    sectorLabel: "Corporativo",
    systemLabel: "Particiones acusticas en vidrio",
    displayTags: ["Mamparas", "Aluminio"],
    filterTags: ["mamparas", "aluminio", "cristal-templado"],
    category: [{ name: "Corporativo", slug: "corporativo" }],
  },
];

export const getStaticObraBySlug = (slug: string) =>
  staticObras.find((obra) => obra.slug === slug);