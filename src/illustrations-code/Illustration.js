import React from "react";
import eclipse from "../illustration/solar eclipse.png";
import planets from "../illustration/Planets.png";
import building from "../illustration/building.png";
import "./Illustration.css";

function Illustration() {
  return (
    <div className="illustrations-container">
      <h2>Illustrations</h2>
      <h3>Solar eclipse</h3>
      <img
        src={eclipse}
        className="illustrations"
        alt="illustration of solar eclipse"
      />
      <h3>Planets</h3>
      <img
        src={planets}
        className="illustrations"
        alt="illustration of planets in cloudy space"
      />{" "}
      <h3>Building</h3>
      <img
        src={building}
        className="illustrations"
        alt="illustration of Building Facade"
      />
    </div>
  );
}

export default Illustration;
