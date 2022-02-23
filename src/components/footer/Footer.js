import React from 'react'
import './Footer.css'
const Footer = () => {
  return (
    <div className='footer'>
     
      <div className='col col-logo'>
                <h1>logo</h1>
       </div>
      <div className='container'>
            
            <div className='col col-1'>
              <h3>About</h3>
              <p>lorem</p>
              <p>lorem</p>
              <p>lorem</p>
              <p>lorem</p>
            </div>
            <div className='col col-2'>
              <h3>Legal</h3>
              <p>lorem</p>
              <p>lorem</p>
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