import { Button } from "antd";
import React, { useState } from "react";

export default function Book() {
  // Lấy danh mục từ localStorage (hoặc mặc định là mảng rỗng nếu không có)
  const categories = JSON.parse(localStorage.getItem("categories")) || [];

  // State cho danh sách sách
  const [books, setBooks] = useState(() => {
    const bookLocal = JSON.parse(localStorage.getItem("books")) || [];
    return bookLocal;
  });

  const [keyword, setKeyword] = useState("");

  // State cho thông tin sách
  const [book, setBook] = useState({
    bookName: "",
    bookAuthor: "",
    bookPrice: "",
    bookCategory: "",
    file: null,
  });
  // lấy bookId để cập nhập
  const [editingBookId, setEditingBookId] = useState(null);

  // Hàm xử lý thay đổi input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setBook({
      ...book,
      [name]: value,
    });
  };
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      // Sử dụng FileReader để đọc file và chuyển thành base64
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64Image = reader.result; // Chuỗi base64 của ảnh
        setBook({
          ...book,
          file: base64Image, // Lưu chuỗi base64 vào state
        });
      };
      reader.readAsDataURL(file); // Đọc file dưới dạng base64
    }
  };

  const handleAddOrUpdateBook = () => {
    // Kiểm tra dữ liệu hợp lệ (ví dụ: không để trống tên sách)
    if (
      !book.bookName ||
      !book.bookAuthor ||
      !book.bookPrice ||
      !book.bookCategory ||
      !book.file
    ) {
      alert("Vui lòng nhập đầy đủ thông tin sách!");
      return;
    }

    if (editingBookId) {
      const updatedBooks = books.map((b) =>
        b.id === editingBookId
          ? { ...b, ...book } // Cập nhật sách cũ với thông tin mới
          : b
      );
      setBooks(updatedBooks);
      localStorage.setItem("books", JSON.stringify(updatedBooks));
      alert("Cập nhật sách thành công!");
      setEditingBookId(null); // Đặt lại ID sách đang chỉnh sửa
      // Reset form
      setBook({
        bookName: "",
        bookAuthor: "",
        bookPrice: "",
        bookCategory: "",
        file: null,
      });
    } else {
      // Tạo đối tượng sách mới
      const newBook = {
        ...book,
        id: Date.now(), // Tạo ID duy nhất cho sách
      };

      // Cập nhật danh sách sách
      const updatedBooks = [...books, newBook];
      setBooks(updatedBooks);

      // Lưu vào localStorage
      localStorage.setItem("books", JSON.stringify(updatedBooks));

      // Reset form
      setBook({
        bookName: "",
        bookAuthor: "",
        bookPrice: "",
        bookCategory: "",
        file: null,
      });
      setEditingBookId(null); // Đặt lại ID sách đang chỉnh sửa

      alert("Thêm sách thành công!");
    }
  };

  const deleteBook = (id) => {
    const updataBooks = books.filter((b) => b.id !== id);
    console.log(updataBooks);
    setBooks(updataBooks);
    // Lưu vào localStorage
    localStorage.setItem("books", JSON.stringify(updataBooks));
  };

  const getCategoryNameById = (categoryId) => {
    // Chuyển categoryId về dạng số để so sánh với category.id
    const category = categories.find((cat) => cat.id === Number(categoryId));
    return category ? category.name : "Không có danh mục";
  };

  const handleEditBook = (id) => {
    const bookToEdit = books.find((b) => b.id === id);
    setBook(bookToEdit);
    setEditingBookId(id);
  };

  const handleChangeKeyword = (event) => {
    setKeyword(event.target.value);
  };

  // Hàm tìm kiếm sách theo từ khóa
  const filteredBooks = books.filter((book) =>
    book.bookName.toLowerCase().includes(keyword.toLowerCase())
  );
  return (
    <>
      <h1 className="ml-10">Quản Lý Sách</h1>

      <div className="flex flex-col gap-5 mt-5 ml-10">
        <div className="flex justify-start gap-5">
          <input
            value={book.bookName}
            onChange={handleInputChange}
            className="border border-gray-400 rounded px-2 py-1 w-[500px]"
            type="text"
            placeholder="tên sách"
            name="bookName"
          />
          <input
            value={book.bookAuthor}
            className="border border-gray-400 rounded px-2 py-1 w-[500px]"
            type="text"
            onChange={handleInputChange}
            placeholder="tên tác giả"
            name="bookAuthor"
          />
        </div>

        <div className="flex justify-start gap-5">
          <input
            className="border border-gray-400 rounded px-2 py-1 w-[500px]"
            type="number"
            placeholder="giá sách"
            min={1}
            name="bookPrice"
            value={book.bookPrice}
            onChange={handleInputChange}
          />
          <select
            className="border border-gray-400 rounded px-2 py-1 w-[500px]"
            name="bookCategory"
            id="category"
            value={book.bookCategory}
            onChange={handleInputChange}
          >
            <option value={""}>Chọn danh mục</option>
            {/* Hiển thị danh sách category */}
            {categories?.map((category, index) => (
              <option key={index} value={category.id}>
                {category.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <input
            className="border border-gray-400 rounded px-2 py-1 w-[500px]"
            type="file"
            placeholder="hình ảnh sách"
            onChange={handleFileChange}
          />
        </div>
        <div>
          <Button
            onClick={handleAddOrUpdateBook}
            className="w-[300px] bg-green-500 text-white py-5"
          >
            {editingBookId ? "Cập Nhật Sách" : "Thêm Sách"}
          </Button>
        </div>
        <input
          onChange={handleChangeKeyword}
          value={keyword}
          className="border border-gray-400 rounded px-2 py-1 w-[500px]"
          type="text"
          placeholder="search"
          name="search"
        />
        <div></div>
      </div>

      <div>
        <table className="table-auto w-full border-collapse border border-gray-600">
          <thead>
            <tr>
              <th className="border border-gray-300 px-4 py-2">Id</th>
              <th className="border border-gray-300 px-4 py-2">Tên Sách</th>
              <th className="border border-gray-300 px-4 py-2">Tác Giả</th>
              <th className="border border-gray-300 px-4 py-2">Danh Mục</th>
              <th className="border border-gray-300 px-4 py-2">Giá</th>
              <th className="border border-gray-300 px-4 py-2">Hình Ảnh</th>
              <th className="border border-gray-300 px-4 py-2">Hành Động</th>
            </tr>
          </thead>
          <tbody>
            {/* Hiển thị danh sách sách */}
            {filteredBooks.map((book) => (
              <tr key={book.id} className="text-center">
                <td className="border border-gray-300 px-4 py-2">{book.id}</td>
                <td className="border border-gray-300 px-4 py-2">
                  {book.bookName}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {book.bookAuthor}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {/* Lấy tên danh mục từ ID */}
                  {getCategoryNameById(book.bookCategory)}
                </td>
                <td className="border border-gray-300 px-4 py-2">
                  {book.bookPrice}
                </td>
                {book.file &&
                  typeof book.file === "string" &&
                  book.file.startsWith("data:image") && (
                    <img
                      src={book.file} // Sử dụng chuỗi base64 làm nguồn ảnh
                      alt="Ảnh sách"
                      className="w-10 h-10"
                    />
                  )}

                <td className="border border-gray-300 px-4 py-2">
                  <Button
                    className="bg-red-500 text-white px-3 py-1"
                    onClick={() => deleteBook(book.id)}
                  >
                    Xóa
                  </Button>

                  <Button
                    onClick={() => handleEditBook(book.id)}
                    className="bg-blue-500 text-white px-3 py-1"
                  >
                    sửa
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
