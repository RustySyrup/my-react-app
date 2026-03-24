import React from "react";
import EarthAndMoon from "./EarthAndMoon";
import obilisk from "./obilisk.jpg";
import ship from "./ship.jpg";
import planet from "./planet.jpg";
import book from "./book.jpg";
import float from "./float-book.jpg";
import water1 from "./water1.jpg";
import water2 from "./water2.jpg";
import water3 from "./water3.jpg";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <header className="header">
        <nav className="nav">
          <a
            className="nava"
            href="https://science.nasa.gov/earth/"
            target="_blank"
            rel="noreferrer"
          >
            Earth
          </a>

          <button className="button" type="button">
            Illustrations
          </button>

          <a
            className="nava"
            href="https://science.nasa.gov/moon/"
            target="_blank"
            rel="noreferrer"
          >
            Moon
          </a>
        </nav>
      </header>

      <main className="home-body">
        <div className="earthandmoon-container">
          <EarthAndMoon />
        </div>
        <div className="home-container">
          <h1>About me</h1>
          <p>
            I like space and science and i learn everyday from my friends and
            articles on how to code in javascript and react I am also a
            photographer and also do astro photography you can see my work as
            the background.
          </p>
          <h1>My photagraphy</h1>
          <p>Obilisk</p>
          <img src={obilisk} className="home-images" alt="pointy crystal" />
          <p>Ship</p>
          <img src={ship} className="home-images" alt="Space Ship" />
          <p>Planet</p>
          <img src={planet} className="home-images" alt="Globe" />
          <p>Book</p>
          <img
            src={book}
            className="home-images"
            alt="Book with folded pages"
          />
          <p>Floating Book</p>
          <img
            src={float}
            className="home-images"
            alt="Book with folded pages floating"
          />
          <p>Water 1</p>
          <img src={water1} className="home-images" alt="Water brown" />
          <p>Water 2</p>
          <img src={water2} className="home-images" alt="Water blue" />
          <p>Water 3</p>
          <img src={water3} className="home-images" alt="Water red" />
        </div>
      </main>

      <aside className="aside">
        <h1 className="aside-h1">projects</h1>
      </aside>

      <footer className="footer">
        <p>
          <span className="pfoot">2026 @RustySyrup</span>
        </p>
      </footer>
    </div>
  );
}

export default Home;
