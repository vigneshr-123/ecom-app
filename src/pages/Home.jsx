import React, { useEffect } from 'react'
import { useContext } from 'react'
import ProductContext from '../Contexts/Productcontext'
import Card from '../Components/Card'
const Home = () => {

  const { products, fetchProducts } = useContext(ProductContext)

  useEffect(() => {
    fetchProducts()
  }, [])

  return (
    <div className=' gap-50 flex flex-col  min-h-screen  bg-gray-950 items-center  '>

      <div className='  mt-30 p-7  bg-gradient-to-r from-gray-400  via-gray-700 to-gray-900 w-[70%] justify-center rounded-lg'>
        <h1 className=' flex justify-center text-gray-50 text-[100px] font-[impact]  '> <span className='text-green-500 '>WEL</span>COME  </h1>
        <p className='  flex justify-center text-gray-50 text-4xl animate-pulse font-bold text-blue-600"'>  Explore <span className='text-yellow-400'>Utilize</span> And Bring It Your Own. </p>
      </div>






      <div className=' bg-cover grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-5 gap-7 ' >
        {products?.map((product) => {
          return <Card key={product.id} product={product} showRemove={false} />
        })
        }
      </div>
    </div>




  )
}

export default Home

