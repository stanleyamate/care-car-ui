import React, { useEffect, useContext} from 'react'
import { Link, useParams,useNavigate} from 'react-router-dom';
import { UserContext } from '../../context/user.Context/UserContext';
import Car from '../car/Car';
import Services from '../service/Services';
import './UserDetail.css'  

const UserDetail = () => {
  const {users, deleteUser} = useContext(UserContext)
  const { id }=  useParams();
  const navigate=useNavigate();
  const user = users.find(user=>(user._id).toString() === id)
 
  const deleteUserHandler=(e)=>{
    e.preventDefault()
     try {
      deleteUser(user._id)
      navigate('/users')
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
                <div className='prof'>
                  <div className="names">
                  <h3>{user.full_names}</h3>
                  <small>@{user.username}</small>
                  </div>
                 </div>
              </li>
              <div className="details">
              <li>
                <p>Email: {user.email}</p>
              </li>
              <li>
                <p>Role: {user.role}</p>
              </li>
              
              <li>{user.role === "user" && user.isActive?
                <p>Status: <strong id='unsubscribe'>Unsubscribed</strong></p>:user.role === "user" && !user.isActive?
                <p>Status: <strong id='subscribe'>Subscribed</strong></p>:<></>
                }
              </li>
              {user.role === "user"?
              <li>
                  <p>{user.show_end_date}</p>
              </li>:<></>
              }
              </div>
            </ul>
          </div>
        </aside>
        <main className={user.role === "admin"?'content admin':'content'}>
          <div className='buttons'>
            <Link to={`/update-user/${user._id}`} className='btn btn-yellow'>Edit User</Link>
            <button className='btn btn-red'onSubmit={deleteUserHandler}>Delete User </button>
          { user.role ==="admin"?<button className='btn btn-disabled' style={{textDecoration:'line-through'}}>Subcribe</button>:
            user.isActive?<button className='btn btn-disabled'>Unsubscribed</button>
            :<Link to={`/subscribe/${user._id}`} className='btn btn-green'>Subscribe</Link>
            
          }
            
          </div>
          <div className='car-list sub-content' >
            {user.role === "user"?<Car user={user}/>:<></>}
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