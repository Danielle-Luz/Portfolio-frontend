import { styled } from "styled-components";
import { deviceSizes } from "../deviceSizes";

export const StyledProfileCard = styled.article`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.main.lowOpacity};
  border: 2px solid ${({ theme }) => theme.colors.grey.lowOpacity[1]};
  border-radius: ${({ theme }) => theme.radius.small};
  display: flex;
  flex-direction: column;
  gap: 50px;
  justify-content: space-between;
  padding: 30px;
  width: 100%;

  @media (${deviceSizes.laptop}) {
    flex-direction: row;
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSizes.large};
    font-weight: 700;
    margin-bottom: 18px;
  }

  p {
    font-size: ${({ theme }) => theme.fontSizes.small};
    font-weight: 600;
  }

  .personal-info {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 25px;
    max-width: 800px;
    text-align: center;
    width: 100%;

    img {
      border-radius: ${({ theme }) => theme.radius.round};
      width: 200px;
    }

    @media (${deviceSizes.tablet}) {
      flex-direction: row;
      gap: 42px;
      text-align: justify;
    }
  }

  .buttons-section {
    align-items: center;
    display: flex;
    flex-direction: column;
    max-width: 400px;
    gap: 18px;
    width: 100%;

    @media (${deviceSizes.tablet}) {
      flex-direction: row;
      max-width: none;
      text-align: justify;
    }

    @media (${deviceSizes.laptop}) {
      flex-direction: column;
      max-width: 240px;
    }

    a {
      transition: 0.3s;
    }

    a:hover {
      opacity: 70%;
    }

    div {
      display: flex;
      gap: 25px;
    }

    img {
      width: 40px;
    }
  }
`;
