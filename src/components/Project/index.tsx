import { tProjectProps } from "../../interfaces";
import { StyledLinkButton, StyledProject } from "../../styles";

export const Project = ({ project }: tProjectProps) => {
  const isFrontend = project.stack === "Front-end";

  return (
    <StyledProject>
      {isFrontend && <img src={project.coverImage} alt={project.name} />}
      <section>
        <h2>{project.name}</h2>
        <p>{project.description}</p>
      </section>
      <StyledLinkButton variant="outline" href={project.url}>
        Repositório
      </StyledLinkButton>
    </StyledProject>
  );
};
