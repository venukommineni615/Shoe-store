import React from 'react'
import Button from 'react-bootstrap/Button';
import ListGroup from 'react-bootstrap/ListGroup';
const Products = () => {
  return (
    <ListGroup as="ol" numbered>
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">Name</div>
          Description
        </div>
        <Button bg="primary" pill>
          14
        </Button>
        <Button bg="primary" pill>
          14
        </Button>
        <Button bg="primary" pill>
          14
        </Button>
      </ListGroup.Item>
    </ListGroup>
 
  )
}

export default Products