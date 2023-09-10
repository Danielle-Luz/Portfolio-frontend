import { tParentComponentProps } from "../../interfaces";
import { StyledProjectsSection } from "../../styles";

export const AnimatedProjectsSection = ({
  children,
}: tParentComponentProps) => {
  return (
    <StyledProjectsSection
      initial={{ opacity: 0, y: -100 }}
      whileInView={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      viewport={{ once: true }}
    >
      {children}
    </StyledProjectsSection>
  );
};
