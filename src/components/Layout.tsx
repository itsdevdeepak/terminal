import React from "react";
import { PropsWithChildren } from "react";
import GlobalStyle from "./styles/GlobalStyle";

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div>
      <GlobalStyle />
      {children}
    </div>
  );
};

export default Layout;
