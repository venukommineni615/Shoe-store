import React, { useReducer } from 'react'
import {CartContext} from './CartContext'

const cartFun=(state,action)=>{
    switch (action.type){
        case 'ADD':
            const elementIndex=state.items.findIndex((item)=>{
                return item._id===action.item._id
            })
            if(elementIndex===-1){
                const itemQuantity=parseInt(action.item.large)+parseInt(action.item.medium)+parseInt(action.item.small)
                return {items:[...state.items,action.item],
                    totalQuantity:parseInt(state.totalQuantity)+itemQuantity,
                     totalPrice:state.totalPrice+parseInt(action.item.price)*itemQuantity}
            }else{
                console.log('else')
                const existedItems=[...state.items]
                existedItems[elementIndex]=action.item
              
                return {items:[...existedItems],totalQuantity:state.totalQuantity+1,totalPrice:state.totalPrice+parseInt(action.item.price)}
            }
        default:
            return {state}
    }
}

const CartProvider = (props) => {
    const [cart,dispatchCart]=useReducer(cartFun,{items:[],
        totalQuantity:0,
        totalPrice:0})
        const addItem=(item)=>{
            dispatchCart({type:'ADD',item:item})
        }
  return (
    <CartContext.Provider value={{
        items:cart.items,
        totalQuantity:cart.totalQuantity,
        totalPrice:cart.totalPrice,
        addItem:addItem,
        removeItem:(id)=>{
    
        }
    }}>{props.children}</CartContext.Provider>
  )
}

export default CartProvider