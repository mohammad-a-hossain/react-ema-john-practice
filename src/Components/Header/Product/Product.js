import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './product.css'

export const Product = (props) => {
    const {img,name,seller,price,stock} = props.product
    return (
        <div className='product-container'>
           {/*  <h3>{props.product.name}</h3> */}
           <div>
               <img src={img} />
           </div>
           <div className='detailProduct'>
               <h4>{name}</h4> 
               <br/>
               <h4>Seller by:-{seller}</h4>
               
               <h4>Product Price{price}</h4>
               
               <h4>Stock remaining :{stock}</h4>
               <button onClick={()=>props.handleAddProduct(props.product)} className="btnAdd" ><FontAwesomeIcon icon={faShoppingCart}/>Add-Product</button>
               
           </div>
           <div>
               <p>favorate icon</p>
           </div>
        </div>
    )
}
export default Product

/* import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
//import shop from '../shop/shop'
import './product.css'

const Product = (props) => {
    //console.log(props.product)
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
            <button onClick={()=>props.handleAddProduct(props.product)} class="btnAdd"><FontAwesomeIcon icon={faShoppingCart}/>Add to cart</button>
            
           </div>
            
       
        </div>
    )
}
export default Product */