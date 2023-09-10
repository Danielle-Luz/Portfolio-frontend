import { styled } from "styled-components";
import { motion } from "framer-motion";

export const StyledProjectsSection = styled(motion.section)`
  cursor: pointer;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  -webkit-user-select: none;
  -webkit-touch-callout: none;

  .section-title {
    font-size: ${({ theme }) => theme.fontSizes.large};
    font-weight: 700;
    margin-bottom: 30px;
  }

  path {
    color: ${({ theme }) => theme.colors.main.gradient[2]};
  }
`;
