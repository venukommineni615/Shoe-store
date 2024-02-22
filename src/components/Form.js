import React, { useContext, useRef } from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Button from "react-bootstrap/Button";
import {ProductContext} from "../store/ProductContext"; 
import { BaseUrl } from "../store/UrlContentProvider";
const ProductForm = () => {
  const baseurl=useContext(BaseUrl)
  const name = useRef("");
  const description = useRef("");
  const price = useRef("");
  const large = useRef("");
  const medium = useRef("");
  const small = useRef("");
  const productCtx=useContext(ProductContext)
  const addProduct = async (event) => {
    event.preventDefault();
    const product = {
      name: name.current.value,
      description: description.current.value,
      price: price.current.value,
      large: large.current.value,
      medium: medium.current.value,
      small: small.current.value,
    };
    const res = await fetch(
      `${baseurl.url}/products`,
      {
        method: "POST",
        body: JSON.stringify(product),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data=await res.json()
    const _id=data._id
    productCtx.addProduct({...product,_id})
    name.current.value=''
    description.current.value=''
    price.current.value=''
    large.current.value=''
    medium.current.value=''
    small.current.value=''

  };
  return (
    <Form className="bg-secondary p-4" onSubmit={addProduct}>
      <Row className="my-2">
        <Col >
          <Form.Control ref={name} type="text" placeholder="Shoe name" />
        </Col>
        <Col xs="auto" md={7}>
          <Form.Control ref={description} type="text" placeholder="Description" />
        </Col>
        <Col xs="auto">
          <Form.Control ref={price} type="number" placeholder="price" />
        </Col>
      </Row>
      <Row className="my-2">
        <Col>
          <Form.Control ref={large} type="number" placeholder="Large"  min={1}/>
        </Col>
        <Col>
          <Form.Control ref={medium} type="number" placeholder="Medium"  min={1}/>
        </Col>
        <Col>
          <Form.Control ref={small} type="number" placeholder="Small" min={1}/>
        </Col>
      </Row>
      <Button
        type="submit"
        variant="secondary"
        className="border border-2 border-white"
      >
        Add Product
      </Button>
    </Form>
  );
};

export default ProductForm;
