import { tProject, tProjectsSectionProps } from "./../../interfaces";
import { Project } from "..";
export const ProjectsSection = ({
  projects,
  projectStack,
}: tProjectsSectionProps) => {
  return projects.map((project) => (
    <Project project={project} projectStack={projectStack} />
  ));
};
