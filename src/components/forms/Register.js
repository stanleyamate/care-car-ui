import React,{useState, useEffect, useContext} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from '../api/axios';
import './Forms.css'
import { UserContext } from '../../context/user.Context/UserContext';

const PLANS=["none", "weekly", "monthly"];

const Register = () => {
  const{setMsg}=useContext(UserContext)
  const navigate =useNavigate()

  const [full_names, setFullnames]=useState("");
  const [username, setUsername]=useState("");
  const [email, setEmail]=useState("");
  const [image, setImage]=useState();
  const [car_model, setCarModel]=useState("");
  const [password, setPassword]=useState("");
  const [plan, setPlan]=useState("none");
  const [role, setRole]=useState("user");
  // const [errMsg, setErrMsg]=useState("");
const handleFile =(e)=>{
  let file=e.target.files[0]
    setImage(file)
}
  if((plan !=="none") && role ==="admin"){
    setPlan("none")
  }
const handleRegister= async(e)=>{
    e.preventDefault();

    let fd= new FormData();
    fd.append('full_names', full_names);
    fd.append('username', username);
    fd.append('email', email);
    fd.append('role', role);
    fd.append('password', password);
    fd.append('car_model', car_model);
    fd.append('plan', plan);
    fd.append('image', image);

    try {
      const response = await axios
      .post('/register', fd)
       setMsg(response.data.message.msg)
       setCarModel("")
       setEmail("")
       setFullnames("")
       setUsername("")
       setImage()
       setPassword("")
       setPlan("none")
       setRole("user")
       navigate("/login",{replace:true})
       
    } catch (err) {
      if(!err?.response){
        setMsg('no server response');
      }
      else if(err?.response?.status === 409){
        setMsg(err.response.data.message)
      }else{
        setMsg('Registration failed')
      }
    }
 }
  useEffect(()=>{
    setMsg({});
  }, [username,full_names, password, email, plan, role, car_model, image])



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
                     <label htmlFor='Car Model'>Car Model:</label>
    
                     <input type='text' value={car_model} required={car_model === "" && role === "user"?true: false} onChange={e=>setCarModel(e.target.value)} onBlur={e=>setCarModel(e.target.value)} name='car-model' />
                   </div>
                   <div>
                     <label htmlFor='image'>Car Image:</label>
                     <input type="file" name="image" id="image" onChange={handleFile}/>
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
                   {/* <div>
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
                   </div> */}
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