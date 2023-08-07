import { commands } from "../components/Commands";

export const getAllCommands = () => {
  const map = new Map(Object.entries(commands));
  return map;
};
