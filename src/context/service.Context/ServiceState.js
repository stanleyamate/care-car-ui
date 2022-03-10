import React from 'react'
import ServiceContext from './service-context'

const ServiceState = () => {
  return (
    <ServiceContext.Provider value={{}}>{ props.children }</ServiceContext.Provider>  
  )
}

export default ServiceState