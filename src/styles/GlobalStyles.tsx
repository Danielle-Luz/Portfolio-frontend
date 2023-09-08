import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    font-family: ${(props) => props.theme.fontFamily};
  }

  a {
    color: inherit;
    display: block;
    text-decoration: none;
  }
  
  body {
    margin: 0;
    padding: 40px;
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
