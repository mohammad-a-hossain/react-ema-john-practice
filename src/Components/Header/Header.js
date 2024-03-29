 import React, { useContext, useState} from 'react'
 import { UserContext } from "../../App";
 import './header.css'
 import logo from '../../images/logo.png'
import { Link } from 'react-router-dom'

 
 const Header = () => {
     const [userLoggedIn,setUserLoggedIn] = useContext(UserContext)
     const [user,setUser] =useState(true)
     return (
         <div className='header'>
             <img src={logo} alt=""/>
             <nav>
             {/* <Link >name</Link> */}
              {user.isSignIn && <Link>name: {user.name || user.displayName}</Link>} 
                  <Link to='/shop'>Shop</Link>
                  <Link to='/review'>Review</Link>
                  <Link to='/details'>Details</Link>
                  <Link to='/inventory'>Inventory</Link> 
                  <Link to='/login'>login</Link>
                  <button style={{float:'right'}} onClick={()=>setUserLoggedIn({})} >Sign-Out</button>
             </nav>
             <input type="text" placeholder="search your item"/>
         </div>
     )
 }
 export default Header









/* import React from 'react'
import logo from '../../images/logo.png';
import header from './header.css'

 const Header = () => {
    return (
        <div className='header'>
         
            <img src={logo} alt=""/>
            <nav>
               <a href='/shop'> Shop </a>
               <a href='/manage'> Manage  </a>
               <a href='/review'>Order-Review  </a>
            </nav>
        </div>
    )
}
export default Header */