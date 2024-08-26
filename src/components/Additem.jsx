import React, { useState } from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import '../styles/additem.css'
const Additem = () => {
  const[image,setImage]=useState('')
  const[name,setName]=useState('')
  const[price,setPrice]=useState('')
  const navigate=useNavigate()
  const[description,setDescription]=useState('') 
  const addImage=(e)=>{
    setImage(e.target.value)
  }
  const addName=(e)=>{
    setName(e.target.value)
  }
  const addPrice=(e)=>{
    setPrice(e.target.value)
  }
  const addDesc=(e)=>{
    setDescription(e.target.value)
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    axios.post('http://localhost:3000/alogin/adiminwelcome/additem',{image,name,price,description})
    .then(res=>{
      setImage('')
      setName('')
      setDescription('')
      setPrice('')
      console.log(res)
      
    })
    .catch(err=>{console.log(err)})
  }
  return (
    <div className='addcontainer'>
      <form onSubmit={handleSubmit} className='formcontainer'>
        <label>Image:</label><input type="text" placeholder="Enter the Imageurl" onChange={addImage}/><br/>
        <label>Name:</label><input type="text" placeholder="Enter the name" onChange={addName}/><br/>
        <label>Price:</label><input type="text" placeholder="Enter the price" onChange={addPrice}/><br/>
        <label>About:</label><textarea rows="3" placeholder='Enter the description' onChange={addDesc}/><br/>
        <button type="submit" className='but' style={{marginLeft:"40%",padding:"15px"}}>Add</button>
      </form>
    </div>
  )
}

export default Additem
