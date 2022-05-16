import React, {useContext} from 'react'
import {Link} from 'react-router-dom'
import './UsersTable.css'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { BiDetail } from 'react-icons/bi'
import { UserContext } from '../../../../context/user.Context/UserContext'
import CarDefault from '../../../../assets/images/car-default.png'

const UsersTable = () => {
   const { users, deleteUser} = useContext(UserContext)
      
      const usersList = users.length?(
         users.map(user=>{
            return(
               <tr key={user._id}>
                        <td>{ user.username }</td>
                        <td className='tablet mobile-hide'>{ user.email }</td>
                        <td className='tablet'>{ user.plan}</td>
                        <td className='tablet mobile-hide'>
                           {
                              user.image?<img crossOrigin='anonymous' src={`https://auto-care-api.herokuapp.com/${user.image}`} alt="car" height="50px" />:
                              <img src={CarDefault} alt="car" height="50px" />
                           }
                        </td>
                        <td>
                           <div className='manage-buttons'>
                                 <span className='icon-con'>
                                    <Link to={`/user-detail/${user._id}`}>
                                       <BiDetail className="icon"/>
                                    </Link>
                                 </span>
                                 <span className='icon-con'>
                                    <Link to={`/update-user/${user._id}`}>
                                       <AiFillEdit className="white" />
                                    </Link>
                                 </span>
                                 <span className='icon-con'>
                                    <AiFillDelete className="icon" onClick={()=>deleteUser(user._id)}/>
                                 </span>
                           </div>  
                        </td>
               </tr>
            )
         })
      ):(
         <div className='message'>
            <h4>No User yet</h4>
            <Link className="btn" to={'/admin-board'}>Go back</Link>
         </div>
      )
       
      return (
           <div className='all-users-container'>
              <div className='all-users'>
                  <h2>All Active Users</h2>
                  <small>Total:{users.length}</small>            
                  <table>
                     <thead>
                        <tr>
                           <th>Username</th>
                           <th className='tablet mobile-hide'>Email</th>
                           <th className='tablet'>Plan</th>
                           <th className='tablet mobile-hide'>Car Image</th>
                           <th>Manage</th>
                        </tr>
                     </thead>
                     <tbody>
                        {usersList}    
                     </tbody>
                  </table>
              </div>
          </div>
      )
  
}

export default UsersTable