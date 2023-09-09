import { tProjectProps } from "../../interfaces";
import { StyledLinkButton, StyledProject } from "../../styles";
import { Technologies } from "../Technologies";

export const Project = ({ project }: tProjectProps) => {
  const isBackend = project.stack === "Back-end";

  return (
    <StyledProject isBackend>
      {!isBackend && <img src={project.coverImage} alt={project.name} />}
      <section>
        <h2>{project.name}</h2>
        <p>{project.description}</p>
      </section>
      <StyledLinkButton variant="outline" href={project.url}>
        Repositório
      </StyledLinkButton>
      {isBackend && <Technologies technologies={project.technologies} />}

    </StyledProject>
  );
};
