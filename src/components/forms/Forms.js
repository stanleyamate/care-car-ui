import {useState, useEffect, useContext} from 'react'
import AuthContext from '../../context/AuthProvider'
import './Forms.css'
import axios from '../api/axios';

//axios Global
// axios.defaults.headers.common['Authorization'] = localStorage.getItem("token");


const PLANS=["none", "weekly", "monthly"];

const Forms = () => {
const config={
      headers:{
        'Content-Type':'application/json',
        withCredentials:true
      }
    }

  //Register

  const { setAuth }=useContext(AuthContext);
  const [full_names, setFullnames]=useState("");
  const [username, setUsername]=useState("");
  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");
  const [plan, setPlan]=useState("");
  const [errMsg, setErrMsg]=useState("");

  useEffect(()=>{
    setErrMsg('');
  }, [username,full_names, password, email, plan])


  const handleLogin= async(e)=>{
    e.preventDefault();
   try {
    const response = await axios.post('/login', {
      username: username,
      password:password
    }, config)
    console.log(response)
    setUsername('')
    setPassword('')
    // const authorizationToken;

    setAuth({username, password});
   } catch (err) {
     if(err?.response){
       setErrMsg('No server response')
     }
     else if(err.response?.status === 400){
       setErrMsg('Missing Username or Password')
     }else if(err.response?.status === 401){
         setErrMsg('Unauthorized')
     }else{
       setErrMsg('Login failed')
     }
     
   }
 }
 const handleRegister= async(e)=>{
    e.preventDefault();
    
    try {
      const response = await axios
      .post('/register', {
        full_names: full_names,
        username: username,
        email:email,
        password:password,
        plan:plan
      }, config)
       console.log(response)
       
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
    return (
        <div className='forms'>
            <div className='container'>
                <form className='Login-form' onSubmit={handleLogin}>
                    <legend>Login</legend>
                   <div>
                     <label htmlFor='Username'>Username:</label>
                     <input type='text' onChange={(e)=>setUsername(e.target.value)} value={username} autoComplete="off" required />
                   </div>
                   <div>
                     <label htmlFor='Password'>Password:</label>
                     <input type='password' onChange={(e)=>setPassword(e.target.value)} value={password} required />
                   </div>
                    <div>
                     <button className='btn'>Login</button>
                    </div>
                </form>
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
                      <option />
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
                     <select name="role">
                       <option value='user'>User</option>
                       <option value='admin'>Admin</option>
                     </select>
                   </div>
                   </div>
                   <div>
                   <button className='btn'>Register</button>
                   </div>
                </form>
            </div>
        </div>
      )
}

export default Forms