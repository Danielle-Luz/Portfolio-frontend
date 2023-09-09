import { tProjectsSectionProps } from "./../../interfaces";
import { Project } from "..";
import { StyledProjectsSection } from "../../styles";

export const ProjectsSection = ({
  projects,
  projectStack,
  sectionTitle,
}: tProjectsSectionProps) => {
  return (
    <StyledProjectsSection>
      <h2>{sectionTitle}</h2>
      {projects.map((project) => (
        <Project key={project.id} project={project} projectStack={projectStack} />
      ))}
    </StyledProjectsSection>
  );
};
