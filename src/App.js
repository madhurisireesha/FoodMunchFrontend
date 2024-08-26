import React from 'react'
import Home from './Home'
import ULogin from './components/ULogin'
import ALogin from './components/ALogin'
import Register from './components/Register'
import Notfound from './components/Notfound'
import Welcomeadmin from './components/Welcomeadmin'
import  Additem from './components/Additem'
import Updateitem from './components/UpdateItem'
import Deleteitem from './components/Deleteitem'
import Welcome from './components/Welcome'
import Order from './components/Order'
import Cart from './components/Cart'
import Logout from './components/Logout'
import{BrowserRouter,Routes,Route} from 'react-router-dom'
import Orderlist from './components/Orderlist'

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" Component={Home}/>
        <Route exact path="/ulogin" Component={ULogin}/>
        <Route exact path="/register" Component={Register}/>
        <Route exact path="/alogin" Component={ALogin}/>
        <Route path="/alogin/adiminwelcome" Component={Welcomeadmin}/>
        <Route exact path="/alogin/adiminwelcome/additem" Component={Additem}/>
        <Route exact path="/alogin/adiminwelcome/deleteitem" Component={Deleteitem}/>
        <Route exact path="/alogin/adiminwelcome/updateitem" Component={Updateitem}/>
        <Route exact path="/welcome" Component={Welcome}/> 
        <Route exact path="/order" Component={Order}/>
        <Route exact path="/orderlist" Component={Orderlist}/>
        <Route exact path="/cart" Component={Cart}/>
        <Route exact path="/logout" Component={Logout}/> 
        <Route  path="*" Component={Notfound}/>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App
