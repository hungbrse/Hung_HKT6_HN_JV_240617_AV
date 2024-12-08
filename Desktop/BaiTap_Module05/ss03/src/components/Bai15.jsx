import React, { useState } from "react";

export default function Bai15() {
  // Bước 1: Tạo state lưu trữ danh sách bài hát
  const [songs, setSongs] = useState([]);

  // Bước 2: Hàm thêm bài hát mới
  const addSong = (song) => {
    setSongs([...songs, song]);
  };

  // Bước 3: Hàm xóa bài hát
  const deleteSong = (index) => {
    const newSongs = [...songs];
    newSongs.splice(index, 1);
    setSongs(newSongs);
  };

  // Component InputSong
  const InputSong = ({ addSong }) => {
    // Quản lý input bài hát
    const [song, setSong] = useState("");

    // Xử lý thay đổi khi người dùng nhập liệu
    const handleInputSong = (e) => {
      setSong(e.target.value);
    };

    const handleSubmit = (e) => {
      e.preventDefault();
      if (song.trim()) {
        addSong(song.trim());
        setSong("");
      }
    };

    return (
      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" value={song} onChange={handleInputSong} />
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  };

  // Component ListSongs
  const ListSongs = ({ songs, deleteSong }) => {
    return (
      <div>
        <ul>
          {songs.map((song, index) => (
            <li key={index}>
              {song}
              <button onClick={() => deleteSong(index)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div>
      <h1>Song Manager</h1>
      <InputSong addSong={addSong} />
      <ListSongs songs={songs} deleteSong={deleteSong} />
    </div>
  );
}
