import React, { useState } from "react";

export default function Bai17() {
  // Danh sách câu hỏi và đáp án
  const questions = [
    { question: "Câu hỏi 1: 2 + 2 = ?", answer: "4" },
    { question: "Câu hỏi 2: 5 + 3 = ?", answer: "8" },
    { question: "Câu hỏi 3: 10 - 4 = ?", answer: "6" },
  ];

  // State quản lý câu hỏi hiện tại, điểm số và câu trả lời người dùng
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [userAnswer, setUserAnswer] = useState("");

  // Hàm xử lý khi người dùng trả lời
  const handleSubmit = () => {
    const correctAnswer = questions[currentQuestionIndex].answer;
    if (userAnswer === correctAnswer) {
      setScore(score + 1); // Tăng điểm nếu trả lời đúng
    }
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1); // Tiến tới câu hỏi tiếp theo
    } else {
      alert("Bạn đã hoàn thành bài kiểm tra!");
    }
    setUserAnswer(""); // Reset lại câu trả lời người dùng
  };

  return (
    <div>
      {/* Hiển thị câu hỏi */}
      <div>
        <h2>{questions[currentQuestionIndex].question}</h2>
      </div>
      {/* Nhập câu trả lời */}
      <div>
        <input
          type="text"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)} // Cập nhật câu trả lời người dùng
          placeholder="Nhập câu trả lời"
        />
        <button onClick={handleSubmit}>Submit</button>
      </div>
      {/* Hiển thị điểm số */}
      <p>Điểm hiện tại: {score}</p>
    </div>
  );
}
