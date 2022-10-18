import { AddShoppingCartOutlined } from "@mui/icons-material";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import React from "react";
import "./ProductCard.css";

const ProductCard = ({ product, handleAddToCart }) => {
  return (
    <Card className="card">
      <CardActionArea>
        <CardMedia
        component="img"
        alt={product.name}
        // height="140"
        image={product.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5">{product.name}</Typography>
          <Typography gutterBottom variant="h5"><b>{"$" + product.cost}</b></Typography>
          <Rating value={product.rating} readOnly></Rating>
        </CardContent>
      </CardActionArea>
      <CardActions className="card-actions">
        <Button 
        variant="contained" 
        component="div" 
        style={{width: '100%'}} 
        className="card-button" 
        onClick={() => {
          handleAddToCart(
            localStorage.getItem("token"),
            [],
            [],
            product._id,
            1,
            {preventDuplicate:true}
          )
        }}
        >
          <AddShoppingCartOutlined />
          ADD TO CART
        </Button>
      </CardActions>

    </Card>
  );
};

export default ProductCard;
