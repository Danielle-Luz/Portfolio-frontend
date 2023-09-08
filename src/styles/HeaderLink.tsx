import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import { tHeaderLinkProps } from "./../types";

export const HeaderLink = styled(NavLink)<tHeaderLinkProps>`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes.medium};
  padding: 5px 30px;

  ${({ isAccessedRoute, theme }) => {
    return (
      isAccessedRoute &&
      `background-color: ${theme.colors.grey.lowOpacity[3]};
      border-radius: ${theme.radius.small};`
    );
  }}
`;
