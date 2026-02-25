import React from 'react'
import { Authcontext } from '../Contexts/Authcontext'
import { useContext } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { PiUserCircleLight } from "react-icons/pi";
import { Link } from 'react-router-dom'


const Login = () => {
  const navigate=useNavigate()
  const {loginUser}=useContext(Authcontext)
  const[loginData,SetloginData]=useState({
    email:'',
    password:''
  })


  const handleinput=(e)=>{
    const {name,value}=e.target
    SetloginData((prev)=>({...prev,[name]:value}))
  }

  const handlesubmit=(e)=>{
    e.preventDefault()
  
      console.log(loginData)
    loginUser(loginData)
    SetloginData({
      email:'',
      password:''
    })

    
    
  }

 

  
  return (
    <div className='flex justify-center  pt-1.5 items-center h-screen bg-gray-200 bg-cover'>
      <form onSubmit={handlesubmit}  className='bg-gradient-to-r from-gray-200 via-gray-400 to-gray-900 flex flex-col  w-[300px]  text-gray-950 p-6 items-center gap-2 rounded-md  '>
         <h1> <  PiUserCircleLight className='size-10'/></h1>
        <div className='flex text-2xl font-light   '>Login </div>
        <input onChange={handleinput} name='email' value={loginData.email}  className='font-light outline-0 border-2 border-gray-900 p-1 rounded-md ' type="text" placeholder='Enter user id/email...'  />
        <input onChange={handleinput} name='password' value={loginData.password}  className=' font-light outline-0 border-2 border-gray-900 p-1 rounded-md' type="password" placeholder='Enter password...' />
        <button  className=   'bg-gray-900 p-1 text-amber-50 rounded-sm hover:scale-110 transition-all'>Submit</button>
     <p className='font-light'>Don't have an account? <span className= ' text-blue-500'><Link to={'/reg'}>Register</Link></span></p>
      </form>
    </div>
  )
}

export default Login
