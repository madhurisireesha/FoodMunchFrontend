import React, { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import '../styles/register.css'
const Register = () => {
  const[uname,setUname]=useState('')
  const[email,setEmail]=useState('')
  const[password,setPassword]=useState('')
  const navigate=useNavigate()
  const addUName=(e)=>{
    setUname(e.target.value)
  }
  const addPassword=(e)=>{
    setPassword(e.target.value)
  }
  const addEmail=(e)=>{
    setEmail(e.target.value)
  }
  const regSubmit=async(e)=>{
    e.preventDefault()
    axios.post('http://localhost:3000/register',{uname,email,password})
    .then((res)=>{
      console.log(res)
     setUname('')
     setEmail('')
     setPassword('')
      navigate('/welcome')
    })
    .catch(err=>console.log(err))
  }

  return (
    <div className='login-container'>
      <form className='loginform' onSubmit={regSubmit}>
          <h1 style={{color:"orange",textDecoration:"underline"}}>Register Now...</h1>
          <div>
            <label for="name">UserName:</label>
              <input type="text" id="name" name="name" onChange={addUName} value={uname} required/>
            </div>
            <div>
            <label for="password">Email:</label>
              <input type="email" id="email" name="email" onChange={addEmail} value={email} required/>
            </div>
            <div>
            <label for="password">Password:</label>
              <input type="password" id="password" name="password" onChange={addPassword} value={password} required/>
            </div>
            
            <div>
            <button type="submit" className='but' style={{marginTop:"10px"}}>Register</button>
            </div>
      </form>
    </div>
  )
}

export default Register
