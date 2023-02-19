import React, { Dispatch, RefObject, SetStateAction } from "react";

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
};

const Prompt = ({ inputRef, historyHook }: PromptProps) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (!inputRef.current) return;
        const formData = new FormData(e.target as HTMLFormElement);
        const command = formData.get("prompt")?.toString() ?? "";
        inputRef.current.value = "";
        inputRef.current.scrollIntoView();
        runCommand(command, historyHook);
      }}
    >
      <label htmlFor="prompt">Prompt</label>
      <input ref={inputRef} type="text" name="prompt" id="prompt" />
    </form>
  );
};

export default Prompt;
