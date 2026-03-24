import React from "react";
import Home from "./Home";
import space from "./space.png";
import "./App.css";

function App() {
  return (
    <div className="App-Container">
      <img src={space} className="bgimage" alt="space" />
      <Home />
    </div>
  );
}

export default App;
