import React from "react";
import { clearConsole } from "../../context/Shell/Console";
import { Helper } from "./types";

const Clear = (args: string[], helper: Helper) => {
  if (args.length > 0) {
    return <p>clear: {args.join(" ")} is not valid command</p>;
  }
  const dispatch = helper.console.consoleDispatch;

  dispatch(clearConsole());

  return <></>;
};

export default Clear;
