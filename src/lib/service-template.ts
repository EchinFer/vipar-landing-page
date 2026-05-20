export interface ServiceTemplateCaseItem {
  title: string;
  description: string;
}

export interface ServiceTemplateSolutionItem {
  title: string;
  description: string;
  idealFor: string[];
  image: string;
}

export interface ServiceTemplateGuideItem {
  title: string;
  description: string;
  icon: string;
}

export interface ServiceTemplateApplicationItem {
  title: string;
  image: string;
}

export interface ServiceTemplateProcessStep {
  label: string;
}

export interface ServiceTemplateFaqItem {
  question: string;
  answer: string;
}

export interface ServiceTemplateContent {
  title: string;
  description: string;
  canonicalPath: string;
  keywords: string;
  whatsappMessage: string;
  relatedWorksKey:
    | "box-de-bano"
    | "carpinteria-de-aluminio"
    | "cielo-raso"
    | "mampara-divisoria"
    | "puerta"
    | "ventana"
    | "cortina"
    | "fachadas";
  hero: {
    eyebrow: string;
    title: string;
    description: string;
    image: string;
    tags: string[];
    primaryCtaLabel: string;
    secondaryCtaLabel?: string;
  };
  problem: {
    title: string;
    description: string;
    cases: ServiceTemplateCaseItem[];
  };
  solutions: {
    title: string;
    description: string;
    items: ServiceTemplateSolutionItem[];
  };
  selection: {
    title: string;
    description: string;
    items: ServiceTemplateGuideItem[];
  };
  applications: {
    title: string;
    description: string;
    items: ServiceTemplateApplicationItem[];
  };
  process: {
    title: string;
    description: string;
    steps: ServiceTemplateProcessStep[];
  };
  trust: {
    title: string;
    description: string;
    locationLabel: string;
    image: string;
  };
  faqs: ServiceTemplateFaqItem[];
}
