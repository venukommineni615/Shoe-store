import { createContext } from "react";

export const CartContext=createContext({
    items:[],
    totalQuantity:0,
    totalPrice:0,
    addItem:(item)=>{
    },
    removeItem:(id)=>{

    }
})