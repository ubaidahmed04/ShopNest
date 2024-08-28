import React from 'react';
import './App.css'; 

const Loader = () => (
    <div className='flex items-center justify-center bg-[#F4F6F5] h-screen w-screen'>
    <div className="spinner">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  </div>
  
);

export default Loader;