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
  const navigate = useNavigate()
  const { RegisterUser } = useContext(Authcontext)
  const [Formdata, SetFormdata] = useState({
    name: '',
    email: '',
    password: ''
  })

  const handleinput = (e) => {
    const { name, value } = e.target
    SetFormdata((prev) => ({ ...prev, [name]: value }))


  }
  const handlesubmit = (e) => {
    e.preventDefault()
    if (!Formdata.name || !Formdata.email || !Formdata.password) {
      return toast.error("Fill required fields")
    }
    else {
      toast.success("succesfully registerd")
    }

    RegisterUser(Formdata)
    SetFormdata({
      name: '',
      email: '',
      password: '',
    })
  }

  return (
    <div className=' bg-black min-h-screen flex flex-col md:flex-row items-center '>




      
      <motion.div
              initial={{ y: 120, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7 }} className='flex flex-1 items-center justify-center'>
        <img
          className='max-w-full h-auto'
          src="https://media1.giphy.com/media/v1.Y2lkPWVjZjA1ZTQ3YjRsN24xa3RraXQ3OGh4bG5ibW1mNDc3Y3owbXhyc29lamUyeXUzNyZlcD12MV9naWZzX3NlYXJjaCZjdD1n/Z9nyDUIvUPNKg/giphy.webp"
          alt=""
        />
      </motion.div>





      <motion.div
              initial={{ y: -120, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.7 }} className='flex-1 flex  justify-center'>
        <div className='flex pt-1.5 items-center justify-center  p-12 gap-4'>
          <form onSubmit={handlesubmit} className=' flex flex-col    shadow-xl rounded-2xl p-15    items-center gap-3   '>
            <div className='flex text-5xl text-white font-light '>Create your account </div>
            <p className='font-light text-lg text-[#616161]'>Already have an account?<span className='text-[#ff5b31] font-bold'> <Link to={'/login'}>Sign in</Link></span></p>


            <h1> <  PiUserCircleLight className='size-20 text-white' /></h1>
            <input onChange={handleinput} name='name' value={Formdata.name} className='font-light bg-[#303030] text-white outline-0  md:w-70  p-2 rounded-xl text-lg ' type="text" placeholder='Enter name...' />
            <input onChange={handleinput} name='email' value={Formdata.email} className='font-light bg-[#303030] text-white outline-0   md:w-70   p-2 rounded-xl text-lg' type="email" placeholder='Enter email id...' />
            <input onChange={handleinput} name='password' value={Formdata.password} className='font-light bg-[#303030] text-white outline-0   md:w-70   p-2 rounded-xl text-lg' type="password" placeholder='New password...' />
            <button className="bg-[#ff5b31] p-1 w-20 text-amber-50 rounded-xl hover:scale-110 transition-all font-bold" >save</button>
          </form>
        </div>
      </motion.div>









    </div>
  )
}

export default Register
