import React from 'react'
import './Car.css'
import useAuth from '../../hooks/useAuth'
import CarDefault from '../../assets/images/car-default.png'

const Car = ({user}) => {
  const { auth } = useAuth();
   
  return (

    <div className='car-section'>
        <div className='car-container'>
            <h1>Car Detail</h1>
            <div className='card'>
                <div className='card-body'>
                   <div className='card-img'>{auth.image || user.image?<img src={`https://auto-care-api.herokuapp.com/${ auth.image || user.image  }`} alt='user-car' />:<img src={CarDefault} alt="car-default"/>
                        }
                   </div>
                   <div className='card-details'>
                       <h2>{user?user.car_model: auth.car_model}</h2>
                       <p>Subscription Plan: 
                         <strong id='subscription-plan'>{user? user.plan:auth.plan}</strong>
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