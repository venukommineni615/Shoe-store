import React, { useContext, useEffect } from 'react'
import {ProductContext} from '../store/ProductContext'
import { Container } from 'react-bootstrap'
import Product from './Product'
import { BaseUrl } from '../store/UrlContentProvider'

const ProductList = () => {
  const baseurl=useContext(BaseUrl)
    const productCtx=useContext(ProductContext)
    useEffect(()=>{
            fetchData() 
            },[])
    const fetchData=async()=>{
        const res = await fetch(
            `${baseurl.url}/products`,
            {
              method: "GET"
            }
          );
          const data=await res.json()
          for (let i in data){
            productCtx.addProduct(data[i])
          }
    }
  return (
    <Container className='mt-4'>
        {productCtx.products.map((product)=>{
            return <Product key={product._id} product={product}></Product>
        })}
    </Container>
  )
}

export default ProductList