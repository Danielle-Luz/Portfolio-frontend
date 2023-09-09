import { ProfileCard, ProjectsSection } from "../../components";

export const HomePage = async () => {
  return (
    <>
      <ProfileCard />
      <ProjectsSection
        projects={[]}
        sectionTitle="Highlight projects"
      />
    </>
  );
};
