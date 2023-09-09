import { tTechnologiesProps } from "../../interfaces";
import { StyledTechnologies } from "../../styles";

export const Technologies = ({ technologies }: tTechnologiesProps) => {
  return (
    <StyledTechnologies>
      {technologies.map(({ iconUrl, name }) => (
        <li>
          <img src={iconUrl} alt={name} />
        </li>
      ))}
    </StyledTechnologies>
  );
};
