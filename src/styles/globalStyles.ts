import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Inter';
    }

    html {
        height: 100%;
        background-color: #000000;
    }

    input:focus {
        outline: 0;
    }

    ul {
        list-style-type: none;
    }

    a {
        font-family: 'Titillium Web', sans-serif;
    }
 `   