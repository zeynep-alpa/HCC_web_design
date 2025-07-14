// src/App.js
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import InputPage from "./components/InputPage";
import TahminSonuc from "./components/TahminSonuc";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<InputPage />} />
        <Route path="/sonuc" element={<TahminSonuc />} />
      </Routes>
    </Router>
  );
}

export default App;
