import React from 'react';

const Button = ({ icon, label, onClick }) => {
  return (
    <button
      className='p-2 flex items-center justify-between gap-2 py-1 px-4 border border-gray-300 rounded-large'
      style={{"border-radius":"16px"}}
      onClick={onClick}
    >
      {icon && <img className='h-4 w-4' src={icon} alt='' />}
      {label && <span className='text-gray-600 '>{label}</span>}
    </button>
  );
};

export default Button;
