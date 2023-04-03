import Topbar from "./components/topbar/Topbar";
import Sidebar from "./components/sidebar/Sidebar";
import Home from "./pages/home/Home";
import "./App.css";
import { useState } from "react";

function App() {
  const [isDarkTheme, setDarkTheme] = useState(false);
  const [fontSize, setFontSize] = useState(16);

  const changeColor = () => {
    setDarkTheme(!isDarkTheme);
    console.log(isDarkTheme);
  };

  function increaseFontSize(){
    setFontSize(fontSize+2)
  }

  function decreaseFontSize(){
    setFontSize(fontSize-2)
  }

  return (
    <>
      <div
        className={isDarkTheme ? "dark" : "light"}
        style={{ fontSize: `${fontSize}px` }}
      >
        <Topbar onButtonClick={changeColor} onIncreaseFontSize={increaseFontSize} onDecreaseFontSize={decreaseFontSize}></Topbar>
        <div className="container">
          <Sidebar />
          <Home />
        </div>
      </div>
    </>
  );
}

export default App;
