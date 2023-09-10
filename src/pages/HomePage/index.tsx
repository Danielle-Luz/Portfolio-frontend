import { useContext, useEffect, useState } from "react";
import { Header, ProfileCard, ProjectsSection } from "../../components";
import { tProject } from "../../interfaces";
import { ProjectsContext } from "../../providers";
import { AnimatedPageContainer } from "../../animatedComponents";

export const HomePage = () => {
  const [highlightProjects, setHighlightProjects] = useState([] as tProject[]);
  const [backendProjects, setBackendProjects] = useState([] as tProject[]);
  const [frontendProjects, setFrontendProjects] = useState([] as tProject[]);

  const { getHighlights, getProjectsByStack } = useContext(ProjectsContext);

  useEffect(() => {
    const setStatesValues = async () => {
      try {
        setHighlightProjects((await getHighlights()) as tProject[]);
        setBackendProjects(
          (await getProjectsByStack("Back-end")) as tProject[]
        );
        setFrontendProjects(
          (await getProjectsByStack("Front-end")) as tProject[]
        );
      } catch (error) {
        console.log(error);
      }
    };
    setStatesValues();
  }, []);

  return (
    <AnimatedPageContainer>
    <Header />
      <ProfileCard />
      <ProjectsSection
        projects={highlightProjects}
        sectionTitle="Highlight projects"
      />
      <ProjectsSection
        projects={backendProjects}
        sectionTitle="Back-end projects"
      />
      <ProjectsSection
        projects={frontendProjects}
        sectionTitle="Front-end projects"
      />
    </AnimatedPageContainer>
  );
};
