import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    body {
        margin: 0;
        background-color: #244857;
        font-family: Raleway, Helvetica, Sans-Serif;
    }
    a {
        text-decoration: none;
    }

`;

export const theme = {
  primary: "#15475B",
  secondary: "#27657F",
  link: "#4DC1F2",
  title: "#8aa3ad",
};
