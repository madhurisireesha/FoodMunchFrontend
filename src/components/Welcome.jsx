import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import '../styles/welcome.css'
const Welcome = () => {
  const[data,setData]=useState([])
  const navigate=useNavigate()
   useEffect(()=>{
    axios.get('http://localhost:3000/welcome')
    .then((res)=>{setData(res.data)})
    .catch((err)=>{console.log(err)})
  },[])
 
const addItem=(id)=>{
  console.log("Added item successfully")
  axios.post('http://localhost:3000/welcome/'+id)
  .then((res)=>{console.log(res)})
  .catch((err)=>{console.log(err)})

}
const addCart=(id)=>{
  console.log("Added item successfully")
  axios.post('http://localhost:3000/welcome/cs/'+id)
  .then((res)=>{console.log(res)})
  .catch((err)=>{console.log(err)})

}

  return (
   
    <>
    <Link to="/orderlist" 
      style={{backgroundColor:"orange",color:"white",border:"none",padding:"5px",
        borderRadius:"10px",textDecoration:"none",position:"fixed",textAlign:"center",
        marginLeft:"4%",marginTop:"1%"
      }}
    >My Orders</Link><br/><br/><br/>
    {/* <Link to='/logout'
      style={{backgroundColor:"orange",color:"white",border:"none",padding:"5px",
        borderRadius:"10px",textDecoration:"none",position:"fixed",textAlign:"center",
        marginLeft:"4%",marginTop:"1%"
      }}
    >Logout</Link> */}
      {data.map((item,key)=>(
        <div className="itemscontainer">
          <div className="imagecontainer">
          <img src={item.image} alt="imagi" className='imagi'/>
          </div>
          <div className='desccontainer'>
            <h1 style={{fontFamily:"cursive",color:"white"}}>{item.name}</h1>
            <h2 style={{color:"white"}}>Cost:{item.price}/-</h2>
            <p style={{color:"white"}}>{item.description}</p>
            <br/><br/>
            <div>
            <Link to="/order"className='but' style={{marginTop:"20px"}}
              onClick={()=>addItem(item.name)}>Order Now</Link>&nbsp;&nbsp;&nbsp;
              <Link to="/cart"className='but' style={{marginTop:"20px",background:"none",border:
              "2px solid orange"}}
              onClick={()=>addCart(item.name)}>Add To Cart</Link>
            </div>
          </div>
        </div>
        
      ))}
    </>
  )
}

export default Welcome
