import React from 'react'
import { Route, Routes} from "react-router-dom";
import './App.css';
// import axios from 'axios'
import Layout from './components/layout/Layout';
import Hero from './components/hero/Hero';
import Login from './components/forms/Login';
import Register from './components/forms/Register';
import Services from './components/service/Services';
import UpdateService from "./components/updateService/UpdateService";
import Dashboard from './components/dashboards/Dashboard';
import AdminDashBoard from './components/dashboards/admin/AdminDashBoard';
import EditUser from "./components/editUser/EditUser";
import UserDetail from "./components/userDetail/UserDetail";
import NotFound from "./components/not-found/NotFound";
import RequireAuth from './components/RequireAuth';
import CarForm from './components/carForm/CarForm';
import Subscribe from './components/subcribe/Subscribe';
import UsersTable from './components/dashboards/admin/users-table/UsersTable';
import About from './components/about/About';

const App =()=>{

  return (
          <>  
          <Routes>
          <Route path="/" element={<Layout/>}>
                   <Route index element={<Hero/>} />

                   <Route path="login" element={<Login/>} />

                   <Route path="register" element={<Register/>} />

                   <Route   path="service" element={<Services />}  />
                   
                   <Route path='about' element={<About />} />

                 {/* admin Routes */}
                   <Route element={<RequireAuth allowedRoles={"user"}/>}>
                        <Route  path="user-dashboard" element={<Dashboard />} /> 
                        <Route  path="upload-car/:id" element={<CarForm />} /> 
                    </Route>    
                    
                    <Route  path="subscribe/:id" element={<Subscribe />} /> 
                       

                    <Route element={<RequireAuth allowedRoles={"admin"}/>}>
                        <Route  path="admin-board" element={<AdminDashBoard />} />
                         <Route   path="users" element={<UsersTable />}  />
                         <Route  path="user-detail/:id" element={<UserDetail/>}/>  
                         <Route  path="update-service/:id" element={<UpdateService/>} />
                         <Route  path="update-user/:id" element={<EditUser/>} />
                     </Route>
  
                   <Route path="*" element={<NotFound />} />
               </Route>

          </Routes>     
          </>

    );
   }


export default App;
