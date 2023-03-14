import React from "react"
import {Routes, Route, Router} from "react-router-dom"
import './App.css';
import Contactme from "./components/Contactme";
import Education from "./components/Education";
import Home from "./components/Home";
import Nav from "./components/Nav";

function App() {
  return (
    <>
    <Nav/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/contact" element={<Contactme/>}/>
      <Route path="/education" element={<Education/>}/>
    </Routes>
    </>
    
  );
}

export default App;
