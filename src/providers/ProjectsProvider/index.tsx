import { createContext, useState } from "react";
import { tProject, tProviderProps, tStack } from "../../interfaces";
import { api } from "../../api";

type tProjectsContextProvider = {
  isLoading: boolean;
  getHighlights: () => Promise<tProject[] | undefined>;
  getProjectsByStack: (stack: tStack) => Promise<tProject[] | undefined>;
};

const ProjectsContext = createContext({} as tProjectsContextProvider);

const ProjectsProvider = ({ children }: tProviderProps) => {
  const [isLoading, setLoading] = useState(false);

  const getProjectsByStack = async (stack: tStack) => {
    setLoading(true);
    try {
      const { data: projects } = await api.get(`/projects/stack/${stack}`);
      return projects as tProject[];
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  const getHighlights = async () => {
    setLoading(true);
    try {
      const { data: highlightProjects } = await api.get("/projects/highlights");
      return highlightProjects as tProject[];
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProjectsContext.Provider
      value={{ isLoading, getHighlights, getProjectsByStack }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};

export { ProjectsProvider, ProjectsContext };
