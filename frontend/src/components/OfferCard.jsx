import React from 'react'

const OfferCard = () => {
  return (
    <div className='md:w-1/2 relative'>
      <div className='w-full border-1 border-gray-400 rounded-md p-10'>
        <p className='w-full text-center text-xl font-semibold'>
          Use this Promo code to avail flat
        </p>
        <p className='w-full text-4xl text-center text-orange-500 font-semibold'>
          10% off
        </p>
        <p className='w-full text-center text-xl font-semibold'>
          for Limited Time period.
        </p>
      </div>
      <div className='w-full flex justify-center absolute -top-6'>
        <div className='bg-blue-400 uppercase text-xl font-semibold text-white p-3 rounded-md'>
          erp10
        </div>
      </div>
      <p className='text-red-500 text-sm w-full text-center'>
        Note : This offer is not applicable on availing any discounted services.
      </p>
      <div className='w-full mt-8 flex justify-center'>
        <button className=' bg-red-600 px-5 py-1 rounded-full text-white text-lg cursor-pointer font-semibold uppercase'>
          Pay Now
        </button>
      </div>
    </div>
  )
}

export default OfferCard
