import { NavLink } from "react-router-dom";
import { StyledHeader } from "../../styles";

export const Header = () => {
  return (
    <StyledHeader>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/projects">Projetos</NavLink>
      <NavLink to="/about">Sobre mim</NavLink>
      <NavLink to="/contact">Contato</NavLink>
    </StyledHeader>
  );
};
