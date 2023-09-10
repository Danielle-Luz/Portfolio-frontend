import { tProjectsSectionProps } from "./../../interfaces";
import { Project } from "..";
import { StyledProjectsSection } from "../../styles";
import { Carousel } from "@mantine/carousel";

export const ProjectsSection = ({
  projects,
  sectionTitle,
}: tProjectsSectionProps) => {
  return (
    <StyledProjectsSection
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      viewport={{ once: true }}
    >
      <h2 className="section-title">{sectionTitle}</h2>
      <Carousel
        height={430}
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
