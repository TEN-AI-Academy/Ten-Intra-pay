import React from 'react'
import { useState } from "react";
import { Link } from 'react-router-dom';


const SideBarMobile = () => {

      const [open, setOpen] = useState(false);

      const options=[
        {
            title:"Home",
            path:"/",
        },
        {
            title:"About",
            path:"/about",
        },
        {
            title:"Online CV",
            path:"/online-cv",
        },
        {
            title:"Profile Building",
            
        },
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
            title:"Naukri Profile Makeover",
            path:"/naukri-profile-makeover",
        },
        {
            title:"LinkedIn Recommendations",
            path:"/linkedin-recommendations",
        },
        {
            title:"Employee Referral PRO",
            
        },
        {
            title:"Whiteslips Pro",
            path:"/pro",
        },
        {
            title:"More Services",
            
        },
        {
            title:"Mock Interview",
            path:"/mock-interview",
        },
        {
            title:"Interview Preparation",
            path:"/",
        },
        {
            title:"Explore",
            
        },
        {
            title:"Resume Sample and Checklist",
            path:"/",
        },
        {
            title:"LinkedIn Sample and Checklist",
            path:"/",
        },
        {
            title:"Competitor Overview",
            path:"/",
        },
        {
            title:"Offers",
            path:"/",
        },
        {
            title:"Mega Bundle Offer",
            path:"/",
        },
        {
            title:"Registration",
            path:"/",
        },
        {
            title:"Others",
            
        },
        {
            title:"Why Us",
            path:"/why-us",
        },
        {
            title:"FAQ'S",
            path:"/faq",
        },
        {
            title:"Blog",
            path:"/",
        },
        {
            title:"Contact Us",
            path:"/contact-us",
        },
    ]

  return (
    <div className="relative">
       <button  class="flex flex-col justify-center items-center space-y-1.5 w-10 h-10  bg-blue-400 focus:outline-none"
                      onClick={()=>{setOpen(true)}}>
                          <span class="block h-0.5 w-6 bg-white transition-all duration-300"></span>
                          <span class="block h-0.5 w-6 bg-white transition-all duration-300"></span>
                          <span class="block h-0.5 w-6 bg-white transition-all duration-300"></span>
                     </button>

      {open && (
        <div
          className="fixed inset-0 "
          onClick={() => setOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 overflow-y-auto
        transform ${open ? "translate-x-0" : "-translate-x-full"} 
        transition-transform duration-300 ease-in-out`}
      >
        <div className="p-2 flex justify-between items-center border-b border-gray-200 bg-blue-400">
          <h2 className="text-lg text-white font-bold">Menu</h2>
          <button onClick={() => setOpen(false)} className='text-lg text-white'>🡨</button>
        </div>
        <nav className="p-2 space-y-4">
          <ul>
             {options.map((item)=>{
                return (
                    <li>
                        <Link to={item.path} className={`hover:bg-amber-400 block border-b border-gray-200 p-1  ${item.title === "Profile Building" || item.title==="Others" || item.title==="Employee Referral PRO"  || item.title==="Explore" ? "bg-gray-200" : ""}`}
                          onClick={()=>{setOpen(false)}}
                        >{item.title}</Link>
                    </li>
                )
            })}
          </ul>
        </nav>
      </div>
    </div>
  )
}

export default SideBarMobile