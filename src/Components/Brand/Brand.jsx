import React from 'react'
import brand1 from '../../Images/brand1.png'
import brand2 from '../../Images/brand2.png'
import brand3 from '../../Images/brand3.png'
import brand4 from '../../Images/brand4.png'
import brand5 from '../../Images/brand5.png'
import brand6 from '../../Images/brand6.png'
import './brand.css'
function Brand() {
  return (
    <div className='brand-container'>
        <div className=' brand'>
                <div>
                <img src={brand1}  className='brand-img' alt="" />
                </div>
                <div>
                <img src={brand2}  className='brand-img' alt="" />
                </div>
                <div>
                <img src={brand3}  className='brand-img' alt="" />
                </div>
                <div>
                <img src={brand4}  className='brand-img' alt="" />
                </div>
                <div>
                <img src={brand5}  className='brand-img' alt="" />
                </div>
                <div>
                <img src={brand6}  className='brand-img' alt="" />
                </div>
                
        </div>
    </div>
  )
}

export default Brand