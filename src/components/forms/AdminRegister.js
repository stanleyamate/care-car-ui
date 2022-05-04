import React,{useState, useEffect, useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from '../api/axios';
import './Forms.css'
import './AdminRegister.css'
import { UserContext } from '../../context/user.Context/UserContext';

const AdminRegister = () => {
    const{setMsg}=useContext(UserContext)
    const navigate =useNavigate()
    const [full_names, setFullnames]=useState("");
    const [username, setUsername]=useState("");
    const [email, setEmail]=useState("");
    const [plan, setPlan]=useState("none");
    const [password, setPassword]=useState("");
    const [role, setRole]=useState("admin");
    const [errMsg, setErrMsg]=useState("");
  const handleRegister= async(e)=>{
      e.preventDefault();
  
      let fd= new FormData();
      fd.append('full_names', full_names);
      fd.append('username', username);
      fd.append('email', email);
      fd.append('role', role);
      fd.append('password', password);
      fd.append('plan', plan);
  
      try {
        const response = await axios
        .post('/register', fd)
         setMsg(response.data.message)
         setEmail("")
         setFullnames("")
         setUsername("")
         setPassword("")
         setPlan("none")
         setRole("admin")
         navigate("/login",{replace:true})
         
      } catch (err) {
        if(!err?.response){
          setErrMsg('no server response');
        }
        else if(err?.response?.status === 409){
          setMsg(err.response.data.message)
        }else{
          setErrMsg('Registration failed')
        }
      }
   }
    useEffect(()=>{
      setErrMsg({});
    }, [username,full_names, password, email, plan, role])
  
  
  
    return (
      <>
          <div className='forms'>
              <div className='container'>
                  <form className='register-form' encType="multipart/form-data" onSubmit={handleRegister}>
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
                     <div>
                     <button className='btn'>Register</button>
                     </div>
                  </form>
              </div>
          </div>
      </>
    )
}

export default AdminRegister