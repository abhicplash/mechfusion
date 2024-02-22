import React from "react";
import Home from "./components/Pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/Pages/About";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
