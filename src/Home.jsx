import React from 'react'
import './styles/home.css'
import { Link } from 'react-router-dom'
const Home = () => {
  return (
    <div>
        <div className='bgimage'>
          {/* <h1 className='food'>Food Factory</h1> */}
            <div className='enter'>
                {/* <Link to='/ulogin' className='but' >LOGIN</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to='/register' className='but' >REGISTER</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;*/}
            
                <Link to='/alogin' className='alogo'><img src="https://t4.ftcdn.net/jpg/02/27/45/09/360_F_227450952_KQCMShHPOPebUXklULsKsROk5AvN6H1H.jpg" className='aimage'/></Link> 
                <br/><b style={{color:"white"}}>Admin</b>
                </div>
            <div className='tagline'>
               <h1 style={{fontSize:"50px",marginLeft:"10px"}}>Premium food at affordable price</h1><br/>
               <h3>Enjoy the flavours of nature.Continue your diet with a healthy and tasry meal in a restaurant.</h3>
               <br/><br/>
               <Link to='/ulogin' className='but' style={{marginLeft:"25%"}} >LOGIN</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
               <Link to='/register' className='but' style={{background:"none",border:"2px solid orange"}} >REGISTER</Link>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;               
            </div>
        </div>
    </div>
  )
}

export default Home
