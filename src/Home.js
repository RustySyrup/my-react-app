import React from "react";
import EarthAndMoon from "./EarthAndMoon";
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
            I like space and science and i learn everyday from my friend and
            articles on how to code in javascript and react
          </p>
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
