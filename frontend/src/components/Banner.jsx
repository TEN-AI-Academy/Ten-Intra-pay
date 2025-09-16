import React from 'react'

const Banner = ({ image_path, text }) => {
  return (
    <div
      className='w-full py-5 h-full relative bg-cover md:bg-right bg-no-repeat'
      style={{ backgroundImage: `url(/images/${image_path})` }}
    >
      <div className='w-full flex justify-center mx-2 md:w-1/3 md:mx-24'>{text}</div>
    </div>
  )
}

export default Banner
