import React from 'react';
import calculate from '../logic/calculate';
import Button from './button';

class Calculator extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      calcObject: {
        operation: null,
        total: null,
        next: null,
      },
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick(buttonName) {
    const { calcObject } = this.state;
    const newCalcObject = { ...calcObject, ...calculate(calcObject, buttonName) };
    this.setState({
      calcObject: newCalcObject,
    });
  }

  render() {
    const { calcObject } = this.state;
    const result = calcObject.next || calcObject.total;
    return (
      <div className="App">
        <div className="calculator">
          <div className="display">
            {Number(result)}
          </div>
          <Button value="AC" onClick={this.onClick} />
          <Button value="+/-" onClick={this.onClick} />
          <Button value="%" onClick={this.onClick} />
          <Button value="÷" className="orange" onClick={this.onClick} />
          <Button value="7" onClick={this.onClick} />
          <Button value="8" onClick={this.onClick} />
          <Button value="9" onClick={this.onClick} />
          <Button value="x" className="orange" onClick={this.onClick} />
          <Button value="4" onClick={this.onClick} />
          <Button value="5" onClick={this.onClick} />
          <Button value="6" onClick={this.onClick} />
          <Button value="-" className="orange" onClick={this.onClick} />
          <Button value="1" onClick={this.onClick} />
          <Button value="2" onClick={this.onClick} />
          <Button value="3" onClick={this.onClick} />
          <Button value="+" className="orange" onClick={this.onClick} />
          <Button value="0" className="span-two" onClick={this.onClick} />
          <Button value="." onClick={this.onClick} />
          <Button value="=" className="orange" onClick={this.onClick} />
        </div>
      </div>
    );
  }
}

export default Calculator;
