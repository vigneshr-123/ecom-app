import React from 'react'
import { PiShoppingCartLight } from "react-icons/pi";
import { MdOutlineRemoveShoppingCart } from "react-icons/md";

import { useContext, } from 'react';
import Cartcontext from '../Contexts/Cartcontext';
const Card = ({product, showRemove=false}) => {
  const{AddtoCart,RemoveCart}=useContext(Cartcontext)
 
  return (
    <div className=' bg-gray-50   shadow-xl p-2 rounded-md  '>
      <img className='w-[150px] h-[150px] object-cover object-top m-auto ' src={product.image} alt="" />
      <h3 className='font-light'>{product.title}</h3>
      <p className=' '>{product.price}</p>
      <div style={{position:'relative'}} className='flex justify-between'>
      
      
      <button className='bg-amber-300 w-[60px] p-1 rounded-md hover:bg-green-500 duration-150 hover:scale-105 transition-all font-light '>Buy</button>
      
     


 
      <button onClick={() => AddtoCart(product)} className=' flex hover:scale-110 transition-all tooltip bg-blue-500 p-1 rounded-md font-light text-amber-50 hover:bg-amber-300 hover:text-gray-950' >< PiShoppingCartLight size={20} /> Add to cart</button>
      {showRemove && (
      <button onClick={() => RemoveCart(product.id)} className=' flex hover:scale-110 transition-all tooltip bg-blue-500 p-1 rounded-md font-light text-amber-50 hover:bg-red-500 hover:text-gray-950' ><MdOutlineRemoveShoppingCart size={20} /> Remove from cart</button>
      )}
     </div>
    </div>
  )
}

export default Card
