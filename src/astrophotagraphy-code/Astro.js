import React from "react";
import orion from "../astrophotagraphy/Space.jpg";
import "./Astro.css";

function Astro() {
  return (
    <div className="astro-container">
      <h2>My Astrophotagraphy</h2>
      <h3>Flame and Horse-head Nebulas</h3>
      <img src={orion} className="astro-images" alt="orions belt" />
    </div>
  );
}

export default Astro;
