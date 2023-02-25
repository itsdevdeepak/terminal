import React from "react";

const Repo = (args: string[]) => {
  if (args.length > 0)
    return <p>repo: {args.join(" ")} is not valid command</p>;
  return <p>opened in new tab</p>;
};

export default Repo;
