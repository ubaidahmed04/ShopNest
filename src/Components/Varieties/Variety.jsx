import React from "react";
import "./Variety.css";
import GaleryImg from "../../Images/model.jpg";
import GaleryImg2 from "../../Images/beauty.jpeg";
import GaleryImg3 from "../../Images/headPhone.avif";
import GaleryImg4 from "../../Images/Shoes.jpeg";
import GaleryImg5 from "../../Images/headPhone.avif";
import YoungCategory from "../Categories/YoungCategory";
function Variety() {
  return (
    <>
      <div className="variety-main px-4 bold-text">Today Our Best Product</div>

      <div className="d-flex flex-wrap p-3 ">
        <div className="col-12 col-md-6 position-relative mb-2">
          <img src={GaleryImg} className="w-100 variety-img" alt="" />
          <div className="text-overlay">
            <div>New Women's Collection</div>
            <div>Today 20% off</div>
          </div>
        </div>
        <div className="col-12 col-md-6 d-flex flex-wrap">
          <div className="position-relative col-6 col-md-6 ">
            <img src={GaleryImg3} className="w-100 variety-img" alt="" />
            <div className="text-overlay">
              <div> Text 1</div>
            </div>
          </div>
          <div className="position-relative col-6 col-md-6 ">
            <img src={GaleryImg3} className="w-100 variety-img" alt="" />
            <div className="text-overlay">
              <div>Image 3 Text</div>
            </div>
          </div>
          <div className="position-relative col-6 col-md-6 ">
            <img src={GaleryImg3} className="w-100 variety-img" alt="" />
            <div className="text-overlay">
              <div>Image 4 Text</div>
            </div>
          </div>
          <div className="position-relative col-6 col-md-6 ">
            <img src={GaleryImg3} className="w-100 variety-img" alt="" />
            <div className="text-overlay">
              <div>Image 5 Text</div>
            </div>
          </div>
        </div>
      </div>
      <div className="variety-container">
    <div className="bold-text">Today Best Deals</div>
  <div className="variety">
    <div><img src={GaleryImg2} className="variety-img" alt="" /></div>
    <div><img src={GaleryImg4} className="variety-img" alt="" /></div>
    <div><img src={GaleryImg4} className="variety-img" alt="" /></div>
    <div><img src={GaleryImg4} className="variety-img" alt="" /></div>
    <div><img src={GaleryImg4} className="variety-img" alt="" /></div>
    <div><img src={GaleryImg4} className="variety-img" alt="" /></div>
    <div><img src={GaleryImg4} className="variety-img" alt="" /></div>
    <div><img src={GaleryImg4} className="variety-img" alt="" /></div>
    <div><img src={GaleryImg3} className="variety-img" alt="" /></div>
  </div>
  <YoungCategory/>

</div>

    </>
  );
}

export default Variety;
