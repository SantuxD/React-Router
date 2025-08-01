import { useState } from "react";

import "./App.css";
import { BrowserRouter, Route, Router, Routes } from "react-router";
import Home from "./components/Home";
import Contactme from "./components/Contactme";
import Policy from "./components/Policy";
import Term from "./components/Term";
import Navlink from "./components/Navlink";
import Login from "./Auth/Login";

function App() {
  return <>
  <BrowserRouter>
  <Navlink/>
 
   <Routes>
    <Route path="/" element ={<Home/>}/>
    <Route path="/Contactme" element = {<Contactme/>}/>
    <Route path="/Policy" element = {<Policy/>}/>
    <Route path = "/Term" element = {<Term/>}/>

    
 

   </Routes>
   
  </BrowserRouter>
  </>;
}

export default App;
