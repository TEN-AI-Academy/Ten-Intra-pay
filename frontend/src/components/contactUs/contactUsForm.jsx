
import React from 'react'

const ContactUsForm = () => {
  return (
    <div>
        <form  className='h-100 w-80 bg-gray-300 p-6'>
          <h3>We'll get in touch with you</h3>
          <label htmlFor="">*Mandatory Fields</label>
          <input type="text" name="Name" id="" placeholder='Name*' className='border border-gray-200 bg-white' />
          <input type="text" name="Name" id="" placeholder='Email*' className='border border-gray-200 bg-white' />
          <input type="text" name="Name" id="" placeholder='Mobile*' className='border border-gray-200 bg-white' />
          <textarea name="" id="" placeholder='Message' className='bg-white w-full'></textarea>
        </form>
    </div>
  )
}

export default ContactUsForm