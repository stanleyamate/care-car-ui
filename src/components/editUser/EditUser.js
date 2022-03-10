import React,{useState} from 'react'
import './EditUser.css'

const PLANS=["none", "weekly", "monthly"];

const EditUser = () => {

  const [full_names, setFullnames]=useState("");
  const [username, setUsername]=useState("");
  const [carmodel, setCarModel]=useState("");
  const [email, setEmail]=useState("");
  const [carImage, setCarImage]=useState("");
  const [password, setPassword]=useState("");
  const [plan, setPlan]=useState("");

  return (
    <div>
        <div className='edit-user-container'>
            <form className='update-form'>
                   <h2>Update User</h2> 
                   <div>
                     <label htmlFor='full_names'>Full names:</label>
                     <input type='text' name='full_names' value={full_names} onChange={e=>setFullnames(e.target.value)} onBlur={e=>setFullnames(e.target.value)} required />
                   </div>
                   <div>
                     <label htmlFor='Username'>Username:</label>
                     <input type='text' name='username' value={username} onChange={e=>setUsername(e.target.value)} onBlur={e=>setUsername(e.target.value)} required />
                   </div>
                   <div>
                     <label htmlFor='Car model'>Car-Model:</label>
                     <input type='text' name='car-model' value={carmodel} onChange={e=>setCarModel(e.target.value)} onBlur={e=>setCarModel(e.target.value)} required />
                   </div>
                   <div>
                     <label htmlFor='Email'>Email:</label>
                     <input type='email' value={email} name='email' onChange={e=>setEmail(e.target.value)} onBlur={e=>setEmail(e.target.value)} required />
                   </div>
                   <div>
                     <label htmlFor='car-image'>Car Image:</label>
                     <input type='file' value={carImage} name='car-image' onChange={e=>setCarImage(e.target.value)} onBlur={e=>setCarImage(e.target.value)} required />
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
                   <button className=' btn btn-update'>Update</button>
                   </div>
                </form>
        </div>
    </div>
  )
}

export default EditUser