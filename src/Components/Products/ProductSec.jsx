import React from "react";
import "./Product.css";
import porductCard from "./productCard";
import MultiActionAreaCard from "./productCard";
import ProductImg from '../../Images/category3.png'
import ProductImg2 from '../../Images/category3.png'
import ProductImg3 from '../../Images/category3.png'
import ProductImg4 from '../../Images/category3.png'
import ProductImg5 from '../../Images/category3.png'
import ProductImg6 from '../../Images/category3.png'

function ProductSec() {
  return (
    <>
      <div className="main-product">
        <div className="d-flex gap-3 p-3 justify-content-center flex-wrap">
          <MultiActionAreaCard Img={ProductImg}/>
          <MultiActionAreaCard Img={ProductImg2}/>
          <MultiActionAreaCard Img={ProductImg3}/>
          <MultiActionAreaCard Img={ProductImg4}/>
          <MultiActionAreaCard Img={ProductImg5}/>
          <MultiActionAreaCard Img={ProductImg6}/>
        </div>
      </div>
    </>
  );
}

export default ProductSec;
