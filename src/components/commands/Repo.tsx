import React from "react";

const Repo = (args: string[]) => {
  if (args.join()) return <p>not valid command</p>;
  window.open("https://github.com/itsdevdeepak/terminal", "_blank");
  return <p>opened in new tab</p>;
};

export default Repo;
