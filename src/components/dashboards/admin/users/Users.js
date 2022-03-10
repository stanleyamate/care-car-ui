// import {Component} from 'react'
import {Link} from 'react-router-dom'
import './Users.css'
import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { MdUnsubscribe } from 'react-icons/md'
// import axios from '../../../api/axios'

const Users = () => {
{
   // axios
   //     .get('/users')
   //     .then(res=>{
   //        console.log(res.data.data);
   //         this.setState({
   //               users:res.data.data
   //         })
   //       });
         

 }

      const {users}=this.state;
      const usersList = users.length?(
         users.map(user=>{
            return(
               <li className='user' key={user._id}>
                  <div className='username'>{ user.username }</div>
                              <div className='email mobile-hide'>{ user.email}</div>
                              <div className=''> {user.plan}</div>
                        <div className='manage-buttons'>
                           <span className='icon-con'>
                                <AiFillEdit className="icon" onMouseOver={({target})=>target.style.color="blue"}
                                onMouseOut={({target})=>target.style.color=""}/>
                            </span>
                            <span className='icon-con'>
                                <AiFillDelete className="icon"/>
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