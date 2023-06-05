import React, { useState } from 'react'
import '../stylePages/loginStyles/App.css'
import axios from 'axios'

const Register = () => {
    
const [name, setName] = useState("")
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")

const handleName = (e) => {
    setName(e.target.value)
}

const handleEmail = (e) => {
    setEmail(e.target.value)
}

const handlePassword = (e) => {
    setPassword(e.target.value)
}

const handleSubmit = async (e) => {
    e.preventDefault()
    try {
        await axios.post('http://localhost:3001/register', {name, email, password})
        console.log('User saved successfully');
        setName('')
        setEmail('')
        setPassword('')
       window.location.href = '/login'
    } catch (error) {
        console.error('Error saving user', error);
    }
}

  return (
    <>
    <section className='register-section'>
        <div className="container">
            <div className="register-form login-form">
                <h1>Create your account</h1>
                <form action="" onSubmit={handleSubmit}>
                    <label htmlFor="name">Full Name</label>
                    <input type="text" name="name" value={name} id="name" placeholder='John Doe' onChange={handleName} required/>
                    <label htmlFor="email">Email Address</label>
                    <input type="email" name="email" value={email} id="email" placeholder='name@example.com' onChange={handleEmail} required/>
                    <label htmlFor="password">Password</label>
                    <input type="password" value={password} name="password" id="password" placeholder='**************' onChange={handlePassword} required/>
                    <button type='submit'>Sign up</button>
                    <p>  Already have an account ?
                         <a href="/login"> Sign in here</a> 
                    </p>
                </form>
               
            </div>
            
        </div>
    </section>
</>
  )
}

export default Register