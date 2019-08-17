import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import media from "./media";

export const colors = {
  dark: "#0D1321",
  default: "#1d2d44",
  light: "#3E5C76",
  veryLight: "#748CAB",
  contrast: "#FFFFFF"
};

export default createGlobalStyle`
  ${reset}
  
  body {
    font-family: sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-size: 16px;
    ${media.tablet`font-size: 14px;`}
    ${media.phone`font-size: 12px;`}
  }
  
  a,
  a:hover,
  a:visited {
    text-decoration: none;
    color: inherit;
  }

  a:hover {
    text-decoration: underline;
  }

  p {
    margin-bottom: 10px;
  }
`;
