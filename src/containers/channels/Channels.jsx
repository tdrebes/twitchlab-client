import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Channel } from '../../components';
import './channels.css';

const Channels = () => {
    const [channels, setChannels] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3001/channels`).then(res => {
            setChannels(res.data.channels);
        }).catch(err => console.log(err));
    }, [])

    const imageUrl = "https://via.placeholder.com/150";

    return (
        <div className="tl__channels-container section__padding">
            <h1 className="gradient__text">Channels</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in enim malesuada, porttitor purus vitae, efficitur diam. Praesent aliquet egestas dui non commodo. Proin ut orci nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>
            <div className="tl__channels-container__input">
                <input type="text" placeholder="Channel"/>
                <button type="button">Search</button>
            </div>
            <div className="tl__channels-container_channels">
                {channels.map((val, key) => {return <Channel channelName={val.name} imgUrl={imageUrl} channelId={val.id}/>})}
            </div>
        </div>
    )
}

export default Channels
