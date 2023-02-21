import React from "react";

const Help = (args: string[]) => {
  console.log("args", args);

  if (args.join())
    return <span>help: {args.join(" ")}: is not help command</span>;
  return <span>help</span>;
};
export default Help;
