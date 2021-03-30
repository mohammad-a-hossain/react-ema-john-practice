 import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../App";
import { getDatabaseCart, processOrder } from "../../utilities/databaseManager";


 const Shipment = () => {
    const { register, handleSubmit, watch, errors } = useForm();
    const [userLoggedIn,setUserLoggedIn] =useContext(UserContext)

    const onSubmit=data =>{
        const saveCart =getDatabaseCart();
        const orderDetails = {...userLoggedIn,products:saveCart, shipment:data, orderTime:new Date()}
        fetch('https://secret-waters-26306.herokuapp.com/addOrder',{
           method:'POST',
           headers:{'Content-Type':'application/json'},
           body:JSON.stringify(orderDetails)
       })
        .then(res =>res.json())
        .then(data =>{
            if(data){
                processOrder()
                alert('order has placed');
            }
        })
      }
  
  
        
      /*    fetch('http://localhost:4000/addOrder',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(orderDetails)
        }) */


        
       
    


         
    return (
        <div>
            <h1>Shipment page </h1>
            <form onSubmit={handleSubmit(onSubmit)} style={{marginLeft:'400px'}}>
                <input type='text' defaultValue={userLoggedIn.name} name="name" ref={register({ required: true })}  style={{marginBottom:'10px'}}/>
                {errors.name && <span className="error"> name is required</span>}<br></br>
                <input type='email' defaultValue={userLoggedIn.email} name="email" ref={register({ required: true })} style={{marginBottom:'10px'}}/>
                {errors.name && <span className="error"> name is required</span>}<br></br>
                <input type="date" name="birthdate" ref={register({ required: true })} style={{marginBottom:'10px'}}/>
                {errors.name && <span>" name is required"</span>}<br></br>
                <input type='text' name="phon no" ref={register({ required: true })} style={{marginBottom:'10px'}}/>
                {errors.name && <span>" phon is required"</span>}<br></br>

                <input type="submit" />
            </form>
        </div>
    )
}
export default Shipment 

  
/* eslint-disable no-unused-vars */
/* import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { UserContext } from '../../App';
import { getDatabaseCart, processOrder } from '../../utilities/databaseManager';
//import './Shipment.css';

const Shipment = () => {
  const { register, handleSubmit, watch, errors } = useForm();
  const [loggedInUser, setLoggedInUser] = useContext(UserContext);

  const onSubmit = data =>{ 
      const savedCart = getDatabaseCart();
      const orderDetails = {...loggedInUser, products:savedCart, shipment: data, orderTime: new Date()};
      
      fetch('https://fathomless-ocean-19937.herokuapp.com/addOrder', {
        method: 'POST',
        headers: {'Content-Type' : 'application/json'},
        body: JSON.stringify(orderDetails)
      })
      .then(res => res.json())
      .then(data => {
        if(data){
          processOrder();
          alert('Your order placed successfully.');
        }
      })
    }

  console.log(watch("example")); 

  return (
    <form  onSubmit={handleSubmit(onSubmit)}>
      <input name="name" defaultValue={loggedInUser.name} ref={register({ required: true })} placeholder='Your Name'/>
      {errors.name && <span className='error'>Name is required</span>}
      
      <input name="email" defaultValue={loggedInUser.email} ref={register({ required: true })} placeholder='Your Email'/>
      {errors.email && <span className='error'>Email is required</span>}
      
      <input name="address" ref={register({ required: true })} placeholder='Your Address'/>
      {errors.address && <span className='error'>Address is required</span>}
      
      <input name="phone" ref={register({ required: true })} placeholder='Your Phone Number'/>
      {errors.phone && <span className='error'>Phone Number is required</span>}

      <input type="submit" />
    </form>
  );
}

export default Shipment; */