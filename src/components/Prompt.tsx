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
  if (command === "clear") return setHistory([]);
  const tempHistory = [...history];
  tempHistory.push(command);
  setHistory(tempHistory);
};

const Prompt = ({ inputRef, historyHook }: PromptProps) => {
  const history = historyHook[0];

  useEffect(() => {
    inputRef.current?.scrollIntoView({ block: "end" });
  }, [history, inputRef]);

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!inputRef.current) return;
    const formData = new FormData(event.target as HTMLFormElement);
    const command = formData.get("prompt")?.toString() ?? " ";
    inputRef.current.value = "";
    runCommand(command, historyHook);
  };

  const handleKeyEvents = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "l" && event.ctrlKey) {
      runCommand("clear", historyHook);
      event.preventDefault();
    }
  };

  return (
    <form onSubmit={(e) => handleFormSubmit(e)}>
      <label htmlFor="prompt">
        <PS1 />
      </label>
      <Input
        onKeyDown={(e) => handleKeyEvents(e)}
        autoComplete="off"
        ref={inputRef}
        type="text"
        name="prompt"
        id="prompt"
      />
    </form>
  );
};

export default Prompt;
