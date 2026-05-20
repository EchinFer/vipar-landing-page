import type { ServiceTemplateContent } from "@lib/service-template";

export const windowServiceContent: ServiceTemplateContent = {
  title: "Ventanas de aluminio | VIPAR S.A.",
  description:
    "Ventanas de aluminio y cristal templado en Paraguay. Fabricacion e instalacion a medida segun requerimientos de obra.",
  canonicalPath: "/servicios/ventanas",
  keywords:
    "ventanas de aluminio paraguay, ventanas corredizas, ventanas basculantes, cristal templado, aberturas a medida",
  whatsappMessage:
    "Hola, quiero cotizar ventanas de aluminio. Me comunico desde su pagina web.",
  relatedWorksKey: "ventana",
  hero: {
    eyebrow: "Ventanas en Paraguay",
    title: "Ventanas de aluminio y cristal templado para viviendas, comercios y oficinas",
    description:
      "Fabricamos e instalamos ventanas a medida segun el uso del ambiente, la ventilacion necesaria y las condiciones reales de la obra.",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD-2XOymuc61Lhid1fIDjX1Gcz3dK6EhJH7wtDYoMTkKMC6Pq8tmCmqYoyd44ta6tFX5045eCPaZE1WilmHAft7h600VpJzXBQ02QWJu8UXp9gs1RVcyrNiRBo4lqzYh4GpFIz3pX5MfstV41YNt-b6ytbHzcNlZxD3M-F9RHwanL_b78Wugm4t1V_2qSEuP5iQ1RQcDbItSbEhv53-G4VWGwEWdJc8mgq3RWNfi304A6SoXlVLJJ3qCBCDlHHyvP3pu0CbhNpNKf-j",
    tags: ["Basculantes", "Corredizas", "Cristal templado", "A medida"],
    primaryCtaLabel: "Cotizar ventanas",
  },
  problem: {
    title: "Necesitas cambiar, instalar o cotizar ventanas para tu obra?",
    description:
      "Definir una ventana no es solo elegir un perfil. Hay que revisar ventilacion, entrada de luz, exposicion al clima y forma de uso del ambiente.",
    cases: [
      {
        title: "Poca ventilacion",
        description: "Ambientes cerrados o humedos que necesitan flujo de aire constante y controlado.",
      },
      {
        title: "Mala entrada de luz",
        description:
          "Espacios que necesitan ganar iluminacion natural sin perder control del cierre.",
      },
      {
        title: "Filtraciones o cierres deficientes",
        description: "Lluvia, polvo o viento por soluciones mal resueltas o fuera de escuadra.",
      },
    ],
  },
  solutions: {
    title: "Soluciones en ventanas",
    description:
      "Trabajamos distintos sistemas de apertura y configuracion segun el tipo de obra y el uso esperado.",
    items: [
      {
        title: "Ventana basculante",
        description:
          "Sistema de eje horizontal pensado para ventilacion constante y segura en ambientes de servicio.",
        idealFor: ["Banos", "Cocinas", "Areas de servicio"],
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuAFrYCkpK_Jtq9rDtp4GQl_tYm9FnppbhqKQBytEULWxtjZCKNw-wSWrVIpUfZ-dbPCpJCFu4sxdMXsBJbU1RjUKNyCtPtLV4xa2cWhk9WtYhm41LIFbIfLO8Flv4qwno1_WZ_B5w9LZgXJM96TU38xeFaaxBhih9q9ZYzE0S-xMYxbqMCukRmtzq8J0tZ5Ei-kPdRQoQa72qXCa-HIKRSlM61X9B1aemyRUtaH_Px7WRQjC5hJ7xhDILLFBmBr_LO6DAAcLhUumuJc",
      },
      {
        title: "Ventana corrediza",
        description:
          "Hojas deslizantes que aprovechan mejor el espacio interior y permiten paños mas amplios.",
        idealFor: ["Dormitorios", "Salas de estar", "Balcones"],
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDs2va21_6Uejboo8d_-DrT4feT09fanU04K0VqpViyeZUfWCqa595a_tJ5PddzEtnrmCy5QrA8pxVt914Qxg-7Y_NuAKXaUGuzweoejejR_BrMBxE7cBQ-wzeIWVCOZ4yDCBg_5TEjI4obHBCFdixYqW69gPHvZ3snP-64cqBeJcSI1lHVjCN3DWiHgRXu5MtihabG5I0FhAYzQFasUyPeBGKRW2MgskLGQbhwBP9Z-R8ZSu4voROIgVF4vmvKG0aiUpfbHAhi9dUu",
      },
      {
        title: "Ventana con cristal templado",
        description:
          "Solucion de lectura mas limpia para frentes, oficinas y sectores donde la transparencia es parte del proyecto.",
        idealFor: ["Frentes comerciales", "Oficinas", "Cerramientos especiales"],
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuC_AZXM1JTcYOaVXmvGw_Vze_hQmvNEAP7Zo4vt3xOhfE5BMcURTbfz5IBX6MZjzmCdyPiFH5AhiEcIDyf-6LKuIsTU6aGr8bdO_Aj-h3ztE6Xfjxg5Rhxw2PqcP0mlVVXD9bVR-OgNctN3iREvcS9-pBCWmFX-znQ1pp8tCNBVTqm_Mr9HyTM3e13VKT8J-4aOXKFRhKsM0qVnOxoB21qyLu-w2vrxqssp-ZlQj94-PR27YMLOi4VTs7wSfPC-AemqrbTdHRXveIBe",
      },
    ],
  },
  selection: {
    title: "Guia de seleccion",
    description:
      "Te ayudamos a elegir el sistema segun ventilacion, limpieza visual, apertura y mantenimiento.",
    items: [
      {
        title: "Basculante",
        description: "Para priorizar ventilacion y privacidad en ambientes de servicio.",
        icon: "air",
      },
      {
        title: "Corrediza",
        description: "Para ganar superficie vidriada y usar mejor el espacio disponible.",
        icon: "view_compact",
      },
      {
        title: "Pano fijo o templado",
        description: "Para proyectos donde la visual y la seguridad del vidrio pesan mas.",
        icon: "architecture",
      },
    ],
  },
  applications: {
    title: "Aplicaciones por proyecto",
    description:
      "Adaptamos la solucion a viviendas, oficinas, locales y obras en desarrollo segun escala y uso.",
    items: [
      {
        title: "Viviendas",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuDnKq5W4WP4qsF3iHSyCQFjUIRCH0fdH8pMgC3B5iXdlu8K9mMks4b25sZocsFJwXdIgBkemMHmLT6S6Dk7LgKvnizVZDTEUwMmCV1tIm2xk-VbiLRLmqwgqmeCuaKm0kek2BaQt3MtViCpamY3w0-c8dFAGf_XYSAPlbtaTqW5EnarHHDoYLINOdfaumtlk_Q90LderZ9ttL1H7H9vX3GeCx-xQXcmADc2t5HL78PNdPw7bfEFE9OtfdFlKR9ABUccNL1OL0asjrqo",
      },
      {
        title: "Departamentos",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuBjz8d1csB8yEcfqQb_ovu_3-Cynl60L8-3sMkPHfv5hP49Ku2bipoK0Ao5hhtdhhQxD52tkpBW4WAV97xOHkRNNRveprZ5Wc6V18y20BJ-bAbFaoXUgez2-8MhHquQKrPUpcHHSD7QHStxo2dlwhWFXrkgnXIQQr9M0gPr1DD4lhVu4Aq_lyviD0CK88qBNgBmgzy-DUPQ7ATFJcXLGtyCzy2Lt5sl1Dt3gft181m2d46MpdNT5zfiCZkv1C3a3_uzGA440sIpl0ER",
      },
      {
        title: "Oficinas",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuCX5coznU2ErUvyTOaiUtjb-KcreaG4EdT5EpyMvEBq5FyOilYEoXEHToP9OcYUFgPImFYTjqHONMD0iWTS1tG2E6gsIyICMDZ3XEPopRwBTsMyy3M7vsqgE22sGei8N8D7e-Nza105u5UQET3OaWu8jf7ALOwKGyGpb2c__XBTJO9zOvOJFHY7Vb4m67H-754WvrkZb3qpvxa4OVzBUxy47x-B9sTBtKgV880ZA9YVEVRQWVt5dHaRk7WfPt7XtPJks2JKitwikCji",
      },
      {
        title: "Obras",
        image:
          "https://lh3.googleusercontent.com/aida-public/AB6AXuD_D54uSg7RW_P3Ypm3tegIGkvM-RFMNrf_R9VNs1aMKXA1niBb3LMBs_v8dxtAQQLtHE-9F72hE7w4qSXokJeHSrrY9ocGlDiItocjZC0QPmwVVa3NR7vHL7kHD9er3DuFFTFIhlnmxs5S5Vb_ciYTTMw6wdtXHhdiKMpvu6QmLqlk7eC58pofXKz70WEpfMSTGeTGij_UZae0sITPacXNhLUJNba0qXSXvbUVQxZgR2hXjSdoXY7MKqN6gIAet1NbsiLkIlcZlups",
      },
    ],
  },
  process: {
    title: "Proceso de cotizacion",
    description:
      "Revisamos datos del vano, uso del ambiente y necesidades del proyecto antes de presupuestar.",
    steps: [
      { label: "Envia fotos" },
      { label: "Comparti medidas" },
      { label: "Definimos el uso" },
      { label: "Recibis orientacion" },
      { label: "Coordinamos la visita" },
    ],
  },
  trust: {
    title: "Confianza y seguimiento tecnico",
    description:
      "VIPAR S.A. trabaja con relevamiento, fabricacion a medida e instalacion propia segun el alcance de cada proyecto.",
    locationLabel: "Ubicacion operativa: Nemby, Paraguay",
    image:
      "https://lh3.googleusercontent.com/aida-public/AB6AXuD5SUTj8uLe8_yoSaL6zwpOvBISR9f56pg4QTpMM22Ub8JaAH8Rrxgp9U827sU_lm7JW9RlRLm1JN2f9D1RPBSsohyC7qdOAW5bIqkVBEDWbArcN7ub3_sTK4NbKGZmJx5CYzqEYraU9f1UMCrtdgsiKJB8ShPaeOBlYtptqtOC6T0Mj07X5Pt1qNu5gbHlBOMTKEfGb2VTqHk6vYYCF1Jl14wM6s9jNiquK9Lwj19QCWxsY9MzJcgHeGZPIveNOgAa57_9Xr9",
  },
  faqs: [
    {
      question: "Trabajan con medidas estandar?",
      answer:
        "No. Cada ventana se define segun el vano real y las necesidades del ambiente.",
    },
    {
      question: "Incluyen instalacion en el presupuesto?",
      answer:
        "Podemos contemplar fabricacion e instalacion segun el alcance del proyecto y la ubicacion de la obra.",
    },
    {
      question: "Que datos conviene enviar para cotizar?",
      answer:
        "Fotos del lugar, medidas aproximadas, ubicacion de la obra y el tipo de ventana que tenes en mente.",
    },
  ],
};
