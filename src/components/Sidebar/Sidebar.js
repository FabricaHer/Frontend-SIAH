import React from 'react';
import '../Sidebar/Sidebar.css';
import { SidebarData } from './SidebarData';

const Sidebar = () => {

    const handlerClick = (e,val)=>{
        e.preventDefault()
        console.log(e)
      //  window.location.pathname = val.link
    }

  return (
    <>
        <div className='Sidebar'>
            <ul className='SidebarList'>
                {SidebarData.map((val,Key)=>{
                    return (
                        <li 
                            key={Key}
                            className='row'
                            id={window.location.pathname === val.link ? "active" : ""}
                            onClick={(e) => {
                                handlerClick(e,val)
                            }}
                        >
                            <div id='icon'>{val.icon}</div>
                            <div id='title'>{val.title}</div>
                        </li>
                    );
                })}
            </ul>
        </div>
    </>
  )
}

export default Sidebar
