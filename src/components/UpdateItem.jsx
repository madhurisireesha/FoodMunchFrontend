import React from 'react'
import Welcome from './Welcome'
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'
const Updateitem = () => {
  const[data,setData]=useState([])
  useEffect(()=>{
    axios.put('http://localhost:3000/alogin/adiminwelcome/deleteitem')
    .then((res)=>setData(res.data))
    .catch((err)=>console.log(err))
  },[])
  return (
    <>
    {data.map((item,key)=>(
      <div className="itemscontainer">
        <div className="imagecontainer">
        <img src={item.image} alt="imagi" className='imagi'/>
        </div>
        <div className='desccontainer'>
          <h1 style={{fontFamily:"cursive",color:"white"}}>{item.name}</h1>
          <Link style={{backgroundColor:"orange",color:"white",padding:"5px",border:"none",
          borderRadius:"5px",textDecoration:'none',marginTop:"5px"
          }}>Update</Link>
        </div>
      </div>
      
    ))}
  </>
  )
}

export default Updateitem
