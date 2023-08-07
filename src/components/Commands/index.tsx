import { Command } from "../Command/types";
import About from "./About";
import Banner from "./Banner";
import Clear from "./Clear";
import Echo from "./Echo";
import Help from "./Help";
import Projects from "./Projects";
import Repo from "./Repo";
import Theme from "./Theme";

type Commands = { [key: string]: Command };

export const commands: Commands = {
  help: {
    name: "help",
    description: "display list of available commands.",
    run: Help,
  },
  clear: {
    name: "clear",
    description: "clears the screen",
    run: Clear,
  },
  echo: {
    name: "echo",
    description: "prints string after the command",
    run: Echo,
  },
  banner: {
    name: "banner",
    description: "display banner",
    run: Banner,
  },
  repo: {
    name: "repo",
    description: "open project repository in new tab",
    run: Repo,
  },
  projects: {
    name: "projects",
    description: "display projects",
    run: Projects,
  },
  about: {
    name: "about",
    description: "display about",
    run: About,
  },
  theme: {
    name: "theme",
    description: "change themes, use `theme list` to list themes",
    run: Theme,
  },
};
