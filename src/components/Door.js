import React from "react";
import { Link } from "react-router-dom";
import PROJECTS from "../data/projects";
const doorStill = new URL("../assets/door-still.png", import.meta.url).href;

const Doors = () => {
  const doors = PROJECTS;

  return (
    <section className="door-section">
      <h2>See where the doors take you?</h2>
      <div className="door-grid">
        {doors.map((project, index) => (
          <div className="door-card" key={project.id}>
            <Link className="door-link" to={project.route} aria-label={`${project.title} project`}>
            <img
              src={doorStill}
              alt={`Door ${index + 1}`}
              className="door-image"
            />
            <span className="door-title">{project.title}</span>
          </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Doors
