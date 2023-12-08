import React from 'react'
import flagImage from "../../images/GbFlagicon.png"
const CountrySection = () => {
  return (
    <div className='flex items-center justify-center gap-2 '>
            <h3>English</h3>
            <img className='w-7 h-5' src={flagImage} alt="" />
    </div>
  )
}

export default CountrySection