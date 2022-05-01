import {useState, useEffect, useContext} from 'react'
import { useNavigate, Link, useLocation } from 'react-router-dom'
import {MdEmail} from 'react-icons/md'
import {FaKey} from 'react-icons/fa'
import useAuth from '../../hooks/useAuth'
import './Login.css'
import axios from '../api/axios';
import { UserContext } from '../../context/user.Context/UserContext';
const LOGIN_URL = '/login'

//axios Global
// axios.defaults.headers.common['Authorization'] = localStorage.getItem("token");




const Login = () => {
  

    //login
  const { setAuth, setIsLogged } = useAuth();
  const {setMsg} =useContext(UserContext)
  const navigate = useNavigate();
  const location =useLocation();
  const from = location.state?.from?.pathname || '/'


  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");
  const [errMsg, setErrMsg]=useState("");

  const handleLogin= async(e)=>{
    e.preventDefault();
   try {
    const res = await axios.post(LOGIN_URL, {
      email:email,
      password:password
    })
    setMsg(res.data.message)
    const user = res.data.user;
    localStorage.setItem("token", res.data.user.token)
    setAuth(user);
    setIsLogged(true)
    setEmail('')
    setPassword('')
    navigate(from, {replace:true})  
    
   }catch (err) {
      if(!err?.response){
       setErrMsg('no server response');
     }else if(err.response?.status === 404){
       setMsg("User not found")
     }
     else if(err.response?.status === 401){
       setMsg(err?.response.data.message)
     }else{
       setErrMsg('Login failed')
     }
 }
}
 
useEffect(()=>{

   

  const controller = new AbortController();
  const signal = controller.signal;

  return()=>{
    
    controller.abort()
  }
},[])
  
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
                     <label htmlFor='email'>< MdEmail className='icon'/></label>
                     <input type='text' onChange={(e)=>setEmail(e.target.value)} value={email} autoComplete="off" required />
                   </div>
                   <div>
                     <label htmlFor='Password'><FaKey/></label>
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