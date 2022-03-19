import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Info from './components/Info'
import Navigation from "./components/navbar/controlbar";
import Contact from './components/contact';
import Things from './components/things';
import SIS from './components/sis';

export default function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navigation />   
      <Routes>
        <Route path="/" element={<Info />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/things" element={<Things />} />
        <Route path="/sis" element={<SIS />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}


