import React from 'react'
import '../styles/welcomeadmin.css'
import {Link} from 'react-router-dom'
const Welcomeadmin = () => {
  return (
    <div className="container">
      <div class="human">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdibDVxDer6htB4nmqh3gDgkkwo4b6281zeg&s" alt="human" className='human'/>
      </div>
      <div className='adminop'>
       <div className='opbt'><Link to="/alogin/adiminwelcome/additem" className='linkbut'>Add Item</Link></div> 
       <div className='opbt'><Link to="/alogin/adiminwelcome/deleteitem" className='linkbut'>Delete Item</Link></div> 
       
       {/* <div className='opbt'><Link to="/alogin/adiminwelcome/updateitem" className='linkbut'>Update Item</Link></div>  */}
      </div>
    </div>
  )
}

export default Welcomeadmin
