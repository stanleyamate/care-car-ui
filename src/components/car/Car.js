import React, { useContext } from 'react'
import './Car.css'
import useAuth from '../../hooks/useAuth'

const Car = ({person}) => {
  const { auth } = useAuth();
   
  return (

    <div className='car-section'>
        <div className='car-container'>
            <h1>Car Detail</h1>
            <div className='card'>
                <div className='card-body'>
                   <div className='card-img'>
                       <img src={person?
                           `http://localhost:4000/${person.image}`:
                           `http://localhost:4000/${auth.image}`
                           } alt='user-car' />
                   </div>
                   <div className='card-details'>
                       <h3>{person?person.car_model: auth.car_model}</h3>
                       <p>Subscription Plan: {person? person.plan:auth.plan}</p>
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