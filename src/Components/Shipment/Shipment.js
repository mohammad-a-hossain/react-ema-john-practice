import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../App";
 const Shipment = () => {
    const { register, errors, handleSubmit } = useForm();
         const onSubmit=data => console.log(data)
         const [userLoggedIn,setUserLoggedIn] =useContext(UserContext)
    return (
        <div>
            <h1>Shipment pager </h1>
            <form onSubmit={handleSubmit(onSubmit)} style={{marginLeft:'400px'}}>
                <input type='text' defaultValue={userLoggedIn.name} name="name" ref={register({ required: true })}  style={{marginBottom:'10px'}}/>
                {errors.name && <span className="error"> name is required</span>}<br></br>
                <input type='email' defaultValue={userLoggedIn.email} name="email" ref={register({ required: true })} style={{marginBottom:'10px'}}/>
                {errors.name && <span className="error"> name is required</span>}<br></br>
                <input type="date" name="birthdate" ref={register({ required: true })} style={{marginBottom:'10px'}}/>
                {errors.name && <span>" name is required"</span>}<br></br>
                <input type='password' name="password" ref={register({ required: true })} style={{marginBottom:'10px'}}/>
                {errors.name && <span>" name is required"</span>}<br></br>

                <input type="submit" />
            </form>
        </div>
    )
}
export default Shipment