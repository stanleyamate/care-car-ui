import { Link} from 'react-router-dom';
import Car from '../car/Car';
import { useContext } from 'react';
import Services from '../service/Services';
import './Dashboard.css'  
import useAuth from '../../hooks/useAuth';
import { UserContext } from '../../context/user.Context/UserContext';

const Dashboard = ({services})=> {
  const { auth, logout }=useAuth();
  const{unsubscribeUser}= useContext(UserContext)
  

  return (

    <div className='user-dashboard'>
      <div className='user-dashboard-container'>
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
              <li><p>Role:{auth.role}</p></li>
              <li>
                <p>Status: {auth.isActive?<strong id='subscribe'> Active</strong> : <strong id='unsubscribe'> Not Active</strong>}</p>
              </li>
              <li>
                  <p>Date Joined: {Date(auth.createdAt).substring(3, 15)}</p>
              </li>
              <li>
                  <p>Date of Exp: {auth.show_end_date}</p>
              </li>
              </div>
            </ul>
          </div>  
        </aside>
        <main className='content'>
          <div className='buttons'>
            <Link to={`/upload-car/${auth._id}`} className='btn'>Add Car</Link>   
                 {auth.isActive? <span onClick={()=>unsubscribeUser(auth._id)} className='btn btn-red'>Unsubscribe</span>
                 :<Link to={`/subscribe/${auth._id}`} className='btn btn-green'>Subscribe</Link>}
            <Link to={'/'} onClick={logout} className='btn'>Log Out</Link>
            
          </div>
          <div className='car-list sub-content'>
            <Car/>
          </div>
          <div className='service-section sub-content'>
            <Services services={services}/>
          </div>
          
        </main>
      </div>
    </div>
  )
}

export default Dashboard