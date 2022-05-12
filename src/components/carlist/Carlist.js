import React,{useContext} from 'react'
import './Carlist.css'
import {BiRefresh} from 'react-icons/bi'
import CarDefault from '../../assets/images/car-default.png'
import { UserContext } from '../../context/user.Context/UserContext'

const Carlist = () => {
  const {users, getUsers}= useContext(UserContext)
 
   const cardetailList=users.length?(users.map(user=>{
        return(
          <div className='card' key={user._id}>
                <div className='card-body'>
                   <div className='card-img'>
                      {user?.image?  <img src={
                        `https://auto-care-api.herokuapp.com/${ user.image }`
                        } alt='user-car' />
                           : <img src={CarDefault} alt="car-default"  />
                        }
                   </div>
                   <div className='card-details'>
                       <h2>{user.username}</h2>
                       <h3>{user.car_model}</h3>
                       <p>Subscription Plan: 
                         <strong id='subscription-plan'>{user? user.plan:null}</strong>
                       </p>
                   </div>
                </div>
                <div className='card-footer'>
                   
                </div>
            </div>
        )
    })
   ):(
     <div className='no-user'>
       <h2>No Cars yet
       </h2>
       <small>Try clicking Refresh to get cars if any are present</small>
       <button className='btn btn-yellow refresh' onClick={getUsers}><BiRefresh className='fill-white' size={25}/>Refresh</button>
     </div>
   )

  return (
    <div className='carlist-section'>
        <div className='car-container'>
            <h1>Car List</h1>
            <div className="carlist-cards">
              {cardetailList}
            </div>
        </div>
    </div>
  )
}

export default Carlist