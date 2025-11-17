import React from 'react'
import './Key.css'

function Key({ letter }) {
  return (
    <div className="Key">
        {letter.toUpperCase()}
    </div>
  )
}

export default Key