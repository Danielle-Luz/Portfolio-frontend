import { Link } from "react-router-dom";
import { StyledHeader } from "../../styles";

export const Header = () => {
  return (
    <StyledHeader>
      <Link to="/">Home</Link>
      <Link to="/projects">Projetos</Link>
      <Link to="/about">Sobre mim</Link>
      <Link to="/contact">Contato</Link>
    </StyledHeader>
  );
};
