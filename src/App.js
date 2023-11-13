import { useState } from 'react';

import './App.css';

function Counter({ title, initValue }) {
  const [count, setCount] = useState(initValue);

  const increaseClickHandler = () => {
    setCount(count + 1);
  }
  const decreaseClickHandler = () => {
    setCount(count - 1);
  }

  return (
    <>
      <h1>{title}</h1>
      <button onClick={increaseClickHandler}>+</button>
      <button onClick={decreaseClickHandler}>-</button>
      {count}
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
