import React from "react";
import { PropsWithChildren } from "react";
import { ThemeProvider } from "../../context/Theme";
import GlobalStyle from "../../styles/GlobalStyle";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <ThemeProvider>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  );
};

export default Layout;
2;
