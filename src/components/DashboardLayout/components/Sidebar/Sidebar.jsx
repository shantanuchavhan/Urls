import React from 'react'
import { Link } from 'react-router-dom'

import LogoutIcon from "../../../../images/logout.png"
import { useState } from 'react';

import dashboardSections from './dashboardSectionsLinks'; 
import active from "../../../../images/active.png"

import { useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  const lastWord = currentPath.split('/').filter(Boolean).pop();
    const [activeSection,setActiveSection]=useState(lastWord||"")
    return (
      <div className='flex flex-col  items-center justify-center py-3 shadow-right text-gray-500 p-4'>
        <div className='border-b-2 border-indigo-500 w-full text-center'>
          <h2>Menu</h2>
        </div>
        <div className='flex flex-col  gap-3'>
          {dashboardSections.map((menuItem, index) => (
            <Link to={`/dashboard/${menuItem.route}`} key={index} onClick={()=>{
                setActiveSection((old)=>menuItem.route)
            }}>
            <div className='flex gap-2 items-center relative mt-3'>
                {activeSection === menuItem.route && <div className='h-3 w-3 absolute -left-5'><img src={active} alt="" /></div>}
                <div className='flex items-center gap-2'>
                <img className='h-4 w-4' src={menuItem.icon} alt='' />
                <h5 className='text-sm'>{menuItem.label}</h5>
              </div>
            </div>
             
            </Link>
          ))}
              <div className='flex items-center gap-2'>
                <img className='h-4 w-4' src={LogoutIcon} alt='' />
                <h5 className='text-sm'>Log Out</h5>
              </div>
        </div>
      </div>
    );
  };
  
  export default Sidebar;