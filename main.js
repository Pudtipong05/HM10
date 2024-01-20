const root = ReactDOM.createRoot(document.querySelector("#root"));

function Counter() {
  return (
    <div className="counter">
      <button onClick={() => console.log("+")}> + </button>
      <h2>{0}</h2>
      <button onClick={() => console.log("-")}> - </button>
      <button onClick={() => console.log("Clear")}> C </button>
      <button onClick={() => console.log("Del")}> X </button>
    </div>
  );
}

function SumInfo() {
  return (
    <div className="sum">
      <h1>Sum = 0</h1>
    </div>
  );
}
function AddCounter() {
  return (
    <div className="btn-add">
      <button>Add Couter</button>
    </div>
  );
}

function App() {
  return (
    <div className="app">
      <h1 className="title">Today : {new Date().toDateString()}</h1>
      <br />

      <SumInfo />
      <AddCounter />
      <Counter />
    </div>
  );
}
root.render(<App />);
