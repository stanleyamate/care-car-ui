import React, { useContext, useState } from 'react'
import './Car.css'
import useAuth from '../../hooks/useAuth'
import CarDefault from '../../assets/images/car-default.png'

const Car = ({person}) => {
  const { auth } = useAuth();
   
  return (

    <div className='car-section'>
        <div className='car-container'>
            <h1>Car Detail</h1>
            <div className='card'>
                <div className='card-body'>
                   <div className='card-img'>
                        <img src={
                        `http://localhost:4000/${ person.image ||  auth.image}`
                        } alt='user-car' />
                        {/* {
                            !person?.image && !auth?.image?
                            <img src={CarDefault} alt="car-default"  />
                            :<></>
                        } */}
                   </div>
                   <div className='card-details'>
                       <h2>{person?person.car_model: auth.car_model}</h2>
                       <p>Subscription Plan: 
                         <strong id='subscription-plan'>{person? person.plan:auth.plan}</strong>
                       </p>
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