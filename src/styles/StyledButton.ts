import { styled } from "styled-components";
import { tCustomTheme, tStyledButtonProps } from "../interfaces";

const variantsStyles = {
  outline: `
    border: 1px solid ${({ theme }: { theme: tCustomTheme }) => theme.colors.grey.light}
  `,
  faint: `
    background-color: ${({ theme }: { theme: tCustomTheme }) => theme.colors.grey.lowOpacity[2]},
    border: 1px solid ${({ theme }: { theme: tCustomTheme }) => theme.colors.grey.lowOpacity[1]},
    padding: "10px",
    text-align: center
  `,
};

export const StyledButton = styled.button<tStyledButtonProps>`
  ${({ variant }) => variantsStyles[variant]}
`;
