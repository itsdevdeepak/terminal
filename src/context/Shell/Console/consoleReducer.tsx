import { CommandOutput, CommandOutputs } from "../../../components/Command";

export type AddConsoleAction = {
  type: "add";
  payload: CommandOutput;
};

export type ClearConsoleAction = {
  type: "clear";
};

export type ConsoleAction = AddConsoleAction | ClearConsoleAction;

export const addToConsole = (payload: CommandOutput): AddConsoleAction => {
  return { type: "add", payload };
};

export const clearConsole = (): ClearConsoleAction => {
  return { type: "clear" };
};

export const initialState: CommandOutputs = [];

export const consoleReducer = (state = initialState, action: ConsoleAction) => {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "clear":
      return [];
  }
};
