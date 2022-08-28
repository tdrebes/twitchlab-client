import React from 'react'
import { HoverButton, UrlTable } from '../../components';
import Exalted from '../../components/misc/Exalted';
import Channels from '../channels/Channels';
import Header from '../header/Header';
import Login from '../login/Login';
import './component_library.css'

function ComponentLibrary() {
  return (
    <div>
      <Header />
      <Channels />
      <Login />
      <UrlTable />
      <div className="tl__component-library-buttons">
        <Exalted text="Exalted"/>
        <HoverButton link="#" title="Hover Button"/>
      </div>
    </div>
  )
}

export default ComponentLibrary
