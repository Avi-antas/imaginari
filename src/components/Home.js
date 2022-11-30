import { useSelector, useDispatch } from "react-redux";
import { faShoppingCart, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { addToCart } from "../actions/action";
import { removeToCart } from "../actions/action";
import Banner from "./Banner";
function Home() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counterReducer);
  const [product, setProduct] = useState([])
  useEffect(()=>{
    fetch("http://localhost:8000/products").then((data) => {
      data.json().then((pro) => {
        setProduct(pro);
      });
    });
  },[])
 
  return (
    <>
      
      <Container>
      <Banner />
      </Container>
    
      <Container>
        <Row>
          <Col md={12}>
            <h2 className="mb-4">Products</h2>
          </Col>
          <Col md={3}>
            <h5>Filter</h5>
          </Col>
          <Col md={9}>
            <Row>
            {
  product.map((val)=>{
    return(
      <Col md={4} key={val.id}>
      <Card className="p-3 each-pro" >
        <Row>
          <Col md={8}>
            <h4>{val.productName}</h4>
            <p>{val.productPrice}</p>
          </Col>
          <Col md={4}>
            <Button
              onClick={() => dispatch(addToCart(counter))}
              className="action-btn"
            >
              <FontAwesomeIcon icon={faShoppingCart} />
            </Button>
            <Button
              onClick={() => dispatch(removeToCart(counter))}
              className="action-btn"
            >
              <FontAwesomeIcon icon={faTrash} />
            </Button>
          </Col>
        </Row>
      </Card>
    </Col>
    )
   
  })
}
            </Row>
          </Col>

         
        </Row>
      </Container>
    </>
  );
}

export default Home;
