import React, { useState } from "react";
import Navbar from "./components/Navbar.js";
import Textform from "./components/TextForm.js";
import About from "./components/About.js";
import Stopwatch from "./components/Stopwatch.js";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [mode, setMode] = useState("Dark");
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
      <ToastContainer />
      <div className="container my-3">
        <Routes>
          <Route path="/" element={<Textform mode={mode} toast={toast} />} />
          <Route path="/about" element={<About mode={mode}/>} />
          <Route path="/timer" element={<Stopwatch mode={mode} toast={toast} />} />
        </Routes>
      </div>
    </BrowserRouter>

  );
}

export default App;
