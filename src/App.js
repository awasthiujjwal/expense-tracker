import {BrowserRouter,Routes,Route} from 'react-router-dom'
import './App.css'
import React from 'react';
import Navbar from './elment/Navbar';
import Home from './elment/pages/Home';
import About from './elment/pages/About';
import Contact from './elment/pages/Contact';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/About' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
