import React, { useState } from 'react';
import calculate from '../logic/calculate';
import CalculatorButtons from './CalculatorButtons';

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
    <section>
      <div id="calculator-contaienr">
        <div id="display">{calculatorData.next || calculatorData.total || '0'}</div>
        <CalculatorButtons handleButtonClick={handleButtonClick} />
      </div>
    </section>
  );
}

export default Calculator;
