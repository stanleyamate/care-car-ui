import React,{ useContext, useState} from 'react'
import { useParams} from 'react-router-dom'
import { UserContext } from '../../context/user.Context/UserContext';
import './CarForm.css'

const CarForm = () => {
  const { id }= useParams();
  const {updateCarHandler, msg }= useContext(UserContext)
  
  const [image, setImage]=useState()
  const handleFile =(e)=>{
    let file=e.target.files[0]
      setImage(file)
  }
    const handleUpdate=(e)=>{
      e.preventDefault()
      let fd= new FormData();
      fd.append('image', image);
      try {
        updateCarHandler(fd, id )
        // navigate("/user-dashboard", {replace:true})
      } catch (err) {
        console.log(err)
      }
    }
  return (
    <div className='update-service'>
        <div className='update-service-con'>
            <form onSubmit={(e)=>e.preventDefault()}>
               <h2>Add / Update Car</h2>
               <span className='message'>{msg}</span>
               <div>
               <label htmlFor='car-form'>
               </label>
                     <input type="file" name="image" id="image" onChange={handleFile}/>   
               <button className='btn btn-yellow' value="submit" onClick={handleUpdate}>add/Update</button>
               </div>
            </form>
        </div>
    </div>
  )
}

export default CarForm