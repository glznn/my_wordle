import React, {useState, useRef} from 'react'
import './Row.css'

function Row({order}) {

  const [letters, setLetters] = useState(Array(5).fill(""));
  const inputsRef = useRef([]);

  const handleKeyDown = (event, index) => {
    if (event.key === 'Backspace' || event.key === 'ArrowLeft') {
      inputsRef.current[index - 1].focus();
    }
    else if (event.key === 'ArrowRight') {
      inputsRef.current[index + 1].focus();
    }
    else if (/^[A-Za-z]?$/.test(event.key)) {
      const newLetters = [...letters];
      newLetters[index] = event.key.toUpperCase();
      setLetters(newLetters);
    }
  }
  
  const handleChange = (value, index) => {
    if (/^[A-Za-z]?$/.test(value)) {
      const newLetters = [...letters];
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
              onKeyDown={(e) => handleKeyDown(e, i)}
              onChange={(e) => handleChange(e.target.value, i)}
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