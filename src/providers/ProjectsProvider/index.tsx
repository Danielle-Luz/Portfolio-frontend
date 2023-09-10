import { createContext, useState } from "react";
import { tProject, tParentComponentProps, tStack } from "../../interfaces";
import { api } from "../../api";

type tProjectsContextProvider = {
  hasError: boolean;
  isLoading: boolean;
  getHighlights: () => Promise<tProject[] | undefined>;
  getProjectsByStack: (stack: tStack) => Promise<tProject[] | undefined>;
};

const ProjectsContext = createContext({} as tProjectsContextProvider);

const ProjectsProvider = ({ children }: tParentComponentProps) => {
  const [isLoading, setLoading] = useState(false);
  const [hasError, setError] = useState(false);

  const getProjectsByStack = async (stack: tStack) => {
    setLoading(true);
    try {
      const { data: projects } = await api.get(`/projects/stack/${stack}`);
      return projects as tProject[];
    } catch (error) {
      setError(true);
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
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <ProjectsContext.Provider
      value={{ hasError, isLoading, getHighlights, getProjectsByStack }}
    >
      {children}
    </ProjectsContext.Provider>
  );
};

export { ProjectsProvider, ProjectsContext };
