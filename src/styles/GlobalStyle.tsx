import { createGlobalStyle } from "styled-components";
import { Theme } from "../context/Theme";
const GlobalStyle = createGlobalStyle`

  /* Fonts */

  @font-face {
      font-family: "JetBrains Mono";
      src: local("JetBrains Mono"), url("./assets/fonts/JetBrainsMono-Medium.ttf");
      font-weight: 500;
      font-display: swap;
    }

    @font-face {
      font-family: "JetBrains Mono";
      src: local("JetBrains Mono"), url("./assets/fonts/JetBrainsMono-Bold.ttf");
      font-weight: 700;
      font-display: swap;
    }

    /* Variables */

  :root {
    --clr-foreground: ${({ theme }: { theme: Theme }) => theme.foreground};
    --clr-background: ${({ theme }: { theme: Theme }) => theme.background};
    --clr-select-foreground: ${({ theme }: { theme: Theme }) =>
      theme.selectionForeground};
    --clr-select-background: ${({ theme }: { theme: Theme }) =>
      theme.selectionBackground};
    --clr-border: ${({ theme }: { theme: Theme }) => theme.borderColor};
    --clr-cursor: ${({ theme }: { theme: Theme }) => theme.cursorColor};
    --clr-black: ${({ theme }: { theme: Theme }) => theme.black};
    --clr-white: ${({ theme }: { theme: Theme }) => theme.white};
    --clr-red: ${({ theme }: { theme: Theme }) => theme.red};
    --clr-green: ${({ theme }: { theme: Theme }) => theme.green};
    --clr-yellow: ${({ theme }: { theme: Theme }) => theme.yellow};
    --clr-blue: ${({ theme }: { theme: Theme }) => theme.blue};
    --clr-magenta: ${({ theme }: { theme: Theme }) => theme.magenta};
    --clr-cyan: ${({ theme }: { theme: Theme }) => theme.cyan};
  }

  /* CSS Reset */

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

  #root, #__next {
    isolation: isolate;
  }

  /* Global Styles */

  input,
  textarea,
  [contenteditable] {
    caret-color: var(--clr-cursor);
    border: none;
    background-color: var(--clr-background);
    color: var(--clr-foreground);
  }

  ::-moz-selection { 
    color: var(--clr-select-foreground);
    background: var(--clr-select-background);
  }

  ::selection {
    color: var(--clr-select-foreground);
    background: var(--clr-select-background);
  }

  body {
    font-family: 'JetBrains Mono', monospace;
    min-height: 100vh;
    overflow: hidden;
    color: var(--clr-foreground);
    background-color: var(--clr-background);
  }

  p, a {
    font-weight: 500;
  }
`;

export default GlobalStyle;
