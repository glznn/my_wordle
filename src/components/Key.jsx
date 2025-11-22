import React from 'react'
import './Key.css'

function Key({ letter }) {
  return (
    <div className="Key"
    onClick={() => 
        document.activeElement.value = letter.toUpperCase()
      }
    >
        {letter.toUpperCase()}
    </div>
  )
}

export default Key