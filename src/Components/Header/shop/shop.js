import React from 'react'
import {useState} from 'react'
import fakeData from '../../../fakeData'
import Product from '../Product/Product'
import './shop.css'


 const Shop = () => {

 //console.log(fakeData)
  const first10 = fakeData.slice(0,10)
 const [products, setproduct] = useState(first10)

    

    return (
        <div className='shop-container'>
            <div className='upper'>
        
               {
                    products.map(prod =><Product product={prod}></Product> )
               }
                
         
          
            
            
           
            </div>
            <div className='lower'>
                
          <h2>thid is cart page</h2>
            </div>
           
        </div>
    )
}
export default Shop
