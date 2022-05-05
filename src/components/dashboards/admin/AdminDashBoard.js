import React,{ useState,useEffect, useContext} from 'react'
import {BiRefresh} from 'react-icons/bi'
import './AdminDashBoard.css'
import { Link} from 'react-router-dom'
import {ServiceContext} from '../../../context/service.Context/ServiceContext'
import useAuth from '../../../hooks/useAuth'
import { UserContext } from '../../../context/user.Context/UserContext'


const AdminDashBoard = () => {
  
  const { auth }=useAuth();

  const { users, getUsers } = useContext(UserContext)
  const { services, addServiceHandler } = useContext(ServiceContext)

 const [text, setText] = useState('');
//  const { addService }=useContext(serviceContext);
//  const navigate= useNavigate();
//  const  location = useLocation();

 const handleServiceSubmit= async(e)=>{
    e.preventDefault()
    try {
      addServiceHandler(text)
      setText('')
    } catch (err) {
      console.log(err)
    }

}
useEffect(()=>{
  let isMouted=true
  getUsers()
  return ()=>{
    isMouted=false
  }
},[auth])
const refreshUsersHandler=()=>{
  getUsers()
}

  const usersList= !users.length?(
    users.map(user=>{
        return(
          <tr key={user._id}>
              <td>{ user.username }</td>
              <td className='mobile-hide'>{ user.email }</td>
              <td className='tablet'>{ user.plan}</td>
             <td className='mobile-hide'>
                <img src={`http://localhost:4000/${user.image}`} alt="car" height="50px" />
            </td>
          </tr>
        )
    }).slice(0,6)
  ):(
    <div className='no-user'>
      <h4>No Users yet...</h4>
    <button className='btn btn-yellow refresh' onClick={refreshUsersHandler}><BiRefresh className='fill-white' size={25}/>Refresh</button>
    </div>
  )
  const serviceList = services.length?(
    services.map(service=>{
        return(
          <li className="service" key={service._id}>
                    <div>
                    { service.text }
                    </div>
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
                    <span className='profile-name'>
                       <h2>{auth.full_names}</h2>
                       <small>@{auth.username}</small>
                    </span>
                 </div>
              </li>
              <div className="details">
                <li>
                  <p>Email: {auth.email}</p>
                </li>
                <li>
                  <p>Role: {auth.role}</p>
                </li>
              </div>
            </ul>
          </div>
        </aside>
        <main className='content'>
          <div className='buttons'>
            <Link to={'/service'} className='btn btn-green'>All Services</Link>
            <Link to={'/users'} className='btn btn-blue'>All Users</Link>
            <Link to={'/carlist'} className='btn'>Car List</Link>
            
          </div>
          <div className='user-list sub-content'>
                <h2>Active Users</h2>
              <small>Total: {users.length}</small>
              {users.length?
              <>
              <button className='btn btn-yellow refresh' onClick={refreshUsersHandler}><BiRefresh className='fill-white' size={25}/>Refresh</button> <br />
              </>:<></>}
              {!users.length?<div>{usersList}</div>:
              <table>
                     <thead>
                        <tr>
                          <th>Username</th>
                          <th className='mobile-hide'>Email</th>
                          <th className='tablet'>Plan</th>
                          <th className='mobile-hide'>Car Image</th>
                        </tr>
                     </thead>
                     <tbody>
                        {usersList}    
                     </tbody>
              </table>}
          </div>
          <div className='service-section sub-content'>
            <ul>
                <h2>Services</h2>
              <small>Total: { services.length }</small>
                 {serviceList}
              </ul>
            <div className="service-form">
                <h4>Add Service</h4>
                <form onSubmit={handleServiceSubmit}>
                  <input type="text" name='text' value={text} onChange={(e)=> setText(e.target.value)} onBlur={(e)=> setText(e.target.value) }/>
                  <button className='btn btn-add-service' type='submit'>Add</button>
                </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
  }
export default AdminDashBoard;
