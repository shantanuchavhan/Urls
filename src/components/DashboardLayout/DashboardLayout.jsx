import React from 'react'
import { Outlet } from 'react-router-dom'

import style from "./style.module.css"
import Header from './components/Header/Header'
import Sidebar from './components/Sidebar/Sidebar'

const DashboardLayout = () => {
  return (
    <div className={style.container}>
      <Header/>
      <div className='flex min-h-screen'>
          <div className='hidden lg:block w-60 shadow-lg'>
            <Sidebar/>
          </div>
          <div className='w-full py-4 px-6 md:px-10 lg:px-20'>
            <Outlet />
          </div>
      </div>
      
    </div>
  )
}

export default DashboardLayout