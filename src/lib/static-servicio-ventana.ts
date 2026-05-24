import type { ServiceTemplateContent } from "@lib/service-template";

export const windowServiceContent: ServiceTemplateContent = {
  title: "Ventanas de aluminio en Paraguay | Corredizas, basculantes y cristal templado | VIPAR",
  description:
    "Ventanas de aluminio y cristal templado en Paraguay. Consultá opciones corredizas, basculantes u otros sistemas según medidas, tipo de apertura y condiciones de instalación.",
  canonicalPath: "/servicios/ventanas/",
  keywords:
    "ventanas de aluminio paraguay, ventanas corredizas, ventanas basculantes, cristal templado, aberturas a medida",
  whatsappMessage:
    "Hola, quiero cotizar ventanas de aluminio. Me comunico desde su página web.",
  relatedWorksKey: "ventana",
  hero: {
    eyebrow: "Ventanas en Paraguay",
    title: "Ventanas de aluminio y cristal templado para viviendas, comercios y obras",
    description:
      "Consultá opciones corredizas, basculantes u otros sistemas según medidas, tipo de apertura, uso del ambiente y condiciones de instalación.",
    image:
      "/img/obras/recoleta-asuncion/ventana-puerta-corrediza-aluminio-recoleta-asuncion-01.webp",
    tags: ["Basculantes", "Corredizas", "Cristal templado", "A medida"],
    primaryCtaLabel: "Cotizar en la web",
    secondaryCtaLabel: "Cotizar por WhatsApp",
  },
  problem: {
    title: "¿Necesitás cambiar, instalar o cotizar ventanas para tu obra?",
    description:
      "Definir una ventana no es solo elegir un perfil. Hay que revisar ventilación, entrada de luz, exposición al clima y forma de uso del ambiente.",
    cases: [
      {
        title: "Poca ventilación",
        description: "Ambientes cerrados o húmedos que necesitan flujo de aire constante y controlado.",
      },
      {
        title: "Mala entrada de luz",
        description:
          "Espacios que necesitan ganar iluminación natural sin perder control del cierre.",
      },
      {
        title: "Condiciones climáticas o de uso",
        description: "Revisión de opciones según la necesidad de ventilación o luz en cada sector.",
      },
    ],
  },
  solutions: {
    title: "Soluciones en ventanas",
    description:
      "Trabajamos distintos sistemas de apertura y configuración según el tipo de obra y el uso esperado.",
    items: [
      {
        title: "Ventana basculante",
        description:
          "Sistema de apertura superior o parcial, útil para ambientes donde se busca ventilación controlada.",
        idealFor: ["Baños", "Cocinas", "Áreas de servicio"],
        image:
          "/img/obras/alto-parana-presidente-franco/ventanas-aluminio-local-comercial-presidente-franco-01.webp",
      },
      {
        title: "Ventana corrediza",
        description:
          "Hojas deslizantes que aprovechan mejor el espacio interior y permiten paños más amplios.",
        idealFor: ["Dormitorios", "Salas de estar", "Balcones"],
        image:
          "/img/obras/recoleta-asuncion/ventana-puerta-corrediza-aluminio-recoleta-asuncion-02.webp",
      },
      {
        title: "Ventana con cristal templado",
        description:
          "Solución de lectura más limpia para frentes, oficinas y sectores donde la transparencia es parte del proyecto.",
        idealFor: ["Frentes comerciales", "Oficinas", "Cerramientos especiales"],
        image:
          "/img/obras/vivienda-trotte/aberturas-aluminio-cristal-vivienda-trotte-01.webp",
      },
    ],
  },
  selection: {
    title: "Guía de selección",
    description:
      "Te ayudamos a elegir el sistema según ventilación, limpieza visual, apertura y mantenimiento.",
    items: [
      {
        title: "Basculante",
        description: "Para priorizar ventilación y privacidad en ambientes de servicio.",
        icon: "air",
      },
      {
        title: "Corrediza",
        description: "Para ganar superficie vidriada y usar mejor el espacio disponible.",
        icon: "view_compact",
      },
      {
        title: "Paño fijo o templado",
        description: "Para proyectos donde la visual, el tipo de vidrio y la terminación forman parte del diseño.",
        icon: "architecture",
      },
    ],
  },
  applications: {
    title: "Aplicaciones por proyecto",
    description:
      "Adaptamos la solución a viviendas, oficinas, locales y obras en desarrollo según escala y uso.",
    items: [
      {
        title: "Viviendas",
        image:
          "/img/obras/vivienda-trotte/aberturas-aluminio-cristal-vivienda-trotte-02.webp",
      },
      {
        title: "Departamentos",
        image:
          "/img/obras/asuncion-centro-2020/ventanas-aluminio-edificio-longvillage-asuncion-01.webp",
      },
      {
        title: "Oficinas",
        image:
          "/img/obras/maria-antonieta-shopping-mariano-roque-alonso/vidriera-pano-fijo-maria-antonieta-shopping-mra-01.webp",
      },
      {
        title: "Obras",
        image:
          "/img/obras/alto-parana-presidente-franco/ventanas-aluminio-local-comercial-presidente-franco-02.webp",
      },
    ],
  },
  process: {
    title: "Proceso de cotización",
    description:
      "Revisamos datos del vano, uso del ambiente y necesidades del proyecto antes de presupuestar.",
    steps: [
      { label: "Enviá fotos" },
      { label: "Compartí medidas" },
      { label: "Definimos el uso" },
      { label: "Recibís orientación" },
      { label: "Coordinamos los siguientes pasos" },
    ],
  },
  trust: {
    title: "Orientación según el proyecto",
    description:
      "VIPAR S.A. trabaja con proyectos de vidrio y aluminio en Paraguay, con presencia operativa en Ñemby. Cada solución se define según condiciones y alcance del proyecto.",
    locationLabel: "Ubicación operativa: Ñemby, Paraguay",
    image:
      "/img/obras/showroom-vipar/fachadas-vidrio-aluminio-showroom-vipar-07.webp",
  },
  faqs: [
    {
      question: "¿Trabajan con medidas estándar?",
      answer:
        "No. Cada ventana se define según el vano real y las necesidades del ambiente.",
    },
    {
      question: "¿Incluyen instalación en el presupuesto?",
      answer:
        "El alcance se define según medidas, tipo de sistema, ubicación y condiciones de instalación.",
    },
    {
      question: "¿Qué datos conviene enviar para cotizar?",
      answer:
        "Fotos del lugar, medidas aproximadas, ubicación de la obra y el tipo de ventana que tenés en mente.",
    },
  ],
};
