import { createContext, useState, useEffect } from 'react'
// import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import axiosWithAuth from '../../hooks/axiosWithAuth';
import { testLog } from '../../utils';



export const UserContext= createContext();

const UserContextProvider = (props) =>{
    const [users, setUsers]=useState([])
    const [msg, setMsg]=useState("")
  

    useEffect(()=>{
       let isSubscribed=true
       const controller = new AbortController();
       const signal = controller.signal;
         const fetchUsers = async()=>{
        await axiosWithAuth().get('/admin/users',{signal: signal})
        .then(res=>{
            if(isSubscribed){
                setUsers(res.data.data)
                
            }
        }).catch(err=>{
            if(err.response){
                console.log(err.response.data)
                console.log(err.response.headers)
                if(err.response.status === 500){
                    console.log("Server Error")
                }
            }else if(err.request){
                console.log(err.request)
            }else{
                console.log(err.message)
            }
        }) 
    }
        fetchUsers()
        return()=>{
             isSubscribed=false
             controller.abort();
        }
    },[])

    const deleteUser =async(id)=>{
        await axiosWithAuth().delete(`/admin/users/${id}`)
        .catch(e=>testLog(e))
        setUsers(users.filter(user => user._id !== id));
            
    }
    const unsubscribeUser =async(id)=>{
        await axiosWithAuth().patch(`/unsubscribe/${id}`,{plan:"none", isActive:false})
        .then(res=>console.log(res))
        .catch(e=>testLog(e))
    }
    const subscribeUser =async(id, sub)=>{
        await axiosWithAuth().patch(`/subscribe/${id}`,{plan:sub, isActive:true})
        .then(res=>setMsg(res.data.message))
        .catch(e=>testLog(e))
    }
    const updateCarHandler=async(fd, id)=>{
        await axiosWithAuth().patch(`/car/${id}`,
        {image:fd})
        .then(res=>{
            console.log(res.data)
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