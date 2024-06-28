import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer_content">
            <div className="footer_content_left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic rem adipisci id sapiente eos! Sit repellendus consequuntur voluptatem voluptate fugit. Dolorum ex nobis nulla molestias ipsa! Quo quaerat non adipisci!</p>
                <div className="footer_social_icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="footer_content_center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="footer_content_right">
                    <h2>Get in Touch</h2>
                    <ul>
                        <li>+1-0612-444-333</li>
                        <li>contact@tomato.com</li>
                    </ul>
            </div>
        </div>
        <hr />
        <p className="footer_copyright">Colpyright Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      
    </div>
  )
}

export default Footer
