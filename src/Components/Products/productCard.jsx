import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import ProductImg from '../../Images/category3.png'

export default function MultiActionAreaCard(props) {
  return (
    <Card sx={{ maxWidth: 345,marginTop:10 }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="auto"
          style={{objectFit:"cover",}}
          image={props.Img}
          alt="green iguana"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            product
          </Typography>
          <Typography variant="body2" color="text.secondary">
            product are a widespread group of squamate reptiles, with over 6,000
            species, ranging across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          details
        </Button>
      </CardActions>
    </Card>
  );
}
