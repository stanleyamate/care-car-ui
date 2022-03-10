import React,{useState} from 'react'
import './UpdateService.css'

const UpdateService = () => {
    const [service, setService]= useState("")
    const handleServiceUpdate=(e)=>{
       e.preventDefault()

    }
  return (
    <div className='update-service'>
        <div className='update-service-con'>
            <form on onSubmit={handleServiceUpdate}>
               <h2>Update Service</h2>
               <div>
               <label htmlFor='update-service'>
               </label>
                 <input type="text" value={service} onChange={(e)=>{setService(e.target.value)}}/>
               <button className='btn btn-yellow' value="submit">Update</button>
               </div>
            </form>
        </div>
    </div>
  )
}

export default UpdateService