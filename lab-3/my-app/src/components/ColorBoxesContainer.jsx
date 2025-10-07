import React from "react";
import ColorBox from "./ColorBox";

export default function ColorBoxesContainer({ colors }) {
  return (
    <div className="container">
      {colors.slice(0, 25).map((color, index) => (
        <ColorBox key={index} startColor={color} />
      ))}
    </div>
  );
}
