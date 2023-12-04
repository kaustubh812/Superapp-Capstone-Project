import React from "react";
import RegisterPage from "./Pages/RegisterPage";
import CategoryPage from "./Pages/CategoryPage";
import HomePage from "./Pages/HomePage";
import EntertainmentPage from "./Pages/EntertainmentPage";
import { Route, Routes } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <Routes>

      <Route path="/" element={<RegisterPage />} />

      <Route path="/CategoryPage" element={<CategoryPage />} />

      <Route path="/HomePage" element={<HomePage />} />

      <Route path="/EntertainmentPage" element={<EntertainmentPage />} />


    </Routes>
  )
}

export default App
