import React from 'react'
import Textad from './Textad'
import Mediaad from './Mediaad'

const Createads = () => {
  return (
    <div className='Main-ads'>
      <Textad/>
      <Mediaad/>
      <button className='Next-btn'>Next</button>
    </div>
  )
}

export default Createads