import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Bai11 from "./components/Bai11";
import Bai12 from "./components/Bai12";
import Bai13 from "./components/Bai13";
import Bai14 from "./components/Bai14";
import Bai15 from "./components/Bai15";
import Bai16 from "./components/Bai16";
import Bai17 from "./components/Bai17";
import Bai18 from "./components/Bai18";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Bai11></Bai11>
      <Bai12></Bai12>
      <Bai13></Bai13>
      <Bai14></Bai14>
      <Bai15></Bai15>
      <Bai16></Bai16>
      <Bai17></Bai17>
      <Bai18></Bai18>
    </>
  );
}

export default App;
