import { styled } from "styled-components";

export const ProfileCard = styled.article`
  background-color: ${({ theme }) => theme.colors.main.lowOpacity};
  border: 2px solid ${({ theme }) => theme.colors.grey.lowOpacity[1]};
  display: flex;
  justify-content: space-between;
  padding: 30px;
  width: 100%;

  .personal-info {
    align-items: center;
    display: flex;
    gap: 42px;

    img {
      border-radius: ${({ theme }) => theme.radius.round};
      width: 250px;
    }
  }

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
`;
