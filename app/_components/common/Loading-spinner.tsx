import React from 'react';

const LoadingSpinner: React.FC = () => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="loader w-16 h-16">
        loading...
      </div>
    </div>
  );
};

export default LoadingSpinner;
