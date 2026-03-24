import React, { useState } from "react";
import EarthAndMoon from "./EarthAndMoon";
import Illustration from "./Illustration";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");

  return (
    <div className="App">
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

          <button
            className="button"
            onClick={() => setPage("illustration")}
            type="button"
          >
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

      <main className="App-header">
        {page === "home" && <EarthAndMoon />}
        {page === "illustration" && <Illustration />}
      </main>

      <aside className="aside">
        <p>this is aside</p>
      </aside>

      <footer className="footer">
        <p>
          <span className="pfoot">2026 RustySyrup</span>
        </p>
      </footer>
    </div>
  );
}

export default App;

// import React, { useState } from "react";
// import logo from "./logo.svg";
// import earth from "./earth.svg";
// import moon from "./moon.svg";
// import light from "./light.svg";
// import moonlight from "./moonlight.svg";
// import EarthAndMoon from "./EarthAndMoon";
// import Illustration from "./Illustration";
// import "./App.css";

// function App() {
//   const [page, setPage] = useState("home");
//   return (
//     <div className="App">
//       <header className="header">
//         <nav className="nav">
//           <a
//             className="nava"
//             href="https://science.nasa.gov/earth/"
//             target="_blank"
//           >
//             Earth
//           </a>
//           <button className="nava" onClick={() => setPage("illustrations")}>
//             illustrations
//           </button>
//           <a
//             className="nava"
//             href="https://science.nasa.gov/moon/"
//             target="_blank"
//           >
//             Moon
//           </a>
//         </nav>
//       </header>

//       <header className="App-header">
//         <EarthAndMoon />
//       </header>

//       <body className="body"></body>

//       <aside className="aside">
//         <p>this is aside</p>
//       </aside>

//       <footer className="footer">
//         <p>
//           <span className="pfoot">2026 RustySyrup</span>
//         </p>
//       </footer>
//     </div>
//   );
// }

// export default App;
