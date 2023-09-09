import { tProjectProps } from "../../interfaces";
import { StyledButton, StyledProject } from "../../styles";

export const Project = ({ project }: tProjectProps) => {
  const isFrontend = project.stack === "Front-end";

  return (
    <StyledProject>
      {isFrontend && <img src={project.coverImage}  alt={project.name} />}
      <section>
        <h2>{project.name}</h2>
        <p>{project.description}</p>
      </section>
      <StyledButton variant="outline">Repositório</StyledButton>
    </StyledProject>
  );
};
