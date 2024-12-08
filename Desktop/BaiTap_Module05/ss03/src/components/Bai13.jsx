import React, { useState } from "react";

export default function Bai13() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpen = () => {
    setIsModalOpen(true);
  };

  const handleClose = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <h1>Ứng dụng với Modal</h1>
      <button onClick={handleOpen}>Open</button>

      {isModalOpen && (
        <div>
          <p>Đây là nội dung của Modal!</p>
          <button onClick={handleClose}>Close</button>
        </div>
      )}
    </div>
  );
}
