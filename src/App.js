import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import Calculator from './components/Calculator';
import Quote from './components/QuoteApi';

const App = () => (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/calculator" element={<Calculator />} />
    <Route path="/quote" element={<Quote />} />
  </Routes>
);

export default App;
