import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../App";
import { getDatabaseCart, processOrder } from "../../utilities/databaseManager";


 const Shipment = () => {
    const { register, errors,watch, handleSubmit } = useForm();
    const [userLoggedIn,setUserLoggedIn] =useContext(UserContext)
         const onSubmit=data =>{
             const saveCart =getDatabaseCart();
             const orderDetails = {...userLoggedIn,products:saveCart, shipment:data, orderTime:new Date()}
         
         fetch('http://localhost:4000/addOrder',{
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