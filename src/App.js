import './App.css';

function Counter(props) {
  const { title, initValue } = props
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
