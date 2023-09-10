import { styled } from "styled-components";
import { tStyledLinkButtonProps } from "../../interfaces";
import { customTheme } from "../theme";

const variantsStyles = {
  outline: `
    border: 1px solid ${customTheme.colors.grey.light};
    padding: 5px 15px;
    width: fit-content;

    &:hover {
      background-color: ${customTheme.colors.grey.lowOpacity[2]};
    }
  `,
  faint: `
    background-color: ${customTheme.colors.grey.lowOpacity[2]};
    border: 1px solid ${customTheme.colors.grey.lowOpacity[1]};
    font-weight: 700;
    padding: 10px;
    text-align: center;
    width: 100%;

    &:hover {
      background-color: transparent;
    }
  `,
};

export const StyledLinkButton = styled.a<tStyledLinkButtonProps>`
  border-radius: ${({ theme }) => theme.radius.small};
  font-size: ${({ theme }) => theme.fontSizes.small};
  transition: 0.2s;
  ${({ variant }) => variantsStyles[variant]}
`;
