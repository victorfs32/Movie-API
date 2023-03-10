import React from "react";
import ReactDOM from "react-dom";
import "./global.css";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Detalhes from "./pages/Detalhes";
import Navbar from "./components/Navbar";
import Lançamento from "./pages/Lançamento";
import Rank from "./pages/Rank"; 

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/detalhes/:id" element={<Detalhes />} />
      <Route path="/components" element={<Navbar />} />
      <Route path="/Lançamento" element={<Lançamento />} />
      <Route path="/Rank" element={<Rank />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
