import React from 'react'
import { Container } from 'react-bootstrap';
import Col from 'react-bootstrap/Col'
import ListGroup from 'react-bootstrap/ListGroup';

const Cart = (props) => {
  const {name,description,price,large,medium,small,_id}=props.item
  return (
    <ListGroup  horizontal={'md'} className="my-2 text-dark">
      <Container md={5}>
        <Col md={2}>
          <ListGroup.Item>{name}</ListGroup.Item>
        </Col>
          <ListGroup.Item>{description}</ListGroup.Item>

      </Container>
      <Container md={4}>'

          {large > 0 && <ListGroup.Item className='bg-secondary text-white'>{large} Large</ListGroup.Item>}
          {medium >0 && <ListGroup.Item className='bg-secondary text-white'>{medium} Medium</ListGroup.Item>}
          {small > 0 && <ListGroup.Item className='bg-secondary text-white'>{small} Small</ListGroup.Item>}
      </Container>
          <ListGroup.Item className='fw-bold'>$ {(large + medium + small)*price} </ListGroup.Item>
    </ListGroup>
  )
}

export default Cart