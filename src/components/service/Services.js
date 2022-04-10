import React from 'react'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { ServiceContext } from '../../context/service.Context/ServiceContext'
import useAuth from '../../hooks/useAuth'
import './Services.css'
// import axios from '../api/axios'


const Services = () => {
  const {auth} =useAuth()

    const {services, deleteServiceHandler}=React.useContext(ServiceContext)
    const serviceList= services.length? (
      services.map(service=>{
        return(
              <li key={service._id} >
               <div className="service"><div>{service.text}</div>
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
      <div className="message">No service Yet</div>
    )

    return (
      <div className='service-con'>
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