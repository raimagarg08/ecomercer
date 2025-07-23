import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">
            <div className="footer-content-left">
              
              <img src={assets.logo} alt="" />
              <p>order from our web app and enhance the watering capacity of your mouth every bite matters and it really enhances your tastes </p>
              <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
              </div>
            </div>
            <div className="footer-content-center">
             
             <h2>COMPANY</h2>
             <ul>
                <li>Follow us</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
             </ul>

            </div>
            <div className="footer-content-right">
 
               <h2>GET IN TOUCH </h2>
               <ul>
                <li>+91 7300142464</li>
                <li>contact@tomato.com</li>
               </ul>

            </div>
        </div>
      <hr />
      <p className='footer-copyright'>Copyright 2024 @ tomato.com -All Right Reserved</p>
    </div>
  )
}

export default Footer
