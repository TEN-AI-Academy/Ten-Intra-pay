

const Footer=()=>{

 return(
  <>
   <div className="m-15"></div>
   <div className="bg-[#112d52] w-full h-auto pt-10 pl-10 pr-10 pb-10 md:pr-30 md:pl-30 md:flex md:justify-around" >
        <div className="mb-5">
            <h3 className="text-white font-medium mb-3 text-xl">About Us</h3>
            <p className="text-white md:w-60">Step-up your career to the next level through our Networking.
                 Whiteslips assists Jobseekers to find the right opportunities that 
                 match their career aspirations.</p>
        </div>
        <div className="mb-5">
            <h3 className="text-white font-medium mb-3 text-xl">Contact Information</h3>
            <p className="text-white mb-3">✆ +91 1234567890</p>
            <p className="text-white mb-3"> +91 1234567890</p>
            <p className="text-white mb-3">@ company@gmail.com</p>
        </div>
        <div className="mb-5">
           <h3 className="text-white font-medium mb-3 text-xl">Useful Links</h3>
           <a href="" className="text-white  hover:text-blue-500 w-full block">⦿ About</a>
           <a href="" className="text-white  hover:text-blue-500 w-full block">⦿ FAQ's</a>
           <a href="" className="text-white  hover:text-blue-500 w-full block">⦿ Contact Us</a>
           <a href="" className="text-white  hover:text-blue-500 w-full block">⦿ Privacy Policy</a>
           <a href="" className="text-white  hover:text-blue-500 w-full block">⦿ Terms & Conditions</a>
        </div>
        <div className="mb-5">
            <img className="mb-5 md:mb-10" src="https://www.unish.co.jp/img/common/EN_header_company.jpg" alt="company" />
            <div className="flex justify-evenly ">
                <img className="h-6 w-6 hover:scale-140" src="https://img.icons8.com/?size=100&id=62855&format=png&color=000000" alt="" />
                <img className="h-6 w-6 hover:scale-140 " src="https://img.icons8.com/?size=100&id=118467&format=png&color=1A1A1A" alt="" />
                <img className="h-6 w-6 hover:scale-140" src="https://img.icons8.com/?size=100&id=8808&format=png&color=1A1A1A" alt="" />
                <img className="h-6 w-6 hover:scale-140" src="https://img.icons8.com/?size=100&id=62852&format=png&color=1A1A1A" alt="" />
                <img className="h-6 w-6 hover:scale-140" src="https://img.icons8.com/?size=100&id=32309&format=png&color=1A1A1A" alt="" />
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