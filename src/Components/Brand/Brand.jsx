import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'; // Optional: for blur effect

import brand1 from '../../Images/brand1.png';
import brand2 from '../../Images/brand2.png';
import brand3 from '../../Images/brand3.png';
import brand4 from '../../Images/brand4.png';
import brand5 from '../../Images/brand5.png';
import brand6 from '../../Images/brand6.png';
import './brand.css';

function Brand() {
  return (
    <div className='brand-container'>
      <div className='brand'>
        <div>
          <LazyLoadImage
            src={brand1}
            className='brand-img'
            alt="Brand 1"
            effect="blur" 
          />
        </div>
        <div>
          <LazyLoadImage
            src={brand2}
            className='brand-img'
            alt="Brand 2"
            effect="blur"
          />
        </div>
        <div>
          <LazyLoadImage
            src={brand3}
            className='brand-img'
            alt="Brand 3"
            effect="blur"
          />
        </div>
        <div>
          <LazyLoadImage
            src={brand4}
            className='brand-img'
            alt="Brand 4"
            effect="blur"
          />
        </div>
        <div>
          <LazyLoadImage
            src={brand5}
            className='brand-img'
            alt="Brand 5"
            effect="blur"
          />
        </div>
        <div>
          <LazyLoadImage
            src={brand6}
            className='brand-img'
            alt="Brand 6"
            effect="blur"
          />
        </div>
      </div>
    </div>
  );
}

export default Brand;
