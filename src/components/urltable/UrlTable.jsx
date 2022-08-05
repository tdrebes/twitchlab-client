import React, { useState, useEffect } from 'react'
import axios from 'axios';

import './urltable.css'

const UrlTable = () => {
    let channelId = 1;

    const [urls, setUrls] = useState([]);

    useEffect(() => {
        axios.get(`http://localhost:3001/url/${channelId}`).then(res => {
            setUrls(res.data.urls);
        }).catch(err => console.log(err));
    }, [channelId])

    return (
        <div className="tl__urltable section__padding">
            <div className="tl__urltable-content">
                <h1 className="gradient__text">Show URLs posted in a channel</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec in enim malesuada, porttitor purus vitae, efficitur diam. Praesent aliquet egestas dui non commodo. Proin ut orci nisl. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.</p>

                <div className="tl__urltable-content__input">
                    <input type="text" placeholder="Channel"/>
                    <button type="button">Search</button>
                </div>

                <div>
                    <table>
                        <tbody className="t1__urltable__tbody">
                            <tr>
                                <th>ID</th>
                                <th>URL</th>
                            </tr>{urls.map((val, key) => {return <tr key={key}><td>{val.id}</td><td>{val.url}</td></tr>})}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}

export default UrlTable
