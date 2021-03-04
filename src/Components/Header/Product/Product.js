import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './product.css'
import {Link} from 'react-router-dom'

export const Product = (props) => {
    //console.log(props)
    const {img,name,seller,price,stock,key} = props.product
      //console.log(props.product.key)
    return (
        <div className='product-container'>
           {/*  <h3>{props.product.name}</h3> */}
           <div>
               <img src={img} />
           </div>
           <div className='detailProduct'>
               <h4 className='product-name'><Link to={"/product/"+key} >{name}</Link> </h4> 
               <br/>
               <h4>Seller by:-{seller}</h4>
               
               <h4>Product Price{price}</h4>
               
               <h4>Stock remaining :{stock}</h4>

              { props.showAddToCart && <button onClick={()=>props.handleAddProduct(props.product)} className="btnAdd" ><FontAwesomeIcon icon={faShoppingCart}/>Add-Product</button>}
               
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