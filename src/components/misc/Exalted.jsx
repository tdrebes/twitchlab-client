import React from 'react'
import './exalted.css'

function Exalted(props) {
  return (
    <div className="tl__exalted over-underline-animation">
        <p className="noselect">★ {props.text}</p>
    </div>
  )
}

export default Exalted