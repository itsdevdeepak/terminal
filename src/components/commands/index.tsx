import help from "./Help";
import echo from "./Echo";
import banner from "./Banner";
import repo from "./Repo";
import projects from "./Projects";
import about from "./About";

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
  projects: {
    name: "projects",
    description: "display projects",
    component: projects,
  },
  about: {
    name: "about",
    description: "display about",
    component: about,
  },
};
export default commands;
