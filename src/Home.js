import React from "react";
import EarthAndMoon from "./earth-and-moon/EarthAndMoon";
import ListProject from "./project-list/ListProject";
import Images from "./images-code/Images";
import AboutMe from "./about-me/AboutMe";
import Credit from "./credit/Credit";
import Illustration from "./illustrations-code/Illustration";
import Astro from "./astrophotagraphy-code/Astro";
import Logos from "./logos-code/Logos";
import Nav from "./Nav/Nav";
import "./Home.css";

function Home() {
  return (
    <div className="home">
      <Nav />
      <div id="top"></div>
      <main className="main-container">
        <EarthAndMoon />

        <div className="home-about-container">
          <div id="about" className="scroll-container">
            {" "}
            <AboutMe />
          </div>
        </div>
        <div className="sub-container">
          <div id="images" className="scroll-container">
            <Images />
          </div>
        </div>
        <div className="sub-container">
          <div id="astro" className="scroll-container">
            <Astro />
          </div>
        </div>
        <div className="sub-container">
          <div id="illustrations" className="scroll-container">
            <Illustration />
          </div>
        </div>
        <div className="sub-container">
          <div id="logos" className="scroll-container">
            <Logos />
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
