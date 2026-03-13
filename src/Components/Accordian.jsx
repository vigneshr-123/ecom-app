import React, { useState } from 'react'

const Checkout = () => {

  const [payment, setPayment] = useState("")

  return (
    <div className='flex justify-between items-center min-h-screen bg-gray-200 p-10'>




      <div className='flex flex-1  justify-center text-4xl font-bold'>
        Details



      </div>





      <div className='flex flex-col flex-1 gap-8 '>
        <h1 className='text-3xl italic font-semibold underline'>
          Enter Payment Details
        </h1>
        <div className='bg-white/70 backdrop-blur-xl border flex-1 border-gray-200 shadow-2xl rounded-2xl p-10 '>
          <h1 className='text-xl font-semibold mb-6 '>
            Choose Payment Method
          </h1>

          {/* CARD */}
          <label className={`flex items-center text-black cursor-pointer gap-3 p-4 rounded-lg border transition-all duration-200
          ${payment === "card" ? "bg-gray-100 border-black shadow-sm" : "hover:bg-gray-50"}`}>

            <input
              type="radio"
              name='payment'
              value='card'
              className='hidden w-full'
              onChange={(e) => setPayment(e.target.value)}
            />

            💳 Credit / Debit Card
          </label>

          {payment === "card" && (
            <div className='mt-4 ml-6 flex flex-col gap-3'>
              <input
                type="text"
                placeholder="Card Number"
                className='border p-2 rounded-lg focus:outline-none w-full  '
              />
              <input
                type="text"
                placeholder="Card Holder Name"
                className='border p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-gray-400'
              />

              <div className='flex gap-3'>
                <input
                  type="text"
                  placeholder="MM/YY"
                  className='w-full border p-2 rounded-lg  focus:outline-none focus:ring-2 focus:ring-gray-400'
                />
                <input
                  type="text"
                  placeholder="CVV"
                  className='border p-2 rounded-lg w-full focus:outline-none focus:ring-2 focus:ring-gray-400'
                />
              </div>
            </div>
          )}

          {/* UPI */}
          <label className={`flex items-center  text-black cursor-pointer gap-3 p-4 rounded-lg border mt-4 transition-all duration-200 
          ${payment === "upi" ? "bg-gray-100 border-black shadow-sm" : "hover:bg-gray-50"}`}>

            <input
              type="radio"
              name='payment'
              value='upi'
              className='hidden w-full'
              onChange={(e) => setPayment(e.target.value)}
            />

            📱 UPI Payment
          </label>

          {payment === "upi" && (
            <div className='mt-4 ml-6'>
              <input
                type="text"
                placeholder="Enter UPI ID"
                className='border p-2 rounded-lg focus:outline-none w-full'
              />
            </div>
          )}

          {/* COD */}
          <label className={`flex items-center text-black cursor-pointer gap-3 p-4 rounded-lg border mt-4 transition-all duration-200
          ${payment === "cod" ? "bg-gray-100 border-black shadow-sm" : "hover:bg-gray-50"}`}>

            <input
              type="radio"
              name='payment'
              value='cod'
              className='hidden'
              onChange={(e) => setPayment(e.target.value)}
            />

            💵 Cash on Delivery
          </label>

          {payment === "cod" && (
            <p className='ml-6 mt-2 text-gray-600  p-2 rounded-lg  w-80%'>
              Pay with cash when the product is delivered.
            </p>
          )}

        </div>

      </div>
    </div>
  )
}

export default Checkout