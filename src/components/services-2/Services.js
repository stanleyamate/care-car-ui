import React from 'react'
import './Services.css'
import Car2 from '../../assets/images/car2.png'

const Services = () => {
  return (
    <div className='services'>
         <h1>check our services</h1>
         <div>
             <p><span className='bold'>All</span></p>
             <p>Weekly</p>
             <p>Monthly</p>
             <p>Monthly</p>
             <p>Monthly</p>
             <p>Monthly</p>
             <p>Monthly</p>
             <p>Monthly</p>
         </div>
         <div className='container'>
             <img src={Car2} alt="service"/>
             <img src={Car2} alt="service"/>
             <img src={Car2} alt="service"/>
             <img src={Car2} alt="service"/>
             <img src={Car2} alt="service"/>
             <img src={Car2} alt="service"/>
         </div>
         <button className='btn'>View All</button>
    </div>
  )
}

export default Services