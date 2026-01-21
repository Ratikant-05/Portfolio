import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

const RecentProjectsCard = () => {
  return (
    <div className="w-full rounded-xl object-cover bg-white px-8 py-6 shadow-lg">
      <div className='flex justify-between items-center'>
      <h3 className="font-[Poppins] text-xl font-semibold text-blue-500 mb-4">
        Recent Projects
      </h3>
        <FaArrowRightLong className='text-xl' />
      </div>
      <div>
      <div className='bg-gray-200 place-items-center rounded-xl py-2 px-2 shadow-lg shadow-black-900'>
        <img className='rounded-xl' src="/airbrush.png" alt="airbrush" />
      </div>
      <br />
      <div className='bg-gray-200 place-items-center rounded-xl py-2 px-2 shadow-lg shadow-black-900'>
        <img className='rounded-xl' src="/restaurantApp.png" alt="restaurantApp" />
      </div>
      </div>
    </div>
  )
}

export default RecentProjectsCard
