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
    <Modal.Header closeButton>
      <Modal.Title id="contained-modal-title-vcenter">
        Modal heading
      </Modal.Title>
    </Modal.Header>
    <Modal.Body >
      {console.log('cart items',cartCtx.items)}
      {cartCtx.items.map((item)=>{
        console.log('item',item)
        console.log('item id',item._id)
        return <Cart key={item._id} item={item}></Cart>
      })}
    </Modal.Body>
    <Modal.Footer>
      <Button onClick={props.onHide} variant='light' className='border border-2 border-secondary'>Close</Button>
      <Button onClick={props.onHide} variant='secondary' className='border border-2 border-secondary'>order</Button>
    </Modal.Footer>
  </Modal>
  )
}

export default CartList