import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import CartItem from '../Components/CartItem';

const Cart = () => {

  const {cart} = useSelector( (state) => state );
  const [totalAmount, setTotalAmount] = useState(0);

  useEffect( () => {
    setTotalAmount( cart.reduce( (acc, curr) => acc+curr.price ,0) );
  },[cart]);

  return (
    <div className=''>
      {
        cart.length > 0 ?
        (
          <div className='max-w-[1200px] mx-auto flex flex-col md:flex-row justify-center'>

            <div className='w-[100%] md:w-[60%] flex flex-col p-2'>
              {
                cart.map( (item, index) => {
                  return <CartItem key={item.id} item={item} itemIndex={index} />
                })
              }

            </div>
            
            <div className='w-[100%] md:w-[40%] mt-5 flex flex-col'>

              <div className='flex flex-col p-5 gap-5 my-14 h-[100%] justify-between'>
                <div className='flex flex-col gap-5'>
                    <div className='text-green-800 font-semibold text-xl uppercase'>Your Cart</div>
                    <div className='text-green-700 font-semibold text-5xl uppercase -mt-5'>Summary</div>
                    <p className=''>
                      <span className='text-gray-700 font-semibold text-xl '>Total Items: </span>
                      <span className='text-xl '>{cart.length}</span>
                    </p>
                </div>
              </div>
              
              <div className='flex flex-col'>
                <p>
                  <span className='text-gray-700 font-semibold text-xl '>Total Amount: </span>
                  <span className='text-xl font-bold'>${totalAmount}</span>
                </p>
                <button
                  className='font-bold text-xl text-slate-50 p-3 mt-5
                     rounded-lg bg-green-700 ring-2 ring-green-700 ease-linear
                     hover:bg-purple-50 hover:text-green-700 transition duration-300'  
                >
                  CheckOut Now
                </button>
              </div>
            </div>

          </div>
          ) :
        (
          <div className='min-h-[80vh] flex flex-col items-center justify-center'>
            <p
              className='text-gray-700 font-semibold text-xl mb-2 '
            >Your cart is empty!</p>
            <NavLink to="/">
              <button
                className='bg-green-600 text-white text-base tracking-wider font-semibold 
                  uppercase ring-2 ring-green-600 ring-inset ease-linear mt-5 p-3 px-10
                  rounded-lg  hover:bg-purple-50  hover:text-green-700 
                  transition duration-300'
              >
                Shop Now
              </button>
            </NavLink>
          </div>
        )
      }
    </div>
  )
}

export default Cart



// { 
//   <div className='pt-1 pb-[4px] mr-[26px]'>
//     <div className='bg-gray-500 h-[2px] w-full ml-1 '></div>
//   </div>}