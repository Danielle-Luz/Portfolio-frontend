import { NavLink, useLocation } from "react-router-dom";
import { HeaderLink, StyledHeader } from "../../styles";

export const Header = () => {
  const actualLocation = useLocation();
  const routesPaths = [
    { pathName: "/", hyperlinkName: "Home" },
    { pathName: "/projects", hyperlinkName: "Projetos" },
    { pathName: "/about", hyperlinkName: "Sobre mim" },
    { pathName: "/contact", hyperlinkName: "Contato" },
  ];

  return (
    <StyledHeader>
      {routesPaths.map(({ pathName, hyperlinkName }) => {
        const isAccessedRoute = actualLocation.pathname === pathName;
        return (
          <HeaderLink to={pathName} isAccessedRoute={isAccessedRoute}>
            {hyperlinkName}
          </HeaderLink>
        );
      })}
    </StyledHeader>
  );
};
