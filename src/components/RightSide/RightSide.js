import React from 'react';
import '../RightSide/RightSide.css';
import Updates from '../Updates/Updates';


const RightSide = () => {
  return (
    <div className='RightSide'>
      <h1 style={{color: 'var(--primary-main)'}}>Updates</h1>
      <Updates />
    </div>
  )
}

export default RightSide
