import React, { useState } from "react";
import { Button } from "antd";

export default function Category() {
  const [categories, setCategories] = useState(() => {
    const cateLocal = JSON.parse(localStorage.getItem("categories")) || [];
    return cateLocal;
  });

  const [inputValue, setInputValue] = useState("");
  const [error, setError] = useState("");
  const [editCateId, setEditCateId] = useState(null);

  // Hàm lưu dữ liệu vào state và localStorage
  const saveData = (key, value) => {
    setCategories(value);
    localStorage.setItem(key, JSON.stringify(value));
  };

  const handleChange = (event) => {
    setInputValue(event.target.value);
  };

  const addOrUpdateCategory = () => {
    if (!inputValue.trim()) {
      setError("Vui lòng nhập tên danh mục");
      return; // Dừng thực thi nếu lỗi
    }

    const isDuplicate = categories.some(
      (cate) => cate.name.toLowerCase() === inputValue.toLowerCase()
    );

    if (isDuplicate) {
      setError("Danh mục đã tồn tại!");
      return;
    }

    if (editCateId) {
      // Cập nhật danh mục
      const updatedCategories = categories.map((cate) =>
        cate.id === editCateId ? { ...cate, name: inputValue } : cate
      );
      saveData("categories", updatedCategories);
      setEditCateId(null);
    } else {
      // Thêm mới danh mục
      const newId =
        categories.length > 0 ? categories[categories.length - 1].id + 1 : 1;

      const newCategory = {
        id: newId,
        name: inputValue,
      };

      const updatedCategories = [...categories, newCategory];
      saveData("categories", updatedCategories);
    }

    // Reset input và error
    setInputValue("");
    setError("");
  };

  const editCate = (id) => {
    const cateToEdit = categories.find((cate) => cate.id === id);
    setInputValue(cateToEdit.name);
    setEditCateId(id); // Thiết lập id của danh mục đang sửa
  };

  const deleteCate = (id) => {
    const updatedCategories = categories.filter((cate) => cate.id !== id);
    saveData("categories", updatedCategories);
  };

  return (
    <>
      <h1 className="text-center">Danh Mục Sách</h1>
      <div>
        <input
          onChange={handleChange}
          value={inputValue}
          className="border border-gray-400 rounded px-2 py-1 w-[400px]"
          type="text"
          placeholder="Thêm danh mục"
        />
        <Button
          onClick={addOrUpdateCategory}
          className="bg-green-500 text-white ml-2"
        >
          {editCateId ? "Sửa Danh Mục" : "Thêm Danh Mục"}
        </Button>
        <p className="text-red-500">{error}</p>
      </div>
      <div className="mt-5">
        <table className="table-auto w-full border-collapse border border-gray-600">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Id</th>
              <th className="border border-gray-300 px-4 py-2">Tên Danh Mục</th>
              <th className="border border-gray-300 px-4 py-2">Hành Động</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((cate) => (
              <tr key={cate.id}>
                <td className="border border-gray-300 px-4 py-2">{cate.id}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {cate.name}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  <Button danger onClick={() => deleteCate(cate.id)}>
                    Xóa
                  </Button>
                  <Button onClick={() => editCate(cate.id)}>Sửa</Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
