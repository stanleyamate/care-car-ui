import React,{useState, useContext, useEffect} from 'react'
import { useParams, useNavigate} from 'react-router-dom';
import { UserContext } from '../../context/user.Context/UserContext';
import axiosWithAuth from '../../hooks/axiosWithAuth';
import './EditUser.css'

const PLANS=["none", "weekly", "monthly"];
const ROLES=["user", "admin"];

const EditUser = () => {
  const {users, updateUserHandler, setUsers} = useContext(UserContext)
  const { id }=  useParams();
  const navigate =useNavigate();
  const user = users.find(user=>(user._id).toString() === id)


  const [editFull_names, setEditFullnames]=useState("");
  const [editUsername, setEditUsername]=useState("");
  const [editEmail, setEditEmail]=useState("");
  const [editPlan, setEditPlan]=useState("");
  const [editRole, setEditRole]=useState("");

  const [userUpdate, setUserUpdate]= useState({})


  useEffect(()=>{
    if(user){
      setEditFullnames(user.full_names)
      setEditUsername(user.username)
      setEditPlan(user.plan)
      setEditEmail(user.email)
      setEditRole(user.role)
     return setUserUpdate({editFull_names,editRole, editEmail, editUsername, editPlan})
    }
  },[])
  
  const handleEdit=async(e)=>{
    e.preventDefault()
    const editUser= {editEmail, editFull_names, editPlan, editUsername, editRole}
    try {
       await axiosWithAuth().patch(`/admin/users/${id}`,
        {
          full_names: editUser.editFull_names,
          username:editUser.editUsername,
          email:editUser.editEmail,
          plan:editUser.editPlan,
          role:editUser.editRole
        })
        .then(res=>{
            setUsers(users.map(user=>user._id === id ? res.data.data : user))
            
            
        })
        .catch(err=>{console.log(err)})
      setEditFullnames('')
      setEditEmail('')
      setEditPlan('')
      setEditUsername('')
      navigate('/users')
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <div>
        <div className='edit-user-container'>
            <form className='update-form' onSubmit={(e)=>e.preventDefault()}>
                   <h2>Update User</h2> 
                   <div>
                     <label htmlFor='full_names'>Full names:</label>
                     <input type='text' name='full_names' value={editFull_names} onChange={e=>setEditFullnames(e.target.value)} onBlur={e=>setEditFullnames(e.target.value)} required />
                   </div>
                   <div>
                     <label htmlFor='Username'>Username:</label>
                     <input type='text' name='username' value={editUsername} onChange={e=>setEditUsername(e.target.value)} onBlur={e=>setEditUsername(e.target.value)} required />
                   </div>                  
                   <div>
                     <label htmlFor='Email'>Email:</label>
                     <input type='email' value={editEmail} name='email' onChange={e=>setEditEmail(e.target.value)} onBlur={e=>setEditEmail(e.target.value)} required />
                   </div>
                   <div id='form-dropdown'>
                   <div>
                     <label htmlFor='Plan'>Plan:</label>
                     <select id="plan" value={editPlan} required onChange={(e)=> setEditPlan(e.target.value)} onBlur={(e)=> setEditPlan(e.target.value)}>
                     {
                       PLANS.map(editPlan =>(
                       <option value={editPlan} key={editPlan}
                       >{editPlan}
                       </option>
                      ))
                     }
                   </select>
                   <div>
                     </div>
                        <label htmlFor='role'>Role:</label>
                        <select id="role" value={editRole} required onChange={(e)=> setEditRole(e.target.value)} onBlur={(e)=> setEditRole(e.target.value)}>
                        {
                          ROLES.map(editRole =>(
                          <option value={editRole} key={editRole}
                          >{editRole}
                          </option>
                          ))
                        }
                         </select>
                   </div>
                   </div>
                   <div>
                   <button className=' btn btn-update' onClick={handleEdit}>Update</button>
                   </div>
                </form>
        </div>
    </div>
  )
}

export default EditUser