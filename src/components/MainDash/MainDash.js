import React from 'react';
import '../MainDash/MainDash.css';

const MainDash = (props) => {
  return (
    
    <div className='container-main'>
      {props.children}
    </div>
    
  )
}

export default MainDash
