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
  projectStack: tStack;
};

type tStyledHeaderLinkProps = {
  isAccessedRoute: boolean;
};

type tStyledButtonProps = {
  variant: "outline" | "faint";
};

type tTechnology = {
  id: number;
  name: string;
  stack: tStack;
  knowledgeLevel: tKnowledgeLevel;
};

export {
  tCustomTheme,
  tKnowledgeLevel,
  tStack,
  tProject,
  tProjectProps,
  tStyledHeaderLinkProps,
  tStyledButtonProps,
  tTechnology,
};
