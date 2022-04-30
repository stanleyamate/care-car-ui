import React,{useContext, useState} from 'react'
import './Notification.css'
import { UserContext } from '../../context/user.Context/UserContext';
import { ServiceContext } from '../../context/service.Context/ServiceContext';
const Notification = () => {
  // const {msg, setMsg} = useContext(UserContext)
  const {msg, setMsg}= useContext(UserContext)
  const {serviceMsg, setServiceMsg}= useContext(ServiceContext)

  // const handleClick =()=>{
  //    setMsg("") || setServiceMsg("")
  //    setClick(true)
  // }
  if(msg || serviceMsg){
    setTimeout(()=>{
     setMsg("") 
     setServiceMsg("")
    }, 3000)
  }
  return (
    <>
     <div  className={msg || serviceMsg?'notification show':'notification'}>
        <h4>{ msg || serviceMsg}</h4> 
    </div>
    </>
  )
}

export default Notification