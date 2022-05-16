import React,{useState} from 'react'
import {Link} from 'react-router-dom'
import './Navbar.css'
import Logo from "../../assets/images/download.png";
import { BiUserCircle,BiLogInCircle} from 'react-icons/bi'
import {RiAdminLine} from 'react-icons/ri'
import {AiOutlineHome, AiOutlineLogin} from 'react-icons/ai'
import {MdMiscellaneousServices} from 'react-icons/md'
import useAuth from '../../hooks/useAuth';
import Profile from '../../assets/images/profile.png'

const Navbar = () => {
   const {auth, isLogged, logout}=useAuth();
   const [click, setClick] = useState(false)
   const handleClick = () =>setClick(!click)
   const handleDefault=()=> setClick(false)
   
  
   
  return (
    <>
    <nav className='navbar'>
      <div className='nav-container'>
          <img className='logo' src={Logo} alt='logo'/>
          <ul className={click ?'nav-menu active': 'nav-menu'}>
            {
            auth.image?
            <img className='image-hidden' src={`http://localhost:4000/${auth.image}`} alt="profile-img" />
            :<img className='image-hidden' src={Profile} alt="profile-img" />
             }
            
            <li>
              <Link to={'/'} onClick={handleDefault}><AiOutlineHome className='nav-icon'/>Home</Link>
            </li>
            {auth.role ==="admin"?
              <li>
              <Link to={'/admin-board'} onClick={handleDefault}><RiAdminLine className='nav-icon'/>Admin</Link>
            </li>
            :auth.role ==="user"? <li> 
               <Link to={'/user-dashboard'} onClick={handleDefault}><BiUserCircle className='nav-icon'/>Dashboard</Link>
             </li>: <></>
            }
            <li>
              <Link to={'/service'} onClick={handleDefault}> <MdMiscellaneousServices className='nav-icon'/>Services/Plans</Link>
            </li>
            <li>
              <Link to={'/about'} onClick={handleDefault}>About</Link>
            </li>
          </ul>
            {
              isLogged ?<Link to={'/'} onClick={logout} className='btn'><BiLogInCircle className='nav-icon fill-white' /> Log out</Link>
              : <Link to={'/login'} className='btn'><AiOutlineLogin className='nav-icon fill-white' />SignIn/SignUp</Link>
            }        
        <div  onClick={handleClick} className={click ? "hamburger enabled": "hamburger"}>
            <div className={click ? "active-white": " "}></div>
            <div className={click ? "active-white": " "}></div>
            <div className={click ? "active-white": " "}></div>
        </div>
      </div>
      <div className="nav-bottom"></div>
    </nav>
    </>
  )
}

export default Navbar