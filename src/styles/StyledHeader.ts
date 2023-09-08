import { styled } from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  gap: 5px;
  justify-content: center;
  padding-block: 10px;

  a {
    font-weight: 700;
    font-size: ${({ theme }) => theme.fontSizes.medium};
    padding: 5px 30px;
  }

  a:active {
    background-color: ${({theme}) => theme.colors.grey.lowOpacity[3]};
    border-radius: ${({theme}) => theme.radius.small};
  }
`;
