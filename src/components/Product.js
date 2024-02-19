import React, { useContext, useEffect } from "react";
import Button from "react-bootstrap/Button";
import ListGroup from "react-bootstrap/ListGroup";
import { CartContext } from "../store/CartContext";
import { ProductContext } from "../store/ProductContext";
import { BaseUrl } from "../store/UrlContentProvider";
const Product = (props) => {
  const baserul=useContext(BaseUrl)
  const baseurl=useContext(BaseUrl)
  const cartCtx = useContext(CartContext);
  const productCtx = useContext(ProductContext);
  const { name, description, price, large, medium, small, _id } = props.product;
  useEffect(()=>{
    const deleteItem=async()=>{
      await fetch(`${baserul.url}/products/${_id}`,{
      method:'DELETE',
      headers:{
        'Content-Type':'application/json'
      }
    })}
    if(large===0 && medium===0 && small===0){
      console.log('inside if',large,small, medium)
      deleteItem()
    }
  },[large,medium,small])
  const addToCart = async (size) => {
    let product;
    if (size === "large") {
      product = { name, description, price, large: 1, medium: 0, small: 0 };
      productCtx.updateProduct(_id, "large");
    } else if (size === "medium") {
      product = { name, description, price, large: 0, medium: 1, small: 0 };
      productCtx.updateProduct(_id, "medium");
    } else {
      product = { name, description, price, large: 0, medium: 0, small: 1 };
      productCtx.updateProduct(_id, "small");
    }
    console.log('cartitems',cartCtx.items)
    let  findElement=cartCtx.items.find((item)=>{
      console.log('item',item)
      console.log("itemname and name",item.name,name)
      return item.name===name
    })
    let url=`${baseurl.url}/cart`
    let method='POST'
    let body={...product}
    console.log('before findElement',findElement)
    if(findElement!==undefined){
      console.log('after findElement',findElement)
      url=`${baseurl.url}/cart/${findElement._id}`
      method='PUT'
      const updateName=findElement.name
      const updateDescription=findElement.description
      const updatePrice=findElement.price
      const updateLarge=findElement.large
      const updateMedium=findElement.medium
      const updateSmall=findElement.small
      if(size==='large'){
        body={name:updateName,description:updateDescription,price:updatePrice,large:findElement.large+1,medium:updateMedium,small:updateSmall}
        cartCtx.addItem({...findElement,large:findElement.large+1})
      }else if(size==='medium'){
        body={name:updateName,description:updateDescription,price:updatePrice,large:updateLarge,medium:updateMedium+1,small:updateSmall}
        cartCtx.addItem({...findElement,medium:findElement.medium+1})
      }else{
        body={name:updateName,description:updateDescription,price:updatePrice,large:updateLarge,medium:updateMedium,small:updateSmall+1}
        cartCtx.addItem({...findElement,small:findElement.small+1})

      }
    }
    const res = await fetch(
      `${url}`,
      {
        method: `${method}`,
        body: JSON.stringify(body),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    if(!findElement){
      const data = await res.json();
      cartCtx.addItem({ ...product, _id: data._id });
    }
  };
  return (
    <ListGroup as="ol"  className="mt-4">
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start"
      >
        <div className="ms-2 me-auto">
          <div className="fw-bold">{name}</div>
          {description}
        </div>
        <div className="me-2 fw-bold">$ {price}</div>
        {large>0 && <Button onClick={addToCart.bind(null, "large")} variant="secondary" className="me-2">
          {large} Large
        </Button>}
       {medium > 0 && <Button onClick={addToCart.bind(null, "medium")} variant="secondary" className="me-2">
          {medium} Medium
        </Button>}
       {small > 0 && <Button onClick={addToCart.bind(null, "small")} variant="secondary" className="me-2">
          {small} Small
        </Button>}
      </ListGroup.Item>
    </ListGroup>
  );
};

export default Product;
