import React, { useState } from "react";

export default function Bai14() {
  const [name, setName] = useState("");

  const handleSport = () => {
    setName("sport");
  };

  const handleCulture = () => {
    setName("culture");
  };

  const handleScience = () => {
    setName("science");
  };

  let content;
  switch (name) {
    case "sport":
      content = <div>Đây là nội dung về Thể Thao.</div>;
      break;
    case "culture":
      content = <div>Đây là nội dung về Văn Hóa.</div>;
      break;
    case "science":
      content = <div>Đây là nội dung về Khoa Học.</div>;
      break;
  }

  return (
    <div>
      <h1>Môn Thể Thao</h1>
      <button onClick={handleSport}>Thể Thao</button>
      <button onClick={handleCulture}>Văn Hóa</button>
      <button onClick={handleScience}>Khoa Học</button>
      <div>{content}</div>
    </div>
  );
}
