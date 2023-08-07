import React from "react";
import { getAllCommands } from "../../utils/commands";
import { type Command } from "../Command/types";
import styled from "styled-components";
import { Theme } from "../../context/Theme";

const ColumnText = styled.div`
  .label {
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
        <p className="label">{command.name}</p>
        <p className="value">- {command.description}</p>
      </div>
    </ColumnText>
  );
};

const Help = (args: string[]) => {
  if (args.join())
    return <span>help: {args.join(" ")}: is not help command</span>;

  const commands = Array.from(getAllCommands(), ([, value]) => {
    return value as Command;
  });

  return (
    <div>
      {commands.map((command, idx) => {
        return <Command key={idx} {...command} />;
      })}
      <br />
      <p>Hotkeys and other helpful features</p>
      <ColumnText>
        <div className="row">
          <p className="label hotkey">Tab</p>
          <p className="value">- Autocomplete Command</p>
        </div>
        <div className="row">
          <p className="label hotkey">Ctrl + l</p>
          <p className="value">- Clears the screen</p>
        </div>
        <div className="row">
          <p className="label hotkey">Ctrl + c</p>
          <p className="value">- Interprets Command</p>
        </div>
      </ColumnText>
    </div>
  );
};
export default Help;
