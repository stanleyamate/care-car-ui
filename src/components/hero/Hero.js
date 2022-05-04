import React from 'react'
import { Link } from 'react-router-dom'
import './Hero.css'
import HomeCar from '../../assets/images/svg/home-car.svg'
import Car2 from '../../assets/images/car2.png'
import Workers from '../../assets/images/svg/workers.svg'
import {ImPriceTags} from 'react-icons/im';
import {MdOutlineMiscellaneousServices} from 'react-icons/md';
import {MdEventAvailable} from 'react-icons/md';

const Hero = () => {

  return (
     <>
        <div className='hero'>
          <div className='caption'>
              <h1>Auto-Care</h1>
              <h3>We Offer Top Notch Auto Services to anyone and everyone...</h3>
              <Link to={"/service"} className='btn btn-hero' >Services And Plans</Link>
              
          </div>
          <div className="hero-images">
              <img className='car' src={Car2} alt="car"/>
          </div>
       </div>
       <main>
       <section className='home-container'>
         <div className='section-a'>
            <div className='box-a box-left'>
            <img className='car-and-person' src={HomeCar} alt='home car'/>
            </div>
            <div className='box-a box-right'>
              <div>
                <h1>We Offer Just The Best</h1>
                <h3>Because we are the best in the business</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium dignissimos non ullam, modi dolorem hic facilis exercitationem fuga, nulla eum officia nemo nisi veniam voluptatum inventore debitis temporibus amet. Aliquid?</p>
              </div>
            </div>
         </div>
         </section>
       <section className='jumbo'>
            <div className="card-group">
              <div className="card">
                  <div className="card-icon">
                  <ImPriceTags size={40}/>
                  </div>
                  <h3>Best Prices</h3>
                  <p>We provide the best prices possible</p>
              </div>
              <div className="card">
                  <div className="card-icon">
                  <MdOutlineMiscellaneousServices size={40} />
                  </div>
                  <h3>Best Service</h3>
                  <p>We provide the best Service</p>
              </div>
              <div className="card">
                  <div className="card-icon">
                  <MdEventAvailable size={40}/>
                  </div>
                  <h3>Available</h3>
                  <p>We make sure to be always available</p>
              </div>
            </div>
         </section>
         <section className='home-container'>
       <div className='section-b'>
            <div className='box-b box-left'>
                <h1>Our Service Highlight</h1>
                <h4>Lorem ipsum dolor sit, amet consectetur adipisicing!</h4>
                <h4>Lorem ipsum dolor sit, amet consectetur adipisicing!</h4>
                <h4>Lorem ipsum dolor sit, amet consectetur adipisicing!</h4>
                <h4>Lorem ipsum dolor sit, amet consectetur adipisicing!</h4>
                <h4>Lorem ipsum dolor sit, amet consectetur adipisicing!</h4>
                <h4>Lorem ipsum dolor sit, amet consectetur adipisicing!</h4>
            </div>
            <div className='box-b box-right'>
                <img className='workers' src={Workers} alt="workers" />
            </div>
         </div>
       </section>
    </main>
     </>
  )
}

export default Hero