import React from 'react';

const Button = ({ icon, label, onClick }) => {
  return (
    <button
    className='border border-gray-300  flex shadow-lg gap-2 py-2 px-8 md:px-4 md:justify-between  rounded-lg'
    style={{ borderRadius:"16px" }}
    onClick={onClick}
  >
    {icon && <img className='h-6 w-6 lg:w-4 lg:h-4' src={icon} alt='' />}
    {label && <span className='hidden md:flex text-gray-600'>{label}</span>}
  </button>
  
  
  );
};

export default Button;
