import React from 'react'
import { Link } from 'react-router-dom'

const FirstBanner = ({ image_path, heading, text }) => {
  return (
    <div className='w-[100vw]  '>
      <div
        className='w-full py-6.25 px-10 md:py-10 h-fit  relative bg-cover md:bg-right bg-no-repeat md:flex md:justify-around  '
        style={{ backgroundImage: `url(/images/${image_path})` }}
      >
        <div className='md:mx-20 flex flex-col md:py-15'>
          <div>
            <span className='w-full    mb-2  text-white text-xl text-center md:text-3xl flex justify-center md:justify-normal font-bold '>
              {heading}
            </span>
          </div>
          <div>
            <span className='w-full    mb-5  text-white text-sm md:text-2xl flex justify-center md:justify-start text-center md:text-start  font-medium md:font-normal '>
              {text}
            </span>
          </div>
          <Link to={'/employee-registration'}>
            <button className='p-2 px-4 md:px-6 mb-2 mx-20 md:mx-0 bg-blue-400 rounded-lg hover:bg-amber-600  text-sm md:text-lg text-white font-medium '>
              Upload Resume
            </button>
          </Link>
        </div>
        <div className='md:mx-20'>
          <iframe
            className=' mx-0 md:w-130 md:h-80'
            src='https://www.youtube.com/embed/zsdPYFPTdw0?autoplay=1&mute=0&loop=1'
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          ></iframe>
        </div>
      </div>
    </div>
  )
}

const Registration = () => {
  return (
    <div className='w-full'>
      <FirstBanner
        image_path={'home1.jpg'}
        text={
          'We help job seekers get back to work through Employee Referral Program'
        }
        heading={'Want to find Your Next Job?'}
      />

      <div className='w-full my-5'>
        <div className='w-4/5 md:w-3/5 text-white md:text-lg font-semibold bg-blue-950 px-2 py-1 rounded-md md:rounded-full text-center mx-auto mb-4'>
          Benefits of connecting Jobseekers and Hiring Managers through
          Referring Employees
        </div>

        <div className='flex flex-wrap justify-center md:justify-around gap-5 items-center w-full'>
          <ul className='list-disc md:w-auto w-4/5'>
            <li className='my-1 leading-4'>Company employee refers and recommends you</li>
            <li className='my-1 leading-4'>Get access to the exclusive hidden job market</li>
          </ul>
          <ul className='list-disc md:w-auto w-4/5'>
            <li className='my-1 leading-4'>Company employee refers and recommends you</li>
            <li className='my-1 leading-4'>Get access to the exclusive hidden job market</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Registration
