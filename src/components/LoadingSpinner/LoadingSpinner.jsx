
import React from 'react';

const LoadingSpinner = () => {
  return (
    <div className="flex items-center justify-center pt-20">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-blue-500 border-t-blue-500 border-t-2 border-t-blue-500 border-blue-500"></div>
      <div className="ml-2 text-blue-500">Loading...</div>
    </div>
  );
};

export default LoadingSpinner;
