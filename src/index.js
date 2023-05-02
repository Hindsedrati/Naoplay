import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './style.scss';

import Contact from './Pages/Contact/index'
import Login from './Pages/Login/index'
import Home from './Pages/Home/Index';
import Error403 from './Pages/Error403/index';
import Error404 from './Pages/Error404/index';

import Header from './Layouts/Header/Index';
import Footer from './Layouts/Footer/Index';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/*" element={<Error404 />} />
        <Route path="/Error403" element={<Error403 />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);


reportWebVitals();