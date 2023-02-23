import commands from "../components/commands";

export const getAllCommands = (): CommandName[] => {
  return Object.keys(commands) as CommandName[];
};

export const isValidCommand = (command: string): command is CommandName => {
  return command in commands;
};

export const getCommandOutput = (command: CommandName, args: string[]) => {
  return commands[command].component(args);
};
