import React from 'react'
import './footer.css'

function Footer() {
    return (
        <div className="tl__footer section__padding">
            <div className="tl__footer-heading">
                <h1 className="gradient__text">Looking for more?</h1>
            </div>
            <div className="tl__footer-btn hover-underline-animation">
                <p className="noselect">Request a Feature</p>
            </div>
            <div className="tl__footer-copyright">
                <p>©2022 TDUnit</p>
            </div>
        </div>
    )
}

export default Footer
