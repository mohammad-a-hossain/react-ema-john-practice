import React from 'react'
import Cart from '../cart/Cart'

const ReviewDetails = (props) => {
    console.log(props)
   
    const {name, img, quantity,key,price}  =props.product 

    //const [total,tax,shipping,grandTotal] =props.cart
        const bodyStyle={
           width:'1200px',
           height:'350px',
           border:'1px solid',
           float:'left',
           margin:'10px 10px 10px 20px'
        }
       
        const image={
            width:'296px',
            height:'200px'
        }
    return (
          
               
            <div className='card d-flex' style={bodyStyle}>
                <div className='card-body'>
                    <img src={img} style={image}/>
                    <p>name:{name}</p>
                    <p>quantity:{quantity}</p>
                    <p>price{price}</p>
                
                    <button onClick={()=>props.removeProduct(key)} type="button">remove</button>
                </div>
               

            </div>
           
    )
}

export default ReviewDetails
/* 
import React from 'react';

const ReviewItem = (props) => {
    const {name, quantity, key, price} = props.product;
    const reviewItemStyle = {
        borderBottom:'1px solid lightgray', 
        marginBottom :'5px', 
        paddingBottom: '5px', 
        marginLeft: '200px'
    };
    return (
        <div style={reviewItemStyle} className="review-item">
            <h4 className="product-name">{name}</h4>
            <p>Quantity: {quantity}</p>
            <p><small>$ {price}</small></p>
            <br/>
            <button 
                className="main-button"
                onClick={() => props.removeProduct(key)}
            >Remove </button>
        </div>
    );
};

export default ReviewItem; */