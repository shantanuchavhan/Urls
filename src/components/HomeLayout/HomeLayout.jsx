import React from 'react'
import { Outlet } from 'react-router-dom'

import style from './style.module.css'
import Header from './components/Header/Header'
import { Link } from 'react-router-dom'



const HomeLayout = () => {
  return (
    <div >
      <div className={style.container}></div>
      <div className={style.content}>
        <Header/>
        <div className='text-white flex items-center justify-center  text-lg'>
          <Link to="dashboard/pricelist" className="text-white no-underline text-lg mr-4 hover:underline">PriceList</Link>
          <Link to="/terms" className="text-white no-underline text-lg mr-4 hover:underline">Terms</Link>
          <Link to="/us" className="text-white no-underline text-lg hover:underline">Us</Link>
        </div>

        <div className='flex items-center justify-center py-7 px-2 md:px-[100px] lg:px-[200px]   text-white' >
          <Outlet />
        </div>
      </div>
    </div>
  )
}

export default HomeLayout