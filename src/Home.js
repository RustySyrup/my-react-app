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
            illustrations
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
        <EarthAndMoon />
      </main>

      <aside className="aside">
        <nav> <a>  </nav>
      </aside>

      <footer className="footer">
        <p>
          <span className="pfoot">2026 RustySyrup</span>
        </p>
      </footer>
    </div>
  );
}

export default Home;
