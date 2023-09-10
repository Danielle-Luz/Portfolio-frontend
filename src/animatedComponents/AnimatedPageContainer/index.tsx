import { tParentComponentProps } from "../../interfaces";
import { StyledAnimatedPageContainer } from "../../styles";

export const AnimatedPageContainer = ({ children }: tParentComponentProps) => {
  return (
    <>

        {children}
      <StyledAnimatedPageContainer
        isTopOrigin
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
      />
      <StyledAnimatedPageContainer
        isTopOrigin={false}
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        exit={{ scaleY: 0 }}
        transition={{ duration: 2, ease: [0.22, 1, 0.36, 1] }}
      />
    </>
  );
};
