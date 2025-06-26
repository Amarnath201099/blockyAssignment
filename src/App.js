import { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import About from "./components/About";

function App() {
  const [mode, setMode] = useState("light");

  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
    } else {
      setMode("light");
    }
  };

  return (
    <div className="App">
      <NavBar mode={mode} toggleMode={toggleMode} />
      {/* <Home mode={mode} /> */}
      <About mode={mode} />
    </div>
  );
}

export default App;
