import React from 'react'
import { Link } from 'react-router-dom'
import BreadCrum from '../components/BreadCrum'
import ContactDisplay from '../components/contactUs/contactDisplay'
import ContactUsForm from '../components/contactUs/contactUsForm'

const ContactUs = () => {

    const breadCrum = [
    { name: 'Contact Us', link: 'contact-us' }
  ]
  return (
    <div style={{backgroundImage:"url(/images/contactUs-Background.jpg)"}} >
       <div className='text-white p-10 md:pl-60'>
         <BreadCrum data={breadCrum}/>
       </div>
       <div className='flex flex-wrap md:pl-10 justify-center items-center'>
       <ContactDisplay/>
       <ContactUsForm/>
       </div>
    </div>
  )
}

export default ContactUs