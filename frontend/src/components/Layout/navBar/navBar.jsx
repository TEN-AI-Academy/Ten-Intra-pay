import { Link } from "react-router-dom"
import { useState } from "react"
import NavBarDesktop from "./NavBarDesktop"
import NavBarMobile from "./NavBarMobile"


const NavBar = ()=>{
        
   return(
      <div className="sticky top-0 bg-white shadow-xl z-[9999]">
         <NavBarDesktop/>
         <NavBarMobile/>
      </div>
   )
    
}
export default NavBar