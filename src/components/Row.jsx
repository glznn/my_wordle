import React, {useState, useRef} from 'react'
import './Row.css'

function Row({word, order}) {

  const [letters, setLetters] = useState(Array(5).fill(""));
  const inputsRef = useRef([]);
  const wordSlice = word.split("");

  const handleKeyDown = (event, index) => {
    if (event.key === 'Backspace') { 
      handleChange(event.key, index);
      if (letters[index] === '') {
        inputsRef.current[index - 1].focus();
      }
    }
    else {
      handleChange(event.key, index);
    }
  }

  const handleChange = (value, index) => {
    if (/^[A-Za-z]?$/.test(value) || value === 'Backspace') {
      const newLetters = [...letters];
      if (value === 'Backspace') {
        value = '';
        inputsRef.current[index - 1].focus();

      }
      newLetters[index] = value.toUpperCase();
      setLetters(newLetters);

      if (value && index < letters.length - 1) {
        inputsRef.current[index + 1].focus();
      }
    }
  }

  return (
    <div className="Row">
      <div className="row__letters">
        {letters.map((letter, i) => (
          <div key={i} className="row__letter">
            <div className="square">
              <input className="row__input"
              ref={(el) => inputsRef.current[i] = el}
              type="text" 
              maxLength={1}
              value={letter}
              // onChange={(e) => handleChange(e.target.value, i)}
              onKeyDown={(e) => handleKeyDown(e, i)}
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