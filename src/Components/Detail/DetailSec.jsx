import "./Detail.css";
import React, { useEffect, useState } from 'react';
import { Card, CardContent, Typography, CircularProgress } from '@mui/material';
import Carousel from 'react-bootstrap/Carousel';
import { Image } from "react-bootstrap";
import { useParams } from 'react-router-dom';

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
      <h1>Product Details</h1>
      {details.title ? (
        <div>
          <div className="carousel-container">
            <Carousel>
              {details.images && details.images.map((image, index) => (
                <Carousel.Item key={index} interval={1000}>
                  <Image src={image} className="carousel-image" />
                  <Carousel.Caption className="carousel-caption">
                    <h3>{details.title}</h3>
                    <p>{details.brand}</p>
                  </Carousel.Caption>
                </Carousel.Item>
              ))}
            </Carousel>
          </div>
          <div>
            <Card className="detail-card">
              <CardContent>
                <Typography variant="h5" component="div">
                  {details.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {details.description}
                </Typography>
              </CardContent>
            </Card>
          </div>
        </div>
      ) : (
        <div style={{ maxWidth: 345, marginTop: 150, marginBottom: 100 }}>
          <CircularProgress color="secondary" />
        </div>
      )}
    </div>
  );
}

export default DetailSec;
