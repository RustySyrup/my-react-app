import React from "react";
import eclipse from "../illustration/solar eclipse.png";
import radar from "../illustration/radar.png";
import planets from "../illustration/Planets.png";
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
        alt="planets in cloudy space"
      />{" "}
      <h3>Radar</h3>
      <img
        src={radar}
        className="illustrations"
        alt="illustration of radar screen"
      />
    </div>
  );
}

export default Illustration;
