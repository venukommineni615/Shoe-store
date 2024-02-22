import React from "react";
import { Col } from "react-bootstrap";
// import { Container, Row } from 'react-bootstrap';

import ListGroup from "react-bootstrap/ListGroup";

const Cart = (props) => {
  const { name, description, price, large, medium, small, _id } = props.item;
  return (
    <>
    <ListGroup horizontal={"md"} className="my-2 text-dark ">
      <Col>
        <ListGroup.Item className="border-0 fw-semibold">{name}</ListGroup.Item>
      </Col>
      <Col>
        <ListGroup.Item className="border-0">{description}</ListGroup.Item>
      </Col>

      <Col>
        {large > 0 && (
          <ListGroup.Item className="border-0 ">
            {large} Large
          </ListGroup.Item>
        )}
      </Col>
      <Col>
        {medium > 0 && (
          <ListGroup.Item className=" border-0 ">
            {medium} Medium
          </ListGroup.Item>
        )}
      </Col>
      <Col>
        {small > 0 && (
          <ListGroup.Item className=" border-0 ">
            {small} Small
          </ListGroup.Item>
        )}
      </Col>
      <Col>
        <ListGroup.Item className="fw-bold border-0">
          $ {(large + medium + small) * price}{" "}
        </ListGroup.Item>
      </Col>
    </ListGroup>
    <hr/>
        </>
  );
};

export default Cart;
