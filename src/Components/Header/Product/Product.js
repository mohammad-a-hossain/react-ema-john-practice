import React from 'react'
//import shop from '../shop/shop'

const Product = (props) => {
    console.log(props.product)
    return (
        <div>
            <h1>product</h1>
         <h2>{props.product.name}</h2>
        </div>
    )
}
export default Product