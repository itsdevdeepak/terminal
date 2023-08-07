import React from "react";
import PS1 from "../../PS1";
import { getAllCommands } from "../../../utils/commands";
import { Helper } from "../../Commands/types";

const Command = (command: string, helper: Helper) => {
  const [commandName, ...args] = command.split(" ");
  const commands = getAllCommands();

  if (!commands.get(commandName)) {
    return <>{commandName}: command not found</>;
  }

  return <>{commands.get(commandName)?.run(args, helper)}</>;
};

const Interrupt = (command: string) => {
  return (
    <>
      <PS1 />
      {command}^C
    </>
  );
};

Command.Interrupt = Interrupt;

export default Command;
