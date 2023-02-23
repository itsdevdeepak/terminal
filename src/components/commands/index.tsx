import Help from "./Help";
import Echo from "./Echo";
import Banner from "./Banner";
import Repo from "./Repo";
import Projects from "./Projects";
import About from "./About";

const commands: Commands = {
  help: {
    name: "help",
    description: "displey list of available commands.",
    component: Help,
  },
  echo: {
    name: "echo",
    description: "prints string after the command",
    component: Echo,
  },
  banner: {
    name: "banner",
    description: "display banner",
    component: Banner,
  },
  repo: {
    name: "repo",
    description: "open project reposotry in new tab",
    component: Repo,
  },
  projects: {
    name: "projects",
    description: "display projects",
    component: Projects,
  },
  about: {
    name: "about",
    description: "display about",
    component: About,
  },
};
export default commands;
