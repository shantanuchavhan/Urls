import React from 'react';

const Button = ({ icon, label, onClick }) => {
  return (
    <button
    className='w-full md:w-max flex  items-center justify-center md:justify-between shadow-lg gap-2 py-1 px-4 border border-gray-300 rounded-lg'
    style={{ borderRadius: "16px" }}
    onClick={onClick}
  >
    {icon && <img className='h-6 w-6 lg:w-4 lg:h-4' src={icon} alt='' />}
    {label && <span className='hidden md:flex text-gray-600'>{label}</span>}
  </button>
  
  
  );
};

export default Button;
