import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
//import fakeData from '../../fakeData'
import Product from '../Header/Product/Product'

const ProductDetail = () => {
    let {productKey} =useParams()
    const [product,serProduct]= useState({})
    //const productItem =fakeData.find(pd => pd.key === productKey)
    //console.log(productItem)
    useEffect(() => {
        fetch('http://localhost:4000/product/'+productKey)
        .then(res => res.json())
        .then(data =>serProduct(data))
    }, [productKey])
    return (
        <div>
            <h1>product detail  page </h1>
           <Product product={product} showAddToCart={false}>  </Product>
        </div>
    )
}
export default ProductDetail