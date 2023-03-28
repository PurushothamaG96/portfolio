import React, {useState} from "react"
import {Routes, Route} from "react-router-dom"
import './App.css';
import About from "./components/About";
import Contactme from "./components/Contactme";
import Education from "./components/Education";
import Home from "./components/Home";
import Nav from "./components/Nav";
import Project from "./components/Project";
import Skill from "./components/Skill";



function App() {
  const [colors, setColors] = useState({iconColor:"text-dark",background:"normal-background", main_app:"white" })
  return (
    <>
    <div className={`${colors.main_app}`}>
    <Nav colors={colors} setColors={setColors}/>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route  path="/project" element={<Project/>}/>
      <Route path="/contact" element={<Contactme/>}/>
      <Route path="/education" element={<Education/>}/>
    </Routes>
    </div>
    
    </>
    
  );
}

export default App;
