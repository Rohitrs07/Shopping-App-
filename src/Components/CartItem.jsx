import React from 'react';
import { MdDelete } from "react-icons/md";
import { useDispatch } from 'react-redux';
import { remove } from '../redux/Slices/CartSlice';
import toast from 'react-hot-toast';

const CartItem = ({item, itemIndex}) => {

  const dispatch = useDispatch();

  function removeFromCart(){
    dispatch( remove(item.id) );
    toast.error('Item Removed');
  }

  return (
    <div className='flex justify-between items-center p-2 md:p-5 mt-2 mb-2 md:mx-5'>
      
      <div className='flex flex-col md:flex-row p-0 md:p-3 gap-5 items-center'>

          <div className='w-[30%]'>
            <img src={item.image} className='object-cover' />
          </div>
          <div className='w-[100%] md:w-[70%] space-y-5 self-start md:ml-10'>
            <p className='text-gray-700 font-semibold text-xl'>
             {item.title}
            </p>
            <p className='text-gray-700 text-md '>
               {item.description.split(" ").slice(0,15).join(" ")+"..."} 
            </p>
            <div className='flex items-center justify-between'> 
              <p className='text-lg font-bold text-green-600 '>
                ${item.price} 
              </p>
              <button 
                onClick={removeFromCart}
                className='text-pink-800 bg-red-200 group hover:bg-red-400 transition-transform cursor-pointer p-3 mr-3 duration-300 rounded-full '
              >
                <MdDelete />
              </button>
            </div>
          </div>

      </div>
      
    </div>
  )
}

export default CartItem