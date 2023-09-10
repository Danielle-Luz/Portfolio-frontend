import { createContext } from "react";
import { Outlet } from "react-router";
import { tProject } from "../../interfaces";
import { api } from "../../api";

type tProjectsContextProvider = {
  getHighlights: () => Promise<tProject[] | undefined>;
};

const ProjectsContext = createContext({} as tProjectsContextProvider);

export const ProjectsProvider = () => {
  const getHighlights = async () => {
    try {
      const { data: highlightProjects } = await api.get("/projects/highlights");
      return highlightProjects as tProject[];
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ProjectsContext.Provider value={{ getHighlights }}>
      <Outlet />
    </ProjectsContext.Provider>
  );
};
