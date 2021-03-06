import React,{useState, useEffect, createContext } from 'react'
import axios from '../../components/api/axios';
import axiosWithAuth from '../../hooks/axiosWithAuth';
import {testLog} from '../../utils'

export const ServiceContext= createContext();

const ServiceContextProvider=(props)=>{
    const [services, setServices] = useState([])
    const [serviceMsg, setServiceMsg]= useState({})
    useEffect(()=>{
        let mounted = true;
        const controller = new AbortController()
        
        const fetchServices=async()=>{
           try {
            await axios.get('/service')
            .then(res=>{
               mounted && setServices(res.data.doc)
            })
           } catch (err) {
               console.log(err)
           }
        }
        fetchServices();
        return () => {
            mounted = false;
            controller.abort();
        }
    },[])
    const addServiceHandler=async(text)=>{
        await axiosWithAuth().post('/admin/service', {text:text})
        .then(res=>{
            setServices([...services, {...res.data.doc}])
            setServiceMsg(res.data.message)
        })
        .catch(e=>{console.log(e)})
        
    }
    const updateServiceHandler=async(id, editText)=>{
        await axiosWithAuth().put(`/admin/service/${id}`,{text:editText})
        .then(res=>{
            setServices(services.map(service=>service._id === id ? res.data.doc : service))
            setServiceMsg(res.data.message)
        })
        .catch(err=>{testLog(err)})
       
    }
    const deleteServiceHandler=async(id)=>{
      await axiosWithAuth().delete(`/admin/service/${id}`)
      .then(res=>{
          setServiceMsg(res.data.message)
      })
      .catch(err=>{testLog(err)})
      setServices(services.filter(service=> service._id !== id))
      
    }
    return(
        <ServiceContext.Provider value={{services, serviceMsg, setServiceMsg, addServiceHandler, updateServiceHandler, deleteServiceHandler}}>
            {props.children}
        </ServiceContext.Provider>
    )
}
export default ServiceContextProvider;