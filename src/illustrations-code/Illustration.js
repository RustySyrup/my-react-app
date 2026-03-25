import React from "react";
import eclipse from "../illustration/solar eclipse.png";
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
    </div>
  );
}

export default Illustration;
