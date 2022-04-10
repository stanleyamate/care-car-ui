import React, { useEffect, useContext, useState } from 'react'
import { Link, useParams,useNavigate} from 'react-router-dom';
import { UserContext } from '../../context/user.Context/UserContext';
import Car from '../car/Car';
import Services from '../service/Services';
import './UserDetail.css'  

const UserDetail = () => {
  const [p, setP]=useState(false)
  const {users, deleteUser} = useContext(UserContext)
  const { id }=  useParams();
  const navigate=useNavigate();
  const user = users.find(user=>(user._id).toString() === id)
  const [person, setPerson]=useState([])
  useEffect(()=>{
    setPerson(user)
  },[person, user])
  const deleteUserHandler=(e)=>{
    e.preventDefault()
     try {
      deleteUser(user._id)
    } catch (error) {
      console.log(error)
    }

   }
  return (
    <div className='user-dashboard'>
      <div className='dashboard-container'>
        <aside className='side-bar'>
          <div>
            <ul>
              <li>
                <div className='profile'>
                     <h3 className='prof-name'>{person.full_names}</h3>
                 </div>
              </li>
              <div className="details">
              <li>
                <p>Email: {person.email}</p>
              </li>
              <li><p>Role: {person.role}</p></li>
              <li>
              { person.isActive?
                <p>Status: <strong id='subscribe'>Subscribed</strong></p>:
                <p>Status: <strong id='unsubscribe'>UnSubscribed</strong></p>
                }
              </li>
              <li>
                  <p></p>
              </li>
              <li>
                 
              </li>
              </div>
            </ul>
          </div>
        </aside>
        <main className='content'>
          <div className='buttons'>
            <Link to={`/update-user/${user._id}`}className='btn btn-yellow'>Edit User</Link>
          { 
          p?<Link to={'/unsubscribe'} className='btn btn-red'>Unsubscribe</Link>
          :<Link to={'/subscribe'} className='btn btn-green'>subscribe</Link>}
      
            <Link to={'/update-user'} className='btn btn-red'onSubmit={deleteUserHandler}>Delete User </Link>
          </div>
          <div className='car-list sub-content'>
            <Car person={person}/>
          </div>
          <div className='service-section sub-content'>
            <Services />
          </div>
          
        </main>
      </div>
    </div>
  )
}


export default UserDetail