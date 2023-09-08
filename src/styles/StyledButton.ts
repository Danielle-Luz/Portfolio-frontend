import { styled } from "styled-components";
import { tStyledButtonProps } from "../interfaces";
import { customTheme } from "./theme";

const variantsStyles = {
  outline: `
    border: 1px solid ${customTheme.colors.grey.light};
  `,
  faint: `
    background-color: ${customTheme.colors.grey.lowOpacity[2]};
    border: 1px solid ${customTheme.colors.grey.lowOpacity[1]};
    padding: 10px;
    text-align: center;
  `,
};

export const StyledButton = styled.button<tStyledButtonProps>`
  border-radius: ${({theme}) => theme.radius.small};
  ${({ variant }) => variantsStyles[variant]}
`;
