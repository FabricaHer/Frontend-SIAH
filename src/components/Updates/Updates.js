import React from 'react';
import '../Updates/Updates.css';
import { UpdatesData } from './UpdatesData';

const Updates = () => {
  return (
    <div className='Updates'>
      {UpdatesData.map((update)=>{
          return(
              <div key={update.name} className='update'>
                  <span className='updateIcon'>{update.icon}</span>
                  <div className='noti'>
                      <div style={{marginBottom: '0.5rem'}}>
                          <h3 >{update.name}</h3>
                          <span> {update.noti}</span>
                      </div>
                      <span className='updateTime'>{update.time}</span>
                  </div>
              </div>
          )
      })}
    </div>
  )
}

export default Updates
