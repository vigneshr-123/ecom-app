import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { Authcontext } from '../Contexts/Authcontext'
import Login from '../pages/Login'
import Register from '../pages/Register'
import { CiLogout } from 'react-icons/ci'
import Cartcontext from '../Contexts/Cartcontext'
import { PiShoppingCartThin } from "react-icons/pi";

const Navbar = () => {
  const { User, logout } = useContext(Authcontext)
  const { CartCount } = useContext(Cartcontext)
  return (
    <div>
      <div className=' tracking-widest flex bg-gradient-to-r from-gray-300 via-gray-500 to-gray-900 p-2 font-light justify-between items-center '>
        <h1 className=' font-[impact] bg-gray-950 text-gray-200 p-1 w-16 rounded-sm text-2xl hover:scale-110 transition-all'> <Link to={'/home'}>ReGt</Link></h1>
        <div className='flex gap-5 mr-5 text-amber-50'>
          {/* <Link to={'/about'}>About</Link> */}
          {!User ? <>
            <Link className='hover:scale-110 transition-all text-xl' to={'/login'}>Login</Link>
            <Link className='hover:scale-110 transition-all text-xl' to={'/reg'}>Register</Link>
          </> :

            <>
              <Link  className=' relative hover:scale-110 transition-all px-2 py-1 text-2xl bg-white rounded-md text-black font-medium ' to={'/Cartpage'}> <PiShoppingCartThin />
                {
                  CartCount > 0 && (
                    <span className='absolute -top-2 -right-2  bg-red-500 text-white text-xs font-bold w-5 h-5  flex items-center justify-center rounded-full '>
                      {CartCount}
                    </span>
                  )}
              </Link>

              <button className='cursor-pointer transition hover:text-[#FF0000] hover:scale-110 duration-200 hover:drop-shadow-[0_0_8px_#ff0090]' onClick={logout}><CiLogout size={25} /></button>
            </>}


        </div>
      </div>

      <div>

      </div>


    </div>
  )
}

export default Navbar


//  <Link className='hover:scale-110 transition-all' to={'/'}>Home</Link> 