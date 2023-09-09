import { tProject, tProjectProps, tStack } from "../../interfaces";
import { StyledButton, StyledProject } from "../../styles";

export const Project = ({project: tProject, projectStack: tStack}: tProjectProps) => {
  const isFrontend = projectStack === "Front-end";

  return (
    <StyledProject>
      {isFrontend && <img src={project.coverImage} />}
      <section>
        <h2>{project.name}</h2>
        <p>{project.description}</p>
      </section>
      <StyledButton variant="outline">Repositório</StyledButton>
    </StyledProject>
  );
};
