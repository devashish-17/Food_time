import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between items-center border-b border-gray-200 shadow-md px-36 py-2'>
      <div className='flex items-center'>
        <p className='text-7xl rounded-full pb-2'> 🍊 </p>
        <span className='text-3xl font-bold text-orange-500'> Food Space </span>
      </div>
      <div className='flex font-semibold gap-2'>
        <h3 className='flex items-center border-2 border-white px-2 py-1 rounded-full hover:border-gray-500 cursor-pointer'> <span className='text-2xl mr-1'> 🧡</span> Wishlist </h3>
        <h3 className='flex items-center border-2 border-white px-2 py-1 rounded-full hover:border-gray-500 cursor-pointer'> <span className='text-2xl mr-1'> 🛒</span> Cart </h3>
        <h3 className='flex items-center border-2 border-white px-2 py-1 rounded-full hover:border-gray-500 cursor-pointer'> <span className='text-2xl mr-1'> 🙍‍♂️</span> SignIn </h3>
      </div>
    </div>
  )
}

export default Header