import { useState } from 'react';
import Row from './components/Row.jsx';
import Keyboard from './components/Keyboard.jsx';
import './App.css';

function App() {

  const [count, setCount] = useState(0);

  return (
    <>
      <div className="App">
        <div className="app__header">
          <h1>Glenn's Wordle App</h1>
        </div>
        <div className="app__guesses">
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
          <Row />
        </div>
        <div className="app__keyboard">
          <Keyboard />
        </div>
      </div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
    </>
  )
}

export default App
