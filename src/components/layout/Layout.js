import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (

    <div className='App'>
      <Navbar />
        <Outlet />
      <Footer /> 
    </div>
  )
}

export default Layout;