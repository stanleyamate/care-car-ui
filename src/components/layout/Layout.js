import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import Notification from '../notification/Notification';

import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (

    <div className='App'>
      <Navbar />
      <Notification />
        <Outlet />
      <Footer /> 
    </div>
  )
}

export default Layout;