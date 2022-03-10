import { Component } from 'react'
import { Link } from 'react-router-dom';
import Car from '../car/Car';
import Services from '../service/Services';
import './UserDetail.css'  


class UserDetail extends Component {

 render(){
  return (
    <div className='user-dashboard'>
      <div className='dashboard-container'>
        <aside className='side-bar'>
          <div>
            <ul>
              <li>
                <div className='profile'>
                     <h3 className='prof-name'>Amate Stanley junior</h3>
                 </div>
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
                 
              </li>
              </div>
            </ul>
          </div>
        </aside>
        <main className='content'>
          <div className='buttons'>
            <Link to={'/update-user'} className='btn btn-yellow'>Edit User</Link>
            <Link className='btn btn-red'>Unsubscribe</Link>
            <Link className='btn btn-red'>Delete User</Link>
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

export default UserDetail