import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import ServiceController from "./components/ServiceController";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ServiceController></ServiceController>
    </>
  );
}

export default App;
