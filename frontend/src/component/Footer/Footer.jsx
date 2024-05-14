import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'

const Footer = () => {
  return (
    <div className='footer' id='footer' >
        <div className="footer-content">
            <div className="footer-content-left">
                <img src={assets.logo} alt="" />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur quae, minus fuga vero laboriosam odio laudantium! Eaque qui adipisci excepturi sequi? In natus officiis ducimus facilis maxime, iure ut! Corrupti.</p>
                <div className="footer-social-icons">
                    <img src={assets.facebook_icon} alt="" />
                    <img src={assets.twitter_icon} alt="" />
                    <img src={assets.linkedin_icon} alt="" />
                </div>

            </div>
            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Delivery</li>
                    <li>Privacy</li>


                </ul>

            </div>
            <div className="footer content-right">
                <h2>Get in Touch</h2>
                <ul>
                    <li>+3214573895</li>
                    <li>Contact@tomato.com</li>
                </ul>

            </div>
        </div>
        <hr />
        <p className='footer-copy-right'>Copyright 2024 @ Tomato.com_All Right Reserved</p>
    </div>
  )
}

export default Footer