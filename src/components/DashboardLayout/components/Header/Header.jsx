import React from 'react';
import profileIcon from '../../../../images/3135715.png';

import CountrySection from '../../../CountrySection/CountrySection';

const Header = () => {
  return (
    <div className='bg-blue-500 flex justify-between px-10 py-5 text-white'>
      <div className='hidden lg:flex gap-2'>
        <div className='h-6 w-6'>
          <img src={profileIcon} alt="" />
        </div>
        <div>
          <h2>Shantanu Chavhan</h2>
        </div>
      </div>
      <div className='lg:hidden'>
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7 text-lg">
          <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
        </svg>
      </div>
      <CountrySection />
    </div>
  );
};

export default Header;
