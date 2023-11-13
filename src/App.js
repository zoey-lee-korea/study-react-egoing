import './App.css';

function Counter(props) {
  return (
    <>
      <h1>{props.title}</h1>
      <button>+</button>{props.initValue}
    </>
  );
}

function App() {
  return (
    <>
      <Counter title="Counter App" initValue="0" />
    </>
  );
}

export default App;
