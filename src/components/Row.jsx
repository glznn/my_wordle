import React, {useState, useEffect} from 'react'
import './Row.css'

function Row({word, order, inputs, registerHandler}) {

  const [letters, setLetters] = useState(Array(5).fill(""));
  const [focusedIndex, setFocusedIndex] = useState(0);

  useEffect(() => {
    if (registerHandler) {
      registerHandler(handleLetterClick);
    }
  }, [letters])

  const handleLetterClick = (letter) => {
    if (focusedIndex < 5) {
      handleChange(letter, focusedIndex);
    }
  }

  const handleKeyDown = (event, index) => {
    if (event.key === 'Backspace') {
      event.preventDefault(); 
      handleChange("", index, true);
    }
    else if (/^[A-Za-z]$/.test(event.key)) {
      event.preventDefault();
      handleChange(event.key.toUpperCase(), index, false);
    }
  }

  const handleChange = (value, index, isBackspace = false) => {
    const newLetters = [...letters];
    
    if (isBackspace) {
      newLetters[index] = "";
      setLetters(newLetters);
      if (index > 0) {
        inputs.current[index - 1].focus();
      }
      return;
    }
    newLetters[index] = value;
    setLetters(newLetters);

    if (index < 4) {
      inputs.current[index + 1].focus();
      console.log("reached");
    }
  }

  return (
    <div className="Row">
      <div className="row__letters">
        {letters.map((letter, i) => (
          <div key={i} className="row__letter">
            <div className="square">
              <input className="row__input"
              ref={(el) => inputs.current[i] = el}
              type="text" 
              maxLength={1}
              value={letter}
              onKeyDown={(e) => handleKeyDown(e, i)}
              onFocus={() => setFocusedIndex(i)}
              autoFocus={i === 0 && order === 0}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Row