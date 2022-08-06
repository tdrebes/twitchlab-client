import React from 'react'
import { HoverButton } from '../../components';
import Exalted from '../../components/misc/Exalted';
import './component_library.css'

function ComponentLibrary() {
  return (
    <div className='tl__component-library'>
      <h1 className='gradient__text'>Button styles</h1>
      <div className='section__padding'>
        <Exalted text="Exalted"/>
        <HoverButton link="#" title="Hover Button"/>
      </div>
      <h1 className='gradient__text'>Modules</h1>
      <div className='section__padding'>
        ...
      </div>
    </div>
  )
}

export default ComponentLibrary