import React from 'react';
import './Footer.css';
import appImg from '../../Images/app.webp';
import { Button } from 'react-bootstrap';

function UpperFooter() {
  return (
    <div className=''>
    <div className='img-div'>
      <img src={appImg} className='app-img w-full' alt="" />
    </div>
    <div className='upper-container'>
      <div className='upper-contain text-center'>
        <span className='upper-text block text-xl font-bold'>JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO</span>
        <br />
        <span className='text-sm text-gray-500'>Type your email down below and be young wild generation</span>
        <div className='w-1/2 flex justify-center items-center py-8 mx-auto'>
          <input type="text" className='form-control footer-input p-2 border border-gray-300 rounded-l-md w-full' placeholder='ADD YOUR EMAIL HERE' />
          <button className="footer-btn bg-black text-white px-4 py-2 rounded-r-md">SEND</button>
        </div>
      </div>
    </div>
  </div>
  
  );
}

export default UpperFooter;
