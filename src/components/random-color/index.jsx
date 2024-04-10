import { useEffect, useState } from "react";

const style = {
  padding: "10px 20px",
  outline: "none",
  margin: "10px",
};

const Randomcolor = () => {
  const [typeOfColor, setTypeOfColor] = useState("hex");
  const [bgColor, setBgColor] = useState("#2343d4");

  function randomColorUtil(length) {
    return Math.floor(Math.random() * length);
  }

  function createRandomHexColor() {
    const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";

    for (let i = 0; i < 6; i++) {
      hexColor += hex[randomColorUtil(hex.length)];
    }
    setBgColor(hexColor);
  }

  const createRandomRgbColor = () => {
    const r = randomColorUtil(256);
    const g = randomColorUtil(256);
    const b = randomColorUtil(256);

    setBgColor(`rgb${r},${g},${b}`);
  };

  useEffect(() => {
    if (typeOfColor === "hex") createRandomHexColor();
    else createRandomRgbColor();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [typeOfColor]);

  return (
    <div
      className="parent-container"
      style={{
        height: "100vh",
        backgroundColor: bgColor,
      }}
    >
      <button
        style={style}
        onClick={
          typeOfColor === "hex"
            ? () => createRandomHexColor()
            : () => createRandomRgbColor()
        }
      >
        Generate Random Color
      </button>
      <button
        onClick={() => setTypeOfColor("rgb")}
        style={{
          backgroundColor: typeOfColor === "rgb" ? "black" : "white",
          color: typeOfColor === "rgb" ? "white" : "black",
          ...style,
        }}
      >
        Create RGB Color
      </button>
      <button
        onClick={() => setTypeOfColor("hex")}
        style={{
          backgroundColor: typeOfColor === "hex" ? "black" : "white",
          color: typeOfColor === "hex" ? "white" : "black",
          ...style,
        }}
      >
        Generate HEX Color
      </button>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          color: "white",
          fontSize: "60px",
        }}
      >
        <h3>
          {typeOfColor === "rgb" ? "RGB Color" : "Hex Color"} <br></br>
          {bgColor}
        </h3>
      </div>
    </div>
  );
};

export default Randomcolor;
