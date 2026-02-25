import React, { useContext } from 'react'
import { Authcontext } from '../Contexts/Authcontext'
import { Navigate } from 'react-router-dom'

const Privateroutes = ({ children }) => {
    const { User } = useContext(Authcontext)
    if (!User) {
         return <Navigate to={'/login'} replace/>
    }
         return children
   
   
}

export default Privateroutes
