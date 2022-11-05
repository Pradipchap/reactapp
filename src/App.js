import "./App.css";
import { useState } from "react";
import Navb from "./components/navbar";
import InputText from "./components/inputText";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "./about";

function App() {
  const [styl,setstyl] = useState({ color: "black", backgroundColor: "white" });
  const [mode, setmode] = useState("light");

  const toggleStyle = () => {
    if (mode === "light") {
      setmode("dark");

      setstyl ( {
        color: "white",
        backgroundColor: "#242526",
      });
      document.body.style.backgroundColor="#242526";
    } else {
      setmode("light");
      setstyl({ 
        color: "black",
         backgroundColor: "white" });
         document.body.style.backgroundColor="white";
    }
    
  };

  return (
    <>
      <Router>
        <Navb toggle={toggleStyle} modeOfNavbar={mode}/>

        <Routes>
          <Route
            exact
            path="/"
            element={
              <div className="container my-3">
                <InputText style={styl} modeForButtons={mode}/>

              </div>
            }
          />

          <Route exact path="/about" element={<About styleForAbout={styl}/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
