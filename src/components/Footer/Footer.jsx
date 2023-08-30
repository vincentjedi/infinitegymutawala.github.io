import React from 'react'
import './Footer.css'
import Github from '../../assets/github.png';
import Instagram from '../../assets/instagram.png';
import LinkedIn from '../../assets/linkedin.png';
import Logo from '../../assets/inflogo.jpg';

const Footer = () => {
  return (
    <div className="Footer-container">
        <hr/>

        <div className="footer">
          
        <div className="opening-hours">
          <h2>Opening Hours</h2>
          <span>MON-FRI: 5:30AM - 9PM</span>
          <span>SATURDAY: 7AM - 6PM</span>
          <span>KARATE: 8PM - 9PM</span>
        </div>

        <div className="location">
          <h2>LOCATION: INFINITE GYM OPPOSITE ELSHADAI PRIMARY SCHOOL.</h2>
          <h3>For more information call: 0707381222, Coach Jose.</h3>
        </div>
            <div className="social-links">
            <img src={Github} alt="" />
            <img src={Instagram} alt="" />
            <img src={LinkedIn} alt="" />
            </div>
        
        <div className="logo-f">
            <img src={Logo} alt="" />
        </div>

        </div>
        
        
<div className='blur blur-f-1'></div>
<div className='blur blur-f-2'></div>
        
    </div>
  )
}

export default Footer
