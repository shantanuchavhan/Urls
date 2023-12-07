import React from 'react'
import { Outlet } from 'react-router-dom'

import style from './style.module.css'
import Header from './components/Header/Header'
import { Link } from 'react-router-dom'



const HomeLayout = () => {
  return (
    <div className={style.container}>
      <Header/>
      <div className='text-white flex items-center justify-center gap-4 text-lg'>
        <Link to="dashboard/pricelist">Price List</Link>
        <Link to="/terms">terms</Link>
        <Link to="/us">us</Link>
      </div>
      <div className='flex items-center justify-center px-[200px] py-7 text-white'>
        <Outlet />
      </div>
    </div>
  )
}

export default HomeLayout