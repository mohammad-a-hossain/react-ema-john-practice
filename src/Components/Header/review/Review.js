 import React, { useEffect, useState } from 'react'
//import fakeData from '../../../fakeData'
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
     /*    const removeProductItem=(product)=>{
            const newCart =cart.filter(item => item.key !== product)
              setCart(newCart)
          removeFromDatabaseCart(product)
       }
    
 */
       const removeProduct = (productKey) =>{
           const newCart = cart.filter(pd => pd.key !== productKey);
           setCart(newCart);
           removeFromDatabaseCart(productKey);
       }
    useEffect(()=>{
      
        const saveCart = getDatabaseCart();
       const  productKeys =Object.keys(saveCart)
     
        fetch('https://secret-waters-26306.herokuapp.com/productsByKeys',{
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(productKeys)
        })
        .then(res =>res.json())
        .then(data =>setCart(data))

    },[])
    /*     const cartItems =productKeys.map(ke => {
             const eachProduct = fakeData.find(prd => prd.key === ke)
                   eachProduct.quantity= saveCart[ke]
               return eachProduct        //console.log(eachProduct)
       }) 
       //console.log(cartItems)
       setCart(cartItems) */
      
  /*  const handleOrderPlace=()=>{
       setCart([])
       setOrderPlace(true)
       processOrder()
   } */

  let thankYou  
    if(orderPlace){
        thankYou= <img src={happyImage} alt=""/>
   } 
    return (
        <div>
            <div>
            <h1>Total product is {cart.length}</h1>
            {
                cart.map(pd =><ReviewDetails 
                    key={pd.key}
                    removeProduct={removeProduct}
                    product={pd}></ReviewDetails>)
            }
             {/*   {
               cart.map(pro => <ReviewDetails product={pro} removeProductItem={removeProductItem} key={pro.key} ></ReviewDetails>)
               
               
               } */}
      </div>
          {
              thankYou
          }
            <div>
                <Cart cart={cart}>
               {/*  <button onClick={handleProceedCheckout} className='main-button'>Proceed Checkout</button> */}
                <button onClick={handleCheckOut} className="main-button">Proceed Checkout</button>
                </Cart>
            </div>
       </div>
    )
}
export default Review  
/* 
import React, { useEffect, useState } from 'react';
import { getDatabaseCart, removeFromDatabaseCart, processOrder } from '../../utilities/databaseManager';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import happyImage from '../../images/giphy.gif';
import { useHistory } from 'react-router';

const Review = () => {
    const [cart, setCart] = useState([]);
    const [orderPlaced, setOrderPlaced] = useState(false);
    const history = useHistory();

    const handleProceedCheckout = () => {
        history.push('/shipment');
       }

    const removeProduct = (productKey) =>{
        const newCart = cart.filter(pd => pd.key !== productKey);
        setCart(newCart);
        removeFromDatabaseCart(productKey);
    }

    useEffect(() => {
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        // const counts = Object.values(savedCart);
        // savedCart[key]

        fetch('https://fathomless-ocean-19937.herokuapp.com/productsByKeys', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(productKeys)
        })
        .then(res => res.json())
        .then(data => setCart(data));

    },[]);

    let thankYou;
    if(orderPlaced){
        thankYou = <img src={happyImage} alt=""/>
    }

    return (
        <div className='twin-container'>
           <div className='product-container'>
            {
                cart.map(pd =>  <ReviewItem 
                    key={pd.key}
                    removeProduct={removeProduct}
                    product={pd}></ReviewItem>)
            }
            {thankYou }
           </div>
           <div className='cart-container'>
                <Cart cart={cart}>
                    <button onClick={handleProceedCheckout} className='main-button'>Proceed Checkout</button>
                </Cart>
           </div>
        </div>
    );
};

export default Review; */