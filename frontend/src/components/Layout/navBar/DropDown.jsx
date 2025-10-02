
import React from 'react'
import { Link } from 'react-router-dom'

const DropDown = () => {
  
    const services=[
        {
            title:"Resume Building",
            path:"/resume-writing-services-india",
        },
        {
            title:"LinkedIn Profile Maker",
            path:"/linkedin-profile-makeover-india",
        },
        {
            title:"Profile Evaluation",
            path:"/profile-evaluation",
        },
        {
            title:"Employee Referral PRO",
            path:"/pro",
        },
        {
            title:"Online CV",
            path:"/online-cv",
        },
        {
            title:"LinkedIn Recommendations",
            path:"/linkedin-recommendations",
        },
        {
            title:"Naukri Profile Makeover",
            path:"/naukri-profile-makeover",
        },
        {
            title:"Mock Interview",
            path:"/mock-interview",
        },
        {
            title:"Interview Preparation",
            path:"/interview-preparation",
        },
        {
            title:"Offers",
            path:"/offers",
        },
        {
            title:"Mega Bundle Offer",
            path:"/services",
        },
        {
            title:"Registration",
            path:"/register",
        },
    ]
    
  return (
        <ul className='bg-blue-400 w-55 absolute top-full z-[9999] -left-18'>
            {services.map((item)=>{
                return (
                    <li>
                        <Link to={item.path} className='hover:bg-[#fb923c] block border-b-1 p-1 text-white border-white text-center'>{item.title}</Link>
                    </li>
                )
            })}
        </ul>
  )
}

export default DropDown