import { createContext,useEffect,useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
export const Authcontext = createContext()
import toast from "react-hot-toast";

export const Authprovider=({children})=>{
     const Navigate=useNavigate()
const [Users,SetUsers]=useState(JSON.parse(localStorage.getItem('Users'))|| [])
const [User,SetUser]=useState(JSON.parse(localStorage.getItem('User')) || null)
 

useEffect(()=>{
localStorage.setItem('Users',JSON.stringify(Users))
},[Users])
 useEffect(()=>{
localStorage.setItem('User',JSON.stringify(User))
},[User])


const RegisterUser=(Formdata)=>{
const NewUser={id:Date.now(),...Formdata,role:'user'}
const NewUsers=[...Users,NewUser]
console.log(NewUsers)
SetUsers(NewUsers)
console.log(Users)
}

const loginUser=(loginData)=>{
    const {email,password}=loginData
    const usertofind = Users.find((x)=>{
         return x.email==email})
   
         console.log(email)
    if (!usertofind){
        return  toast.error('invalid user')
    }
    if(usertofind.password==password){
        SetUser(usertofind)
        Navigate('/home')
       toast.success('logged in successfully')
    
    }
     else{
      toast.error('error')

    }
}

    const logout=()=>{
        SetUser(null)
        Navigate ('/')
        localStorage.removeItem('User');
        toast.success('logged out successfully')  
    };




return <Authcontext.Provider value={{User,Users,SetUser,SetUsers,RegisterUser,loginUser,logout,}}>
    {children}
</Authcontext.Provider>

}