import { styled } from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  gap: 30px;
  justify-content: center;
  padding-block: 10px;

  a {
    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSizes.medium};
  }
`;
