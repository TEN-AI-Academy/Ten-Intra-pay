import React from 'react'

const WhyusCard = ({ image_path = '/images/jobseeker1.jpg' , heading="" , data="" }) => {
  return (
    <div className='w-full rounded-md shadow-3xl overflow-hidden'>
      <div className='uppercase text-blue-950 font-semibold w-full text-center py-2'>
        {heading}
      </div>
      <div className='overflow-hidden'>
        <img
          src={`/images/${image_path}`}
          alt='...'
          className='hover:scale-110 transition-all'
        />
      </div>
      <div className='text-center p-3 font-semibold'>
        {data}
      </div>
    </div>
  )
}

export default WhyusCard
