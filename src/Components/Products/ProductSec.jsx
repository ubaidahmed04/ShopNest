import "./Product.css";
import * as React from "react";
import {
  CircularProgress,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
  Pagination,
  Button,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

function ProductSec() {
  const [limits, setLimits] = useState(10);
  const [skip, setSkip] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProduct] = useState([]);
  const [loader, setLoader] = useState(true);
  const [totalPages, setTotalPages] = useState(1);
  const API = `https://dummyjson.com/products?limit=${limits}&skip=${skip}`;

  useEffect(() => {
    const FetchAPI = async () => {
      setLoader(true);
      try {
        const response = await fetch(API);
        const data = await response.json();
        setProduct(data.products);
        setLoader(false);
        setTotalPages(Math.ceil(data.total / limits));
        console.log("data --->", data);
      } catch (error) {
        console.log(error);
        setLoader(false);
      }
    };
    FetchAPI();
  }, [limits, skip]);

  const handlePageChange = (event, page) => {
    setCurrentPage(page);
    setSkip((page - 1) * limits);
  };

  return (
    <>
      <div className="main-product">
        <div style={{  marginTop: 80, marginBottom: 100 }} className="d-flex gap-3 p-3 justify-content-center flex-wrap card-container slideInUp">
          {loader ? (
            <div style={{ maxWidth: 345, marginTop: 150, marginBottom: 100 }}>
              <CircularProgress color="secondary" />
            </div>
          ) : (
            products &&
            products.map((item) => (
              <Card
                key={item.id}
                sx={{
                  maxWidth: 345,
                  borderRadius: 5,
                  boxShadow:
                    "7px 0px 15px 0px rgba(0,0,0,0.1),0px 10px 15px -3px rgba(0,0,0,0.1),-5px 7px 15px -3px rgba(0,0,0,0.1)",
                }}
                className="card"
              >
                <CardActionArea>
                  <CardMedia
                    component="img"
                    height="auto"
                    style={{ objectFit: "cover", maxHeight: 260 ,width:"auto",height:'300'}}
                    image={item.thumbnail}
                    alt={item.title}
                    className=""
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" style={{maxHeight:50}}>
                      <div className="d-flex justify-content-around">
                        <div>{item.title}</div>
                        <div>{`Rs.${Math.floor(item.price + 1)}`}</div>
                      </div>
                    </Typography>
                    <Typography
                      variant="body2"
                      className="description"
                      color="text.secondary"
                    >
                      {item.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions className="d-flex justify-content-between mx-4 my-4">
                  <Link
                    to={`/products/${item.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Button variant="outlined" startIcon={<ShoppingCartIcon />}>
                      Add to Cart
                    </Button>
                  </Link>
                  <Link
                    to={`/products/${item.id}`}
                    style={{ textDecoration: "none" }}
                  >
                    <Button variant="outlined">Details</Button>
                  </Link>
                </CardActions>
              </Card>
            ))
          )}
        </div>

        <div style={{ display: "flex", justifyContent: "center", margin: 20 }}>
          <Pagination
            count={totalPages}
            page={currentPage}
            onChange={handlePageChange}
            color="secondary"
          />
        </div>
      </div>
    </>
  );
}

export default ProductSec;
