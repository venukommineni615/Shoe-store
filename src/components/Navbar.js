import React, { useContext, useEffect } from 'react'
import Button from 'react-bootstrap/esm/Button'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { CartContext } from '../store/CartContext';
import { useFetch } from "../custom-hooks/useFetch";
import { BaseUrl } from '../store/UrlContentProvider';
const Header = (props) => {
  const baseurl=useContext(BaseUrl)
  const cartCtx=useContext(CartContext)
  const {data}=useFetch(`${baseurl.url}/cart`)
 useEffect(()=>{
  data.forEach((item)=>{
    const index=cartCtx.items.find((product)=>{
      return product._id=item._id
    })
    if(!index){
      console.log('item in navbar com',item)
      cartCtx.addItem(item)
    }
  })

 },[data])
  const showCart=()=>{
  
    props.showCart((prev)=>{
      return !prev
    })
  }
  return (
    <Navbar className=" bg-dark">
    <Container>
      <Navbar.Brand href="#home" className='text-white fw-bolder fs-3'>Shoe Mart</Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse className="justify-content-end">
        <Button variant='secondary' onClick={showCart}>cart {cartCtx.totalQuantity}</Button>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header