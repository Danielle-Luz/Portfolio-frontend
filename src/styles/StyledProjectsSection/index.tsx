import { styled } from "styled-components";

export const StyledProjectsSection = styled.section`
  .section-title {
    font-size: ${({ theme }) => theme.fontSizes.large};
    font-weight: 700;
    margin-bottom: 30px;
  }

  ul {
    display: flex;
    gap: 40px;
  }
`;
