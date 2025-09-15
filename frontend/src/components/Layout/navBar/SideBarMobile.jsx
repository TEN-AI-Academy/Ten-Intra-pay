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
            title:"Profile Building",
            
        },
        {
            title:"Resume Building",
            path:"/resumeBuilding",
        },
        {
            title:"LinkedIn Profile Maker",
            path:"/linkedInProfileMaker",
        },
        {
            title:"Profile Evaluation",
            path:"/profileEvaluation",
        },
        {
            title:"Employee Referral PRO",
            path:"/employeeReferralPRO",
        },
        {
            title:"Others",
            
        },
        {
            title:"Why Us",
            path:"/whyUs",
        },
        {
            title:"FAQ'S",
            path:"/FAQ'S",
        },
        {
            title:"Blog",
            path:"/blog",
        },
        {
            title:"Contact Us",
            path:"/contactUs",
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
        className={`fixed top-0 left-0 h-full w-64 bg-white shadow-lg z-50 
        transform ${open ? "translate-x-0" : "-translate-x-full"} 
        transition-transform duration-300 ease-in-out`}
      >
        <div className="p-2 flex justify-between items-center border-b bg-blue-400">
          <h2 className="text-lg text-white font-bold">Menu</h2>
          <button onClick={() => setOpen(false)} className='text-lg'>🡨</button>
        </div>
        <nav className="p-2 space-y-4">
          <ul>
             {options.map((item)=>{
                return (
                    <li>
                        <Link to={item.path} className={`hover:bg-amber-400 block border-b p-1 border-black ${item.title === "Profile Building" || item.title==="Others" ? "bg-gray-300" : ""}`}
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