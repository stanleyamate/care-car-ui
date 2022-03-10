import React from 'react'
import './Car.css'
import Cars2 from '../../assets/images/car2.png'

const Car = () => {
  return (
    <div className='car-section'>
        <div className='car-container'>
            <h1>Car details</h1>
            <div className='card'>
                <div className='card-body'>
                   <div className='card-img'>
                       <img src={Cars2} alt='' />
                   </div>
                   <div className='card-details'>
                       <h3>Car - model</h3>
                       <p>Subscription Plan: Weekly</p>
                   </div>
                </div>
                <div className='card-footer'>
                   
                </div>
            </div>
        </div>
    </div>
  )
}

export default Car