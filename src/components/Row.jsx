import React, {useState} from 'react'
import './Row.css'

function Row() {

  const [letters, setLetters] = useState(Array(5).fill(""));

  const handleChange = (value, index) => {
    if (/^[A-Za-z]?$/.test(value)) {
      const newLetters = [...letters];
      newLetters[index] = value.toUpperCase();
      setLetters(newLetters);
    }
  }

  return (
    <div className="Row">
      <div className="row__letters">
        {letters.map((letter, i) => (
          <div key={i} className="row__letter">
            <div className="square">
              <input className="row__input"
              type="text" 
              maxLength={1}
              value={letter}
              onChange={(e) => handleChange(e.target.value, i)}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Row