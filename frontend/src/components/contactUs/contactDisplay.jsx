import React, { useState } from 'react'

const ContactDisplay = () => {
 
    const [location,setLocation]=useState(false)

  return (
        <div>
            <div className='flex'>
                <img src="/images/phone.png" alt="" className='border border-white rounded-full w-20 h-20' />
                <div className='block text-white'>
                    <h2 className='font-semibold text-2xl'>Talk To Us</h2>
                    <p className='font-medium'>Call Us: +91 1234567890</p>
                    <p className='font-medium'>(9.00 AM to 9.00 PM IST)</p>
                </div>
            </div>
             <div className='flex gap-1'>
                <img src="/images/chat.png" alt="" className='border border-white rounded-full w-20 h-20' />
                <div className='block text-white'>
                    <h2 className='font-semibold text-2xl'>Chat with Us</h2>
                    <p className='font-medium'>Chat between (10 AM to 6 PM IST, Mon to Fri)</p>
                    <button className='border border-white pr-3 pl-3 pt-0.5 pb-1 hover:bg-blue-400 text-sm'>chat now</button>
                </div>
            </div>
             <div className='flex gap-1'>
                <img src="/images/job-form.png" alt="" className='border border-white rounded-full w-20 h-20' />
                <div className='block text-white'>
                    <h2 className='font-semibold text-2xl'>Job Application Form</h2>
                    <p className='font-medium'>Use the given Promo code to avail Employee Referral Program</p>
                    <button className='border border-white pr-3 pl-3 pt-0.5 pb-1 hover:bg-blue-400 text-sm'>Apply now</button>
                </div>
            </div>
             <div className='flex gap-1'>
                <img src="/images/location.png" alt="" className='border border-white rounded-full w-20 h-20' />
                <div className='block text-white'>
                    <h2 className='font-semibold text-2xl'>Office</h2>
                    <p className='font-medium'>Feel free to reach out to us</p>
                    <button className='border border-white pr-3 pl-3 pt-0.5 pb-1 hover:bg-blue-400 text-sm' onClick={()=>{setLocation(!location)}}>Location</button>
                    {location&&<p className='font-medium'>Some Location ,India</p>}
                </div>
            </div>
        </div>
  )
}

export default ContactDisplay