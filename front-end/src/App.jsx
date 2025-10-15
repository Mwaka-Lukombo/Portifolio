import { useState, useEffect } from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';

//components
import { Navbar } from './components/Navbar';
import { Home } from './pages/Home';
import { Contact } from './pages/Contact';
import { Projectos } from './pages/Projectos';
import { Servicos } from './pages/Servicos';


function App() {
  
  return (
    <>
     <Navbar /> 
     <Home />
     <Projectos />
     <Servicos />
     <Contact />
     
    </>
  )
}

export default App
