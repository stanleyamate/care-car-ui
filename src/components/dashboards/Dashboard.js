import { Component } from 'react'
import { Link } from 'react-router-dom';
import Hero from "../../assets/images/hero.jpg";
import Car from '../car/Car';
import Services from '../service/Services';
import './Dashboard.css'


class Dashboard extends Component {

 render(){
  return (
    <div className='user-dashboard'>
      <div className='dashboard-container'>
        <aside className='side-bar'>
          <div>
            <ul>
              <li>
                <div className='profile'>
                     <span className='profile-img'><img src={Hero} alt="profile-img" /></span>
                     <span className='profile-name'>Amate Stanley</span>
                 </div >
              </li>
              <div className="details">
              <li>
                <p>Email: amatestanley@08gmail.com</p>
              </li>
              <li><p>Role: User</p></li>
              <li>
                <p>Status: <strong id='subscribe'>Subscribed</strong></p>
              </li>
              <li>
                  <p>Exp Date: DD:MM:YYYY</p>
              </li>
              <li>
                 <Link className='btn btn-red'>Unsubscribe</Link>
              </li>
              </div>
            </ul>
          </div>
        </aside>
        <main className='content'>
          <div className='buttons'>
            <Link className='btn btn-green'>Add Car</Link>   
            <Link className='btn btn-blue'>View Cars</Link>
            <Link className='btn'>Log Out</Link>
            
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
}

export default Dashboard