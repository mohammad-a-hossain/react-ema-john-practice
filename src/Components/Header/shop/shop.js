import React from 'react'
import './shop.css'
import fakeData from '../../../fakeData'
import {useState} from 'react'
import Product from '../Product/Product'

export const Shop = () => {
    
    //onsole.log(fakeData)
    const data10 = fakeData.slice(0,15)
   //console.log(data10)
   const [products,setProduct]= useState(data10)
   const [cart,setCart] = useState([])
     //console.log(cart)


   const handleAddProduct=(product)=>{
    //console.log('added', product)
    const newCart =[...cart, product]
    setCart(newCart)
}

    const total= cart.reduce((total,pro)=>total + pro.price,0)
    const tax =Math.round(total /10);
    let shipping;
   
        
    
    if(total > 50){
        shipping=20
    }else if(total > 100){
        shipping = 5
    }else{
        shipping=0
    }
    const grandTotal= Math.round(total+tax+shipping)
    return (
        <div className='container'>
            <div className='shop-body'>
         
          {
              products.map(pdo => 
              <Product product={pdo}
              handleAddProduct ={handleAddProduct}
             />
            )
          }
           
            </div>
            <div className='cart-body'>
                <h1>Your Cart Details</h1>
                <p>Item Total: {cart.length}</p>
                <p>product Price: {total}</p>
                 <p>tax and Vat: {tax}</p>
                 <p>shipping: {shipping}</p>
                 <p><u>grand total: {grandTotal}</u> </p>
            </div>
            
        </div>
    )
}

export default Shop


/* import React from 'react'
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
 */