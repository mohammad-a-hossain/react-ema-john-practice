import React, { useEffect } from 'react'
import './shop.css'
//import fakeData from '../../../fakeData'
import {useState} from 'react'
import Product from '../Product/Product'
import { addToDatabaseCart, getDatabaseCart } from '../../../utilities/databaseManager'
import Cart from '../../cart/Cart';
import { Link } from 'react-router-dom';

export const Shop = () => {
    
    //onsole.log(fakeData)
    //const data10 = fakeData.slice(0,15)
   //console.log(data10)
   const [products,setProduct]= useState([])
   const [cart,setCart] = useState([])
     //console.log(cart)

    useEffect(()=>{
          fetch('products')
          .then(res =>res.json())
          .then(data => setProduct(data))
    },[])
      
     useEffect(()=>{
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
      /*   if(products.length > 0){
            const previousCart = productKeys.map( existingKey => {
                const product = products.find( pd => pd.key === existingKey);
               // console.log(product.quantity)
                product.quantity = savedCart[existingKey];
                return product;
            } )
            setCart(previousCart);
        }
     */
        fetch('https://secret-waters-26306.herokuapp.com/productsByKeys',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(productKeys)
        })
        .then(res =>res.json())
        .then(data =>setCart(data))
    }, [])

/* ---------------/////*******************----------
----------------------- */ 
const handleAddProduct = (product) =>{
    const toBeAddedKey = product.key;
    const sameProduct = cart.find(pd => pd.key === toBeAddedKey);
    let count = 1;
    let newCart;
    if(sameProduct){
        count = sameProduct.quantity + 1;
        sameProduct.quantity = count;
        const others = cart.filter(pd => pd.key !== toBeAddedKey);
        newCart = [...others, sameProduct];
    }
    else{
        product.quantity = 1;
        newCart = [...cart, product];
    }
    setCart(newCart);
    addToDatabaseCart(product.key, count);
}
/* 
 
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
    const grandTotal= Math.round(total+tax+shipping) */
    return (
        <div className='container'>
            <div className='shop-body'>
         
          {
              products.map(pdo => 
                
              <Product product={pdo}
              key={pdo.key}
              handleAddProduct ={handleAddProduct}
              showAddToCart={true}
             />
            )
          }
           
            </div>
            <div className="cart-container">
               <Cart cart={cart}>
                    <Link to="/review">
                        <button className="main-button">Review Order</button>
                    </Link>
               </Cart>
            </div>
        {/*     <div className='cart-body'>
                <h1>Your Cart Details</h1>
                <p>Item Total: {cart.length}</p>
                <p>product Price: {total}</p>
                 <p>tax and Vat: {tax}</p>
                 <p>shipping: {shipping}</p>
                 <p><u>grand total: {grandTotal}</u> </p>
                 <button className="btnAdd">Review product</button>
            </div>
           */}
        </div>
    )
}

export default Shop


/*Skip to content
Search or jump to…

Pull requests
Issues
Marketplace
Explore
 
@mohammad-a-hossain 
ProgrammingHero1
/
ema-john-simple
2
93
Code
Issues
Pull requests
Actions
Projects
Wiki
Security
Insights
ema-john-simple/src/components/Shop/Shop.js /

khanmd50 node mongo react half done
Latest commit acc714a on Mar 22, 2020
 History
 1 contributor
77 lines (70 sloc)  2.38 KB
  
import React, { useEffect } from 'react';
import { useState } from 'react';
import './Shop.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDatabaseCart, getDatabaseCart } from '../../utilities/databaseManager';
import { Link } from 'react-router-dom';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:4200/products')
        .then(res => res.json())
        .then(data => {
            setProducts(data);
        })
    }, [])
    
    useEffect(()=>{
        const savedCart = getDatabaseCart();
        const productKeys = Object.keys(savedCart);
        if(products.length > 0){
            const previousCart = productKeys.map( existingKey => {
                const product = products.find( pd => pd.key === existingKey);
                product.quantity = savedCart[existingKey];
                return product;
            } )
            setCart(previousCart);
        }
    }, [products])

    const handleAddProduct = (product) =>{
        const toBeAddedKey = product.key;
        const sameProduct = cart.find(pd => pd.key === toBeAddedKey);
        let count = 1;
        let newCart;
        if(sameProduct){
            count = sameProduct.quantity + 1;
            sameProduct.quantity = count;
            const others = cart.filter(pd => pd.key !== toBeAddedKey);
            newCart = [...others, sameProduct];
        }
        else{
            product.quantity = 1;
            newCart = [...cart, product];
        }
        setCart(newCart);
        addToDatabaseCart(product.key, count);
    }

    return (
        <div className="twin-container">
            <div className="product-container">
                {
                    products.map(pd => <Product 
                        key={pd.key}
                        showAddToCart={true}
                        handleAddProduct = {handleAddProduct}
                        product={pd}
                        ></Product>)
                }
            </div>
            <div className="cart-container">
               <Cart cart={cart}>
                    <Link to="/review">
                        <button className="main-button">Review Order</button>
                    </Link>
               </Cart>
            </div>
            
        </div>
    );
};

export default Shop;
© 2021 GitHub, Inc.
Terms
Privacy
Security
Status
Docs
Contact GitHub
Pricing
API
Training
Blog
About

 */