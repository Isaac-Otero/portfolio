import React, { useState } from "react";
import { Link } from "react-router-dom";
import PROJECTS from "../data/projects";
const doorStill = new URL("../assets/door-still.png", import.meta.url).href;

const Doors = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const doors = PROJECTS;
  const doorGif = "https://i.imgur.com/2NuqQwu.gif";

  return (
    <>
    <div className="text-6xl mb-10">
      See where the doors take you?
    </div>
    <div className="flex justify-center gap-x-5">
      {doors.map((project, index) => (
        <div key={project.id}>
          <Link to={project.route} aria-label={`${project.title} project`}>
            <img
              src={hoveredIndex === index ? doorGif : doorStill}
              alt={`Door ${index + 1}`}
              className="h-96 w-96 block"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            />
          </Link>
          <div
            className={
              hoveredIndex === index ? "read-more-visible text-center mt-2" : "read-more-hidden text-center mt-2"
            }
          >
            {project.title}
          </div>
        </div>
      ))}
    </div>
    </>
  );
};

export default Doors
