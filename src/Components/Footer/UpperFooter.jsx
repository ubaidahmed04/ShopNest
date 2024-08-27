import React from 'react';
import './Footer.css';
import appImg from '../../Images/app.webp';
import { Button } from 'react-bootstrap';

function UpperFooter() {
  return (
    <div className=''>
      <div className='img-div '>
        <img src={appImg} className='app-img img-fluid' alt="" />
      </div>
      <div className='upper-container '>
        <div className='upper-contain'>
          <span className='upper-text'>JOIN SHOPPING COMMUNITY TO GET MONTHLY PROMO</span>
          <br />
          <span className='text-sm'>Type your email down below and be young wild generation</span>
          <div className='w-50 d-flex justify-content-center align-items-center py-8'>
            <input type="text" className='form-control footer-input' placeholder='ADD YOUR EMAIL HERE' />
            <Button variant="dark" className="footer-btn">SEND</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UpperFooter;
