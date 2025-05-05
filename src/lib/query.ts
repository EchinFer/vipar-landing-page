import type { HomePageData, Project } from "@types";
import { CMS_API_URL } from "src/constants";

export const getHomePageData = async (): Promise<HomePageData> => {
  return await fetch(`${CMS_API_URL}/custom/v2/home-page`).then((response) =>
    response.json()
  );
};

export const getUltimaObra = async (): Promise<Project> => {
  return await fetch(`${CMS_API_URL}/custom/v2/last-project`).then((response) =>
    response.json()
  );
};

export const getProjectPageData = async (): Promise<Project[]> => {
  return await fetch(`${CMS_API_URL}/custom/v2/project-page`).then((response) =>
    response.json()
  );
};

export const getAllObras = async (): Promise<Project[]> => {
  return await fetch(`${CMS_API_URL}/custom/v2/all-obras`).then((response) =>
    response.json()
  );
};

export const getProjectBySlug = async (slug: string): Promise<Project> => {
  return await fetch(`${CMS_API_URL}/custom/v2/project/${slug}`).then(
    (response) => response.json()
  );
};
