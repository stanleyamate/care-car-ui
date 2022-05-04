import React,{useContext, useState} from 'react'
import './Notification.css'
import { UserContext } from '../../context/user.Context/UserContext';
import { ServiceContext } from '../../context/service.Context/ServiceContext';
const Notification = () => {
  const {msg, setMsg}= useContext(UserContext)
  const {serviceMsg, setServiceMsg}= useContext(ServiceContext)
  if(msg.msg || serviceMsg.msg){
    setTimeout(()=>{
     setMsg({}) 
     setServiceMsg({})
    }, 3000)
  }
  return (
    <>
     <div  className={
       (msg.msg || serviceMsg.msg) && (msg.success === true || serviceMsg.success === true)
       ?'notification show success': (msg.msg || serviceMsg.msg) && (msg.success === false || !serviceMsg.success === false)
       ?'notification show failed':'notification'}
     >
        <h4>{ msg.msg || serviceMsg.msg}</h4> 
    </div>
    </>
  )
}

export default Notification