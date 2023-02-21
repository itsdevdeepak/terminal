import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  /* Josh's Custom CSS Reset https://www.joshwcomeau.com/css/custom-css-reset */
  *, *::before, *::after {
    box-sizing: border-box;
  }
  * {
    margin: 0;
  }
  html, body {
    height: 100%;
  }
  body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
  }
  img, picture, video, canvas, svg {
    display: block;
    max-width: 100%;
  }
  input, button, textarea, select {
    font: inherit;
  }
  p, h1, h2, h3, h4, h5, h6 {
    overflow-wrap: break-word;
  }
  #root, #__next {
    isolation: isolate;
  }

  /* Global Styles */

  @import url('https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,300;0,400;0,500;1,300;1,400;1,500&display=swap');
  body {
    font-family: 'JetBrains Mono', monospace;
    background-color: ${(props: { theme: Theme }) => props.theme.background};
    color:${(props: { theme: Theme }) => props.theme.foreground};
    height: 100vh;
    overflow: hidden;
  }

  p,a {
    font-weight: 500;
  }
`;

export default GlobalStyle;
