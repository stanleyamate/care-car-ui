import React from 'react'
import './Footer.css'
import { FaFacebook, FaTwitter, FaLinkedin, FaGitAlt } from 'react-icons/fa';
import Logo from '../../assets/images/download.png'
const Footer = () => {
  return (
    <div className='footer'>
     
      <div className='col col-logo'>
                <img src={Logo} alt="logo"  height="50px"/>
       </div>
      <div className='container'>
            
            <div className='col col-1'>
              <h3>Abous Us</h3>
              <p>Privacy</p>
              <p>Terms & Condition</p>
              <p>Office</p>
            </div>
            <div className='col col-2'>
              <h3>Contact Us</h3>
              <p>+237 658 459 887</p>
              <p>info@carcare.com</p>
            </div>
            <div className='col col-3'>
              <h3>Company</h3>
              <p>Board</p>
              <p>Employees</p>
            </div>
            <div className='col col-4'>
              <h3>Infomation</h3>
              <p>Our Partners</p>
              <p>Activities</p>
              <p>Blog</p>
            </div>
      </div>
        <div className='social'>
        <div className="icon"><FaFacebook /></div>
          <div className="icon"><FaTwitter /></div>
          <div className="icon"><FaLinkedin /></div>
          <div className="icon"><FaGitAlt /></div>
      </div>
      <div className='footer-base'>
          <p>CopyRights {new Date().getFullYear()}</p>
      </div>
    </div>
  )
}

export default Footer