import React from 'react'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { ServiceContext } from '../../context/service.Context/ServiceContext'
import useAuth from '../../hooks/useAuth'
import './Services.css'


const Services = () => {
  const {auth} =useAuth()

    const {services,serviceMsg, deleteServiceHandler}=React.useContext(ServiceContext)
    const serviceList= services.length? (
      services.map(service=>{
        return(
              <li key={service._id} >
               <div className="service">
                 <div>
                   <strong>{service.text}</strong>
                 </div>
                    {auth?.role === "admin"?<div className='manage-buttons'>
                       <span className='icon-con'><Link to={`/update-service/${service._id}`} >
                            <AiFillEdit className="icon" onMouseOver={({target})=>target.style.color="blue"}
                            onMouseOut={({target})=>target.style.color=""}/></Link>
                       </span>
                       <span className='icon-con'>
                            <AiFillDelete className="icon" onClick={()=>{deleteServiceHandler(service._id)}}/>
                       </span>
                    </div>: <></>}
                  </div>   
              </li>      
          )
      })
    ):(
      <div className='no-service'>
        <strong>No service Yet</strong>
      </div>
      
    )

    return (
      <div className='service-con'>
        <div className='plans'>
          <h2>We Offer Weekly & Monthly Plans </h2>
          <p>These bundles or plan comes with the following services...</p>
        </div>
          <ul className='service-list'>
           <div className='service-heading'>
            <h4>Services</h4>
           </div>
             {serviceList}
          </ul>
      </div>
    )
}
export default Services