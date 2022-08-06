import React from 'react'
import './hover-button.css'

function HoverButton(props) {
  return (
    <div className="tl__hover-button hover-underline-animation">
        <p className="noselect">
            <a href={props.link}>{props.title}</a>
        </p>
    </div>
  )
}

export default HoverButton