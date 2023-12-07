import React from 'react'
import addIcon from "../../images/plus.png"


import printerIcon from "../../images/printer.png"
import toggleIcon from "../../images/toggle.png"
import Button from './components/Buttons/Button'
import Table from './components/Buttons/Table/Table'


const PriceList = () => {
  return (
    <div className='text-black flex flex-col gap-6 '>
      <div className=' md:flex   justify-between '>
        <div className='flex flex-col gap-2'>
          <div className='flex items-center justify-between bg-white p-2 lg:p-1  rounded-large' style={{ borderRadius: "16px" }}>
            <input type="text" placeholder='Search article no' className='w-full outline-none'  />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-blue-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </div>
          <div className='flex items-center justify-between bg-white px-3 p-2 lg:p-1  rounded-large' style={{ borderRadius: "16px" }}>
            <input type="text" placeholder='Search product' className='w-full '  />
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-blue-500">
              <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
            </svg>
          </div>
        </div>
      <div className='flex h-max pt-6 md:pt-1  justify-between lg:justify-center md:w-max  gap-4 text-sm w-full'>
                <Button icon={addIcon} label='New Product' onClick={() => console.log('New Product')} />
                <Button icon={printerIcon} label='Print List' onClick={() => console.log('Print List')} />
                <Button icon={toggleIcon} label='Advanced Mode' onClick={() => console.log('Advanced Mode')} />
      </div>    
    </div>
       <div >
          <Table />
       </div>
      
    </div>
  )
}

export default PriceList