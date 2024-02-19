import React, { useContext, useState } from 'react'
import {ProductContext} from './ProductContext'
import { fetchUpdate } from './fetchUpdate'
import { BaseUrl } from './UrlContentProvider'

const ProductProvider = (props) => {
    const baseurl=useContext(BaseUrl)
    const [products,setProducts]=useState([])
    const addProduct=(product)=>{
        setProducts((prev)=>{
            const index=prev.findIndex((item)=>{
                
                return product._id===item._id
            })
            if(index===-1){
                return [...prev,product]
            }else{
                return [...prev]
            }
        })
    }
    const updateProduct=(id,size)=>{
        setProducts((prev)=>{
            const  index=prev.findIndex((product)=>{
                return product._id===id
            })
            const updateProducts=[...prev]
            let productToBeUpdated
            if(size==='large'){
                productToBeUpdated={...updateProducts[index],large:parseInt(updateProducts[index].large)-1}
                const data=  fetchUpdate(`${baseurl.url}/products/${id}`,{...productToBeUpdated})
                
            }else if(size==='medium'){ 
                productToBeUpdated={...updateProducts[index],medium:parseInt(updateProducts[index].medium)-1}
                    const data=  fetchUpdate(`${baseurl.url}/products/${id}`,{...productToBeUpdated})
                }else{
                    productToBeUpdated={...updateProducts[index],small:parseInt(updateProducts[index].small)-1}
                    const data=  fetchUpdate(`${baseurl.url}/products/${id}`,{...productToBeUpdated})
            }
            updateProducts[index]=productToBeUpdated
            const {large,medium,small}=productToBeUpdated
            let remainingProducts=[...updateProducts]
            if(small===0 && medium===0 && large ===0){
                  remainingProducts=prev.filter((product)=>{
                    return product.id!==id
                })
            }
            return [...remainingProducts]
        })
    }

  return (
    <ProductContext.Provider value={{products: products,
        addProduct: addProduct,
        updateProduct: updateProduct}}>{props.children}</ProductContext.Provider>
  )
}

export default ProductProvider