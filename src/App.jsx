import React from "react";
import RegisterPage from "./Pages/RegisterPage";
import CategoryPage from "./Pages/CategoryPage";
import { Route, Routes } from 'react-router-dom'
import './App.css'

function App() {

  return (
    <Routes>

      <Route path="/" element={<RegisterPage />} />

      <Route path="/CategoryPage" element={<CategoryPage />} />

    </Routes>
  )
}

export default App
