import './App.css';
import {useState} from 'react';
import axios from 'axios';
import config from './config';

function App() {
  const [counter, setCounter] = useState(0);

  function getCounter() {
    axios.get(`${config.backEndUrl}/counter`)
      .then(response => {
        setCounter(response.data)
      });
  }

  function incrementCounter() {
    axios.put(`${config.backEndUrl}/counter/increment`)
      .then(response => {
        setCounter(response.data)
      });
  }

  function decrementCounter() {
    axios.put(`${config.backEndUrl}/counter/decrement`)
      .then(response => {
        setCounter(response.data)
      });
  }

  getCounter();

  return (
    <div className="App">
      <div style={{display: "flex", flexDirection: "row", alignItems: "center"}}>
        <button onClick={decrementCounter}
                style={{height: "30px", width: "30px"}}>
          -
        </button>

        <p style={{width: "250px"}}>
          Counter: {counter}
        </p>

        <button onClick={incrementCounter}
                style={{height: "30px", width: "30px"}}>
          +
        </button>
      </div>
    </div>
  );
}

export default App;
