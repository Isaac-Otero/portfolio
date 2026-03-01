import React from "react";
import { Link } from "react-router-dom";

const ProjectPage = ({ project }) => {
  if (!project) {
    return (
      <div className="text-center">
        <h2 className="text-2xl mb-4">Project not found</h2>
        <Link to="/" className="underline">Back home</Link>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center text-center gap-y-4">
      <h2 className="text-4xl">{project.title}</h2>
      <img
        src={project.image}
        alt={project.title}
        className="max-w-full h-auto"
      />
      <p className="max-w-2xl">{project.description}</p>
      <a
        href={project.link}
        className="underline"
        target="_blank"
        rel="noreferrer"
      >
        View project
      </a>
    </div>
  );
};

export default ProjectPage;
