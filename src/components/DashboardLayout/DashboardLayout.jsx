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
          <div className='w-full py-8 px-8 md:px-12 md:py-6 lg:px-20 lg:py-4 '>
            <Outlet />
          </div>
      </div>
      
    </div>
  )
}

export default DashboardLayout