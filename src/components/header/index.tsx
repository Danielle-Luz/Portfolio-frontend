import { NavLink, useLocation } from "react-router-dom";
import { StyledHeaderLink, StyledHeader } from "../../styles";

export const Header = () => {
  const actualLocation = useLocation();
  const routesPaths = [
    { pathName: "/", hyperlinkName: "Home" },
    { pathName: "/projects", hyperlinkName: "Projetos" },
    { pathName: "/about", hyperlinkName: "Sobre" },
    { pathName: "/contact", hyperlinkName: "Contato" },
  ];

  return (
    <StyledHeader>
      {routesPaths.map(({ pathName, hyperlinkName }) => {
        const isAccessedRoute = actualLocation.pathname === pathName;
        return (
          <StyledHeaderLink isAccessedRoute={isAccessedRoute} key={pathName} to={pathName}>
            {hyperlinkName}
          </StyledHeaderLink>
        );
      })}
    </StyledHeader>
  );
};
