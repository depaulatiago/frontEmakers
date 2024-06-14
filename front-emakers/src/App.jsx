import "./App.css";
import React from "react";
<<<<<<< Updated upstream
import Login from "./pages/Login/TelaLogin";

function App() {
  return (
    <Login />
=======
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TelaRegistro from "./pages/registro/TelaRegistro";
import TelaHome from "./pages/home/TelaHome"; // Importe o componente da tela inicial

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TelaLogin />} />
        <Route path="/registro" element={<TelaRegistro />} />
        <Route path="/home" element={<TelaHome />} /> 
      </Routes>
    </Router>
>>>>>>> Stashed changes
  );
}

export default App;
