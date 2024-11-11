export interface ServiceDetail {
  imagen: string;
  titulo: string;
  details: string[];
}

export interface ServiceSection {
  titulo: string;
  texto: string;
  servicios: ServiceDetail[];
}

export interface ConstructionServiceSection extends ServiceSection {
    texto_imagen: string;
    imagen: string;
}

export interface StartSection {
  titulo: string;
  texto: string;
}

export interface Feature {
  titulo: string;
}

export interface FeaturesSection {
  titulo: string;
  caracteristicas: Feature[];
}

export interface Project {
  titulo: string;
  descripcion: string;
  imagen: string;
  link: string;
}

export interface ProjectsSection extends Array<Project> {}

export interface Client {
  imagen: string;
}

export interface ClientsSection extends Array<Client> {}

export interface BlogArticle {
  titulo: string;
  contenido?: string;
}

export interface BlogSection {
  titulo: string;
  articulos: BlogArticle[];
}

export interface HomePageData {
  service_section: ServiceSection;
  construction_service_section: ConstructionServiceSection;
  start_section: StartSection;
  features_section: FeaturesSection;
  projects_section: ProjectsSection;
  clients_section: ClientsSection;
  blog_section: BlogSection;
}
