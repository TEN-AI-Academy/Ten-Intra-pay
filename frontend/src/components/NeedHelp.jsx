import React from 'react'

const NeedHelp = () => {
  return (
    <div className='w-full border-1 border-slate-400'>
      <p className='p-2 px-5 font-semibold bg-slate-900 text-lg text-white border-b-1 border-slate-400'>
        Need Help?
      </p>
      <div className='flex gap-4 items-center mx-4 my-3'>
        <div className='flex justify-center items-center p-2 border-1 rounded-full border-slate-400'>
          <img src='./images/phone.png' alt='...' className='w-16' />
        </div>
        <div>
          <p className='text-blue-500 mb-1 font-semibold text-lg'>Talk to Us</p>
          <p className='text-2xl font-semibold'>Call Us: +91 1234567890</p>
          <p className='text-sm'>(9.00 AM to 9.00 PM IST)</p>
        </div>
      </div>
    </div>
  )
}

export default NeedHelp
