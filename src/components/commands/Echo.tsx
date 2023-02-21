import React from "react";

const Echo = (args: string[]) => {
  return <span>echo {args.join(" ")}</span>;
};
export default Echo;
