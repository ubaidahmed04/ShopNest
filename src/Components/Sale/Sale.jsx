import React from 'react'
import menImg from '../../Images/menthinking.png'
import './sale.css'
import { Button } from 'react-bootstrap'
function Sale() {
  return (
    <div>
        <div className='sale-container mt-4'>
            <div className=' img-div   left-contain'>
                <img src={menImg} className='men-image  ' alt="" />
            </div>
            <div className='sale-contain    flex-grow-1 '>
                <div>
                    <div className='text-1'>PAY DAY</div> 
                    <div className='text-2 '>SALE NOW</div> 
                    <div className='text-3 '>Spend minimal $100 get 30% off
                    voucher code for your next purchase</div> 
                    <div className='text-4 pt-4'>1 June - 10 June 2021</div> 
                    <div className='text-3  pb-4'>*Terms & Conditions apply</div> 
                    <Button variant='dark'>SHOP NOW</Button> 

                </div>
            </div>
        </div>
    </div>
  )
}

export default Sale
