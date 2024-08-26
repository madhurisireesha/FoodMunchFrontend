import React, { useState } from 'react'
import '../styles/ulogin.css'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
const ULogin = () => {
  const[uname,setName]=useState('')
  const[pass,setPass]=useState('')
  const[errMsg,seterrMsg]=useState(false)
  const navigate=useNavigate()
  const addName=(e)=>{
    setName(e.target.value)
  }
  const addPass=(e)=>{
    setPass(e.target.value)
  }
  const submitForm=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:3000/ulogin',{uname,pass})
    .then((res)=>{
      if(res.data.length>0){
        console.log(res.data.length)
        setName('')
        setPass('')
        navigate('/welcome')        
      }
      else{
        setName('')
        setPass('')
        seterrMsg(true)
        navigate('/ulogin')
      }     
    })
    .catch((err)=>{
      console.log(err)
    })
  }
  return (
    <div className='login-container'>
      <form className='loginform' onSubmit={submitForm}>
          <h1 style={{color:"orange",textDecoration:"underline"}}>Login Here!</h1>
          <div>
            <label for="name">UserName:</label>
              <input type="text" id="name" name="name" value={uname} onChange={addName} required/>
              <br/>
              {errMsg===true?<h4 style={{color:"red"}}>Please enter the valid Password</h4>:""}
            </div>
           
            <div>
            <label for="password">Password:</label>
              <input type="password" id="password" name="password" value={pass} onChange={addPass} required/>
              <br/>
              {errMsg===true?<h4 style={{color:"red"}}>Please enter the valid username</h4>:""}
            </div>
            <div>
            <button type="submit" className='but' style={{marginTop:"10px"}}>Login</button>
            </div>
      </form>
    </div>
  )
}

export default ULogin
