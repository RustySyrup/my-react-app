import React from "react";
import earth from "./earth.svg";
import moon from "./moon.svg";
import light from "./light.svg";
import moonlight from "./moonlight.svg";
import "./EarthAndMoon.css";

const EarthAndMoon = ({}) => {
  return (
    <div className="scene">
      <div className="earth-wrap">
        <img src={earth} className="earth" alt="earth" />
        <img src={light} className="light" alt="light" />
      </div>
      <div className="moon-orbit">
        <div className="moon-wrap">
          <img src={moon} className="moon" alt="moon" />
          <img src={moonlight} className="moonlight" alt="moonlight" />
        </div>
      </div>
    </div>
  );
};

export default EarthAndMoon;
