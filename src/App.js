import React, { useState } from "react";
import Navbar from "./components/Navbar.js";
import Textform from "./components/TextForm.js";
import About from "./components/About.js";
import Alert from "./components/Alert.js";
import Stopwatch from "./components/Stopwatch.js";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("Dark");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type,
    }); 
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const toggleFun = () => {
    if (mode === 'Dark') {
      setMode("Light");
      document.body.style.backgroundColor = "#042743";
      toast.success("Dark Mode has been Enabled", "success");
    }
    else {
      setMode("Dark");
      document.body.style.backgroundColor = "white";
      toast.success("Light Mode has been Enabled");
    }
  }
  return (

      <BrowserRouter>
        <Navbar title="TextUtils" mode={mode} toggleFun={toggleFun} />
        <Alert alert={alert} />
        <div className="container my-3">
        <ToastContainer/>
          <Routes>
            <Route path="/" element={<Textform mode={mode} showAlert={showAlert}/>}/>
            <Route path="/about" element={<About mode={mode}/>}/>
            <Route path="/timer" element={<Stopwatch mode={mode} showAlert={showAlert}/>}/>
          </Routes>
        </div>
      </BrowserRouter>
    
  );
}

export default App;
