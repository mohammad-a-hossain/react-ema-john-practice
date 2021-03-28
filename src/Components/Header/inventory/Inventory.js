import React from 'react'
//import fakeData from '../../../fakeData'

const Inventory = () => {
    const handleAddProduct=()=>{
        const product ={}
        //console.log('product')
        fetch('http://localhost:4000/addProduct',{
            method:'POST',
            headers:{'Content-Type':'application/json'},
            body:JSON.stringify(product)
            
        })
    }
    
    return (
        <div style={{marginLeft:'800px',marginTop:'200px'}}>
            <h1>inventory page</h1>
            <form action="">
                <input type="text" placeholder='product name'></input><br></br>
                <input type="text" placeholder='product name'></input><br></br>
                <input type="text" placeholder='product name'></input><br></br>
                <input type="text" placeholder='product name'></input><br></br>
                <input type="file" placeholder='product image'></input>
            </form>
            <button onClick={handleAddProduct}>Add product</button>
        </div>
    )
}
export default Inventory