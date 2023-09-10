import { styled } from "styled-components";

export const StyledLoadingIcon = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  left: 0;
  justify-content: center;
  top: 0;
  position: absolute;
  text-align: center;
  width: 100%;

  article {
    align-items: center;
    display: flex;
    flex-direction: column;
    max-width: 600px;
    gap: 20px;
    width: 100%;
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSizes.large};
  }

  img {
    max-width: 200px;
    margin-bottom: 30px;
    width: 100%;
  }

  p {
    font-size: ${({ theme }) => theme.fontSizes.medium};
  }
`;
