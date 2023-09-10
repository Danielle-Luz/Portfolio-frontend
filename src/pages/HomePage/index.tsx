import { useContext, useEffect, useState } from "react";
import { ProfileCard, ProjectsSection } from "../../components";
import { tProject } from "../../interfaces";
import { ProjectsContext } from "../../providers";

export const HomePage = () => {
  const [highlightProjects, setHighlightProjects] = useState([] as tProject[]);
  const { getHighlights } = useContext(ProjectsContext);

  useEffect(() => {
    getHighlights()
      .then((projects) => setHighlightProjects(projects as tProject[]))
      .catch((error) => console.log(error));
  }, []);

  return (
    <>
      <ProfileCard />
      <ProjectsSection projects={highlightProjects} sectionTitle="Highlight projects" />
    </>
  );
};
