import { useSelector, useDispatch } from "react-redux";
import React, {useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faShoppingCart,
    faTrash,
    faShop
  } from "@fortawesome/free-solid-svg-icons";
import { addToCart } from "../actions/action";
import { removeToCart } from "../actions/action";
import { selfAdd } from "../actions/action";
import { selfRemove } from "../actions/action";


import { Container, Row, Col, Card, Button, Accordion } from "react-bootstrap";
function Selfcount() {
    const [ini, setIni] = useState(0);
    const dispatch = useDispatch();
    const counter = useSelector((state) => state.counterReducer);
    const selfcounter = useSelector((state) => state.selfCountReducer);

    const allAddDispatch = () =>{
       
            dispatch(addToCart(counter))
            dispatch(selfAdd(selfcounter))
        
       
    }
    const allRemoveDispatch = () =>{
       
            dispatch(removeToCart(counter))
            dispatch(selfRemove(selfcounter))
        
       
    }
  return (
    <>
       <div className="self-count">
                          <Button
                            onClick={allAddDispatch}
                            className="action-btn"
                          >
                            <FontAwesomeIcon icon={faShoppingCart} />
                          </Button>
                          <input type="text" value={selfcounter} />
                          <Button
                           onClick={allRemoveDispatch}
                            className="action-btn"
                          >
                            <FontAwesomeIcon icon={faTrash} />
                          </Button>
                          </div>
    </>
  );
}

export default Selfcount;
