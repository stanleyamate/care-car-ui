import {useState} from 'react'
import './Services.css'
// import axios from '../api/axios'


const Services = () => {
   // eslint-disable-next-line
  const [services, setServices]=useState([])

    const serviceList= services.length? (
      services.map(service=>{
        return(
              <li key={service._id}>
               <div className="service">{service}</div>
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