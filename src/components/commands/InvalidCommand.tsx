import React from "react";

const InvalidCommand = ({ command }: { command: string }) => {
  return <p>{command} is not valid command</p>;
};

export default InvalidCommand;
