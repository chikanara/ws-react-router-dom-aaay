import React from "react";
import { Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductCard = ({ product }) => {
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={product.imgSrc} />
        <Card.Body>
          <Card.Title>{product.name}</Card.Title>
          
          <Link to={`/product/${product.id}`}><Button variant="primary">view detail</Button></Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductCard;
