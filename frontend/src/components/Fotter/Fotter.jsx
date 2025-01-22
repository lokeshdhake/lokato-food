import React from 'react'
import "./Fotter.css"
import { assets } from '../../assets/assets'

const Fotter = () => {
  return (
    <div className='fotter' id='fotter'>
        <div className="fotter-content">
            <div className="fotter-content-left">
                <img src={assets.logo} alt="" />
                <p>Delivering delicious meals to your doorstep, anytime, anywhere. Experience the best food delivery service with a wide variety of cuisines to choose from.</p>
                <div className="fotter-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>
            </div>
            <div className="fotter-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>
            <div className="fotter-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+1-213-456-7890</li>
                    <li>contact@lokato.com</li>
                </ul>
            </div>
        </div>
        <hr />
        <p className="fotter-copyright">Copyright 2025 © Lokato.com - All Right Reserved.</p>
    </div>
  )
}


export default Fotter
