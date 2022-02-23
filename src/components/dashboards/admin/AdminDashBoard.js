import React from 'react'
import './AdminDashBoard.css'
import { Link } from 'react-router-dom'
import Hero from '../../../assets/images/hero.jpg'

export const AdminDashBoard = () => {
  return (
    <div className='admin-dashboard'>
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
            <Link to={'/users'} className='btn btn-green'>Manage Service</Link>
            <Link to={'/users'} className='btn btn-blue'>All Users</Link>
            <Link to={'/users'} className='btn'>Log Out</Link>
            
          </div>
          <div className='user-list sub-content'>
              <ul >
              <h2>Active Users</h2>
                  <li className="user">
                    <div className='username'>
                    Amate Stanley
                    </div>
                    <div className='email'>
                    blabla@gmail.com</div>
                    <div className='status'>
                    subscribed</div>
                      <Link to={'/users'} className='btn btn-green'>
                        Manage
                      </Link>
                  </li>
                  <li className="user">
                    <div className='username'>
                    Amate Stanley
                    </div>
                    <div className='email'>
                    blabla@gmail.com</div>
                    <div className='status'>
                    subscribed</div>
                      <Link to={'/users'} className='btn btn-green'>
                        Manage
                      </Link>
                  </li>
                  
              </ul>
          </div>
          <div className='service-section sub-content'>
            <ul>
                <h2>Services</h2>
                  <li className="service">
                    <div>
                    Amate Stanley has a big head all day day long 
                    </div>
                      <Link className='btn btn-green'>
                        Manage
                      </Link>
                  </li>
                  <li className="service">
                    <div>
                    Amate Stanley has a big head all day day long 
                    </div>
                      <Link className='btn btn-green'>
                        Manage
                      </Link>
                  </li>
                  
              </ul>
            <div className="service-form">
                <h4>Add Service</h4>
                <form>
                  <input type="text"/>
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
