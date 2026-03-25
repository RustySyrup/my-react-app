import React from "react";
import vegasvocal from "../logos/vegas-vocal.png";
import "./Logos.css";

function Logos() {
  return (
    <div className="logo-container">
      <h2>Logos</h2>
      <h3>VegasVocal</h3>
      <img
        src={vegasvocal}
        className="logos"
        alt="Vegas Vocals with a microphone in the second V"
      />
    </div>
  );
}

export default Logos;
