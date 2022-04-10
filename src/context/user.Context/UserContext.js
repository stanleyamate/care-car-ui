import { createContext, useState, useEffect } from 'react'
// import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import axiosWithAuth from '../../hooks/axiosWithAuth';
import { testLog } from '../../utils';



export const UserContext= createContext();

const UserContextProvider = (props) =>{
    const [users, setUsers]=useState([])
  

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
    const unsubscribeUser =(id)=>{
    //    setUsers(users.filter(user => user.id !== id));
    }
    const updateUserHandler =async(id, editUsername)=>{
        // await axiosWithAuth().patch(`/admin/users/${id}`,
        // userUpdate)
        // .then(res=>{
        //     setUsers(users.map(user=>user._id === id ? {...res.data.data} : user))
        // })
        // .catch(err=>{testLog(err)})
       testLog(id, editUsername)
    }
    return (
        <UserContext.Provider 
        value={
            {users, 
              setUsers,
              deleteUser,
              updateUserHandler,
              unsubscribeUser
              }}>
            { props.children }
        </UserContext.Provider>
    )
}

export default UserContextProvider;