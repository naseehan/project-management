import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from "../assets/navbar/logo.svg"
import avatar from '../assets/employeeImg/avatar.jpg'
import { useCookies } from 'react-cookie'


const Navbar = ({ userName,email }) => {

const [user, setUser] = useState(false)
const [cookie, setCookies] = useCookies(["access_token"])
const [navbar, setNavbar] = useState(false)
const navigate = useNavigate()

const logout = () => {
    setCookies("access_token", "")
    window.localStorage.removeItem("userID")
    navigate("/login")
}

const signOut = () => {
    setCookies("access_token", "")
}

const handleUser = (e) => {
    e.preventDefault();
    setUser(!user)
}

const mobileNavbar = (e) => {
      setNavbar(!navbar);
    e.preventDefault();
}

  return (
    <nav>

{/* for mobile devices */}
<div className={`mobile-navbar ${navbar ? "mobile" : ""}`}>

            <div onClick={mobileNavbar} className='navbar-close'>
                    <i className="fa-regular fa-x fa-xl"></i>
            </div>

            <ul>
                <li onClick={mobileNavbar}>
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li onClick={mobileNavbar}>
                    <Link to="/task">
                        Task Lists
                    </Link>
                </li>
                <li onClick={mobileNavbar}>
                    <Link to="/projects">
                    Project Details
                    </Link>
                </li>
            <li>
            {!cookie.access_token ?     
                 (   
                        <div className="active-user login-button">  <button onClick={logout}>
                        <span class="shadow"></span>
                        <span class="edge"></span>
                        <span class="front text"> Login </span>
                        </button>  
                        </div>
                 ) : (
                        <div className="user-image mobile-user">
                        <p>{userName}</p>
                        <img src={avatar} alt="user" onClick={handleUser}/>
                        {/* <button>dfsf</button> */}
                        </div>
                  )
            }
            </li>
            </ul>
            
</div>


        <div 
         className={`user-overlay ${user ? "active-user" : ""}`}
         onClick={handleUser}>
         </div>
        {/* for desktop */}
        <div className="desk-navbar">
            <div className="nav-img">
                <img src={logo} alt="my-task" />
            </div>

            <ul className={`${navbar ? "mobile" : ""}`}>
                <li>
                    <Link to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link to="/task">
                        Task Lists
                    </Link>
                </li>
                <li>
                    <Link to="/projects">
                    Project Details
                    </Link>
                </li>
            </ul>
            {!cookie.access_token ?     
                 (   
                        <div className="active-user login-button">  <button onClick={logout}>
                        <span class="shadow"></span>
                        <span class="edge"></span>
                        <span class="front text"> Login </span>
                        </button>  
                        </div>
                 ) : (
                        <div className="user-image">
                        <p>{userName}</p>
                        <img src={avatar} alt="user" onClick={handleUser}/>
                        {/* <button>dfsf</button> */}
                        </div>
                  )
            }
            <div className="hamburger-button" onClick={mobileNavbar}>
                    <label class="hamburger">
                    <input type="checkbox" />
                    <svg viewBox="0 0 32 32">
                    <path class="line line-top-bottom" d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                    <path class="line" d="M7 16 27 16"></path>
                    </svg>
                    </label>
            </div>
        </div>
       
                  <div className={`user-info ${user ? "active-user" : ""}`}>
                        <h3>{userName}</h3>
                        <p>{email}</p>
                        <a href="/task">My tasks</a>
                        <a href="/projects">My projects</a>
                       <Link to="/login">
                        <button onClick={signOut}>
                                <span class="shadow"></span>
                                <span class="edge"></span>
                                <span class="front text"> SignOut </span>
                        </button>
                        </Link>
        </div>
    </nav>
  )
}

export default Navbar