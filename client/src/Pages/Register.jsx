import React, { useState } from 'react'
import '../stylePages/loginStyles/App.css'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import * as Yup from 'yup';



const Register = () => {
    
const [name, setName] = useState("")
const [email, setEmail] = useState("")
const [password, setPassword] = useState("")
const [error, setError] = useState('')
const [errors, setErrors] = useState('')
const navigate = useNavigate()

const handleName = (e) => {
    setName(e.target.value)
}

const handleEmail = (e) => {
    setEmail(e.target.value)
}

const handlePassword = (e) => {
    setPassword(e.target.value)
}

const validationSchema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    password: Yup.string().min(8, 'Password must be at least 8 characters').required('Password is required'),
  });
  

const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await validationSchema.validate({ name, email, password }, { abortEarly: false });
      // Validation passed, make the API call
      await axios.post(`${process.env.REACT_APP_BASE_URL}/register`, { name, email, password });
      console.log('User saved successfully');
      setName('');
      setEmail('');
      setPassword('');
      navigate('/login');
    } catch (error) {
      if (error.name === 'ValidationError') {
        // Validation failed, handle the validation errors
        const validationErrors = {};
        error.inner.forEach((err) => {
          validationErrors[err.path] = err.message;
        });
        setErrors(validationErrors);
      } else if (error.response.status === 300) {
        setError('Username already exists');
      }
      setTimeout(() => {
        setError(null);
        setErrors('')
      }, 2000);
    }
  };
  




  return (
    <>
    <section className='register-section'>
        <div className="container">
            <div className="register-form login-form">
                <h1>Create your account</h1>
                <form action="" onSubmit={handleSubmit}>
                {error && <p className='error-message'>{error}</p>}

                    <label htmlFor="name">Full Name</label>
                    <input type="text" name="name" value={name} id="name" placeholder='John Doe' onChange={handleName} required/>
                    {errors.name && <span className="error-message">{errors.name}</span>}
                    <label htmlFor="email">Email Address</label>
                    <input type="email" name="email" value={email} id="email" placeholder='name@example.com' onChange={handleEmail} required/>
                    {errors.email && <span className="error-message">{errors.email}</span>}
                    <label htmlFor="password">Password</label>
                    <input type="password" value={password} name="password" id="password" placeholder='**************' onChange={handlePassword} required/>
                    {errors.password && <span className="error-message">{errors.password}</span>}
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