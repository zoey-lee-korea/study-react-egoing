import './App.css';

function Counter({ title, initValue }) {
  return (
    <>
      <h1>{title}</h1>
      <button>+</button>{initValue}
    </>
  );
}

function App() {
  return (
    <>
      <Counter title="Counter App" initValue={0} />
    </>
  );
}

export default App;
