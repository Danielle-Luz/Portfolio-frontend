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
      <h2 className="section-title">{sectionTitle}</h2>
      <ul>
        {projects.map((project) => (
          <Project
            key={project.id}
            project={project}
            projectStack={projectStack}
          />
        ))}
      </ul>
    </StyledProjectsSection>
  );
};
