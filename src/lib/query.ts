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
