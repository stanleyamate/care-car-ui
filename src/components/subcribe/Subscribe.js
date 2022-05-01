import React,{useContext, useState} from 'react'
import { useParams} from 'react-router-dom'
import { UserContext } from '../../context/user.Context/UserContext'
import './Subscribe.css'

const PLANS =["none", "weekly", "monthly"]

const Subscribe = () => {
  const {id} = useParams()
  const {subscribeUser}= useContext(UserContext)
  const [sub, setSub]=useState("")
  const handleSubmit=async()=>{
  await  subscribeUser(id, sub)
  }
  
  return (
    <div id='subcribe-con'>
       <h3>Choose Plan</h3>
     <form  id="subscribe-form" onSubmit={(e)=>e.preventDefault()}>
       <div>
         <label htmlFor="sub-plan"></label>
         <select id="sub-plan" value={sub} onChange={(e)=> setSub(e.target.value)} onBlur={(e)=> setSub(e.target.value)}>
                     {
                       PLANS.map(sub =>(
                       <option value={sub} key={sub}
                       >{sub}
                       </option>
                      ))
                     }
          </select>
       </div>
       <button className='btn' onClick={handleSubmit}>Subscribe</button>
     </form>
    </div>
  )
}

export default Subscribe