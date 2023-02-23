import help from "./Help";
import echo from "./Echo";
import banner from "./Banner";
import repo from "./Repo";

const commands: Commands = {
  help: {
    name: "help",
    description: "displey list of available commands.",
    component: help,
  },
  echo: {
    name: "echo",
    description: "prints string after the command",
    component: echo,
  },
  banner: {
    name: "banner",
    description: "display banner",
    component: banner,
  },
  repo: {
    name: "repo",
    description: "open project reposotry in new tab",
    component: repo,
  },
};
export default commands;
