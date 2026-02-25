import React, { createContext, useState } from 'react'
import axios from 'axios'

const ProductContext = createContext()
export const ProductProvider = ({children}) => {
    const [products,setProducts] = useState([])

    const fetchProducts= async ()=>{
        const res = await axios.get('https://fakestoreapi.com/products')
        setProducts(res.data)
    }

    return <ProductContext.Provider value={{fetchProducts,products}}>
        {children}
    </ProductContext.Provider>
    
  
}


export default ProductContext
