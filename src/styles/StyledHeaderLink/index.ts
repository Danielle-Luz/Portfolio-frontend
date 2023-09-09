import { NavLink } from "react-router-dom";
import { styled } from "styled-components";
import { tStyledHeaderLinkProps } from "../../interfaces";
import { deviceSizes } from "../deviceSizes";

export const StyledHeaderLink = styled(NavLink)<tStyledHeaderLinkProps>`
  font-weight: 700;
  font-size: ${({ theme }) => theme.fontSizes.small};
  padding: 5px 10px;
  text-align: center;

  ${({ isAccessedRoute, theme }) => {
    return (
      isAccessedRoute &&
      `background-color: ${theme.colors.grey.lowOpacity[3]};
      border-radius: ${theme.radius.small};`
    );
  }}

  @media (${deviceSizes.tabletSmall}) {
    font-size: ${({ theme }) => theme.fontSizes.medium};
    padding-inline: 30px;
  }
`;
