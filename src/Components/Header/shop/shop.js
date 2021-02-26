import React from 'react'
import {useState} from 'react'
import fakeData from '../../../fakeData'
import Product from '../Product/Product'
import './shop.css'


 const Shop = () => {

 //console.log(fakeData)
  const first10 = fakeData.slice(0,10)
 const [products, setproduct] = useState(first10)
 const [cart,setCart]=useState([])


 const handleAddProduct=(product)=>{
     console.log('added', product)
     const newCart =[...cart, product]
     setCart(newCart)
 }
 const total = cart.reduce((total,prod)=> total + prod.price,0)
    console.log(total)

    let shipping;
    if(total == 0){
      shipping =0
    }else if(total >15){
       shipping=12.99
    }
    let tax = Math.round(total /10)

    let gTotal= Math.round(total + tax +shipping)
        return (
        <div className='shop-container'>
            <div className='upper'>
        
               {
                    products.map(prod =>
                    <Product 
                    handleAddProduct ={handleAddProduct}
                    product={prod} >
                    </Product> )
               }
                
            </div>
            <div className='lower'>
                
          <h2> <u>This is cart page</u>
              </h2>
           <h5>your Item order: {cart.length}</h5>
           <h5>Product Price:{total} </h5>
            <h5>Shopping Cost:{shipping} </h5>
            <h5>Tax + vat: {tax}</h5>
            <h5>total Price:{total}</h5>
            <hr/>
            <h4>Grand Total: {gTotal}</h4>
            </div>
           
        </div>
    )
}
export default Shop
