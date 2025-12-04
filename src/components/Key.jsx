import React from 'react'
import './Key.css'

function Key({ letter, onClick  }) {
  return (
    <div className="Key" onClick={() => onClick(letter.toUpperCase())}>
        {letter.toUpperCase()}
    </div>
  )
}

export default Key