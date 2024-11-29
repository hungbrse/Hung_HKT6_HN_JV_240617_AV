import { Button } from "antd";
import React, { useContext, useState } from "react";
import Category from "./Category";
import Book from "./Book";

export default function ServiceController() {
  const [showView, setShowView] = useState(null);

  const handleShowCategories = () => {
    setShowView(1);
  };

  const handleShowBooks = () => {
    setShowView(2);
  };
  return (
    <>
      <h1 className="text-center">Quản lý thư Viện</h1>
      <div className="flex justify-center gap-5 my-5">
        <Button
          onClick={handleShowCategories}
          className="bg-blue-500 w-[150px]"
        >
          Quản Lý Danh Mục
        </Button>
        <Button onClick={handleShowBooks} className="bg-blue-500 w-[150px]">
          Quản Lý Sách
        </Button>
      </div>
      {showView === 1 && <Category />}
      {showView === 2 && <Book />}
    </>
  );
}
