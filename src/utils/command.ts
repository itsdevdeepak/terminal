import commands, { Command } from "../components/commands";

export const getAllCommands = () => {
  return Object.keys(commands);
};

export const isValidCommand = (command: string): command is Command => {
  return getAllCommands().includes(command);
};

export const getCommandOutput = (command: Command, args: string[]) => {
  return commands[command](args);
};
