import "./Product.css";
import * as React from "react";
import {
  CircularProgress,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
  Pagination,
  Button,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css'; // Optional for a blur effect

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
        <div style={{ marginTop: 80, marginBottom: 100 }} className="flex gap-3 p-3 items-center flex-wrap justify-center card-container slideInUp">
          {loader ? (
            <div style={{ maxWidth: 345, marginTop: 150, marginBottom: 100 }}>
              <CircularProgress color="secondary" />
            </div>
          ) : (
            products &&
            products.map((item) => (
              <Card
              key={item.id}
              className="max-w-sm mx-auto p-3 bg-white shadow-lg rounded-lg overflow-hidden"
            >
              <CardActionArea>
                <LazyLoadImage
                  alt={item.title}
                  src={item.thumbnail}
                  height="300px"
                  effect="blur"
                  className="w-full flex justify-center object-cover"
                />
                <CardContent className="p-4">
                  <div className="flex justify-between items-center mb-4">
                    <Typography gutterBottom variant="h5" className="font-semibold  overflow-hidden text-ellipsis whitespace-nowrap text-gray-800">
                      {item.title}
                    </Typography>
                    <Typography variant="h5" className="text-gray-800 font-bold">
                      Rs.{Math.floor(item.price + 1)}
                    </Typography>
                  </div>
                  <Typography 
                    variant="body2" 
                    color="text.secondary" 
                    className="text-gray-600 overflow-hidden text-ellipsis whitespace-nowrap"
                    title={item.description}  // Shows full description on hover
                  >
                    {item.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions className="flex justify-between px-4 py-2">
                <Link to={`/products/${item.id}`} className="text-decoration-none">
                  <Button variant="outlined" startIcon={<ShoppingCartIcon />} className="text-gray-800 hover:bg-gray-200">
                    Add to Cart
                  </Button>
                </Link>
                <Link to={`/products/${item.id}`} className="text-decoration-none">
                  <Button variant="outlined" className="text-gray-800 hover:bg-gray-200">
                    Details
                  </Button>
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
