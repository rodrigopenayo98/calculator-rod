import React from 'react';
import ReactDOM from 'react-dom';
import Calculator from './components/Calculator';
import Quote from './components/QuoteApi';
import './Calculator.css';

ReactDOM.render(
  <div>
    <Calculator />
    <Quote />
  </div>,
  document.getElementById('root'),
);
