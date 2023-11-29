import React from "react";
import RegisterPage from "./Pages/RegisterPage";
import GenrePage from "./Pages/GenrePage";
import {Route, Routes} from 'react-router-dom'
import './App.css'

function App() {

  return (
    <Routes>
      <Route path="/" element={<RegisterPage/>}/>
      <Route path="/GenrePage" element = {<GenrePage/>}/>
    </Routes>
  )
}

export default App
