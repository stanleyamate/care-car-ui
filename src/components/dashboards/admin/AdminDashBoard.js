import React,{ useState} from 'react'
import './AdminDashBoard.css'
import { Link } from 'react-router-dom'
import Hero from '../../../assets/images/hero.jpg'
// import axios from 'axios'

const AdminDashBoard = ({users, services}) => {

  const [service, setService] = useState('');
 const handleServiceSubmit=(e)=>{
    e.preventDefault()
}

  const usersList=users.length?(
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
  const serviceList=services.length?(
    services.map(service=>{
        return(
          <li className="service" key={service._id}>
                    <div>
                    { service.service}
                    </div>
                 <Link className='btn btn-green'>
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
                     <span className='profile-name'>Amate Stanley</span>
                 </div>
              </li>
              <div className="details">
              <li>
                <p>Email: amatestanley@08gmail.com</p>
              </li>
              <li><p>Role: Admin</p></li>
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
                  <Link className='btn'>Add</Link>
                </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
  }
export default AdminDashBoard;
