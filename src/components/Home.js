import { useSelector, useDispatch } from "react-redux";
import {
  faShoppingCart,
  faTrash,
  faPlusCircle,
  faMinusCircle
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button, Accordion } from "react-bootstrap";
import { addToCart } from "../actions/action";
import { removeToCart } from "../actions/action";
import Banner from "./Banner";
import Selfcount from "./Selfcount";
function Home() {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counterReducer);
  const [product, setProduct] = useState([]);
  const [ini, setIni] = useState(0);
  useEffect(() => {
    fetch("http://localhost:8000/products").then((data) => {
      data.json().then((pro) => {
        setProduct(pro);
      });
    });

    // const filterItem = (catagory) =>{
    //   const updateFilters = product.filter((elem)=>{
    //     return elem.productName === catagory;
    //   })
    //   setProduct(updateFilters);
    //   }
  }, []);

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
            <div className="each-filter">
              <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                  <Accordion.Header>Product type</Accordion.Header>
                  <Accordion.Body>
                    <ul>
                      {product.map((filter) => {
                        return <li>{filter.productName}</li>;
                      })}
                    </ul>
                  </Accordion.Body>
                </Accordion.Item>
              </Accordion>
            </div>
          </Col>
          <Col md={9}>
            <Row>
              {product.map((val) => {
                return (
                  <Col md={4} key={val.id}>
                    <Card className="p-3 each-pro">
                      <Row>
                        <Col md={9}>
                          <h4>{val.productName}</h4>
                          
                          <p>{val.productPrice}</p>
                        </Col>
                       
                        <Col md={3} className="ps-0">
                          <Selfcount />
                        </Col>
                      </Row>
                    </Card>
                  </Col>
                );
              })}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Home;
