import React from "react";

const Echo = (args: string[]) => {
  return <span>{args.join(" ")}</span>;
};
export default Echo;
