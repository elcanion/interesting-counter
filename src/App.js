import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import useFetch from 'react-fetch-hook';

function App() {

  const [count, setCount] = useState(0)

  const {data} = useFetch("http://numbersapi.com/5")
  console.log(data)

  function add(){
    setCount(prevValue => {
      return prevValue + 1
    })
  }
  function subtract(){
    setCount(prevValue => {
      return prevValue - 1
    })
  }
  function getFact(){
    return "teste"
  }

  return (
    <div className="counter">
      <button className="counter--minus" onClick={subtract}>-</button>
      <div className="counter--count">
        <h1>{count}</h1>
      </div>
      <button className="counter--plus" onClick={add}>+</button>
      <div className='fact'>{getFact()}</div>
    </div>
  );
}

export default App;
