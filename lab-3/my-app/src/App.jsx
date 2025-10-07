import React from "react";
import "./App.css";
import colors from "./data/data";
import ColorBoxesContainer from "./components/ColorBoxesContainer";

export default function App() {
  return (
    <div className="app">
      {alert("CLICK ANY COLOR BOX TO CHANGE COLOR")}
      <h2>Welcome,To Shubh Colourchange App</h2>
      <p>PRESS ANY KEY TO CHANGE COLOR</p>
      <ColorBoxesContainer colors={colors} />
    </div>
  );
}
