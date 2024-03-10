import './App.css';
import {useState} from 'react';
import axios from 'axios';

function App() {
  const [counter, setCounter] = useState(0);

  function getCounter() {
    axios.get('http://localhost:5000/counter')
      .then(response => {
        setCounter(response.data)
      });
  }

  function incrementCounter() {
    axios.put('http://localhost:5000/counter/increment')
      .then(response => {
        setCounter(response.data)
      });
  }

  function decrementCounter() {
    axios.put('http://localhost:5000/counter/decrement')
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
