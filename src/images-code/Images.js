import React from "react";
import obilisk from "../images/obilisk.jpg";
import ship from "../images/ship.jpg";
import planet from "../images/planet.jpg";
import book from "../images/book.jpg";
import float from "../images/float-book.jpg";
import water1 from "../images/water1.jpg";
import water2 from "../images/water2.jpg";
import water3 from "../images/water3.jpg";
import glass1 from "../images/glass1.jpg";
import glass2 from "../images/glass2.jpg";
import glass3 from "../images/glass3.jpg";
import glass4 from "../images/glass4.jpg";
import "./Images.css";

function Images() {
  return (
    <div className="Images-container">
      <h2>My photagraphy</h2>
      <h3>Obilisk</h3>
      <img src={obilisk} className="images" alt="pointy crystal" />
      <h3>Ship</h3>
      <img src={ship} className="images" alt="Space Ship" />
      <h3>Planet</h3>
      <img src={planet} className="images" alt="Globe" />
      <h3>Book</h3>
      <img src={book} className="images" alt="Book with folded pages" />
      <h3>Floating Book</h3>
      <img
        src={float}
        className="images"
        alt="Book with folded pages floating"
      />
      <h3>Water 1</h3>
      <img src={water1} className="images" alt="Water brown" />
      <h3>Water 2</h3>
      <img src={water2} className="images" alt="Water blue" />
      <h3>Water 3</h3>
      <img src={water3} className="images" alt="Water red" />
      <h3>Glass 1</h3>
      <img src={glass1} className="images" alt="Water glass dark" />
      <h3>Glass 2</h3>
      <img src={glass2} className="images" alt="Water glass warm" />
      <h3>Glass 3</h3>
      <img src={glass3} className="images" alt="Water glass creamy" />
      <h3>Glass 4</h3>
      <img src={glass4} className="images" alt="Water glass relief" />
    </div>
  );
}

export default Images;
