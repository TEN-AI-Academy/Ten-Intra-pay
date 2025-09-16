

const NavBar = ()=>{

    return(
       <nav className="bg-white sticky top-0 w-full h-18 flex justify-evenly shadow-xl z-10">
           <div>
           <img src="https://www.unish.co.jp/img/common/EN_header_company.jpg" alt="" />
           </div>
          <ul className="flex space-x-6 items-center">
            <a href="" className="hover:text-blue-500">HOME</a>
             <a href="" className="hover:text-blue-500">ABOUT</a>
             <a href="" className="hover:text-blue-500">WHY US</a>
             <a href="" className="hover:text-blue-500">SERVICES</a>
             <a href="" className="hover:text-blue-500">FAQ'S</a>
             <a href="" className="hover:text-blue-500">BLOG</a>
             <a href="" className="hover:text-blue-500">CONTACT US</a>
         </ul>
       </nav>
    )
}
export default NavBar