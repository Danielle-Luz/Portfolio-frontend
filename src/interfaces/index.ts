import { customTheme } from "../styles/theme";

type tCustomTheme = typeof customTheme;

type tKnowledgeLevel = "Iniciante" | "Intermediário" | "Avançado";

type tStack = "Front-end" | "Back-end" | "Full-stack";

type tProject = {
  id: number;
  name: string;
  description: string;
  stack: tStack;
  coverImage: string;
  url: string;
  highlight: boolean;
  technologies: tTechnology[];
};

type tProjectProps = {
  project: tProject;
};

type tProjectsSectionProps = {
  projects: tProject[];
  sectionTitle: string;
};

type tParentComponentProps = {
  children: React.ReactNode;
};

type tStyledAnimatedPageContainerProps = {
  isTopOrigin: boolean;
}

type tStyledProjectProps = {
  isBackend: boolean;
};

type tStyledHeaderLinkProps = {
  isAccessedRoute: boolean;
};

type tStyledLinkButtonProps = {
  variant: "outline" | "faint";
};

type tTechnology = {
  id: number;
  name: string;
  stack: tStack;
  knowledgeLevel: tKnowledgeLevel;
  iconUrl: string;
};

type tTechnologiesProps = {
  technologies: tTechnology[];
};

type tWaitingPageProps = {
  hasError: boolean;
  isLoading: boolean;
};

export {
  tCustomTheme,
  tKnowledgeLevel,
  tStack,
  tProject,
  tProjectProps,
  tProjectsSectionProps,
  tParentComponentProps,
  tStyledAnimatedPageContainerProps,
  tStyledProjectProps,
  tStyledHeaderLinkProps,
  tStyledLinkButtonProps,
  tTechnology,
  tTechnologiesProps,
  tWaitingPageProps,
};
