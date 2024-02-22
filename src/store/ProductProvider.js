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
                fetchUpdate(`${baseurl.url}/products/${id}`,{...productToBeUpdated})
                
            }else if(size==='medium'){ 
                productToBeUpdated={...updateProducts[index],medium:parseInt(updateProducts[index].medium)-1}
                   fetchUpdate(`${baseurl.url}/products/${id}`,{...productToBeUpdated})
                }else{
                    productToBeUpdated={...updateProducts[index],small:parseInt(updateProducts[index].small)-1}
                     fetchUpdate(`${baseurl.url}/products/${id}`,{...productToBeUpdated})
            }
            updateProducts[index]=productToBeUpdated
            const {large,medium,small}=productToBeUpdated
            let remainingProducts=[...updateProducts]
            if(small===0 && medium===0 && large ===0){
                console.log('before filter',remainingProducts,updateProducts)
                const deleteItem=async()=>{
                    await fetch(`${baseurl.url}/products/${id}`,{
                    method:'DELETE',
                    headers:{
                      'Content-Type':'application/json'
                    }
                  })}
                  deleteItem()
                remainingProducts=updateProducts.filter((product)=>{
                    return product._id!==id
                })
                console.log('after filter',remainingProducts)
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