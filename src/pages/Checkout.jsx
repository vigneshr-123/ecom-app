import React, { useContext, useState } from "react";
import Cartcontext from "../Contexts/Cartcontext";
import toast from "react-hot-toast";
const Checkout = () => {
  const [payment, setPayment] = useState("");
  const { Cart,Clearcart } = useContext(Cartcontext);



  const handleSubmit=()=>{
    if (!payment){
      toast.error ('Select a Payment method to proceed')
      return
    }
    if(Cart.length===0){
      toast('Cart is empty')
      return
    }

    toast.success("Order Confirmed")
    Clearcart()
  }


  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-black">

      {/* LEFT SIDE */}
      <div className="flex-1 flex items-center justify-center text-3xl font-semibold">
        <div className="w-full max-w-xl bg-white shadow-xl rounded-2xl p-10">

          <h1 className="text-2xl font-semibold italic mb-6 text-center">
            Details
          </h1>
          <table className="w-full ">

            <thead className=" ">
              <tr className=" flex text-lg justify-between">
                <th className=" text-left p-2">Product</th>
                <th className="  p-2">Title</th>
                <th className="p-2 text-center">Qty</th>
                <th className="p-2 text-right">Price</th>
              </tr>
            </thead>
            <tbody>
              {
                Cart.map((item) => {
                  return <tr className="flex items-center border-y p-2" key={item.id}>


                    <td> <img className="p-2 size-20 " src={item.image} alt="" /> </td>
                    <td className="p-2 text-2xl font-light h-20 w-80 overflow-hidden ">{item.title}</td>
                    <td className="p-2 text-2xl font-normal">{item.qty}</td>
                    <td className="p-2 text-2xl font-normal">{item.price} </td>
                  </tr>

                })
              }
            </tbody>
          </table>


          <div className="flex text-2xl  p-5  gap-2 justify-end ">
            Subtotal :
            <span className="text-orange-400  ">
              {
                Cart.reduce((acc, value) => {
                  return acc + (value.qty * value.price)
                }, 0)
              }
            </span>
          </div>



        </div>

      </div>



      {/* RIGHT SIDE */}
      <div className="flex-1 flex justify-center items-center p-10">
        <div className="w-full max-w-lg text-white bg-[#303030] shadow-xl rounded-2xl p-8">

          <h1 className="text-2xl font-semibold italic mb-6 text-center">
            Payment Method
          </h1>

          {/* CARD */}
          <label
            onClick={() => setPayment("card")}
            className={`flex flex-col cursor-pointer border rounded-xl p-4 mb-4 transition
            ${payment === "card" ? "border-green-600 ring-1  ring-green-500 shadow" : "hover:border-gray-400 hover:bg-gray-800"}`}
          >
            <div className="flex items-center gap-3 font-medium ">
              💳 Credit / Debit Card
            </div>

            {payment === "card" && (
              <div className="flex flex-col gap-3 mt-4">
                <input
                  type="text"
                  placeholder="Card Number"
                  className="border p-2 rounded-lg "
                />

                <input
                  type="text"
                  placeholder="Card Holder Name"
                  className="border p-2 rounded-lg "
                />

                <div className="flex gap-3">
                  <input
                    type="text"
                    placeholder="MM/YY"
                    className="border p-2 rounded-lg w-1/2"
                  />
                  <input
                    type="text"
                    placeholder="CVV"
                    className="border p-2 rounded-lg w-1/2"
                  />
                </div>
              </div>
            )}
          </label>

          {/* UPI */}
          <label
            onClick={() => setPayment("upi")}
            className={`flex flex-col cursor-pointer border rounded-xl  p-4 mb-4 transition
            ${payment === "upi" ? "border-green-600 ring-1  ring-green-500 shadow" : "hover:border-gray-400  hover:bg-gray-800"}`}
          >
            <div className="flex items-center gap-3 font-medium">
              📱 UPI Payment
            </div>

            {payment === "upi" && (
              <input
                type="text"
                placeholder="Enter UPI ID"
                className="border p-2 rounded-lg mt-4 focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            )}
          </label>

          {/* COD */}
          <label
            onClick={() => setPayment("cod")}
            className={`flex flex-col cursor-pointer border rounded-xl p-4 transition
            ${payment === "cod" ? "border-green-600 ring-1  ring-green-500 shadow"   : "hover:border-gray-400  hover:bg-gray-800"}`}
          >
            <div className="flex items-center gap-3 font-medium">
              💵 Cash on Delivery
            </div>

            {payment === "cod" && (
              <p className="text-gray-300 text-sm mt-3">
                Pay with cash when the product is delivered.
              </p>
            )}
          </label>

          {/* PAY BUTTON */}
          <button onClick={handleSubmit} className="mt-6 w-full bg-[#FFD300] font-semibold text-black py-3 rounded-xl hover:bg-yellow-300 transition hover:scale-105 duration-200">
            Complete Payment
          </button>

        </div>
      </div>

    </div>
  );
};

export default Checkout;