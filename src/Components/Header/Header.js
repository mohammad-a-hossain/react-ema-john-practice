import React from 'react'
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
export default Header