import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
// import AppState from './context/app.Context/AppState';
import { AuthProvider } from './context/AuthProvider'
import ServiceContextProvider from './context/service.Context/ServiceContext';
import UserContextProvider from './context/user.Context/UserContext';

ReactDOM.render(
  <React.StrictMode>
        <Router> 
          <UserContextProvider>
            <ServiceContextProvider>   
              <AuthProvider>
               <Routes>
                 <Route path="/*" element={<App />}/>
               </Routes>
              </AuthProvider>
            </ServiceContextProvider> 
          </UserContextProvider> 
        </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
