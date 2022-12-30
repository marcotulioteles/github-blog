import { createGlobalStyle } from "styled-components";
import { defaultTheme } from "./themes/default";

const { colors, font } = defaultTheme;

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${colors["base-background"]};
    color: ${colors["base-text"]}
  }

  body, input, textarea, button, a {
    font-family: ${font.app}, Arial, Helvetica, sans-serif;
    font-weight: 400;
    font-size: 1rem;
    line-height: ${font["line-height"]};
  }
`;