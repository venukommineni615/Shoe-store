import React from 'react'
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button'
const ProductForm = () => {
  return (
    <Form className='bg-secondary p-4'>
      <Row className='my-2'>
        <Col md={7}>
          <Form.Control type='text' placeholder="City" />
        </Col>
        <Col xs='auto'>
          <Form.Control type='text' placeholder="State" />
        </Col>
        <Col xs='auto'>
          <Form.Control type='number' placeholder="Zip" />
        </Col>
      </Row>
      <Row className='my-2'>
        <Col >
          <Form.Control type='number' placeholder="Large" />
        </Col>
        <Col>
          <Form.Control type='number' placeholder="Medium" />
        </Col>
        <Col>
          <Form.Control type='number' placeholder="Small" />
        </Col>
      </Row>
      <Button variant='secondary' className='border border-2 border-white'>Button</Button>
    </Form>
  )
}

export default ProductForm