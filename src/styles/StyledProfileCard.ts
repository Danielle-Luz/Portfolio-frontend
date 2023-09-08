import { styled } from "styled-components";

export const StyledProfileCard = styled.article`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.main.lowOpacity};
  border: 2px solid ${({ theme }) => theme.colors.grey.lowOpacity[1]};
  border-radius: ${({ theme }) => theme.radius.small};
  display: flex;
  justify-content: space-between;
  padding: 30px;
  width: 100%;
  
  h2 {
    font-size: ${({ theme }) => theme.fontSizes.large};
    font-weight: 700;
    margin-bottom: 18px;
  }
  
  p {
    font-size: ${({ theme }) => theme.fontSizes.small};
    font-weight: 600;
    text-align: justify;
  }

  .personal-info {
    align-items: center;
    display: flex;
    max-width: 800px;
    gap: 42px;
    width: 100%;

    img {
      border-radius: ${({ theme }) => theme.radius.round};
      width: 200px;
    }
  }

  .buttons-section {
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 18px;
    max-width: 240px;
    width: 100%;

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
