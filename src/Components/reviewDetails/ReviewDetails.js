import React from 'react'

const ReviewDetails = (props) => {
    console.log(props)
    const {name, img, quantity}  =props.product 
        const bodyStyle={
           width:'300px',
           height:'450px',
           border:'1px solid',
           float:'left',
           margin:'10px 10px 10px 20px'
        }
        const image={
            width:'296px',
            height:'200px'
        }
    return (
    
       
            <div className='card' style={bodyStyle}>
            <div className='card-body'>
                <img src={img} style={image}/>
                <p>name:{name}</p>
               <p>quantity:{quantity}</p>
               <button type="button">remove</button>
            </div>
       </div>
    )
}

export default ReviewDetails