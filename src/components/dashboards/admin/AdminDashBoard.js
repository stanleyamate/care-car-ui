import React,{ useState, useContext} from 'react'
import './AdminDashBoard.css'
import { Link} from 'react-router-dom'
import {ServiceContext} from '../../../context/service.Context/ServiceContext'
import useAuth from '../../../hooks/useAuth'
import { UserContext } from '../../../context/user.Context/UserContext'


const AdminDashBoard = () => {
  
  const { auth }=useAuth();

  const { users } = useContext(UserContext)
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

  const usersList= users.length?(
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
    <div className='message'>
      <h4>No Users yet...</h4>
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
                     <span className='profile-name'>{auth.username}</span>
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
            <Link to={'/'} className='btn'>Log Out</Link>
            
          </div>
          <div className='user-list sub-content'>
                <h2>Active Users</h2>
              <small>Total: {users.length}</small>
              <table>
                     <thead>
                        <th>Username</th>
                        <th className='mobile-hide'>Email</th>
                        <th className='tablet'>Plan</th>
                        <th className='mobile-hide'>Car Image</th>
                     </thead>
                     <tbody>
                        {usersList}    
                     </tbody>
                  </table>
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
                  <button className='btn' type='submit'>Add Service</button>
                </form>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
  }
export default AdminDashBoard;
