import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { Authcontext } from '../Contexts/Authcontext'
import { useNavigate } from 'react-router-dom'
import { PiUserCircleLight } from "react-icons/pi";
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const Register = () => {
  const navigate=useNavigate()
  const {RegisterUser}=useContext(Authcontext )
  const [Formdata,SetFormdata]=useState({
    name:'',
    email:'',
    password:'' 
  })
  
  const handleinput=(e)=>{
    const {name,value}=e.target
    SetFormdata((prev)=>({...prev,[name]:value}))
    
    
  }
  const handlesubmit=(e)=>{
    e.preventDefault()
    if(!Formdata.name ||!Formdata.email ||!Formdata.password){
      return  toast.error("Fill required fields")
    }
    else{
      toast.success("succesfully registerd")
    }
  
    RegisterUser(Formdata)
    SetFormdata({
      name:'',
      email:'',
      password:'',
    })
}

  return (
    <div className=' bg-[#FFF4BC] min-h-screen flex items-center '>


      <div className=''>



      </div>
      
      
      
      
      
      <div className='flex-1 flex  justify-center'>

      
      
      <div className='flex pt-1.5 items-center justify-center  p-12 gap-4'>
      <form onSubmit={handlesubmit} className=' flex flex-col   bg-white shadow-xl rounded-2xl p-15  text-black  items-center gap-3   '>
       <h1> <  PiUserCircleLight className='size-15'/></h1>
        <div className='flex text-2xl font-light '>Register </div>
        <input onChange={handleinput} name='name' value={Formdata.name} className='font-light outline-0  border p-2 rounded-md text-lg ' type="text" placeholder='Enter name...'  />
        <input onChange={handleinput} name='email' value={Formdata.email} className='font-light outline-0 border  p-2 rounded-md text-lg' type="email" placeholder='Enter email id...' />
        <input onChange={handleinput} name='password' value={Formdata.password} className='font-light outline-0 border  p-2 rounded-md text-lg' type="password" placeholder='New password...' />
        <button  className="bg-gray-900 p-2 text-amber-50 rounded-sm hover:scale-110 transition-all" >save</button>
     <p className='font-light text-lg'>Already have an account?<span className='text-blue-500'> <Link to={'/login'}>Sign in</Link></span></p>
      </form>
      </div>
      </div>
      








    </div>
  )
}

export default Register
