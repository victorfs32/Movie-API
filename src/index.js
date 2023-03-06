import React from 'react';
import ReactDOM from 'react-dom';
import './global.css';
import Home from './pages/Home';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Detalhes from './pages/Detalhes';

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/detalhes/:id' element={<Detalhes/>}/>
    </Routes>
  </BrowserRouter>,
  document.getElementById('root')
);
