import React from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductDetail = ({ match, products,history }) => {
  const findProduct = products.find((product) => product.id == match.params.id);
  return (
    <div>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={findProduct.imgSrc} />
        <Card.Body>
          <Card.Title>{findProduct.name}</Card.Title>
          <Card.Text>{findProduct.price}</Card.Text>
          {/* <Link to="/products">
            <Button variant="primary">go back</Button>
          </Link> */}
        
            {/* <Button onClick={() => history.push("/products")} variant="primary">go back</Button> */}
           
            <Button variant="primary"  onClick={() => history.goBack()} >go back</Button>
         
         
        </Card.Body>
      </Card>
    </div>
  );
};

export default ProductDetail;
