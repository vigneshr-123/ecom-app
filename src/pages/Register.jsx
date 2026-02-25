import React from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { Authcontext } from '../Contexts/Authcontext'
import { useNavigate } from 'react-router-dom'
import { PiUserCircleLight } from "react-icons/pi";
import toast from 'react-hot-toast'
import { Link } from 'react-router-dom'

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
    <div className='flex justify-center  pt-1.5 items-center h-screen bg-gradient-to-r from- bg-gray-950 via-gray-900 to-gray-950 bg-cover'>
      <section>
      <form onSubmit={handlesubmit} className=' bg-gradient-to-r from-gray-50 via-gray-400   flex flex-col  w-[300px]   text-gray-950 p-6 items-center gap-3 rounded-md  '>
       <h1> <  PiUserCircleLight className='size-10'/></h1>
        <div className='flex text-2xl font-light '>Register </div>
        <input onChange={handleinput} name='name' value={Formdata.name} className='font-light  outline-0 border-2 border-gray-950 p-1 rounded-md ' type="text" placeholder='Enter name...'  />
        <input onChange={handleinput} name='email' value={Formdata.email} className='font-light  outline-0 border-2 border-gray-950 p-1 rounded-md' type="email" placeholder='Enter email id...' />
        <input onChange={handleinput} name='password' value={Formdata.password} className='font-light outline-0 border-2 border-gray-950 p-1 rounded-md' type="password" placeholder='New password...' />

       
        <button  className='bg-gray-900 p-1 text-amber-50 rounded-md w-15 hover:scale-110 transition-all'>save</button>
     <p className='font-light'>Already have an account?<span className='text-blue-500'> <Link to={'/login'}>Sign in</Link></span></p>
      </form>
      </section>
      
    </div>
  )
}

export default Register
