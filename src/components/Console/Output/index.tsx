import React from "react";
import PS1 from "../../PS1";
import CommandOutput from "./Command";

const ConsoleOutput = (string: string) => (
  <>
    <PS1 /> {string}
    <br />
  </>
);

export { CommandOutput, ConsoleOutput };
