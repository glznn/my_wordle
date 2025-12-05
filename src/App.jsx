import { useState, useRef } from 'react';
import Row from './components/Row.jsx';
import Keyboard from './components/Keyboard.jsx';
import './App.css';

function App() {

  const [count, setCount] = useState(0);

  const [activeRow, setActiveRow] = useState(0);

  // Makes of array of arrays, 6 row, 5 letters
  // Tracks current focus position
  const inputsRef = useRef(
    Array.from({length: 6}, () => Array(5).fill(null))
  );

  const rowHandlers = useRef([]);

  const handleKeyPress = (letter) => {
    const handler = rowHandlers.current[activeRow];
    if (handler) {
      handler(letter);
    }
  }

const handleEnter = (event) => {
  if (event.key === 'Enter') {
    console.log("Enter key was pressed");
  }
}

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
          {inputsRef.current.map((rowRefs, rowIndex) => (
            <Row
              key={rowIndex}
              word={answer}
              order={rowIndex}
              inputs={{current: rowRefs}}
              registerHandler={(fn) => (rowHandlers.current[rowIndex] = fn)}
              onKeyPress={handleEnter}
            />
          ))}
        </div>
        <div className="app__keyboard">
          <Keyboard onKeyPress={handleKeyPress}/>
        </div>
      </div>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
    </>
  )
}

export default App
