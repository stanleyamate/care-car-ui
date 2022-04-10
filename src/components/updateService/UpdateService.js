import React,{useContext, useState} from 'react'
import { useParams, useNavigate} from 'react-router-dom'
import { ServiceContext } from '../../context/service.Context/ServiceContext'
import './UpdateService.css'

const UpdateService = () => {
  const {services, updateServiceHandler}= useContext(ServiceContext)
  const { id }= useParams();
  const navigate= useNavigate()
  const service = services.find(service=>(service._id) === id)

  const [editText, setEditText]= useState(service.text); 
  

    const handleUpdate=(e)=>{
      e.preventDefault()
      try {
        updateServiceHandler(id, editText)
        setEditText('')
        navigate('/service')
      } catch (err) {
        console.log(err)
      }
    }
  return (
    <div className='update-service'>
        <div className='update-service-con'>
            <form onSubmit={(e)=>e.preventDefault()}>
               <h2>Update Service</h2>
               <div>
               <label htmlFor='update-service'>
               </label>
                 <input type="text" value={editText} onChange={(e)=>{setEditText(e.target.value)}}/>
               <button className='btn btn-yellow' value="submit" onClick={handleUpdate}>Update</button>
               </div>
            </form>
        </div>
    </div>
  )
}

export default UpdateService