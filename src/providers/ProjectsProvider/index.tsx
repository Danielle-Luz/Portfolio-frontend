import { createContext } from "react";
import { Outlet } from "react-router";
import { tProject, tProviderProps, tStack } from "../../interfaces";
import { api } from "../../api";

type tProjectsContextProvider = {
  getHighlights: () => Promise<tProject[] | undefined>;
  getProjectsByStack: (stack: tStack) => Promise<tProject[] | undefined>;
};

const ProjectsContext = createContext({} as tProjectsContextProvider);

export const ProjectsProvider = ({ children }: tProviderProps) => {
  const getProjectsByStack = async (stack: tStack) => {
    try {
      const { data: projects } = await api.get(`/projects/stack/${stack}`);
      return projects as tProject[];
    } catch (error) {
      console.error(error);
    }
  };

  const getHighlights = async () => {
    try {
      const { data: highlightProjects } = await api.get("/projects/highlights");
      return highlightProjects as tProject[];
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <ProjectsContext.Provider value={{ getHighlights, getProjectsByStack }}>
      <Outlet />
    </ProjectsContext.Provider>
  );
};
