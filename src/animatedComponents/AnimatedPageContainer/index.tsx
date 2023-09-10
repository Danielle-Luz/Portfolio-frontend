import { tParentComponentProps } from "../../interfaces";
import { StyledAnimatedPageContainer } from "../../styles";
import { animatedPageContainerOptions } from "../animationOptions";

export const AnimatedPageContainer = ({ children }: tParentComponentProps) => {
  return (
    <StyledAnimatedPageContainer
      initial="initial"
      animate="animate"
      exit="exit"
      variants={animatedPageContainerOptions}
    >
      {children}
    </StyledAnimatedPageContainer>
  );
};
