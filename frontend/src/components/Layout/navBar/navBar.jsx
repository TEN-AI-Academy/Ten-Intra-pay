import { Link } from "react-router-dom"
import { useState } from "react"
import NavBarDesktop from "./NavBarDesktop"
import NavBarMobile from "./NavBarMobile"


const NavBar = ()=>{
        
   return(
      <div className="z-50">
         <NavBarDesktop/>
         <NavBarMobile/>
      </div>
   )
    
}
export default NavBar