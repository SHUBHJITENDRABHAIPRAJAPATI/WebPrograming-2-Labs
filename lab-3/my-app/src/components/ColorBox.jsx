import React, { useState } from "react";
import colors from "../data/data";

export default function ColorBox({ startColor }) {
  const [index, setIndex] = useState(0);
  const [currentColor, setCurrentColor] = useState(startColor);

  const handleClick = () => {
    let next = index + 1;
    if (next >= colors.length) {
      next = 0;
    }
    setIndex(next);
    setCurrentColor(colors[next]);
  };

  return (
    <div
      className="color-box"
      onClick={handleClick}
      style={{ backgroundColor: currentColor }}
    ></div>
  );
}
