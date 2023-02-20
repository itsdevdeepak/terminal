import React from "react";
import { PropsWithChildren } from "react";
import { ThemeProvider } from "styled-components";
import { getCurrentTheme } from "../utils/config";
import GlobalStyle from "./styles/GlobalStyle";

const Layout = ({ children }: PropsWithChildren) => {
  const theme = getCurrentTheme();
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default Layout;
