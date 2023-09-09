import { tProjectsSectionProps } from "./../../interfaces";
import { Project } from "..";
import { StyledProjectsSection } from "../../styles";
import { Carousel } from "@mantine/carousel";

export const ProjectsSection = ({
  projects,
  sectionTitle,
}: tProjectsSectionProps) => {
  return (
    <StyledProjectsSection>
      <h2 className="section-title">{sectionTitle}</h2>
      <Carousel
        height={350}
        slideSize="33.333333%"
        slideGap="lg"
        loop
        align="start"
        slidesToScroll={1}
        withControls={false}
        withIndicators
      >
        {projects.map((project) => (
          <Project key={project.id} project={project} />
        ))}
      </Carousel>
    </StyledProjectsSection>
  );
};
