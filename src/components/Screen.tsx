import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { getCommandOutput, isValidCommand } from "../utils/command";
import PS1 from "./PS1";

type HistoryHook = [string[], Dispatch<SetStateAction<string[]>>];

const commandOutput = (inputCommand: string) => {
  const [command, ...args] = inputCommand.split(" ");
  if (command === "") return <span></span>;

  if (!isValidCommand(command))
    return <span>{command}: command not found</span>;

  return getCommandOutput(command, args);
};

const OutputStyles = styled.div`
  p {
    display: inline;
  }
  .command > * {
    padding-right: 0.6rem;
  }
`;

const Screen = ({ historyHook }: { historyHook: HistoryHook }) => {
  const history = historyHook[0];
  return (
    <div>
      {history.map((item, idx) => (
        <OutputStyles key={idx}>
          <div className="command">
            <PS1 />
            <p>{item}</p>
          </div>
          {commandOutput(item)}
        </OutputStyles>
      ))}
    </div>
  );
};

export default Screen;
