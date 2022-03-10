import { Outlet } from 'react-router-dom'
import Navbar from '../navbar/Navbar';
import Footer from '../footer/Footer';


const Layout = () => {
  return (
    <div className="App">
       <Navbar/>
        <Outlet />
       <Footer/>
    </div>
  )
}

export default Layout;