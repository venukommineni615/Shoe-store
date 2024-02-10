import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

const Header = () => {
  return (
    <Navbar className=" bg-dark">
    <Container>
      <Navbar.Brand href="#home" className='text-white fw-bolder fs-3'>Shoe Mart</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Button variant='secondary'>cart</Button>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header