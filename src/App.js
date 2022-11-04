import "./App.css";
import { useState } from "react";
import Navb from "./components/navbar";
import InputText from "./components/inputText";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./about";

function App() {
  
  const [colorForInput, setcolorForInput] = useState("light");

  const [mode, setmode] = useState("info");

  const toggleMode = () => {
    if (mode === "info") {
      setmode("secondary");
      document.body.style.backgroundColor = "#212529";
      setstyl({
        color: "white",
        backgroundColor: "#212529",
      });
      
      setcolorForInput("dark");
    } else {
      setmode("info");
      document.body.style.backgroundColor = "white";
      setstyl({
        color: "black",
        backgroundColor: "white",
      });
      setcolorForInput("light");
    }
  };
  const [styl, setstyl] = useState({
    color: "black",
    backgroundColor: "white",
  });

  return (
    <>
      <Router>
        <Navb modeColor={mode} toggle={toggleMode} styleForAll={styl} />

        <Routes>
          <Route
            exact
            path="/"
            element={
              <div className="container my-3">
                <InputText
                styleForInputText={styl}
                inputTextColor={colorForInput}
              />
              </div>
            }
          />

          <Route exact path="/about" element={<About/>}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
