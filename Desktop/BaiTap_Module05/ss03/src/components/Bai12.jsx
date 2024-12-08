import React, { useState } from "react";

export default function Bai12() {
  // Khai báo mảng ảnh trong component Carousel
  const images = [
    "https://tse1.mm.bing.net/th?id=OIP.JJzQ03RwgZT5qhXIHjgMXQHaJQ&pid=Api&P=0&h=220",
    "https://tse4.mm.bing.net/th?id=OIP.cB806UVQVrDKQNHi65tORAHaLG&pid=Api&P=0&h=220",
    "https://tse1.mm.bing.net/th?id=OIP.kGGuDWSJSgBhq9X_2a49WgHaJT&pid=Api&P=0&h=220",
    "https://tse3.mm.bing.net/th?id=OIP.ZQg6UeIUUM28czBm9XCQdwHaOJ&pid=Api&P=0&h=220",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % images.length);
  };

  const handleBack = () => {
    setCurrentSlide((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div>
      <button onClick={handleBack}>Back</button>
      <div>
        <img src={images[currentSlide]} alt="carousel" />
      </div>
      <button onClick={handleNext}>Next</button>
    </div>
  );
}
