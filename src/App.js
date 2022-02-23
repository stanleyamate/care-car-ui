import React from 'react'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import './App.css';
import Navbar from './components/navbar/Navbar';
import Hero from './components/hero/Hero';
import Footer from './components/footer/Footer';
import Forms from './components/forms/Forms';
import Dashboard from './components/dashboards/Dashboard';
import AdminDashBoard from './components/dashboards/admin/AdminDashBoard';
import Services from './components/services-2/Services';
import Users from './components/dashboards/admin/users/Users';

function App() {
  return (
    <>
    <Router>
     <Navbar />
     <Switch>
      <Route path="/service">
        <Services/>  
      </Route>
      <Route path="/user-dashboard">
        <Dashboard/>
      </Route>
      <Route path="/admin-dashboard">
        <AdminDashBoard/>
      </Route>
      <Route path="/forms">
        <Forms/>
      </Route>
      <Route path="/users">
        <Users />
      </Route>
      <Route path="/">
        <Hero/>
      </Route>
    </Switch>
  </Router>
  <Footer />
    </>
  );
}

export default App;
