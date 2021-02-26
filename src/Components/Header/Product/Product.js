import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
//import shop from '../shop/shop'
import './product.css'

const Product = (props) => {
    console.log(props.product)
    const {name,img,seller,price,stock} = props.product
    return (
        <div className='product'>
            <div>
           <img src={img} />
            </div>
            <div>
            <h3>{name}</h3>
            <br/>
            <p><small>by:{seller}</small></p> 
            <br/>
            <p><small>$ price{price}</small></p> 
            <br/>
            <p> <small>stock: only {stock} ramaining order soon</small> </p>
            <button class="btnAdd"><FontAwesomeIcon icon={faShoppingCart}/>Add to cart</button>
            
           </div>
            
       
        </div>
    )
}
export default Product