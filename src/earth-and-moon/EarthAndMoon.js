import React from "react";
import earth from "./svg/earth.svg";
import moon from "./svg/moon.svg";
import light from "./svg/light.svg";
import moonlight from "./svg/moonlight.svg";
import satelite from "./svg/satellite.svg";
import "./EarthAndMoon.css";

const EarthAndMoon = ({}) => {
  return (
    <div className="earthandmoon-container">
      <div className="scene">
        <div className="earth-wrap">
          <img src={earth} className="earth" alt="earth" />
          <img src={light} className="light" alt="light" />
        </div>
        <div className="satellite-wrap">
          <img src={satelite} className="satellite" alt="satellite" />
        </div>

        <div className="moon-orbit">
          <div className="moon-wrap">
            <img src={moon} className="moon" alt="moon" />
            <img src={moonlight} className="moonlight" alt="moonlight" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EarthAndMoon;
