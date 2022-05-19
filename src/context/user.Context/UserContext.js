import { createContext, useState, useEffect} from 'react'
import axiosWithAuth from '../../hooks/axiosWithAuth';
import { testLog } from '../../utils';
import useAuth from '../../hooks/useAuth';


export const UserContext= createContext();

const UserContextProvider = (props) =>{
    const [users, setUsers]=useState([])
    const [user, setUser]=useState({})
    const [msg, setMsg]=useState({})
    const {isLogged}= useAuth()
    const controller = new AbortController();
    const signal = controller.signal;

    const getUsers =async()=>{
        await axiosWithAuth().get('/admin/users')
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
    useEffect(()=>{
       let isMounted=true;
       if(isLogged){
           getUsers()
       }
    return()=>{
        isMounted=false;
        }
    },[isLogged,user])
    

    const deleteUser =async(id)=>{
        await axiosWithAuth().delete(`/admin/users/${id}`)
        .then(res=>setMsg(res.data.message))
        .catch(e=>testLog(e))
        setUsers(users.filter(user => user._id !== id));
            
    }
    const unsubscribeUser =async(id)=>{
        await axiosWithAuth().put(`/unsubscribe/${id}`,{plan:"none", isActive:false, show_end_date:null})
        .then(res=>{
            setUser(res.data.update)
            setUsers(...users, user)
            setMsg(res.data.message)
        })
        .catch(e=>testLog(e))
    }
    const subscribeUser =async(id, sub)=>{
        await axiosWithAuth().put(`/subscribe/${id}`,{plan:sub, isActive:true})
        .then(res=>{
            setUser(res.data.update)
            setUsers(...users, user)
            setMsg(res.data.message)
        })
        .catch(e=>testLog(e))
    }
    const getCars=async()=>{
            await axiosWithAuth().get('/admin/carlist',{signal:signal})
             .then(res=>{
                //  setUsers(res.data.data)
                console.log(res.data)
             }).catch(err=>{
                 if(err.response){
                     if(err.response.status === 500){
                         setMsg("Server Error")
                     }
                 }else if(err.request){
                     console.log(err.request)
                 }else{
                     setMsg(err.response.data.message)
                 }
             }) 
    }
    const updateCarHandler=async(fd, id)=>{
        await axiosWithAuth().patch(`/car/${id}`,
        fd)
        .then(res=>{
            setMsg(res.data.message)
        })
        .catch(err=>{
            if(err.response.status === 500){
                setMsg("Server Error")
            }
            else if(err.response.status === 400){
                setMsg(err.response.data.message)
            }
        })
    }
    return (
        <UserContext.Provider 
        value={
            {users,
                msg,
                setMsg,
                setUsers,
                getUsers,
                getCars,
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