import React from "react";
import EarthAndMoon from "./earth-and-moon/EarthAndMoon";
import ListProject from "./project-list/ListProject";
import Images from "./images-code/Images";
import AboutMe from "./about-me/AboutMe";

import Credit from "./credit/Credit";

import "./Home.css";

function Home() {
  return (
    <div className="home">
      <main className="main-container">
        <EarthAndMoon />

        <div className="home-about-container">
          <div id="about">
            <AboutMe />
          </div>
        </div>
        <div className="sub-container">
          <div id="images">
            <Images />
          </div>
        </div>
      </main>

      <aside className="aside">
        <ListProject />
      </aside>

      <footer className="footer">
        <Credit />
      </footer>
    </div>
  );
}

export default Home;
