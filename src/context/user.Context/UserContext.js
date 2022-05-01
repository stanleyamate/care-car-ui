import { createContext, useState, useEffect} from 'react'
import axiosWithAuth from '../../hooks/axiosWithAuth';
import { testLog } from '../../utils';
import useAuth from '../../hooks/useAuth';


export const UserContext= createContext();

const UserContextProvider = (props) =>{
    const [users, setUsers]=useState([])
    const [msg, setMsg]=useState("")
    const {islogged}= useAuth()
    const controller = new AbortController();
    const signal = controller.signal;
    
    useEffect(()=>{

      const controller = new AbortController();
      const signal = controller.signal;

    const fetchUsers =async()=>{
       await axiosWithAuth().get('/admin/users',{signal:signal})
        .then(res=>{
            setUsers(res.data.data)
        }).catch(err=>{
            if(err.response){
                if(err.response.status === 500){
                    setMsg("Server Error")
                }
            }else if(err.request){
                console.log(err.request)
            }else{
                setMsg(err.response)
            }
        }) 
    }
    if(islogged){
        fetchUsers()
    }
        return()=>{
             controller.abort();
        }
    },[islogged])
    const getUsers =async()=>{
        await axiosWithAuth().get('/admin/users',{signal:signal})
         .then(res=>{
             setUsers(res.data.data)
         }).catch(err=>{
             if(err.response){
                 if(err.response.status === 500){
                     setMsg("Server Error")
                 }
             }else if(err.request){
                 console.log(err.request)
             }else{
                 setMsg(err.response)
             }
         }) 
     }

    const deleteUser =async(id)=>{
        await axiosWithAuth().delete(`/admin/users/${id}`)
        .then(res=>setMsg(res.data.message))
        .catch(e=>testLog(e))
        setUsers(users.filter(user => user._id !== id));
            
    }
    const unsubscribeUser =async(id)=>{
        await axiosWithAuth().patch(`/unsubscribe/${id}`,{plan:"none", isActive:false})
        .then(res=>{
            setMsg(res.data.message)
        })
        .catch(e=>testLog(e))
    }
    const subscribeUser =async(id, sub)=>{
        await axiosWithAuth().patch(`/subscribe/${id}`,{plan:sub, isActive:true})
        .then(res=>setMsg(res.data.message))
        .catch(e=>testLog(e))
    }
    const updateCarHandler=async(fd, id)=>{
        await axiosWithAuth().patch(`/car/${id}`,
        fd)
        .then(res=>{
            setMsg(res.data.message)
        })
        .catch(err=>{testLog(err)})
    }
    return (
        <UserContext.Provider 
        value={
            {users, 
                msg,
                setMsg,
                setUsers,
                getUsers,
                deleteUser,
                updateCarHandler,
                unsubscribeUser,
                subscribeUser
              }}>
            { props.children }
        </UserContext.Provider>
    )
}

export default UserContextProvider;