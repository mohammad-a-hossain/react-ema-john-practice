import React from 'react'
import { useParams } from 'react-router-dom'
import fakeData from '../../fakeData'
import Product from '../Header/Product/Product'

const ProductDetail = () => {
    let {productKey} =useParams()
    const productItem =fakeData.find(pd => pd.key === productKey)
    //console.log(productItem)
    return (
        <div>
            <h1>product detail  page </h1>
           <Product product={productItem} showAddToCart={false}>  </Product>
        </div>
    )
}
export default ProductDetail