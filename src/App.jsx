import { useState } from 'react'
import reactLogo from './assets/react.svg'
import Login from './pages/Login'
import Register from './pages/Register'
import About from './pages/About'
import { Route, Routes } from 'react-router-dom'
import { Authprovider } from './Contexts/Authcontext'
import { ProductProvider } from './Contexts/Productcontext'
import Navbar from './Components/Navbar'
import Home from './pages/Home'
import { Toaster } from 'react-hot-toast'
import { Cartprovider } from './Contexts/Cartcontext'
import Card from './Components/Card'
import Cartpage from './pages/Cartpage'
import Privateroutes from './Components/Privateroutes.jsx'
import Checkout from './pages/Checkout.jsx'
function App() {
  

  return (
    <div>
      <Toaster />

    <Authprovider>
      <Cartprovider>

      <ProductProvider>

      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/reg' element={<Register/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/home' element={  <Home/>  }/> 
        <Route path='/Cartpage' element={ <Privateroutes><Cartpage/></Privateroutes>  }/> 
        <Route path='/checkout' element={  <Privateroutes><Checkout/></Privateroutes>   }/> 


      </Routes>
      </ProductProvider>
    </Cartprovider>

    </Authprovider>
    </div>
  )
}

export default App
