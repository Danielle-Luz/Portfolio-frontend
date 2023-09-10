import { styled } from "styled-components";

import { motion } from "framer-motion";

export const StyledAnimatedPageContainer = styled(motion.div)`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1380px;
  gap: 40px;
  width: 100%;
`;
