import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import App from './App';
import Navbar from './components/Navbar/Navbar';
import Quotes from './components/Quotes/Quotes';
import Homepage from './components/Home/Homepage';
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/App" element={<App />} />
        <Route path="/Quotes" element={<Quotes />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
