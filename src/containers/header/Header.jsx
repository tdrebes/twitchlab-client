import React, { useState } from 'react'
import './header.css';

function Header() {
    const [channelsCount, setChannelsCount] = useState(0);

    return (
        <div className="tl__header section__padding" id="home">
            <div className="tl__header-content">
                <h1 className="gradient__text">Add a channel to start collecting data</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in enim malesuada, porttitor purus vitae, efficitur diam. Praesent aliquet egestas dui non commodo. Proin ut orci nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>

                <div className="tl__header-content__input">
                    <input type="text" placeholder="Channel"/>
                    <button type="button" onClick={() => {setChannelsCount(channelsCount + 1)}}>Add Channel</button>
                </div>

                <div className="tl__header-content_channels">
                    <p>Currently watching {channelsCount} channels</p>
                </div>
            </div>
        </div>
    )
}

export default Header
