import React, { RefObject, useEffect, useRef, useState } from "react";
import Prompt from "./Prompt";
import Screen from "./Screen";
import styled from "styled-components";

const TerminalContainer = styled.div`
  height: 100vh;
`;

const setFocus = (ref: RefObject<HTMLInputElement>): void => {
  if (ref.current) ref.current.focus();
};

const Terminal = () => {
  const inputRef = useRef<HTMLInputElement>(null);
  const screenRef = useRef<HTMLDivElement>(null);
  const [history, setHistory] = useState<string[]>([]);

  useEffect(() => setFocus(inputRef), []);

  return (
    <TerminalContainer onClick={() => setFocus(inputRef)}>
      <Screen screenRef={screenRef} historyHook={[history, setHistory]} />
      <Prompt
        inputRef={inputRef}
        screenRef={screenRef}
        historyHook={[history, setHistory]}
      />
    </TerminalContainer>
  );
};

export default Terminal;
