import React from "react";
import styled from "styled-components";
import { getProject } from "../../utils/project";

const ProjectStyles = styled.div`
  .title {
    color: ${({ theme }: { theme: Theme }) => theme.blue};
    font-weight: bold;
  }
  .sperater {
    display: block;
  }
  .columns {
    display: flex;
    justify-content: space-between;
  }

  .value {
    flex: 7;
  }

  .col {
    flex: 1;
    color: ${({ theme }: { theme: Theme }) => theme.megenta};
  }

  a {
    font-style: normal;
    color: inherit;
  }
`;

const Project = (project: Project, key: number) => {
  return (
    <ProjectStyles key={key}>
      <p className="title">{project.name}</p>
      <p className="sperater">---</p>
      <div className="columns">
        <span className="col">description:</span>
        <span className="value">{project.description}</span>
      </div>
      <div className="columns">
        <span className="col">Project Reposotry:</span>
        <a
          href={project.repo}
          target="_blank"
          className="value"
          rel="noreferrer"
        >
          {project.repo}
        </a>
      </div>
      {project.link && (
        <div className="columns">
          <span className="col">Live:</span>
          <a
            href={project.link}
            target="_blank"
            className="value"
            rel="noreferrer"
          >
            {project.link}
          </a>
        </div>
      )}
      {project.tech.length > 0 && (
        <div className="columns">
          <span className="col">Technologys:</span>
          <span className="value">{project.tech.join(", ")}</span>
        </div>
      )}
      <br />
    </ProjectStyles>
  );
};

const Projects = (args: string[]) => {
  if (args.length > 0)
    return <p>projects: {args.join(" ")} is not valid command</p>;
  const projects = getProject();

  return (
    <div>
      {projects.map((project: Project, idx: number) => Project(project, idx))}
    </div>
  );
};

export default Projects;