import { Helper } from "../Commands/types";

export type CommandOutput = JSX.Element;

export type CommandOutputs = CommandOutput[];

export type Command = {
  name: string;
  description?: string;
  help?: () => CommandOutput;
  run: (args: string[], helper: Helper) => CommandOutput;
};
