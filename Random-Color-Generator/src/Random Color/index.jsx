import React, { useEffect } from "react";
import { useState } from "react";
import "./style.css";

export default function RandomColor() {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [color, setColor] = useState("#000000");

  function randomColorUtility(length) {
    return Math.floor(Math.random() * length);
  }

  function handleCreateRandomHexColor() {
    const hex = [1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtility(hex.length)];
    }

    setColor(hexColor);
  }

  function handleCreateRandomRgbColor() {
    const r = randomColorUtility(256);
    const g = randomColorUtility(256);
    const b = randomColorUtility(256);

    setColor(`rgb(${r}, ${g}, ${b})`);
  }

  useEffect(() => {
    if (typeOfColor === "rgb") handleCreateRandomRgbColor();
    else handleCreateRandomHexColor();
  }, [typeOfColor]);

  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          background: color,
        }}
      >
      <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            fontSize: "66px",
            marginTop: "0px",
            flexDirection: "row",
            gap: "10px",
            paddingTop: "10px",
            
          }}
        >
            <button className="btn" onClick={() => setTypeOfColor("hex")}>Create HEX Color</button>
            <button className="btn" onClick={() => setTypeOfColor("rgb")}>Create RGB Color</button>
            <button className="btn"
            onClick={
                typeOfColor === "hex"
                ? handleCreateRandomHexColor
                : handleCreateRandomRgbColor
            }
            >
            Generate Random Color
            </button>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#fff",
            fontSize: "66px",
            marginTop: "49px",
            flexDirection: "column",
            gap: "20px",
          }} 
        >
          <h2>{typeOfColor === "rgb" ? "RGB Color" : "HEX Color"}</h2>
          <h1>{color}</h1>
        </div> 
      </div>
    </>
  );
}
