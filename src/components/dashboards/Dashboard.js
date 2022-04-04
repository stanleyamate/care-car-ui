import { Link} from 'react-router-dom';
import Hero from "../../assets/images/hero.jpg";
import Car from '../car/Car';
import Services from '../service/Services';
import './Dashboard.css'  
import useAuth from '../../hooks/useAuth';

const Dashboard = ()=> {
  const { auth }=useAuth();


  return (

    <div className='user-dashboard'>
      <div className='dashboard-container'>
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
              <li><p>Role:{auth.role}</p></li>
              <li>
                <p>Status: <strong id='subscribe'>{auth.isActive ? 'Active' : 'not Active'}</strong></p>
              </li>
              <li>
                  <p>Date Joined: {Date(auth.createdAt).substring(0, 15)}</p>
              </li>
              <li>
                 <Link to={'/'} className='btn btn-red'>Unsubscribe</Link>
              </li>
              </div>
            </ul>
          </div>
        </aside>
        <main className='content'>
          <div className='buttons'>
            <Link to={'/'} className='btn btn-green'>Add Car</Link>   
            <Link to={'/'} className='btn btn-blue'>View Cars</Link>
            <Link to={'/'} className='btn'>Log Out</Link>
            
          </div>
          <div className='car-list sub-content'>
            <Car />
          </div>
          <div className='service-section sub-content'>
            <Services />
          </div>
          
        </main>
      </div>
    </div>
  )
}

export default Dashboard