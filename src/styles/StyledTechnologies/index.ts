import { styled } from "styled-components";

export const StyledTechnologies = styled.ul`
  display: flex;
  gap: 10px;
  justify-content: center;
  width: 100%;

  li {
    align-items: center;
    background-color: ${({ theme }) => theme.colors.grey.lowOpacity[2]};
    border: 1px solid ${({ theme }) => theme.colors.grey.lowOpacity[1]};
    border-radius: ${({ theme }) => theme.radius.round};
    display: flex;
    justify-content: center;
    height: 50px;
    width: 50px;
  }

  img {
    max-width: 35px;
    width: 100%;
  }
`;
