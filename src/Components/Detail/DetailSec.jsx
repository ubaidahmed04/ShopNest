import "./Detail.css";
import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  Typography,
  CircularProgress,
  Rating,
} from "@mui/material";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'; 

import Carousel from "react-bootstrap/Carousel";
import { Image } from "react-bootstrap";
import { useParams } from "react-router-dom";
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
function DetailSec() {
  const [details, setDetails] = useState({});
  const { id } = useParams();
  console.log(id);
  const API = `https://dummyjson.com/products/${id}`;

  useEffect(() => {
    const FetchAPI = async () => {
      try {
        const res = await fetch(API);
        const data = await res.json();
        console.log(data);
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
    <div className="detail-container">
      {details.title ? (
        <>
          <h1 className="text-center">{details.title}</h1>
          <Carousel>
            {details.images &&
              details.images.map((image, index) => (
                <Carousel.Item
                  key={index}
                  interval={1000}
                  className="d-flex justify-content-center"
                  style={{ background: "#f4f6f5", }}
                >
                  <LazyLoadImage
                    src={image}
                    alt="Description"
                    className="carousel-image"
                    width={300}
                    height={300} 
                    effect="blur"
                  />
                </Carousel.Item>
              ))}
          </Carousel>
          <div className="main-container">
            <div className="price">
              <Card elevation={3}>
                <CardContent>
                  <div className="d-flex justify-content-between">
                    <div>
                      <span className="fs-4  bold-text">{details.title}</span>
                    </div>
                    <div>
                      <span className="fs-4  bold-text">$ {details.price}</span>
                    </div>
                  </div>
                  <div>
                    <span className="fs-6 text-secondary">
                      {details.description}
                    </span>
                  </div>
                  <div className="d-flex justify-content-between mx-3 my-1" >
                    <div className="text-center">Location <span> <LocationOnOutlinedIcon /></span></div>
                    <div className="">Karachi</div>

                  </div>

                </CardContent>
              </Card>
            </div>
            <div className="price">
              <Card elevation={3}>
                <CardContent>
                  <Typography variant="h5" component="div">
                    {details.title}
                  </Typography>
                  <Typography variant="h5" component="div">
                    <span className="fs-5 fw-bolder">Price :</span>
                    {details.price}
                  </Typography>
                  <Typography variant="h6" component="div">
                    <span className="fs-5 fw-bolder">Brand :</span>
                    {details.brand}
                  </Typography>
                  <Typography variant="h6" component="div">
                    <span className="fs-5 fw-bolder">Stocks :</span>
                    {details.stock}
                  </Typography>

                  <Typography variant="body2" color="text.secondary">
                    <Rating name="half-rating" defaultValue={details.rating} />
                  </Typography>
                </CardContent>
              </Card>
            </div>
            <div></div>
          </div>
        </>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignSelf: "center",
            maxWidth: 345,
            marginTop: 150,
            marginBottom: 100,
          }}
        >
          <CircularProgress color="secondary" />
        </div>
      )}
    </div>
  );
}

export default DetailSec;
