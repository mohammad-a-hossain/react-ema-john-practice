
import React, { useEffect, useState } from 'react'
import fakeData from '../../../fakeData'
import { getDatabaseCart, processOrder, removeFromDatabaseCart} from '../../../utilities/databaseManager'
import Cart from '../../cart/Cart'
import ReviewDetails from '../../reviewDetails/ReviewDetails'
import happyImage from '../../../images/giphy.gif'
import { useHistory } from 'react-router'

 const Review = () => {
        const [cart,setCart] = useState([])
        const [orderPlace,setOrderPlace] = useState(false)
        const history =useHistory()

        const handleCheckOut =()=>{
            history.push('/Shipment')
        }
        const removeProductItem=(product)=>{
            // console.log('removed',product)
            const newCart =cart.filter(item => item.key !== product)
          setCart(newCart)
          removeFromDatabaseCart(product)
       }
    
    useEffect(()=>{
       //console.log('rebiew')
        const saveCart = getDatabaseCart();
       //console.log(saveCart)
       const getKeys =Object.keys(saveCart)
       //console.log(getKeys)
     
       const cartItems =getKeys.map(ke => {
             const eachProduct = fakeData.find(prd => prd.key === ke)
                   eachProduct.quantity= saveCart[ke]
               return eachProduct        //console.log(eachProduct)
       })
       //console.log(cartItems)
       setCart(cartItems)
      
      
    },[])


   const handleOrderPlace=()=>{
       setCart([])
       setOrderPlace(true)
       processOrder()
   }
  let thankYou 
   if(orderPlace){
        thankYou= <img src={happyImage} alt=""/>
   }
    return (
        <div>
            <div>
                
            
            <h1>Total product is {cart.length}</h1>
               {cart.map(pro => <ReviewDetails product={pro} removeProductItem={removeProductItem} key={pro.key} ></ReviewDetails>)
               
               
               }
      </div>
          {
              thankYou
          }
            <div>
                <Cart cart={cart}>
                <button onClick={handleCheckOut} className="main-button">Proceed Checkout</button>
                </Cart>
            </div>
       </div>
         
    

    )
}
export default Review