import React, { useEffect, useState } from "react";
import { Card, CardContent, Typography, CircularProgress, Rating } from "@mui/material";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'; 
import { useParams } from "react-router-dom";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import { Carousel } from 'react-responsive-carousel';

function DetailSec() {
  const [details, setDetails] = useState({});
  const { id } = useParams();
  const API = `https://dummyjson.com/products/${id}`;

  useEffect(() => {
    const FetchAPI = async () => {
      try {
        const res = await fetch(API);
        const data = await res.json();
        setDetails(data);
      } catch (err) {
        console.log("err--->", err);
      }
    };
    if (id) {
      FetchAPI();
    }
  }, [id]);

  return (
    <div className="mt-[50px] px-6 py-12">
      {details.title ? (
        <>
          <h1 className="text-center text-3xl font-bold mb-8">{details.title}</h1>
          <div className="carousel-container mb-8">
            <Carousel
              showArrows={true}
              showThumbs={false}
              infiniteLoop
              autoPlay
              emulateTouch
              className="carousel-wrapper"
            >
              {details.images &&
                details.images.map((image, index) => (
                  <div key={index} className="carousel-slide">
                    <LazyLoadImage
                      src={image}
                      alt="Description"
                      className="carousel-image"
                      width={300}
                      height={300} 
                      effect="blur"
                    />
                  </div>
                ))}
            </Carousel>
          </div>
          <div className="main-container px-4 py-8 md:px-8 md:py-12">
      <div className="price mb-8">
        <Card elevation={3} className="shadow-lg rounded-lg overflow-hidden">
          <CardContent>
            <div className="flex justify-between mb-6">
              <div>
                <span className="text-2xl font-semibold text-gray-800">{details.title}</span>
              </div>
              <div>
                <span className="text-2xl font-semibold text-gray-800">${details.price}</span>
              </div>
            </div>
            <div className="mb-6">
              <span className="text-gray-700 text-base">
                {details.description}
              </span>
            </div>
            <div className="flex items-center">
              <div className="flex items-center text-gray-600">
                Location
                <LocationOnOutlinedIcon className="ml-2 text-blue-600" />
              </div>
              <div className="ml-4 text-gray-800">Karachi</div>
            </div>
          </CardContent>
        </Card>
      </div>
      <div className="price mb-8">
        <Card elevation={3} className="shadow-lg rounded-lg overflow-hidden">
          <CardContent>
            <Typography variant="h5" component="div" className="text-gray-800 font-semibold mb-2">
              {details.title}
            </Typography>
            <Typography variant="h6" component="div" className="text-gray-700 mb-2">
              <span className="font-medium">Price :</span> ${details.price}
            </Typography>
            <Typography variant="h6" component="div" className="text-gray-700 mb-2">
              <span className="font-medium">Brand :</span> {details.brand}
            </Typography>
            <Typography variant="h6" component="div" className="text-gray-700 mb-2">
              <span className="font-medium">Stocks :</span> {details.stock}
            </Typography>
            <Typography variant="body2" color="text.secondary" className="mt-2">
              <Rating name="half-rating" defaultValue={details.rating} />
            </Typography>
          </CardContent>
        </Card>
      </div>
    </div>
        </>
      ) : (
        <div className="flex justify-center items-center h-64">
          <CircularProgress color="secondary" />
        </div>
      )}
    </div>
  );
}

export default DetailSec;
