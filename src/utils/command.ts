import commands from "../components/commands";

export const getAllCommands = () => {
  return Object.keys(commands);
};

export const isValidCommand = (command: string): command is CommandName => {
  return getAllCommands().includes(command);
};

export const getCommandOutput = (command: CommandName, args: string[]) => {
  return commands[command].component(args);
};
