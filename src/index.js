import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
<<<<<<< HEAD
// import AppState from './context/app.Context/AppState';
import { AuthProvider } from './context/AuthProvider'
import ServiceState from './context/service.Context/ServiceState';

=======
import { AuthProvider } from './context/AuthProvider'
import Navbar from './components/navbar/Navbar';
>>>>>>> ec8045fa6170b3b36bc65e15c7d1fd3920462973

ReactDOM.render(
  <React.StrictMode>
        <Router>
        <ServiceState>
          <AuthProvider>
           <Routes>
            <Route path="/*" element={<App />}/>
           </Routes>
          </AuthProvider>
         </ServiceState>
        </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
