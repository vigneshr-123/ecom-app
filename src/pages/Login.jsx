import React from 'react'
import { Authcontext } from '../Contexts/Authcontext'
import { useContext } from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import toast from 'react-hot-toast'
import { PiUserCircleLight } from "react-icons/pi";
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { div } from 'framer-motion/client'


const Login = () => {
  const navigate = useNavigate()
  const { loginUser } = useContext(Authcontext)
  const [loginData, SetloginData] = useState({
    email: '',
    password: ''
  })


  const handleinput = (e) => {
    const { name, value } = e.target
    SetloginData((prev) => ({ ...prev, [name]: value }))
  }

  const handlesubmit = (e) => {
    e.preventDefault()

    console.log(loginData)
    loginUser(loginData)
    SetloginData({
      email: '',
      password: ''
    })



  }




  return (

    <div className='bg-[#FFF4BC] min-h-screen flex items-center'>


      <motion.div
        initial={{ y: -120, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }} className=" flex flex-1 justify-center  ">
        <div className=' relative p-20 flex flex-col pr-[320px] gap-2 items-center`  w-[650px] rounded-2xl bg-orange-400/20 bg-gradient-to-br from-orange-300 via-orange-400 to-orange-500 backdrop-blur-xl border border-orange-200/30 shadow-2xl shadow-orange-500/30">'>
          <h1 className='font-[impact] text-7xl'>Welcome,</h1>
          <h2 className='text-3xl font-light'> <span className='text-white font-bold'>Good</span> to have you back</h2>
          <h2 className='font-light text-3xl'>Login to <span className=' font-bold'>explore</span>  more</h2>
          <img className='absolute bottom-2 right-0 w-[380px] drop-shadow-2xl  ' src="https://static.vecteezy.com/system/resources/thumbnails/035/576/053/small/ai-generated-3d-cartoon-character-a-cute-student-boy-isolated-transparent-background-generated-with-ai-png.png" alt="" />
        </div>
      </motion.div>




      <motion.div
        initial={{ y: 120, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7 }}
        className='flex-1 flex  justify-center'>
        <div className='flex pt-1.5 items-center justify-center     p-12 gap-4'>
          <form onSubmit={handlesubmit} className=' flex flex-col   bg-white shadow-xl rounded-2xl p-15  text-black  items-center gap-3  '>
            <h1> <  PiUserCircleLight className='size-15' /></h1>
            <div className='flex text-2xl font-light   '>Login </div>
            <input onChange={handleinput} name='email' value={loginData.email} className='font-light outline-0  border p-2 rounded-md text-lg' type="text" placeholder='Enter user id/email...' />
            <input onChange={handleinput} name='password' value={loginData.password} className=' font-light outline-0 border  p-2 rounded-md text-lg' type="password" placeholder='Enter password...' />
            <button className='bg-gray-900 p-2 text-amber-50 rounded-sm hover:scale-110 transition-all'>Submit</button>
            <p className='font-light text-lg'>Don't have an account? <span className=' text-blue-500'><Link to={'/reg'}>Register</Link></span></p>
          </form>
        </div>
      </motion.div>



    </div >
  )
}

export default Login
