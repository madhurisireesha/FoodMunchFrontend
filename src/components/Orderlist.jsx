import React from 'react'
import axios from 'axios'
import { useState } from 'react'
import { useEffect } from 'react'
const Orderlist = () => {
  const[data,setData]=useState([])
  useEffect(()=>{
    axios.get('http://localhost:3000/orderlist')
    .then((res)=>setData(res.data))
    .catch((err)=>console.log(err))
  })
  return (
    <div className='ord' style={{backgroundColor:"black",height:"100vh",display:"flex",
      flexDirection:"column",alignItems:"center",padding:"3%"
    }} >
      {data.map((item,key)=>(
        
          <div className="itemscontainer">
            <div className="imagecontainer">
            <img src={item.image} alt="imagi" className='imagi'/>
            </div>
            <div className='desccontainer'>
              <h1 style={{fontFamily:"cursive",color:"white"}}>{item.name}</h1>
              <h2 style={{color:"white"}}>Cost:{item.price}/-</h2>
              <p style={{color:"white"}}>{item.description}</p>
              
            </div>
          </div>
          
  
      ))}
    </div>
  )
}

export default Orderlist
