import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import './style.css';
import Home from './Pages/Home/Index';
import Header from '././Layouts/Header/Index';
import Footer from '././Layouts/Footer/Index';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
     <Header />
      <Routes>
        <Route path="/" element={ <Home />} />
      </Routes>
      <Footer />
    </Router>
  </React.StrictMode>
);


reportWebVitals();