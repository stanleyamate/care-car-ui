import React,{useState, useEffect} from 'react'
import axios from '../api/axios';
import './Forms.css'

const PLANS=["none", "weekly", "monthly"];
const ROLES=["user", "admin"];

const Register = () => {

  const config={
    headers:{
      'Content-Type':'application/json',
      withCredentials:true
    }
  }

  const [full_names, setFullnames]=useState("");
  const [username, setUsername]=useState("");
  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");
  const [plan, setPlan]=useState("");
  const [role, setRole]=useState("");
  const [errMsg, setErrMsg]=useState("");

  
const handleRegister= async(e)=>{
    e.preventDefault();
    try {
      const response = await axios
      .post('/register', {
        full_names: full_names,
        username: username,
        email:email,
        role:role,
        password:password,
        plan:plan
      }, config)
       console.log(response.data)
       
    } catch (err) {
      if(!err?.response){
        setErrMsg('no server response');
      }
      else if(err.response?.status === 409){
        setErrMsg('username taken')
      }else{
        setErrMsg('Registration failed')
      }
    }
 }

  useEffect(()=>{
    setErrMsg('');
  }, [username,full_names, password, email, plan, role])



  return (
    <>
        <div className='forms'>
            <div className='container'>
                <form className='register-form' onSubmit={handleRegister}>
                    <legend>Register</legend>
                   <div>
                     <label htmlFor='full_names'>Full names:</label>
                     <input type='text' name='full_names' value={full_names} onChange={e=>setFullnames(e.target.value)} onBlur={e=>setFullnames(e.target.value)} required />
                   </div>
                   <div>
                     <label htmlFor='Username'>Username:</label>
                     <input type='text' name='username' value={username} onChange={e=>setUsername(e.target.value)} onBlur={e=>setUsername(e.target.value)} required />
                   </div>
                   <div>
                     <label htmlFor='Email'>Email:</label>
                     <input type='email' value={email} name='email' onChange={e=>setEmail(e.target.value)} onBlur={e=>setEmail(e.target.value)} required />
                   </div>
                   <div>
                     <label htmlFor='Password'>Password:</label>
                     <input type='password' value={password} onChange={e=>setPassword(e.target.value)} onBlur={e=>setPassword(e.target.value)} name='password' required />
                   </div>
                   <div id='form-dropdown'>
                   <div>
                     <label htmlFor='Plan'>Plan:</label>
                     <select id="plan" value={plan} required onChange={(e)=> setPlan(e.target.value)} onBlur={(e)=> setPlan(e.target.value)}>
                      
                      {
                       PLANS.map(plan =>(
                       <option value={plan} key={plan}
                       >{plan}
                       </option>
                       ))
                      } 
                   </select>
                   </div>
                   <div>
                     <label htmlFor='role'>Role:</label>
                     <select id="role" value={role} required onChange={(e)=> setRole(e.target.value)} onBlur={(e)=> setRole(e.target.value)}>
                      
                      {
                       ROLES.map(role =>(
                       <option value={role} key={role}
                       >{role}
                       </option>
                       ))
                      } 
                   </select>
                   </div>
                   </div>
                   <div>
                   <button className='btn'>Register</button>
                   </div>
                </form>
            </div>
        </div>
    </>
  )
}

export default Register