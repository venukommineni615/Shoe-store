import React, { useReducer } from 'react'
import {CartContext} from './CartContext'

const cartFun=(state,action)=>{
    switch (action.type){
        case 'ADD':
            console.log("inside adddddd",action.item)
            const elementIndex=state.items.findIndex((item)=>{
                return item._id===action.item._id
            })
            console.log('before if block',elementIndex)
            if(elementIndex===-1){
                console.log('state items',state.items)
                return {items:[...state.items,action.item],
                    totalQuantity:parseInt(state.totalQuantity)+parseInt(action.item.large)+parseInt(action.item.medium)+parseInt(action.item.small),
                     totalPrice:state.totalPrice+action.item.price}
            }else{
                const existedItems=[...state.items]
                existedItems[elementIndex]=action.item
                console.log('existing items',existedItems)
              
                return {items:[existedItems],totalQuantity:state.totalQuantity+1,totalPrice:state.totalPrice+parseInt(action.item.price)}
            }
        default:
            return {state}
    }
}

const CartProvider = (props) => {
    const [cart,dispatchCart]=useReducer(cartFun,{items:[],
        totalQuantity:0,
        totalPrice:0})
        console.log('cart',cart)
        const addItem=(item)=>{
            console.log("inside add item",item)
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