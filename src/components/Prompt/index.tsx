import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
} from "react";
import styled from "styled-components";
import PS1 from "../PS1";
import { useShell } from "../../context/Shell/ShellProvider";

const Input = styled.input`
  outline: none;
  padding-left: 0.6rem;
`;

const Prompt = forwardRef<HTMLInputElement, unknown>((_props, ref) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { executeCommand, executeEvent } = useShell();

  useImperativeHandle(ref, () => {
    return {
      focus: () => {
        inputRef.current?.focus();
      },
    } as HTMLInputElement;
  });

  useEffect(() => {
    inputRef.current?.scrollIntoView({ block: "end" });
  }, [executeCommand]);

  const handleSubmit: React.FormEventHandler<HTMLFormElement> = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target as HTMLFormElement);
    const command = formData.get("prompt")?.toString() ?? " ";
    executeCommand(command);

    if (inputRef.current) {
      inputRef.current.value = "";
    }
  };

  const handleKeyDown: React.KeyboardEventHandler<HTMLInputElement> = (
    event
  ) => {
    if (!inputRef.current) return;
    const shellOutput = executeEvent(event, inputRef.current?.value ?? "");

    if (shellOutput.status !== "Success") {
      inputRef.current.value = "";
      return;
    }

    if (shellOutput.output) {
      inputRef.current.value = shellOutput.output;
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="prompt">
        <PS1 />
      </label>
      <Input
        ref={inputRef}
        onKeyDown={handleKeyDown}
        autoComplete="off"
        type="text"
        name="prompt"
        id="prompt"
      />
    </form>
  );
});

Prompt.displayName = "Prompt";

export default React.memo(Prompt);
