 import React from 'react'
 import './header.css'
 import logo from '../../images/logo.png'
 
 const Header = () => {
     return (
         <div className='header'>
             <img src={logo} alt=""/>
             <nav>
                <a>Home</a>
                <a href='/shop'>Shop</a>
                <a href='/review'>Review</a>
                <a href='/details'>Details</a>
                <a href='/comments'>Comment</a>

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