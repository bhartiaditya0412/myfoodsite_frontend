import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-router-dom';
import { Storecontext } from '../../Context/Storecontext';

const Navbar = ({setShowLogin}) => {

    const [menu,setMenu] = useState("home"); 
    const {gettotalCartAmount} = useContext( Storecontext)
  return (
    <div className='navbar'>
     <Link to={'/'}> <img src={assets.logo} alt="" className="logo" /> </Link>
      <ul className="navbar-menu">
        <Link to={'/'} onClick={()=>setMenu("home")} className={menu=="home"?"active":""}>HOME</Link>
        <a href='#exploremenu' onClick={()=>setMenu("menu")} className={menu=="menu"?"active":""}>MENU</a> 
        <a href='#app_download' onClick={()=>setMenu("about")} className={menu=="about"?"active":""}>MOBILE APP</a>
        <a href='#footer' onClick={()=>setMenu("contact-us")} className={menu=="contact-us"?"active":""}>CONTACT US</a>

      </ul>
      <div className="navbar-right">
        
        <img src={assets.search_icon} alt="" />
        <div className="navbar-searchicon">
          <Link  to={'/cart'}>
          <img src={assets.basket_icon} alt="" />
          </Link>  
            <div  className={gettotalCartAmount()?"dot":""}>

            </div>
        </div>
        <button onClick={()=>setShowLogin(true)}>Sign in</button>

      </div>
    </div>
  )
}

export default Navbar
