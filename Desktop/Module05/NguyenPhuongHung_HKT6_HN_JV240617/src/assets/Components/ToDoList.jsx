import React, { useState } from "react";
import Header from "./Header";
import { Button } from "antd";

export default function ToDoList() {
  const [showToDoList, setShowToDoList] = useState(true);
  const [tasks, setTasks] = useState(() => {
    const taskLocal = JSON.parse(localStorage.getItem("tasks")) || [];
    return taskLocal;
  });
  const [error, setError] = useState("");
  const [newTask, setNewTask] = useState({
    name: "",
    startTime: "",
    endTime: "",
    status: false,
  });

  // Cập nhật state cho công việc đang được sửa
  const [editingTask, setEditingTask] = useState(null);

  const editTask = (task) => {
    // Khi nhấn sửa, cập nhật state editingTask và hiển thị thông tin của công việc
    setNewTask({
      name: task.name,
      startTime: task.startTime,
      endTime: task.endTime,
      status: task.status,
    });
    setEditingTask(task);
  };

  const showOngoingTasks = () => {
    setShowToDoList(true);
  };

  const showCompletedTasks = () => {
    setShowToDoList(false);
  };

  // Hàm lưu dữ liệu vào state và localStorage
  const saveData = (key, value) => {
    setTasks(value);
    localStorage.setItem(key, JSON.stringify(value));
  };

  // hàm lấy giá trị từ input
  const handleInputChange = (e) => {
    const { name, value } = e.target;

    // Cập nhật giá trị của trường tương ứng trong `newTask`
    setNewTask((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const addTask = () => {
    if (!newTask.name || !newTask.startTime || !newTask.endTime) {
      setError("Vui lòng điền đầy đủ thông tin!");
      return;
    }

    // Kiểm tra xem tên công việc có trùng lặp không
    const isDuplicate = tasks.some((task) => task.name === newTask.name);
    if (isDuplicate) {
      setError("Công việc này đã tồn tại trong danh sách!");
      return;
    }

    const currentTime = new Date();
    const startTime = new Date(newTask.startTime);
    if (startTime <= currentTime || startTime - currentTime < 30 * 60 * 1000) {
      setError(
        "Thời gian bắt đầu phải ít nhất 30 phút sau thời gian hiện tại."
      );
      return;
    }

    const endTime = new Date(newTask.endTime);
    if (endTime <= startTime) {
      setError("Thời gian kết thúc phải sau thời gian bắt đầu.");
      return;
    }

    setError("");

    if (editingTask) {
      // Cập nhật công việc hiện tại
      const updatedTasks = tasks.map((task) =>
        task.id === editingTask.id
          ? { ...task, ...newTask } // Cập nhật công việc
          : task
      );

      setTasks(updatedTasks);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));

      // Đặt lại form nhập và hủy bỏ state đang sửa
      setEditingTask(null);
    } else {
      // Tạo mới công việc
      const newId = tasks.length > 0 ? tasks[tasks.length - 1].id + 1 : 1;

      const updatedTasks = [
        ...tasks,
        {
          ...newTask,
          id: newId,
        },
      ];

      setTasks(updatedTasks);
      localStorage.setItem("tasks", JSON.stringify(updatedTasks));
    }

    // Đặt lại form nhập
    setNewTask({
      name: "",
      startTime: "",
      endTime: "",
      status: false,
    });
  };

  // xoas cong viec
  const deleteTask = (id) => {
    const updatedTasks = tasks.filter((task) => task.id !== id);
    setTasks(updatedTasks);
    localStorage.setItem("tasks", JSON.stringify(updatedTasks));
  };

  const updateTaskStatus = (id) => {
    // Cập nhật trạng thái công việc thành true
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, status: true } : task
    );

    // Lưu vào localStorage
    saveData("tasks", updatedTasks);
  };

  // lọc task theo trạng thái
  const filteredTasks = tasks.filter((task) =>
    showToDoList ? !task.status : task.status
  );

  // Tính toán xem công việc có gần deadline hay không (còn <= 12 giờ và > 0 giờ)
  const isCloseToDeadline = (task) => {
    if (task.status) return false; // Không áp dụng nếu đã hoàn thành
    const currentTime = new Date();
    const taskEndTime = new Date(task.endTime);
    const timeDifferenceInHours =
      (taskEndTime - currentTime) / (1000 * 60 * 60); // Chuyển chênh lệch thời gian sang giờ
    return timeDifferenceInHours <= 12 && timeDifferenceInHours > 0;
  };

  return (
    <>
      <Header></Header>
      <div className="flex justify-center gap-5 mt-5">
        <Button className="bg-green-500 p-5" onClick={showOngoingTasks}>
          Đang Diễn Ra
        </Button>
        <Button className="bg-gray-500 p-5" onClick={showCompletedTasks}>
          Đã Hoàn Thành
        </Button>
      </div>
      <h1 className="ml-10 text-[24px]">Thêm công việc</h1>
      <div>
        <div className="flex justify-around mt-4">
          <input
            onChange={handleInputChange}
            value={newTask.name}
            type="text"
            name="name"
            placeholder="Tên công việc"
            className="border border-gray-300 rounded p-2 w-[30%]"
          />
          <input
            onChange={handleInputChange}
            value={newTask.startTime}
            type="datetime-local"
            name="startTime"
            className="border border-gray-300 rounded p-2 w-[30%]"
          />
          <input
            onChange={handleInputChange}
            value={newTask.endTime}
            type="datetime-local"
            name="endTime"
            className="border border-gray-300 rounded p-2 w-[30%]"
          />
        </div>

        <div className="flex justify-start mt-4 ml-6">
          <Button
            onClick={addTask}
            className="bg-green-500 text-white rounded p-5 w-[30%]"
          >
            {editingTask ? "Sửa Công Việc" : "Thêm Công Việc"}
          </Button>
        </div>
        <h3 className="text-red-500 m-5">{error}</h3>
      </div>

      {showToDoList ? (
        <h1 className="mt-10 ml-6">Danh sách đang diễn ra</h1>
      ) : (
        <h1 className="mt-10 ml-6">Danh sách đã hoàn thành</h1>
      )}

      <div>
        <table className="table-auto w-full border-collapse border border-gray-400">
          <tr>
            <th className="border border-gray-300 px-4 py-2">Tên Công Việc</th>
            <th className="border border-gray-300 px-4 py-2">Bắt Đầu</th>
            <th className="border border-gray-300 px-4 py-2">Hạn</th>
            <th className="border border-gray-300 px-4 py-2">Hành Động</th>
          </tr>

          {filteredTasks.map((task) => (
            <tr
              key={task.id}
              style={{
                color: isCloseToDeadline(task) ? "red" : "inherit", // Màu đỏ nếu gần deadline
              }}
            >
              <td className="border border-gray-300 px-4 py-2">{task.name}</td>
              <td className="border border-gray-300 px-4 py-2">
                {new Date(task.startTime).toLocaleString()}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {new Date(task.endTime).toLocaleString()}
              </td>
              <td className="border border-gray-300 px-4 py-2">
                {task.status ? (
                  <span className="text-green-500">Đã hoàn thành</span>
                ) : (
                  <>
                    <Button
                      onClick={() => updateTaskStatus(task.id)}
                      className="bg-blue-500 text-white p-2"
                    >
                      Hoàn Thành
                    </Button>
                    <Button
                      onClick={() => editTask(task)} // Chỉnh sửa công việc
                      className="bg-green-500 text-white p-2"
                    >
                      Sửa
                    </Button>
                    <Button
                      onClick={() => deleteTask(task.id)} // Xóa công việc
                      className="bg-red-500 text-white p-2"
                    >
                      Xóa
                    </Button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </table>
      </div>
    </>
  );
}
