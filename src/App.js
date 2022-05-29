import { useState } from 'react';
import './App.css';

function App() {

  const [count, setCount] = useState(0)
  const [fact, setFact] = useState("")


  function add(){
    setCount(prevValue => {
      return prevValue + 1
    })
    var url = `http://numbersapi.com/${count + 1}/trivia`
    fetch(url, {
      headers:{
        'x-requested-with': 'text/plain'
      }
    })
    .then(res => res.text())
    .then(res => setFact(res))
  }

  function subtract(){
    setCount(prevValue => {
      return prevValue - 1
    })
    var url = `http://numbersapi.com/${count - 1}/trivia`
    fetch(url, {
      headers:{
        'x-requested-with': 'text/plain'
      }
    })
    .then(res => res.text())
    .then(res => setFact(res))
  }


  return (
    <div>
      <h4>interesting counter</h4>
      <div className="counter">
          <button className="counter--minus" onClick={subtract}>-</button>
          <div className="counter--count">
            <h1>{count}</h1>
          </div>
          <button className="counter--plus" onClick={add}>+</button>
        </div>
      <div className='fact--box'>
        <h4 className='fact--text'>{fact}</h4>
      </div>
    </div>
  );
}

export default App;
