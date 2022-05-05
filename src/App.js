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
import Carlist from './components/carlist/Carlist'
import About from './components/about/About';
import AdminRegister from './components/forms/AdminRegister';

const App =()=>{

  return (
          <>  
          <Routes>
          <Route path="/" element={<Layout/>}>
                   <Route index element={<Hero/>} />

                   <Route path="login" element={<Login/>} />

                   <Route path="register" element={<Register/>} />

                   <Route path="/admin/register" element={<AdminRegister/>} />
                   
                   <Route   path="service" element={<Services />}  />
                   
                   <Route  path="subscribe/:id" element={<Subscribe />} /> 
                   
                   <Route path='about' element={<About />} />

                 {/* admin Routes */}
                   <Route element={<RequireAuth allowedRoles={"user"}/>}>
                        <Route  path="user-dashboard" element={<Dashboard />} /> 
                        <Route  path="upload-car/:id" element={<CarForm />} /> 
                    </Route>   

  
                    <Route element={<RequireAuth allowedRoles={"admin"}/>}>
                        <Route  path="user-detail/:id" element={<UserDetail/>}/>   
                        <Route  path="admin-board" element={<AdminDashBoard />} />
                        <Route  path="carlist" element={<Carlist/>} />
                        <Route   path="users" element={<UsersTable />}  />
                          
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
