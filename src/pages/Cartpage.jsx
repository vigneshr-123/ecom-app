import React from 'react'
import { useState } from 'react'
import Cartcontext from '../Contexts/Cartcontext'
import { useContext } from 'react'
import Card from '../Components/Card'
import { BsFillCartXFill } from "react-icons/bs";
import { Link, useNavigate } from 'react-router-dom'
import { MdOutlineDeleteForever } from "react-icons/md";
import { IoBagCheckOutline } from "react-icons/io5";
import toast from 'react-hot-toast'

const Cartpage = () => {
  const navigate = useNavigate()
  const { Cart, AddtoCart, Decreaseqty, Clearcart } = useContext(Cartcontext)
  return (
    <div className=' bg-gray-950 h-screen'>
      <div className='flex justify-center pt-7 gap-5'>

        {Cart && Cart.length === 0 ? (
          <div className='flex flex-col gap-7 text-white ' >
            <h1 className='flex justify-center text-[100px]  '><BsFillCartXFill /></h1>
            <p className='text-7xl font-[impact]'>Your cart is  <span className='text-red-600 animate-pulse '> empty!</span></p>
            <p> <span className='text-blue-500'><Link to={'/'}>Click here</Link></span> add products</p>
          </div>


        ) : (

          Cart?.map((product) => {

            return <div className=' bg-gray-50   shadow-xl p-2 rounded-md ' key={product.id}>
              <img className='w-[150px] h-[150px] object-cover object-top m-auto ' src={product.image} alt="" />
              <h1 className=''>{product.title}</h1>
              <h2 className=' '> {product.price}</h2>

              <div className='flex gap-2 justify-between'>

                <div className='flex gap-3'>
                  <button className='w-[50px] h-8 flex items-center justify-center  bg-gray-200 hover:bg-red-500 hover:text-white   rounded-md duration-150 hover:scale-105 transition-all font-bold' onClick={() => {
                    if (product.qty > 1) {
                      Decreaseqty(product)
                    }
                    else {
                      Decreaseqty(product)
                    }
                  }}> - </button>


                  <p className=''>{product.qty}</p>
                  <button className=' w-[50px] p-0.5 rounded-md bg-gray-200 hover:bg-green-500  hover:text-white font-bold duration-150 hover:scale-105 transition-all ' onClick={() => { AddtoCart(product) }}> + </button>
                </div>

              </div>

            </div>
          })
        )}



      </div>

      <div className='bg-white'>

        <button onClick={() => {
          if (Cart.length === 0) {
            return toast.error('Nothing to checkout')
          }
          navigate('/checkout')
        }} className=' flex items-center gap-1 text-white text-2xl  bg-blue-500 p-1 rounded-md hover:bg-blue-600 pr-4 px-4 fixed bottom-8 right-50  duration-150 hover:scale-105 transition-all mr-4 ' ><IoBagCheckOutline />Checkout</button>
        <button className=' flex items-center text-white text-2xl pr-4 px-4 bg-red-600 p-1  rounded-md hover:bg-red-700  fixed bottom-8 right-8 hover:scale-110 transition-all  ' onClick={() => { Clearcart() }}> <MdOutlineDeleteForever />Clear cart</button>
      </div>
    </div>

  )
}

export default Cartpage
