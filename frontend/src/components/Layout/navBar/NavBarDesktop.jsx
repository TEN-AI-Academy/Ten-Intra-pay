

import DropDown from "./DropDown"
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const NavBarDesktop = () => {


    const [dropDown,setDropDown]=useState(false)


  return (
    <div className="hidden sm:block">
        <nav className="bg-white sticky top-0 w-full h-18 flex justify-evenly shadow-xl">
           <div>
            <Link to="/">
             <img src="https://www.unish.co.jp/img/common/EN_header_company.jpg" alt="" />
            </Link>
           </div>
          <ul className="flex space-x-6 items-center">
            <Link to="/" className="hover:text-blue-500">HOME</Link>
            <Link to="/about" className="hover:text-blue-500">ABOUT</Link>
            <Link to="/why-us" className="hover:text-blue-500">WHY US</Link>
            <li className="relative"  onMouseLeave={()=>{setDropDown(false)}} onClick={()=>{setDropDown(false)}}>
              <Link className="hover:text-blue-500" 
              onMouseEnter={()=>{setDropDown(true)}}
              
              >SERVICES</Link>
               {dropDown && <DropDown />}
            </li>
            <Link to="/faq" className="hover:text-blue-500">FAQ'S</Link>
            <Link to="/" className="hover:text-blue-500">BLOG</Link>
            <Link to="/contact-us" className="hover:text-blue-500">CONTACT US</Link>
         </ul>
       </nav>
    </div>
  )
}

export default NavBarDesktop