import React from 'react'
import './Services.css'
 const services=[
     {description :"modify some changes and apply", id:1},
     {description :"modify some changes and apply", id:2},
     {description :"modify some changes and apply", id:3},
     {description :"modify some changes and apply", id:4},
     {description :"modify some changes and apply", id:5},
     {description :"modify some changes and apply", id:6},
     {description :"modify some changes and apply", id:7},
 ]
const Services = () => {
  const serviceList=  services.map(service=>{
        return(
            <li key={service.id}>
             <div className="service">{service.description}</div>
            </li>
        )
    })
  return (
    <div>
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