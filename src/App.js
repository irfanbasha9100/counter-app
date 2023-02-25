import logo from './logo.svg';
import './App.css';
import { useState } from 'react';


//Functional Component
function App(props) {
  console.log(props.a)
  //let counter = 0;
  //State Variables
  const [value, setValue] = useState(0);
  const [message, setMessage] = useState('');
  const handlePlusClick = () => {
    if (value == 10) {
      setMessage("Sorry,Counter closed for today!")
    } else {
      setValue(value + 1);
    }
  }
  const handleMinusClick = () => {
    if (value == 0) return;
    setValue(value - 1);
    setMessage('')

  }
  //JSX
  return (
    <div className="App">
      <h1>{props.title}</h1>
      <button onClick={handleMinusClick}>-</button>
      <p>{value}</p>
      <button onClick={handlePlusClick}>+</button>
      <p>{message}</p>
    </div>
  );
}

export default App;
