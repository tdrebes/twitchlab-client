import React from 'react'
import './channel.css';

const Channel = ( {imgUrl, channelName, channelId} ) => {
    return (
        <div className = "tl__channels-container_channel" id={channelId}>
            <div className = "tl__channels-container_channel-image">
                <img src={imgUrl} alt="" />
            </div>
            <div className="tl__channels-container_channel-content">
                <p>{channelName}</p>
            </div>
        </div>
    )
}

export default Channel
