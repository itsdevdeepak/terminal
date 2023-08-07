import React, { useEffect, useRef } from "react";
import styled from "styled-components";
import { type Theme } from "../../context/Theme";
import Console from "../Console";
import Prompt from "../Prompt";
import ShellProvider from "../../context/Shell/ShellProvider";

const Container = styled.main`
  height: calc(100vh - 0.7rem * 2);
  margin: 0.7rem;
  padding: 1.15rem 1rem;
  border: 2px solid ${({ theme }: { theme: Theme }) => theme.borderColor};
  border-radius: 4px;
  display: block;
  overflow-y: auto;
`;

const Terminal = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    if (inputRef.current) inputRef.current.focus();
  };

  useEffect(() => focusInput(), []);
  return (
    <Container aria-label="Terminal!!" onClick={() => focusInput()}>
      <ShellProvider>
        <Console />
        <Prompt ref={inputRef} />
      </ShellProvider>
    </Container>
  );
};

export default Terminal;
