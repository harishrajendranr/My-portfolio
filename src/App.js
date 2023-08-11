import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Footer from './Component/Footer';
import Header from './Component/Header';
import Home from './Component/Home';
import About from './Component/About';
import Contact from './Component/Contact';
import Service from './Component/Service';
import { Route,Routes } from 'react-router-dom'
import Signup from './Component/Signup';

function App() {
  return (
    <div className="App">
      <Header />
        <Routes>
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/about' element={<About/>} />
          <Route exact path='/contact' element={<Contact/>} />
          <Route exact path='/signed' element={<Signup/>} />
          <Route exact path='/service' element={<Service/>} />
        </Routes>
      <Footer />
    </div>
  );
}

export default App;
