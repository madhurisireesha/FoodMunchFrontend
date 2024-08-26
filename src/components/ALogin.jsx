import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import '../styles/alogin.css'
import axios from 'axios' 
const ALogin = () => {
  const[name,setName]=useState('')
  const[pass,setPass]=useState('')
  const[errMsg,seterrMsg]=useState(false)
  const navigate=useNavigate()
  const clickSubmit=(e)=>{
    e.preventDefault();
    axios.post('http://localhost:3000/alogin/ahomepage',{name,pass})
    .then((res)=>{
      if(res.data.length>0){
        setName('')
        setPass('')
        navigate('/alogin/adiminwelcome')
      }
      else{
       seterrMsg(true)
        navigate('/alogin')
      }      
    }
        )
    .catch(err=>console.log(err))
  }
  const userName=(e)=>{
    setName(e.target.value)
  }
  const onPassword=(e)=>{
    setPass(e.target.value)
  }
  return (
  
    <div className='alogincontainer'>
     <h1>Admin Login</h1>
      <form className='logincontainer' onSubmit={clickSubmit}>
      <table>
        <tr><div>
        <td> <label for="uname">Username:</label></td>
        <td><input type="text" placeholder="Enter the  username" id="uname" onChange={userName} required/></td>
        <br/>
              {errMsg===true?<h4 style={{color:"red"}}>Please enter the valid Password</h4>:""}
        </div></tr>
        <tr><div>
        <td> <label for="password">Password:</label></td>
        <td><input type="password" placeholder="Enter the password" id="password" onChange={onPassword} required/></td>
        <br/>
              {errMsg===true?<h4 style={{color:"red"}}>Please enter the valid Password</h4>:""}
        </div></tr>
        </table>
        <button type="submit" className='abut'>Submit</button>
      </form>
    </div>
  
  )
}

export default ALogin
