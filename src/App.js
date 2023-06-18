import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { User } from './pages/User/';
import { Header } from './layout/Header/index';
import Card from "./components/Card/";

import './App.scss';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/user" element={<User />} /> 
        <Route path="/card" element={<Card />} /> 
      </Routes>
    </BrowserRouter>
  );
}

export default App;

