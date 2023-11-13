import { useState, useEffect } from 'react';

import './App.css';
import s from './App.module.css'

import AccountBook from './AccountBook'

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

  const counterStyle = { // Inline 방식의 Style 적용 = 객체 사용
    backgroundColor: "#ccc",
    padding: 10,
  }

  useEffect(() => {
    fetch('http://localhost:9999/counter') // json-server ./db.json --port 9999
      .then(response => response.json())
      .then(result => setCount(result.value));
  }, []);

  return (
    <div style={counterStyle}>
      <h1>{title}</h1>
      <button onClick={increaseClickHandler}>+</button>
      <button onClick={decreaseClickHandler}>-</button>
      <input type="text" value={step} onChange={changeHandler}></input>
      <span className={s.count}>{count}</span>
    </div>
  );
}

function App() {
  return (
    <>
      <Counter title="Counter App" initValue={0} />
      <AccountBook />
    </>
  );
}

export default App;
