import React from "react";
import styled from "styled-components";
import { getAllCommands } from "../../utils/command";
import commands from "../commands";

const ColumnText = styled.div`
  .lable {
    color: ${(props: { theme: Theme }) => props.theme.cyan};
    flex: 1;
  }

  .row {
    display: flex;
  }

  .value {
    flex: 10;
  }

  .hotkey {
    color: ${(props: { theme: Theme }) => props.theme.cyan};
  }
`;

const Command = (command: Command) => {
  return (
    <ColumnText>
      <div className="row">
        <p className="lable">{command.name}</p>
        <p className="value">- {command.description}</p>
      </div>
    </ColumnText>
  );
};

const Help = (args: string[]) => {
  if (args.join())
    return <span>help: {args.join(" ")}: is not help command</span>;
  return (
    <div>
      {getAllCommands().map((commandName: CommandName) => {
        return Command(commands[commandName]);
      })}
      <br />
      <p>Hotkeys and other helpful features</p>
      <ColumnText>
        <div className="row">
          <p className="lable hotkey">Ctrl+l</p>
          <p className="value">- Clear Screen</p>
        </div>
        <div className="row">
          <p className="lable hotkey">Tab</p>
          <p className="value">- Autocomplete Command</p>
        </div>
      </ColumnText>
    </div>
  );
};
export default Help;
