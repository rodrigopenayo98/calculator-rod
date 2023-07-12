import React from 'react';

function Calculator() {
  return (
    <section>
      <div id="calculator-contaienr">
        <div id="display">0</div>
        <div id="buttons-container">
          <ul id="buttons-list">
            <li>
              <button type="button" className="white-button">
                AC
              </button>
            </li>
            <li>
              <button type="button" className="white-button">
                +/-
              </button>
            </li>
            <li>
              <button type="button" className="white-button">
                %
              </button>
            </li>
            <li>
              <button type="button" className="lightblue-button">
                ÷
              </button>
            </li>
            <li>
              <button type="button" className="white-button">
                7
              </button>
            </li>
            <li>
              <button type="button" className="white-button">
                8
              </button>
            </li>
            <li>
              <button type="button" className="white-button">
                9
              </button>
            </li>
            <li>
              <button type="button" className="lightblue-button">
                x
              </button>
            </li>
            <li>
              <button type="button" className="white-button">
                4
              </button>
            </li>
            <li>
              <button type="button" className="white-button">
                5
              </button>
            </li>
            <li>
              <button type="button" className="white-button">
                6
              </button>
            </li>
            <li>
              <button type="button" className="lightblue-button">
                -
              </button>
            </li>
            <li>
              <button type="button" className="white-button">
                1
              </button>
            </li>
            <li>
              <button type="button" className="white-button">
                2
              </button>
            </li>
            <li>
              <button type="button" className="white-button">
                3
              </button>
            </li>
            <li>
              <button type="button" className="lightblue-button">
                +
              </button>
            </li>
            <li className="button-cero">
              <button type="button" className="white-button">
                0
              </button>
            </li>
            <li>
              <button type="button" className="white-button">
                .
              </button>
            </li>
            <li>
              <button type="button" className="lightblue-button">
                =
              </button>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Calculator;
