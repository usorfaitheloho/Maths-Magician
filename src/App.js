import './App.css';

function App() {
  return (
    <div className="App">
      <div className="calculator">
        <div className="display">
          <span>(0)</span>
          0
        </div>
        <div className="operators">
          <button type="button">/</button>
          <button type="button">*</button>
          <button type="button">+</button>
          <button type="button">-</button>

          <button type="button">DEL</button>
        </div>
      </div>
    </div>
  );
}

export default App;
