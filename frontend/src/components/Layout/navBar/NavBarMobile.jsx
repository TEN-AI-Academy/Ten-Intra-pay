import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import DropDown from "./DropDown"
import DropDownMobile from './SideBarMobile'
import SideBarMobile from './SideBarMobile'


const NavBarMobile = () => {

    const [dropDown,setDropDown]=useState(false)

  return (
    <div>
        <nav className='sm:hidden flex justify-between'>
            <div >
            <Link to="/">
             <img src="https://www.unish.co.jp/img/common/EN_header_company.jpg" alt="" />
            </Link>
           </div>
           <ul className='p-4'>
            <li className='relative'>
               <SideBarMobile/>
              
            </li>
           </ul>
        </nav>
    </div>
  )
}

export default NavBarMobile