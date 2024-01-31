import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Contact from "./components/Contact";
import { useState } from "react";
function App() {
 let [active,setactive]=useState('home')
  return (
  <div className="container-fluid m-0 p-0">
      <div className="row position-fixed m-0 z-3 w-100 p-0 top-0">
      <Navbar message={active}/>

      </div>
      <div className="row m-0 p-0">
        <div className="col-12 p-0 m-0">
        <Routes>
            <Route path="/" exact element={<Home message={setactive} />} />
            <Route path="/about" element={<About message={setactive}/>} />
            <Route path="/project" element={<Project message={setactive}/>} />
            <Route path="/contact" element={<Contact message={setactive}/>} />
          </Routes>
    
        </div>
         
         
      </div>
  </div>
  );
}

export default App;
