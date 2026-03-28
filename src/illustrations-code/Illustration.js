import React from "react";
import eclipse from "../illustration/solar eclipse.png";
import planets from "../illustration/Planets.png";
import building from "../illustration/building.png";
import chalet from "../illustration/Chalet.png";
import apartment from "../illustration/Apartement.png";
import HouseOnHill from "../illustration/house-on-hill.png";
import hand from "../illustration/hand.png";
import abstract from "../illustration/abstract.png";
import tree from "../illustration/Tree.png";

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
      />
      <h3>Peace Sign</h3>
      <img
        src={hand}
        className="illustrations"
        alt="illustration of hand making a peace sign"
      />
      <h3>Abstract</h3>
      <img
        src={abstract}
        className="illustrations"
        alt="illustration of Abstract horizon"
      />
      <h3>Building</h3>
      <img
        src={building}
        className="illustrations"
        alt="illustration of Building Facade"
      />
      <h3>Chalet</h3>
      <img
        src={chalet}
        className="illustrations"
        alt="illustration of Building Facade"
      />
      <h3>House on the hill</h3>
      <img
        src={HouseOnHill}
        className="illustrations"
        alt="illustration of Chalet on a hill"
      />
      <h3>The tree</h3>
      <img src={tree} className="illustrations" alt="Lone tree in dark void" />

      <h3>Apartment</h3>

      <img src={apartment} className="illustrations" alt="Apparment building" />
    </div>
  );
}

export default Illustration;
