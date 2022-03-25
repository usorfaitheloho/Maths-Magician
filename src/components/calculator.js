import React, { useState } from 'react';
import calculate from '../logic/calculate';
import Button from './button';

function Calculator() {
  const [calcObject, setcalcObject] = useState({
    total: null,
    next: null,
    operation: null,
  });

  const onClick = (buttonName) => {
    setcalcObject({ ...calcObject, ...calculate(calcObject, buttonName) });
  };

  const result = calcObject.next || calcObject.total;

  const buttonsTitles = [
    'AC', '+/-', '%', '÷',
    '7', '8', '9', 'x',
    '4', '5', '6', '-',
    '1', '2', '3', '+',
    '0', '.', '=',
  ];

  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          {Number(result)}
        </div>

        {
        buttonsTitles.map((btnTitle) => (
          <Button value={btnTitle} onClick={onClick} key={btnTitle} />
        ))
      }

      </div>
    </div>
  );
}

export default Calculator;
