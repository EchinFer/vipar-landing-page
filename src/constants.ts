export const CMS_API_URL = import.meta.env.CMS_API_URL;
export const SITE_URL = import.meta.env.SITE_URL || "https://vipar.com.py";
export const MEASUREMENT_ID = import.meta.env.MEASUREMENT_ID || "G-XXXXXXX";

export const LOGO_TEXT = "VIPAR S.A";

export const MENU_ITEMS = [
  {
    id: 1,
    title: "Inicio",
    url: "/",
  },
  {
    id: 2,
    title: "Obras",
    url: "/obras/",
  },
  {
    id: 3,
    title: "Servicios",
    url: "/servicios/",
  },
  {
    id: 4,
    title: "Nosotros",
    url: "/nosotros/",
  },
  {
    id: 5,
    title: "Contacto",
    url: "/contacto/",
  },
];

export const telephone = "+595981256510";
export const whatsappNumber = telephone.replace(/[^\d]/g, "");
export const email = "info@vipar.com.py";

export const companyAddress = {
  streetAddress: "San Francisco 770 c/ Sexta Bo. Salinas",
  addressLocality: "\u00D1emby",
  addressRegion: "Central",
  addressCountry: "PY",
} as const;

export const address = `${companyAddress.streetAddress}, ${companyAddress.addressLocality}`;

export const SOCIAL_LINKS = {
  instagram: "https://www.instagram.com/vipar_py/",
  tiktok: "https://www.tiktok.com/@vipar.s.a",
  facebook: "https://www.facebook.com/vipar.vidrios",
  twitter: "",
  linkedin: "",
} as const;
