import React from 'react'
import { HoverButton } from '../../components';
import Exalted from '../../components/misc/Exalted';
import './component_library.css'

function ComponentLibrary() {
  return (
    <div className='tl__component-library'>
      <Exalted/>
      <HoverButton link="#" title="Hover Button"/>
    </div>
  )
}

export default ComponentLibrary