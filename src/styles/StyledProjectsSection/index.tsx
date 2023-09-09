import { styled } from "styled-components";

export const StyledProjectsSection = styled.section`
  h2 {
    font-size: ${({ theme }) => theme.fontSizes.medium};
    font-weight: 600;
    margin-bottom: 30px;
  }

  ul {
    display: flex;
    gap: 40px;
  }
`;
