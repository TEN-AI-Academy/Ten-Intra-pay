import { Link } from 'react-router-dom'


const Footer=()=>{

 return(
  <>
   <div className="m-15 md:m-0"></div>
   <div className="bg-[#112d52] w-full h-auto pt-10 pl-10 pr-10 pb-10 md:pr-30 md:pl-30 md:flex md:justify-around" >
        <div className="mb-5">
            <h3 className="text-white font-medium mb-3 text-xl">About Us</h3>
            <p className="text-white md:w-60">Take your career to new heights with our professional network.
            Our company helps job seekers connect with the right opportunities that align with their ambitions.</p>
        </div>
        <div className="mb-5">
            <h3 className="text-white font-medium mb-3 text-xl">Contact Information</h3>
            <p className="text-white mb-3 flex"><img src="https://img.icons8.com/?size=100&id=D4xyVOS1pmvV&format=png&color=000000" alt="" className="h-6 w-6 hover:animate-shake "/>+91 1234567890</p>
            <p className="text-white mb-3 flex"> <img className="h-6 w-6 hover:animate-shake " src="https://img.icons8.com/?size=100&id=16713&format=png&color=000000" alt="" /> +91 1234567890</p>
            <p className="text-white mb-3 flex"><img className="h-6 w-6 hover:animate-shake" src="https://img.icons8.com/?size=100&id=3AYCSzCO85Qw&format=png&color=000000" alt="" /> company@gmail.com</p>
        </div>
        <div className="mb-5">
           <h3 className="text-white font-medium mb-3 text-xl">Useful Links</h3>
           <Link to="/about" className="text-blue-500  w-full block">⦿ <span className="text-white  hover:text-blue-500 ">About</span> </Link>
           <Link to="/faq" className="text-blue-500 w-full block">⦿  <span className="text-white  hover:text-blue-500 ">FAQ'S</span> </Link>
           <Link to="/contact-us" className="text-blue-500 w-full block">⦿  <span className="text-white  hover:text-blue-500 ">Contact Us</span> </Link>
           <Link to="/privacy-policy" className="text-blue-500 w-full block">⦿  <span className="text-white  hover:text-blue-500 ">Privacy Policy</span> </Link>
           <Link to="/terms-and-conditions" className="text-blue-500 w-full block">⦿  <span className="text-white  hover:text-blue-500 ">Terms & Conditions</span> </Link>
        </div>
        <div className="mb-5">
            <img className="mb-5 md:mb-10" src="https://www.unish.co.jp/img/common/EN_header_company.jpg" alt="company" />
            <div className="flex justify-evenly ">
                <img className="h-6 w-6 hover:scale-90 hover:bg-blue-500 border border-white rounded-full" src="/images/fb.png" alt="" />
                <img className="h-6 w-6 hover:scale-90 hover:bg-blue-500 border border-white rounded-full " src="/images/tw.png" alt="" />
                <img className="h-6 w-6 hover:scale-90 hover:bg-blue-500  border border-white rounded-full" src="/images/ib.png" alt="" />
                <img className="h-6 w-6 hover:scale-90 hover:bg-blue-500 border border-white rounded-full" src="/images/inst.png" alt="" />
                <img className="h-6 w-6 hover:scale-90 hover:bg-blue-500 border border-white rounded-full" src="/images/yb.png" alt="" />
            </div>
        </div>
    </div>
    <div className="bg-[#112d52] h-20 w-full">
        <div className="bg-[#244168] w-full h-auto p-2 text-center">
           <p className="text-white">Copyright © 2025 Company. All rights reserved</p>
        </div>
    </div>
  </>
)
}
export default Footer