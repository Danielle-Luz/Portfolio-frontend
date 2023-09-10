import { styled } from "styled-components";
import { deviceSizes } from "../deviceSizes";

export const StyledTechnologies = styled.ul`
  display: none;
  gap: 10px;
  justify-content: center;
  width: fit-content;

  @media ${deviceSizes.laptopMedium} {
    display: flex;
  }

  li {
    align-items: center;
    background-color: transparent;
    border: 1px solid ${({ theme }) => theme.colors.grey.light};
    border-radius: ${({ theme }) => theme.radius.round};
    display: flex;
    justify-content: center;
    height: 40px;
    width: 40px;
  }

  img {
    max-width: 25px;
    width: 100%;
  }
`;
