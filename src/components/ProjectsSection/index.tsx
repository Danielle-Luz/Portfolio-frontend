import { tProjectsSectionProps } from "./../../interfaces";
import { Project } from "..";
import { Carousel } from "@mantine/carousel";
import { AnimatedProjectsSection } from "../../animatedComponents";

export const ProjectsSection = ({
  projects,
  sectionTitle,
}: tProjectsSectionProps) => {
  return (
    <AnimatedProjectsSection>
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
    </AnimatedProjectsSection>
  );
};
