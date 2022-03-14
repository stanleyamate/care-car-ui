import {useState, useEffect} from 'react'
import { useNavigate, Link, useLocation } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'
import './Login.css'
import axios from '../api/axios';
const LOGIN_URL = '/login'

//axios Global
// axios.defaults.headers.common['Authorization'] = localStorage.getItem("token");




const Login = () => {
  
  const config={
      headers:{
        'Content-Type':'application/json'},
        withCredentials:true
      
    }

    //login
  const { auth, setAuth }=useAuth();
  const navigate = useNavigate();
  const location =useLocation();
  const from = location.state?.from?.pathname || '/'


  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");
  const [errMsg, setErrMsg]=useState("");

  const handleLogin= async(e)=>{
    e.preventDefault();
   try {
    const response = await axios.post(LOGIN_URL, {
      email:email,
      password:password
    }, config)
    const {full_names, email, username, password, role, token}= response.data.user;
    const newUser={
      full_names:full_names,
      username:username,
      email: email,
      password: password,
      role:role,
      token: token
    }
    console.log(newUser);
    setAuth(newUser); 
    setEmail('')
    setPassword('')
    navigate(from, {replace:true})

   } catch (err) {
     if(err?.response){
       setErrMsg('No server response')
     }
     else if(err.response?.status === 400){
       setErrMsg('Missing email or Password')
     }else if(err.response?.status === 401){
         setErrMsg('Unauthorized')
     }else{
       setErrMsg('Login failed')
     }
     
   }
 }
 useEffect(()=>{
  setErrMsg('');
}, [email, password])

 
    return (
        <div className="forms">
          <div className='Login'>
            <div className='container'>
                <form className='Login-form' onSubmit={handleLogin}>
                    <legend>Login</legend>
                   <div>
                     <label htmlFor='email'>email:</label>
                     <input type='text' onChange={(e)=>setEmail(e.target.value)} value={email} autoComplete="off" required />
                   </div>
                   <div>
                     <label htmlFor='Password'>Password:</label>
                     <input type='password' onChange={(e)=>setPassword(e.target.value)} value={password} required />
                   </div>
                    <div className="form-footer">
                     <button className='btn'>Login</button>

                     <div><p>Not Sign-up?</p><Link to={'/register'}>Create Account</Link></div>
                    </div>
                </form>
            </div>
        </div>
        </div>
      )
}

export default Login