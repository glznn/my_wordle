import { useState } from 'react';
import Row from './components/Row.jsx';
import Keyboard from './components/Keyboard.jsx';
import './App.css';

function App() {

  const [count, setCount] = useState(0);
  const answer = 'crane';

  return (
    <>
      <div className="App"
        onMouseDown={(e) => {
        e.preventDefault();
        }}
      >
        <div className="app__header">
          <h1>Glenn's Wordle App</h1>
        </div>
        <div className="app__guesses">
          <Row word={answer} order={0} />
          <Row word={answer} />
          <Row word={answer} />
          <Row word={answer} />
          <Row word={answer} />
          <Row word={answer} />
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
