import projects from "../config/projects.json";

export const isValidProject = (project: string) => {
  return project in projects;
};

export const getProject = () => {
  return projects.projects;
};
