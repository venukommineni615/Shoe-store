import "./App.css";
import ProductForm from "./components/Form";
import Header from "./components/Navbar";
import ProductList from "./components/ProductList";
import CartProvider from "./store/CartProvider";
import ProductProvider from "./store/ProductProvider";
import CartList from "./components/CartList";
import {  useEffect, useState } from "react";

function App() {
 
  const [showCart,setShowCart]=useState(false)
  // useEffect(()=>{
  //   const fetchDel=async()=>{
  //     await fetch(`https://crudcrud.com/api/bad8781b12804ade9b2c252071ed722a/cart/65ce50a26227a803e824ca3f`,{method:'DELETE',
  //   headers:{
  //     'Content-Type':'application/json'
  //   }})
  //   }
  //   fetchDel()
  // },[])
 
  return (
    <ProductProvider>
      <CartProvider>
        <Header showCart={setShowCart}></Header>
        <ProductForm></ProductForm>
        <ProductList></ProductList>
      <CartList
         show={showCart}
         onHide={() => setShowCart(false)}></CartList>
      </CartProvider>
    </ProductProvider>
  );
}

export default App;
