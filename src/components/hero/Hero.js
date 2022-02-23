import React from 'react'
import './Hero.css'
import Car2 from '../../assets/images/car2.png'

const Hero = () => {
  return (
     <div>
        <div className='hero'>
          <div className='caption'>
              <h1>Auto-Care</h1>
              <h3>We Offer Top Notch Auto Services to anyone and everyone...</h3>
              <button className='btn btn-hero'>Services And Plans</button>
          </div>
          <div className="hero-images">

              <img className='car' src={Car2} alt="car"/>
          </div>
       </div>
     </div>
  )
}

export default Hero