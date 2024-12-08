import React, { useState } from "react";

export default function Ex18() {
  // Mảng màu sắc ngẫu nhiên trong state
  const [colors, setColors] = useState([
    { id: 1, color: "rgb(252,100,200)" },
    { id: 2, color: "rgb(255, 99, 71)" },
    { id: 3, color: "rgb(34, 193, 195)" },
    { id: 4, color: "rgb(253, 29, 29)" },
    { id: 5, color: "rgb(85, 239, 196)" },
    { id: 6, color: "rgb(254, 93, 71)" },
    { id: 7, color: "rgb(219, 93, 252)" },
    { id: 8, color: "rgb(36, 64, 64)" },
    { id: 9, color: "rgb(69, 204, 206)" },
    { id: 10, color: "rgb(72, 126, 176)" },
    { id: 11, color: "rgb(255, 127, 80)" },
    { id: 12, color: "rgb(120, 158, 255)" },
    { id: 13, color: "rgb(255, 99, 252)" },
    { id: 14, color: "rgb(44, 37, 37)" },
    { id: 15, color: "rgb(100, 200, 100)" },
    { id: 16, color: "rgb(139, 195, 74)" },
    { id: 17, color: "rgb(220, 230, 100)" },
    { id: 18, color: "rgb(255, 105, 180)" },
  ]);

  // Hàm để thay đổi màu ngẫu nhiên
  const getRandomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r},${g},${b})`;
  };

  // Hàm thay đổi màu sắc của 1 color
  const changeColor = (id) => {
    setColors(
      colors.map((color) =>
        color.id === id ? { ...color, color: getRandomColor() } : color
      )
    );
  };

  // Component hiển thị từng màu
  const Color = ({ color, changeColor }) => (
    <div
      className="color-box"
      style={{ backgroundColor: color.color }}
      onClick={() => changeColor(color.id)}
    >
      {color.color}
    </div>
  );

  // Component hiển thị danh sách các màu
  const ColorContainer = ({ colors, changeColor }) => (
    <div className="color-container">
      {colors.map((color) => (
        <Color key={color.id} color={color} changeColor={changeColor} />
      ))}
    </div>
  );

  return (
    <div className="App">
      <ColorContainer colors={colors} changeColor={changeColor} />
    </div>
  );
}
