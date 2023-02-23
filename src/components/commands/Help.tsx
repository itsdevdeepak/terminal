import React from "react";
import styled from "styled-components";
import { getAllCommands } from "../../utils/command";
import commands from "../commands";

const ColumnText = styled.div`
  .lable {
    color: ${(props: { theme: Theme }) => props.theme.green};
    font-weight: bold;
    flex: 1;
  }

  .row {
    display: flex;
  }

  .value {
    flex: 8;
  }
`;

const Command = (command: Command) => {
  return (
    <ColumnText>
      <div className="row">
        <p className="lable">{command.name}:</p>
        <p className="value">{command.description}</p>
      </div>
    </ColumnText>
  );
};

const Help = (args: string[]) => {
  if (args.join())
    return <span>help: {args.join(" ")}: is not help command</span>;
  return (
    <div>
      <p>list of available commands</p>
      {getAllCommands().map((commandName: CommandName) => {
        return Command(commands[commandName]);
      })}
    </div>
  );
};
export default Help;
