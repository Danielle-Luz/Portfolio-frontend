import { motion } from "framer-motion";
import { styled } from "styled-components";
import { tStyledAnimatedPageContainerProps } from "../../interfaces";

export const StyledAnimatedPageContainer = styled(
  motion.div
)<tStyledAnimatedPageContainerProps>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: ${({theme}) => theme.colors.main.gradient[2]};
  transform-origin: ${({ isTopOrigin }) => (isTopOrigin ? "top" : "bottom")};
  z-index: 100;
`;
