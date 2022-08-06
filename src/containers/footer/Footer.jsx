import React from 'react'
import { HoverButton } from '../../components';
import './footer.css'

function Footer() {
    return (
        <div className="tl__footer section__padding">
            <div className="tl__footer-heading">
                <h1 className="gradient__text">Looking for more?</h1>
            </div>
            <HoverButton link="https://github.com" title="Check on Github"/>
            <div className="tl__footer-copyright">
                <p>©2022 TDUnit</p>
            </div>
        </div>
    )
}

export default Footer
