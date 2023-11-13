import { useState } from 'react';

import './App.css';

function Counter({ title, initValue }) {
  const [count, setCount] = useState(initValue);
  const [step, setStep] = useState(1);

  const increaseClickHandler = () => {
    setCount(count + step);
  };
  const decreaseClickHandler = () => {
    setCount(count - step);
  };
  const changeHandler = (e) => { // e: event
    setStep(Number(e.target.value));
  };

  return (
    <>
      <h1>{title}</h1>
      <button onClick={increaseClickHandler}>+</button>
      <button onClick={decreaseClickHandler}>-</button>
      <input type="text" value={step} onChange={changeHandler}></input>
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
