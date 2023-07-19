import React, { useState } from 'react';
import calculate from '../logic/calculate';
import CalculatorButtons from './CalculatorButtons';
import Nav from './NavBar';
import Footer from './Footer';

function Calculator() {
  const [calculatorData, setCalculatorData] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const handleButtonClick = (buttonName) => {
    setCalculatorData((prevState) => calculate(prevState, buttonName));
  };

  return (
    <>
      <Nav />
      <section className="main-calculator">
        <h2 className="title-calculator">Let&apos;s do some math!</h2>
        <div id="calculator-contaienr">
          <div id="display">{calculatorData.next || calculatorData.total || '0'}</div>
          <CalculatorButtons handleButtonClick={handleButtonClick} />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Calculator;
