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

export {
  tCustomTheme,
  tKnowledgeLevel,
  tStack,
  tProject,
  tProjectProps,
  tProjectsSectionProps,
  tStyledProjectProps,
  tStyledHeaderLinkProps,
  tStyledLinkButtonProps,
  tTechnology,
  tTechnologiesProps,
};
