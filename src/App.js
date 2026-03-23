import logo from "./logo.svg";
import earth from "./earth.svg";
import moon from "./moon.svg";
import light from "./light.svg";
import moonlight from "./moonlight.svg";
import EarthAndMoon from "./EarthAndMoon";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="header">
        <nav className="nav">
          <a
            className="nava"
            href="https://science.nasa.gov/earth/"
            target="blank"
          >
            Earth
          </a>
          <a
            className="nava"
            href="https://science.nasa.gov/moon/"
            target="blank"
          >
            Moon
          </a>
        </nav>
      </header>

      <header className="App-header">
        <EarthAndMoon />
      </header>

      <footer className="footer">
        <p>
          <span className="pfoot">© 2026 RustySyrup</span>
        </p>
      </footer>
    </div>
  );
}

export default App;
