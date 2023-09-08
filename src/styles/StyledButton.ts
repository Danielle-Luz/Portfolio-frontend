import { styled } from "styled-components";
import { tCustomTheme, tStyledButtonProps } from "../interfaces";

const variantsStyles = {
  outline: {
    border: `1px solid ${({ theme }: { theme: tCustomTheme }) =>
      theme.colors.grey.light}`,
  },
};

export const StyledProfileButton = styled.button<tStyledButtonProps>``;
