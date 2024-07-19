import React, { useEffect, useState } from "react";
import "./Variety.css";
import Model from "../../Images/model.jpg";
import Beauty from "../../Images/beautyPic.jpeg";
import HeadPhone from "../../Images/headPhone.avif";
import Shoes from "../../Images/shoe.jpeg";
import Mobile from "../../Images/mobile.jpeg";
import YoungCategory from "../Categories/YoungCategory";

function Variety() {
  
  return (
    <>
      <div className="variety-main px-4 bold-text">Today Our Best Product</div>

      <div className="d-flex flex-wrap p-3 ">
        <div className="col-12 col-md-6 position-relative mb-2">
          <img src={Model} className="w-100 variety-img" alt="" />
          <div className="text-overlay">
            <div>New Women's Collection</div>
            <div>Today 20% off</div>
          </div>
        </div>
        <div className="col-12 col-md-6 d-flex flex-wrap">
          <div className="position-relative col-6 col-md-6 ">
            <img src={HeadPhone} className="w-100 variety-img" alt="" />
            <div className="text-overlay">
              <div>HeadPhones</div>
            </div>
          </div>
          <div className="position-relative col-6 col-md-6 ">
            <img src={Shoes} className="w-100 variety-img" alt="" />
            <div className="text-overlay">
              <div>Shoes</div>
            </div>
          </div>
          <div className="position-relative col-6 col-md-6 ">
            <img src={Beauty} className="w-100 variety-img" alt="" />
            <div className="text-overlay">
              <div>Beauty</div>
            </div>
          </div>
          <div className="position-relative col-6 col-md-6 ">
            <img src={Mobile} className="w-100 variety-img" alt="" />
            <div className="text-overlay">
              <div>Mobiles</div>
            </div>
          </div>
        </div>
      </div>
      <div className="variety-container">
    <div className="bold-text">Today Best Deals</div>
  <div className="variety">
    <div>

      <img src={Beauty} className="type-img" alt="" /></div>
    <div><img src={Shoes} className="type-img" alt="" />
    <span>product 1</span>
    </div>
    <div><img src={Shoes} className="type-img" alt="" /></div>
    <div><img src={Shoes} className="type-img" alt="" /></div>
    <div><img src={Shoes} className="type-img" alt="" /></div>
    <div><img src={Shoes} className="type-img" alt="" /></div>
    <div><img src={Shoes} className="type-img" alt="" /></div>
    <div><img src={Shoes} className="type-img" alt="" /></div>
    <div><img src={Shoes} className="type-img" alt="" /></div>
  </div>
  <YoungCategory/>

</div>

    </>
  );
}

export default Variety;
