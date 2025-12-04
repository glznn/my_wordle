import React from 'react'
import './Keyboard.css'
import Key from './Key'

function Keyboard({ onKeyPress }) {

    const row1 = ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'];
    const row2 = ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'];
    const row3 = ['z', 'x', 'c', 'v', 'b', 'n', 'm'];

  return (
    <div className="Keyboard">
        <div className="keyboard__row">
            {row1.map((char) =>
                <Key key={char} letter={char} onClick={onKeyPress} />
            )}
        </div>
        <div className="keyboard__row">
            {row2.map((char) =>
                <Key key={char} letter={char} onClick={onKeyPress}  />
            )}
        </div>
        <div className="keyboard__row">
            {row3.map((char) =>
                <Key key={char} letter={char} onClick={onKeyPress} />
            )}
        </div>
    </div>
  )
}

export default Keyboard