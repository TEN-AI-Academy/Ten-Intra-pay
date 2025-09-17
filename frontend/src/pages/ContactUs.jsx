import React from 'react'
import { Link } from 'react-router-dom'
import BreadCrum from '../components/BreadCrum'
import ContactDisplay from '../components/contactUs/contactDisplay'
import ContactUsForm from '../components/contactUs/contactUsForm'

const ContactUs = () => {

    const breadCrum = [
    { name: 'Home', link: '/' },
    { name: 'Contact Us', link: 'contact-us' }
  ]
  return (
    <div style={{backgroundImage:"url(/images/contactUs-Background.jpg)",height:"100vh"}} >
       <div className='text-white pt-10 pl:10 md:pl-30'>
         <BreadCrum data={breadCrum}/>
       </div>
       <div className='flex'>
       <ContactDisplay/>
       <ContactUsForm/>
       </div>
    </div>
  )
}

export default ContactUs