import Navbar from './components/Navbar';
import './App.css';
import {Routes, Route, useLocation } from 'react-router-dom'
import './index.css'
import Home from './Pages/Home';
import Tasks from './Pages/Tasks';
import Projects from './Pages/Projects';
import Login from './Pages/Login';
import Register from './Pages/Register';
import { useState } from 'react';

function App() {

  const [userName, setUser] = useState("")
  const [adminEmail, setAdminEmail] = useState("")
  const location = useLocation()
  // Check if the current location is the Login page
  const isLoginPage = location.pathname === '/login' 
  const isRegisterPage = location.pathname === '/register'
  return (
    <div className='everything'>
   <>
   {isLoginPage || isRegisterPage ? null : <Navbar userName={userName} email={adminEmail}/>}
   
   <Routes>
    <Route path='/login' element={isRegisterPage ? null : <Login setUser={setUser} setAdminEmail={setAdminEmail}/>} />
    <Route path='/register' element={isLoginPage ? null  : <Register />} />
    <Route path='/' element={<Home />} /> 
    <Route path='/task' element={<Tasks />} />
    <Route path='/projects' element={<Projects />} />
  </Routes>
  
   </>
   </div>
     );
    }


export default App;
