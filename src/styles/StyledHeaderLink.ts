import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import { tStyledHeaderLinkProps } from "../types";

export const StyledHeaderLink = styled(NavLink)<tStyledHeaderLinkProps>`
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
