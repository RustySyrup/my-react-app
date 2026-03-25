import React from "react";
// import Nav from "../nav/Nav";
import "./ListProject.css";

function ListProject() {
  return (
    <div className="my-projects-container">
      <div>
        <div className="my-project-h2-container">
          <h2>Projects</h2>
        </div>
        <div className="my-project-list-container">
          <ul>
            <li>
              <a className="selectors" href="#images">
                {" "}
                Photagraphy
              </a>
            </li>
            <li>
              <a className="selectors" href="#images">
                {" "}
                Astrophotagraphy
              </a>
            </li>
            <li>
              <a className="selectors" href="#images">
                {" "}
                Illustration
              </a>
            </li>
            <li>
              <a className="selectors" href="#images">
                {" "}
                Logos
              </a>
            </li>
            <li>
              <a className="selectors" href="#images">
                {" "}
                Typography
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
