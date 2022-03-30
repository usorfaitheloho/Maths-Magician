import React from 'react';
import Calculator from './components/calculator';
import './App.css';

function App() {
  return (
    <div className="box">
      <div>
        <h2 className="sub-two">Let us do some math</h2>
        <div className="blackboard">
          <img src="https://media4.giphy.com/media/95AV1NyEC3zh1CODmm/giphy.gif?cid=790b76118803b2260c8da8b39d63e13407e9a1d41652d2c7&rid=giphy.gif&ct=s" alt="" />
        </div>
      </div>
      <Calculator />
    </div>
  );
}

export default App;
