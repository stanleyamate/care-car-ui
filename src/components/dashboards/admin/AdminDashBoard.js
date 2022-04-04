import React,{ useState, useEffect, useContext} from 'react'
import './AdminDashBoard.css'
import { Link } from 'react-router-dom'
import Hero from '../../../assets/images/hero.jpg'
import axios from '../../api/axios'
import serviceContext from '../../../context/service.Context/service-context'
import useAuth from '../../../hooks/useAuth'


const AdminDashBoard = ({users, services}) => {
  const { auth }=useAuth();

 const [service, setService] = useState('');
//  const { addService }=useContext(serviceContext);

 const handleServiceSubmit= async(e)=>{
    e.preventDefault()
    try {
      const response= await axios
      .post('/services',{
        headers:'Content-Type:Application/json',
         withCredential:true})
         console.log(response)
    } catch (err) {
      console.log(err)
    }
    const newService={
      service
    }
    // addService(newService)
    // setService('')
}

  const usersList=users?(
    users.map(user=>{
        return(
          <li className="user" key={user._id}>
             <div className='username'>{user.username}</div>
          <div className='email'>{ user.email }</div>
          <div className='status'>{ user.plan }</div>
            <Link to={'/users'} className='btn btn-green'>
              Manage
            </Link>
        </li>
       
        )
    }).slice(0,6)
  ):(
    <div className='message'>
      <h4>No Users yet...</h4>
    </div>
  )
  const serviceList=services?(
    services.map(service=>{
        return(
          <li className="service" key={service._id}>
                    <div>
                    { service.service}
                    </div>
                 <Link to={'/'} className='btn btn-green'>
                        Manage
                </Link>
          </li>
        )
    }).slice(0,6)
  ):(
    <div className='message'>
      <h4>No Services yet...</h4>
    </div>
  )

  return (
    <div>
      <div className='admin-container'>
        <aside className='side-bar'>
          <div>
            <ul>
              <li>
                <div className='profile'>
                     <span className='profile-img'><img src={Hero} alt="profile-img" /></span>
                     <span className='profile-name'>{auth.username}</span>
                 </div>
              </li>
              <div className="details">
              <li>
                <p>Email: {auth.email}</p>
              </li>
              <li><p>Role: {auth.role}</p></li>
              </div>
            </ul>
          </div>
        </aside>
        <main className='content'>
          <div className='buttons'>
            <Link to={'/service'} className='btn btn-green'>Manage Service</Link>
            <Link to={'/users'} className='btn btn-blue'>All Users</Link>
            <Link to={'/'} className='btn'>Log Out</Link>
            
          </div>
          <div className='user-list sub-content'>
              <ul >
              <h2>Active Users</h2>
                 {usersList}  
              </ul>
          </div>
          <div className='service-section sub-content'>
            <ul>
                <h2>Services</h2>
                 {serviceList}
              </ul>
            <div className="service-form">
                <h4>Add Service</h4>
                <form onSubmit={handleServiceSubmit}>
                  <input type="text" value={service} onChange={(e)=> setService(e.target.value)} onBlur={(e)=> setService(e.target.value) }/>
                  <button className='btn'>Add</button>
                </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
  }
export default AdminDashBoard;
