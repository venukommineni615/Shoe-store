import React, { useContext } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Cart from './Cart'
import { CartContext } from '../store/CartContext';
const CartList = (props) => {
    const cartCtx=useContext(CartContext)
  return (
    <Modal
    {...props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered
    scrollable
  >
    <Modal.Header closeButton className='border-0'>
      <Modal.Title id="contained-modal-title-vcenter">
        Cart
      </Modal.Title>
    </Modal.Header>
    <Modal.Body  >
      {cartCtx.items.map((item)=>{
        console.log('cart items',cartCtx.items)
        console.log('individual item',item)
        return <Cart key={item._id} item={item}></Cart>
      })}
    </Modal.Body>
    <Modal.Footer className='d-block border-0'>
      <div className='d-flex justify-content-between'>
        <p className='fw-bold'>Total Price</p>
        <p className='fw-bold '>$ {cartCtx.totalPrice}</p>
      </div>
      <div className='d-flex justify-content-end'>
        <Button onClick={props.onHide} variant='light' className='border border-2 border-secondary'>Close</Button>
        <Button onClick={props.onHide} variant='secondary' className='ms-2 border border-2 border-secondary'>order</Button>
      </div>
    </Modal.Footer>
  </Modal>
  )
}

export default CartList