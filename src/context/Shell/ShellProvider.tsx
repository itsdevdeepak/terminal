import React, { KeyboardEvent, PropsWithChildren, useReducer } from "react";

import { createContext } from "../../utils/createContext";
import { ShellOutput, ShellStatus } from ".";
import { getAllCommands } from "../../utils/commands";
import { useTheme } from "../../context/Theme";

import { Helper } from "../../components/Commands/types";
import {
  historyReducer,
  initialState as historyInit,
  addHistory,
} from "./History";
import {
  consoleReducer,
  initialState as consoleInit,
  addToConsole,
  clearConsole,
} from "./Console";
import { CommandOutput, ConsoleOutput } from "../../components/Console/Output";

const [useContext, Provider] = createContext<{
  history: string[];
  console: JSX.Element[];
  executeCommand: (command: string) => void;
  executeEvent: (event: KeyboardEvent, inputValue: string) => ShellOutput;
}>();

export const useShell = useContext;

const ShellProvider = ({ children }: PropsWithChildren) => {
  const [history, historyDispatch] = useReducer(historyReducer, historyInit);
  const [console, consoleDispatch] = useReducer(consoleReducer, consoleInit);
  const { setTheme, theme } = useTheme();

  const helper: Helper = {
    theme: {
      theme,
      setTheme,
    },
    history: {
      history,
      historyDispatch,
    },
    console: {
      console,
      consoleDispatch,
    },
  };

  const executeCommand = (command: string) => {
    historyDispatch(addHistory(command));

    consoleDispatch(addToConsole(ConsoleOutput(command)));
    if (command) {
      consoleDispatch(addToConsole(CommandOutput(command, helper)));
    }
  };

  const executeEvent = (
    event: KeyboardEvent<Element>,
    inputValue: string
  ): ShellOutput => {
    let status: ShellStatus = "Success";
    let output = "";

    if (event.key === "Tab") {
      event.preventDefault();
      const commands = getAllCommands();

      commands.forEach((command) => {
        if (command.name.match(`^${inputValue}`)) {
          output = command.name;
          return;
        }
      });
    }

    if (event.ctrlKey) {
      if (event.key === "l") {
        event.preventDefault();
        consoleDispatch(clearConsole());
      }

      if (event.key === "c") {
        event.preventDefault();
        consoleDispatch(addToConsole(CommandOutput.Interrupt(inputValue)));
        status = "Interrupted";
      }
    }

    return { output, status };
  };

  return (
    <Provider value={{ history, console, executeCommand, executeEvent }}>
      {children}
    </Provider>
  );
};

export default ShellProvider;
