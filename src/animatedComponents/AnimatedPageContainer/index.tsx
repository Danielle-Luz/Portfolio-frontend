import { tParentComponentProps } from "../../interfaces";
import { StyledAnimatedPageContainer } from "../../styles";

export const AnimatedPageContainer = ({ children }: tParentComponentProps) => {
  return <StyledAnimatedPageContainer>{children}</StyledAnimatedPageContainer>;
};
