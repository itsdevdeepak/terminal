import React, { RefObject, useEffect, useRef, useState } from "react";
import Prompt from "./Prompt";
import Screen from "./Screen";
import styled from "styled-components";

const TerminalContainer = styled.div`
  height: calc(100vh - 0.7rem * 2);
  margin: 0.7rem;
  padding: 1.15rem 1rem;
  border: 2px solid ${({ theme }: { theme: Theme }) => theme.red};
  border-radius: 4px;
  display: block;
  overflow-y: auto;
`;

const setFocus = (ref: RefObject<HTMLInputElement>): void => {
  if (ref.current) ref.current.focus();
};

const Terminal = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const [history, setHistory] = useState<string[]>([]);
  useEffect(() => setHistory(["banner"]), []);
  useEffect(() => setFocus(inputRef), []);

  return (
    <TerminalContainer onClick={() => setFocus(inputRef)}>
      <Screen historyHook={[history, setHistory]} />
      <Prompt inputRef={inputRef} historyHook={[history, setHistory]} />
    </TerminalContainer>
  );
};

export default Terminal;
