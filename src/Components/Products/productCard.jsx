import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import * as React from 'react';
import { Button, CardActionArea, CardActions ,CircularProgress,Card,CardContent ,CardMedia ,Typography} from '@mui/material';
import { useEffect } from 'react';
import ProductImg from '../../Images/category3.png'

export default function MultiActionAreaCard(props) {
  const [products,setProduct] = React.useState([])
  const API = `https://dummyjson.com/products`
  const FetchAPI = async()=>{
    const  response = await fetch(API)
    try{
      const data = await response.json()
      setProduct(data)
      console.log("data --->",data)

    }
    catch(error){
      console.log(error)
    }
  }
  console.log("products --->",products)
 
  useEffect(()=>{
    FetchAPI()
  },[])
  return (
    <>
    
    </>
  );
}
