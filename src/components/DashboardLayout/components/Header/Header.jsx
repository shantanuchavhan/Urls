import React from 'react'
import profileIcon from "../../../../images/3135715.png"

import CountrySection from '../../../CountrySection/CountrySection'

const Header = () => {
  return (
    <div className='bg-blue-500 flex justify-between px-10 py-5 text-white'>
        <div className='flex gap-2'>
            <div className='h-6 w-6'>
                <img src={profileIcon} alt="" /></div>
            <div>
                <h2>Shantanu Chavhan</h2>
            </div>
        </div>
        <CountrySection/>
    </div>
  )
}

export default Header