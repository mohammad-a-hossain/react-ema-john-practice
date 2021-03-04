
import React, { useEffect, useState } from 'react'
import fakeData from '../../../fakeData'
import { getDatabaseCart } from '../../../utilities/databaseManager'
import ReviewDetails from '../../reviewDetails/ReviewDetails'

 const Review = () => {
        const [cart,setCart] = useState([])
    useEffect(()=>{
       //console.log('rebiew')
        const saveCart = getDatabaseCart();
       console.log(saveCart)
       const getKeys =Object.keys(saveCart)
       console.log(getKeys)
     
       const cartItems =getKeys.map(ke => {
             const eachProduct = fakeData.find(prd => prd.key === ke)
                   eachProduct.quantity= saveCart[ke]
               return eachProduct        //console.log(eachProduct)
       })
       //console.log(cartItems)
       setCart(cartItems)
      

    },[])
    return (
        <div>
            <h1>Total product is {cart.length}</h1>
               {cart.map(pro => <ReviewDetails product={pro}></ReviewDetails>)}
        </div>
    )
}
export default Review