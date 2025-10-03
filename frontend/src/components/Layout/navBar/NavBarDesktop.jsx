

import DropDown from "./DropDown"
import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { NavLink } from "react-router-dom"

const NavBarDesktop = () => {


    const [dropDown,setDropDown]=useState(false)
    const location=useLocation()

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
    const servicesIsActive=()=>{
         return services.some((item,)=>location.pathname===item.path )   
    }
    console.log(servicesIsActive());
    


  return (
    <div className="hidden sm:block">
        <nav className="bg-white sticky top-0 w-full h-18 flex justify-evenly shadow-xl">
           <div>
            <Link to="/">
             <img src="https://www.unish.co.jp/img/common/EN_header_company.jpg" alt="" />
            </Link>
           </div>
          <ul className="flex space-x-6 items-center ">
            <NavLink to={"/"} className={`${location.pathname==="/"?"text-blue-500":"text-black"} hover:text-blue-500`}>HOME</NavLink>
            <NavLink to="/about" className={`${location.pathname==="/about"?"text-blue-500":"text-black"} hover:text-blue-500`}>ABOUT</NavLink>
            <Link to="/why-us" className={`${location.pathname==="/why-us"?"text-blue-500":"text-black"} hover:text-blue-500`} >WHY US</Link>
            <li className="relative"  onMouseLeave={()=>{setDropDown(false)}} onClick={()=>{setDropDown(false)}}>
              <Link className={`${servicesIsActive() ? "text-blue-500":"text-black"} hover:text-blue-500`} 
              onMouseEnter={()=>{setDropDown(true)}}
              
              >SERVICES</Link>
               {dropDown && <DropDown />}
            </li>
            <Link to="/faq" className={`${location.pathname==="/faq"?"text-blue-500":"text-black"} hover:text-blue-500`}>FAQ'S</Link>
            <Link to="/blog" className={`${location.pathname==="/blog"?"text-blue-500":"text-black"} hover:text-blue-500`}>BLOG</Link>
            <Link to="/contact-us" className={`${location.pathname==="/contact-us"?"text-blue-500":"text-black"} hover:text-blue-500`}>CONTACT US</Link>
         </ul>
       </nav>
    </div>
  )
}

export default NavBarDesktop