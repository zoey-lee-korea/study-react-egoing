import { useState } from 'react';

import './App.css';

function Counter({ title, initValue }) {
  const [count, setCount] = useState(initValue);
  // useState는 배열이다!
  // const countState = useState(initValue);
  // const count = countState[0]
  // count setCount = countState[1]

  function clickHandler() {
    setCount(count + 1);
  }

  return (
    <>
      <h1>{title}</h1>
      <button onClick={clickHandler}>+</button>{count}
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
