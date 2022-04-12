import React from 'react'
import './Footer.css'
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
              <p>lorem</p>
              <p>lorem</p>
            </div>
            <div className='col col-3'>
              <h3>Company</h3>
              <p>lorem</p>
              <p>lorem</p>
              <p>lorem</p>
              <p>lorem</p>
            </div>
            <div className='col col-4'>
              <h3>Infomation</h3>
              <p>lorem</p>
              <p>lorem</p>
              <p>lorem</p>
              <p>lorem</p>
            </div>
      </div>
        <div className='social'>
          <p>A</p>
          <p>A</p>
          <p>A</p>
          <p>A</p>
      </div>
      <div className='footer-base'>
          <p>CopyRights {new Date().getFullYear()}</p>
      </div>
    </div>
  )
}

export default Footer