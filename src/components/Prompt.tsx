import React, { Dispatch, RefObject, SetStateAction } from "react";
import styled from "styled-components";
import PS1 from "./PS1";

const runCommand = (command: string, historyHook: HistoryHook): void => {
  const [history, setHistory] = historyHook;
  const tempHistory = [...history];
  tempHistory.push(command);
  setHistory(tempHistory);
};

type HistoryHook = [string[], Dispatch<SetStateAction<string[]>>];

type PromptProps = {
  inputRef: RefObject<HTMLInputElement>;
  historyHook: HistoryHook;
  screenRef: RefObject<HTMLDivElement>;
};

const Input = styled.input`
  background-color: inherit;
  color: inherit;
  border: none;
  outline: none;
`;

const Prompt = ({ inputRef, historyHook }: PromptProps) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!inputRef.current) return;
        const formData = new FormData(e.target as HTMLFormElement);
        const command = formData.get("prompt")?.toString() ?? " ";
        inputRef.current.value = "";
        // TODO: Chhange Scroll Options
        inputRef.current.scrollIntoView();
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