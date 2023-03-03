import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Inter';
  }

  body {
    height: 100%;
    background-color: ${props => props.theme.colores.background};
    color: ${props => props.theme.colores.text};
  }

  input:focus {
    outline: 0;
  }

  ul {
    list-style-type: none;
  }

  a {
    font-family: 'Titillium Web', sans-serif;
    color: ${props => props.theme.colores.text};
    text-decoration: none;
  }
`