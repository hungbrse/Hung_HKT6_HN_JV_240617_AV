import React, { useState } from "react";

export default function Bai11() {
  const listStudent = [
    { id: 1, name: "Nguyen Van A", age: 20 },
    { id: 2, name: "Tran Thi B", age: 22 },
    { id: 3, name: "Le Van C", age: 19 },
    { id: 4, name: "Hoang D", age: 21 },
  ];

  const [students, setStudents] = useState(listStudent);
  const [search, setSearch] = useState("");
  const [sortOrder, setSortOrder] = useState("asc");

  // Tìm kiếm
  const handleSearch = () => {
    const filteredStudents = listStudent.filter((s) =>
      s.name.toLowerCase().trim().includes(search.toLowerCase().trim())
    );
    setStudents(filteredStudents);
  };

  // Sắp xếp
  const handleSortAge = (order) => {
    const sortedStudents = [...students].sort((a, b) =>
      order === "asc" ? a.age - b.age : b.age - a.age
    );
    setStudents(sortedStudents);
  };

  // Khi thay đổi thứ tự sắp xếp
  const handleSortOrderChange = (order) => {
    setSortOrder(order);
    handleSortAge(order);
  };

  return (
    <div>
      <h2>Danh sách học sinh</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="button" onClick={handleSearch}>
          Tìm kiếm
        </button>
        <br />
        <label>Sắp Xếp</label>
        <select
          value={sortOrder}
          onChange={(e) => handleSortOrderChange(e.target.value)}
        >
          <option value="asc">Tăng dần</option>
          <option value="desc">Giảm dần</option>
        </select>
      </form>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {students.map((s) => (
            <tr key={s.id}>
              <td>{s.id}</td>
              <td>{s.name}</td>
              <td>{s.age}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
