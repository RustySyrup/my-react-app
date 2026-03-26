import React from "react";
import eclipse from "../illustration/solar eclipse.png";
import radar from "../illustration/radar.png";
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
