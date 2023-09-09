import { createGlobalStyle } from "styled-components";
import { deviceSizes } from "../deviceSizes";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    color: ${({ theme }) => theme.colors.grey.light};
    font-family: ${({ theme }) => theme.fontFamily};
  }

  a {
    color: inherit;
    display: block;
    text-decoration: none;
  }
  
  body {
    background: linear-gradient(243deg, 
      ${({ theme }) => theme.colors.main.gradient[0]} 0%, 
      ${({ theme }) => theme.colors.main.gradient[1]} 0.01%, 
      ${({ theme }) => theme.colors.main.gradient[2]} 100%
    );
    margin: 0;
    min-height: 100vh;
    padding: 20px 5%;
    position: relative;
    
    @media (min-width: ${deviceSizes.mobileMedium}) {
      padding-inline: 10%;
    }
  }

  body::after {
    background-image: linear-gradient(
      90deg,
      ${({ theme }) => theme.colors.grey.gradient[1]} 0%,
      ${({ theme }) => theme.colors.main.gradient[0]} 80%
    );
    content: "";
    height: 100%;
    position: absolute;
    right: 0;
    top: 0;
    pointer-events: none;
    width: 30%;
  }

  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
  }

  h1, h2, h3, p {
    margin: 0;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }
`;
