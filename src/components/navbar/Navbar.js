import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import Logo from "../../assets/images/download.png";
import useAuth from '../../hooks/useAuth';

const Navbar = () => {
   const { setAuth, isLogged, setIsLogged, logout}=useAuth();
    const [click, setClick] = useState(false)
   const handleClick = () =>setClick(!click)
   const handleDefault=()=> setClick(false)
   
  
   
  return (
    <>
    <div className='navbar'>
      <div className='nav-container'>
          <img className='logo' src={Logo} alt='logo'/>
          <ul className={click ?'nav-menu active': 'nav-menu'}>
            <li>
              <Link to={'/'} onClick={handleDefault}>Home</Link>
            </li>
            <li>
              <Link to={'/user-dashboard'} onClick={handleDefault}>Dashboard</Link>
            </li>
            <li>
              <Link to={'/service'} onClick={handleDefault}>Services</Link>
            </li>
            <li>
              <Link to={'/admin-board'} onClick={handleDefault}>Admin</Link>
            </li>
          </ul>
            
            {
              isLogged ? <Link to={'/'} onClick={logout} className='btn bt-trans'>Log out</Link>
              : <Link to={'/login'} className='btn bt-trans'>SignIn/Register</Link>
            }        
        <div className='hamburger' onClick={handleClick}>
            <div></div>
            <div></div>
            <div></div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Navbar