import React from 'react'
import addIcon from "../../images/plus.png"


import printerIcon from "../../images/printer.png"
import Button from './components/Buttons/Button'
import Table from './components/Buttons/Table/Table'


const PriceList = () => {
  return (
    <div className='text-black flex flex-col gap-6 '>
       <div className='flex justify-between '>
          <div className='flex flex-col gap-2'>
            <div className='flex items-center bg-white  px-2 rounded-large' style={{"border-radius":"16px"}}>
                <input type="text" placeholder='Search article no' />
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-blue-500">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
            </div>
            <div className='flex items-center bg-white  px-2 rounded-large'>
                <input type="text"  placeholder='Search product'/>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4 text-blue-500" style={{"border-radius":"16px"}}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                </svg>
            </div>
          </div>
          <div className='flex items-center justify-center gap-4 text-sm'>
            <Button icon={addIcon} label='New Product' onClick={() => console.log('New Product')} />
            <Button icon={printerIcon} label='Print List' onClick={() => console.log('Print List')} />
            <Button icon={printerIcon} label='Advanced Mode' onClick={() => console.log('Advanced Mode')} />
          </div>
       </div>


       <div className='px-20'>
          <Table />
       </div>
      
    </div>
  )
}

export default PriceList