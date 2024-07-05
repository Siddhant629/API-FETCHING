// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './Store/Store';
import Gallery from './components/Gallery';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import './App.css';

const App = () => {
  return (  
    <Provider store={store}>
      <Router>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/gallery" element={<Gallery/>}/>
          <Route path="/about" element={<About/>} />
        </Routes>
      </Router>
    </Provider>
  );
};

export default App;
