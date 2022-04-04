import React,{ useReducer }from 'react'
import axios from '../../components/api/axios'
import ServiceContext from './service-context'  
import { ADD_SERVICE, DELETE_SERVICE, GET_SERVICES } from './serviceActions'
import serviceReducer from './serviceReducer'

const ServiceState = (props) => {
  const initialState={
    services:[]
  }
  const [state, dispatch] = useReducer(serviceReducer, initialState)
  //add service
  const addService =async (service)=>{
      await axios.post('/services',
      {})
      dispatch({
        type:ADD_SERVICE,
        payload: service
      })
  }
  
  //delete service
  const deleteService=(serviceID)=>{
    dispatch({
      type:DELETE_SERVICE,
      payload: serviceID
    })
}
  return (
    <ServiceContext.Provider 
    value={{
      services: state.services,
      addService,
      deleteService
    }}>
      { props.children }
    </ServiceContext.Provider>  
  )
}

export default ServiceState