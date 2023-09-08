import { createGlobalStyle } from "styled-components";

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
    padding: 40px 150px;
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
