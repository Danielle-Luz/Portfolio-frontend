import { styled } from "styled-components";

export const StyledProject = styled.li`
  background: linear-gradient(
    249deg,
    ${({ theme }) => theme.colors.grey.gradient[0]} 1.39%,
    ${({ theme }) => theme.colors.grey.gradient[1]} 100%
  );
  border: 2px solid ${({ theme }) => theme.colors.grey.lowOpacity[1]};
  display: flex;
  flex-direction: column;
  max-width: 425px;
  gap: 30px;
  padding: 30px 25px;
  width: 100%;

  h2 {
    font-size: ${({ theme }) => theme.fontSizes.medium};
    margin-bottom: 20px;
    max-width: 265px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 100%;
  }

  &,
  img {
    border-radius: ${({ theme }) => theme.radius.small};
  }

  img {
    height: 170px;
    object-fit: cover;
    max-width: 370px;
    width: 100%;
  }

  p {
    color: ${({ theme }) => theme.colors.grey.lowOpacity[0]};
    font-size: ${({ theme }) => theme.fontSizes.small};
    display: -webkit-box;
    height: 60px;
    overflow: hidden;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
`;
