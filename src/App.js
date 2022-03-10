import React, { useState } from 'react'
import { Routes, Route} from "react-router-dom";
import './App.css';
import axios from './components/api/axios'
import Layout from './components/layout/Layout';
import Hero from './components/hero/Hero';
import Forms from './components/forms/Forms';
import Services from './components/service/Services';
import UpdateService from "./components/updateService/UpdateService";
import Dashboard from './components/dashboards/Dashboard';
import AdminDashBoard from './components/dashboards/admin/AdminDashBoard';
import Users from './components/dashboards/admin/users/Users';
import EditUser from "./components/editUser/EditUser";
import UserDetail from "./components/userDetail/UserDetail";
import NotFound from "./components/not-found/NotFound";


const App =()=>{
// eslint-disable-next-line
  const [services, updateServices]= useState("");// eslint-disable-next-line
  const [users, updateUsers]= useState("");
// eslint-disable-next-line
 const getUsersAndServices = async()=>{
// eslint-disable-next-line
    const res = await axios.all(
       [
         axios.get('/users'),
         axios.get('/service')
      ]
     )
    .catch(err=>console.log(err))
   }
 

//  const addService = async(service) =>{
    
//     const services=[...this.state.services, service];
//     this.setState({
//       services:services
//     })
//  }
//  const deleteUser=(_id)=>{
//    const users=
//     this.setState({
//     users: users  
//   })
  // }
  return (
    <>
         <Routes path="/" element={<Layout/>}>

            <Route index element={<Hero/>} />

            <Route path="forms" element={<Forms/>} />

            <Route path="service" element={<Services/>} />
            
            <Route path="user-dashboard" element={<Dashboard/>} />

            {/* admin Routes */}
            <Route path="admin-board" element={ <AdminDashBoard /> } />
      
            <Route path="users" element={<Users />} />

            <Route path="update-service" element={<UpdateService/>} />

            <Route path="user-detail" element={<UserDetail/>} />

            <Route path="update-user" element={<EditUser/>} />
      
            <Route path="*" element={<NotFound />} />
      
        </Routes>
      </>
    );
   }


export default App;
