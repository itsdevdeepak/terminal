import React, { Dispatch, RefObject, SetStateAction, useEffect } from "react";
import styled from "styled-components";
import PS1 from "./PS1";

type HistoryHook = [string[], Dispatch<SetStateAction<string[]>>];

type PromptProps = {
  inputRef: RefObject<HTMLInputElement>;
  historyHook: HistoryHook;
};

const Input = styled.input`
  background-color: inherit;
  color: inherit;
  border: none;
  outline: none;
  padding-left: 0.6rem;
`;

const runCommand = (command: string, historyHook: HistoryHook): void => {
  const [history, setHistory] = historyHook;
  const tempHistory = [...history];
  tempHistory.push(command);
  setHistory(tempHistory);
};

const Prompt = ({ inputRef, historyHook }: PromptProps) => {
  const [history, setHistory] = historyHook;
  useEffect(() => {
    inputRef.current?.scrollIntoView({ behavior: "auto", block: "end" });
  }, [history, inputRef]);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!inputRef.current) return;
        const formData = new FormData(e.target as HTMLFormElement);
        const command = formData.get("prompt")?.toString() ?? " ";
        inputRef.current.value = "";
        if (command === "clear") return setHistory([]);
        runCommand(command, historyHook);
      }}
    >
      <label htmlFor="prompt">
        <PS1 />
      </label>
      <Input ref={inputRef} type="text" name="prompt" id="prompt" />
    </form>
  );
};

export default Prompt;
