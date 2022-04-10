import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import './Users.css'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { MdUnsubscribe } from 'react-icons/md'
import { BiDetail } from 'react-icons/bi'
import { UserContext } from '../../../../context/user.Context/UserContext'
import useAuth from '../../../../hooks/useAuth'

const Users = () => {
   const { users, deleteUser } = useContext(UserContext)
   // const {auth}= useAuth();
      
      const usersList = users.length?(
         users.map(user=>{
            return(
               <li className='user' key={user._id}>
                  <div className='username'>{ user.username }</div>
                              <div className='email mobile-hide'>{ user.email}</div>
                              <div className=''> {user.plan}</div>
                        <div className='manage-buttons'>
                                 <span className='icon-con'>
                                    <Link to={`/user-detail/${user._id}`}>
                                       <BiDetail className="icon"/>
                                    </Link>
                                 </span>
                                 <span className='icon-con'>
                                    <Link to={`/update-user/${user._id}`}>
                                       <AiFillEdit className="icon" />
                                    </Link>
                                 </span>
                                 <span className='icon-con'>
                                    <AiFillDelete className="icon" onClick={()=>{deleteUser(user._id)}}/>
                                 </span>
                                 <span className='icon-con'>
                                    <MdUnsubscribe className="icon"/>
                                 </span>
                        </div>   
                  </li>
            )
         })
      ):(
         <div className='message'>
            <h4>No User yet</h4>
            <Link className="btn" to={'/admin-dashboard'}>Go back</Link>
         </div>
      )
       
      return (
           <div className='all-users-container'>
              <ul className='all-users'>
                  <h2>All Active Users</h2>            
                      {usersList}
              </ul>
           </div>
      )
  
}

export default Users