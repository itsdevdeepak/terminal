import React from "react";
import { getConfig } from "../../utils/config";

const Repo = (args: string[]) => {
  const repo = getConfig().projectRepo;
  if (args.join()) return <p>not valid command</p>;
  window.open(repo, "_blank");
  return <p>opened in new tab</p>;
};

export default Repo;
