import { styled } from "styled-components";
import { Carousel } from "@mantine/carousel";

export const StyledProject = styled(Carousel.Slide)`
  background: linear-gradient(
    249deg,
    ${({ theme }) => theme.colors.grey.gradient[0]} 1.39%,
    ${({ theme }) => theme.colors.grey.gradient[1]} 100%
  );
  border: 2px solid ${({ theme }) => theme.colors.grey.lowOpacity[1]};
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  justify-content: center;
  gap: 25px;
  padding: 25px;
  max-width: 425px;
  min-width: 300px;
  margin-right: 20px;
  width: 100%;

  h2 {
    font-size: ${({ theme }) => theme.fontSizes.medium};
    margin-bottom: 10px;
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
    height: 150px;
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
