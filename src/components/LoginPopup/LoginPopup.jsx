import React, { useState } from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/assets';


const LoginPopup = ({setShowLogin}) => {
    const [curr ,setcurr]=useState("Sign Up");
  return (
    <div className='login_popup'>
        <form action="" className="login_popup_container">
            <div className="login_popup_title">
                <h2>{curr}</h2>
                <img onClick={()=>setShowLogin(false)} src={assets.cross_icon} alt="" />
                </div>
                    <div className="login_popup_input">
                     {curr=="Login"?<></>: <input type="text" placeholder='Username' required />}
                        <input type="email" placeholder='Your email' required />
                        <input type="password" placeholder='Password' required />
                    </div>
                    <button>{curr==="Sign Up"?"Create new account":"Login"}</button>
                    <div className="login_popup_condition">
                        <input type="checkbox" required />
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ipsum, perferendis.</p>

                    </div>
                   {curr==="Login"?<p>Create a new Account? <span onClick={()=> setcurr("Sign Up")}>Click Here</span></p>:        
                    <p>Already have an Account?<span onClick={()=> setcurr("Login")}>Login here.</span> </p>}

            </form>   

    </div>
  ) 
}

export default LoginPopup
