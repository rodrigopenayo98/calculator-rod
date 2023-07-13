import React from 'react';
import PropTypes from 'prop-types';

function CalculatorButtons({ handleButtonClick }) {
  return (
    <div id="buttons-container">
      <ul id="buttons-list">
        <li>
          <button type="button" className="white-button" onClick={() => handleButtonClick('AC')}>
            AC
          </button>
        </li>
        <li>
          <button type="button" className="white-button" onClick={() => handleButtonClick('+/-')}>
            +/-
          </button>
        </li>
        <li>
          <button type="button" className="white-button" onClick={() => handleButtonClick('%')}>
            %
          </button>
        </li>
        <li>
          <button type="button" className="lightblue-button" onClick={() => handleButtonClick('÷')}>
            ÷
          </button>
        </li>
        <li>
          <button type="button" className="white-button" onClick={() => handleButtonClick('7')}>
            7
          </button>
        </li>
        <li>
          <button type="button" className="white-button" onClick={() => handleButtonClick('8')}>
            8
          </button>
        </li>
        <li>
          <button type="button" className="white-button" onClick={() => handleButtonClick('9')}>
            9
          </button>
        </li>
        <li>
          <button type="button" className="lightblue-button" onClick={() => handleButtonClick('x')}>
            x
          </button>
        </li>
        <li>
          <button type="button" className="white-button" onClick={() => handleButtonClick('4')}>
            4
          </button>
        </li>
        <li>
          <button type="button" className="white-button" onClick={() => handleButtonClick('5')}>
            5
          </button>
        </li>
        <li>
          <button type="button" className="white-button" onClick={() => handleButtonClick('6')}>
            6
          </button>
        </li>
        <li>
          <button type="button" className="lightblue-button" onClick={() => handleButtonClick('-')}>
            -
          </button>
        </li>
        <li>
          <button type="button" className="white-button" onClick={() => handleButtonClick('1')}>
            1
          </button>
        </li>
        <li>
          <button type="button" className="white-button" onClick={() => handleButtonClick('2')}>
            2
          </button>
        </li>
        <li>
          <button type="button" className="white-button" onClick={() => handleButtonClick('3')}>
            3
          </button>
        </li>
        <li>
          <button type="button" className="lightblue-button" onClick={() => handleButtonClick('+')}>
            +
          </button>
        </li>
        <li className="button-cero">
          <button type="button" className="white-button" onClick={() => handleButtonClick('0')}>
            0
          </button>
        </li>
        <li>
          <button type="button" className="white-button" onClick={() => handleButtonClick('.')}>
            .
          </button>
        </li>
        <li>
          <button type="button" className="lightblue-button" onClick={() => handleButtonClick('=')}>
            =
          </button>
        </li>
      </ul>
    </div>
  );
}

CalculatorButtons.propTypes = {
  handleButtonClick: PropTypes.func.isRequired,
};

export default CalculatorButtons;
