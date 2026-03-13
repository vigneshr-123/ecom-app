import React, { useEffect, useState } from 'react'
import { createContext } from 'react'
import axios from 'axios'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { Authcontext } from './Authcontext'
import { Link } from 'react-router-dom'




const Cartcontext = createContext()
export const Cartprovider = ({ children }) => {

    const [Cart, SetCart] = useState(()=>{
        const Storedcart=localStorage.getItem('cart')
        return Storedcart?JSON.parse(Storedcart):[]})

        useEffect(()=>{
            localStorage.setItem('cart',JSON.stringify(Cart))
        },[Cart])



    const { User } = useContext(Authcontext)
    const Navigate = useNavigate()

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(Cart))
    }, [Cart])

    const AddtoCart = (product) => {
        if (!User) {
            toast((t) => (
                <span className=' flex items-center gap-2 '>
                    Login to continue
                    <button className='border-1 p-1 rounded-md hover:bg-green-400 ' onClick={() => toast.dismiss(t.id)}> <Link to={'/login'}>Click Here</Link>  </button>
                </span>
            ));
            Navigate('/')
            return
        }


        const existingproduct = Cart.find((x) => x.id == product.id);
        if (existingproduct) {
            SetCart((prevCart) =>
                prevCart.map((item) => item.id === product.id ? { ...item, qty: item.qty + 1 } : item
                )
            )
            console.log(Cart)
            return;
        }



        const Newproduct = { id: Date.now(), ...product, qty: 1 }
        SetCart((prev) => ([...prev, Newproduct]))
        console.log(Cart)
        toast.success('Product added to cart')
    }


    const Decreaseqty = (product) => {
        const existingproduct = Cart.find((x) => x.id == product.id);
        if(existingproduct.qty == 1){
            toast("item removed from🛒")
        }
        if (existingproduct) 
            {
            SetCart((prevCart) =>
                prevCart.map((item) => item.id === product.id ? { ...item, qty: item.qty - 1 } : item
                )
                    .filter((item) => item.qty > 0)
            )

        }
    }

    const CartCount = Cart.reduce((total, item) => total + item.qty, 0)

    const Clearcart = () => {
        if (Cart.length === 0) {
            toast('Nothing to clear !')
            return
        }
        SetCart([])
        



    }


    return <Cartcontext.Provider value={{ AddtoCart, Cart, Decreaseqty, Clearcart, CartCount }}>
        {children}
    </Cartcontext.Provider>

}

export default Cartcontext
