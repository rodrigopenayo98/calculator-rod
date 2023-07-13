import React from 'react';
import CalculatorButtons from './CalculatorButtons';

function Calculator() {
  return (
    <section>
      <div id="calculator-contaienr">
        <div id="display">0</div>
        <CalculatorButtons />
      </div>
    </section>
  );
}

export default Calculator;
