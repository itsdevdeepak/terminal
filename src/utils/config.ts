import config from "../config/user.json";
import projects from "../config/projects.json";
import { getFromStorage } from "./storage";
import { Themes } from "../context/Theme";

export const getUserConfig = () => {
  return config;
};

export const isValidProject = (project: string) => {
  return project in projects;
};

export const getProject = () => {
  return projects.projects;
};

export const getThemeNames = () => {
  const themes = getFromStorage("all-themes") as Themes;
  return Object.keys(themes.data);
};
