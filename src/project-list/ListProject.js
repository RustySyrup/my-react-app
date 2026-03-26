import React from "react";
import "./ListProject.css";

function ListProject() {
  return (
    <div className="my-projects-container">
      <div>
        <div className="my-project-h1-container">
          <h1>
            RustySyrup <span className="project-h1">Projects:</span>
          </h1>
        </div>
        <div className="my-project-list-container">
          <ul>
            <li>
              <a className="list-anchors" href="#top">
                {" "}
                Back to top
              </a>
            </li>
            <li>
              <a className="list-anchors" href="#about">
                {" "}
                About-me
              </a>
            </li>
            <li>
              <a className="list-anchors" href="#images">
                {" "}
                Photagraphy
              </a>
            </li>
            <li>
              <a className="list-anchors" href="#astro">
                {" "}
                Astrophotagraphy
              </a>
            </li>
            <li>
              <a className="list-anchors" href="#illustrations">
                {" "}
                Illustration
              </a>
            </li>
            <li>
              <a className="list-anchors" href="#logos">
                {" "}
                Logos
              </a>
            </li>
            <li>
              <a className="list-anchors" href="#top">
                {" "}
                ..Placeholder..
              </a>
            </li>
          </ul>
          {/* <Nav /> */}
        </div>
      </div>
    </div>
  );
}

export default ListProject;
