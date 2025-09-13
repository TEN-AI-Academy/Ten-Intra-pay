import Footer from "../components/footer"
import NavBar from "../components/navBar"


const About=()=>{
   


    return(
        <>
        <NavBar/>
         <div className="bg-[#2e63af] h-30 p-8 pl-5 md:pl-40">
           <div className="flex">
            <a href="" className="text-white">Home</a>
            <p>/About</p>
           </div>
           <h3 className="text-white text-2xl mt-3 font-medium">About</h3>
         </div>
         <div className="p-8 pl-5 pr-5 md:pl-40 md:pr-40">
            <p className="">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laborum
             aliquid commodi tempore, nihil odio optio omnis dolor rem eveniet
              in accusamus repudiandae assumenda consectetur ipsum, placeat rerum quisquam 
              </p>
              <p className="mt-5">Lorem ipsum dolor sit amet consectetur adipisicing
                 elit. Molestias beatae adipisci distinctio cumque, sint doloremque.
              </p>
             <p className="mt-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi repellendus minus ipsum quod?
             </p>
             <p className="mt-5">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, optio repellendus.
             </p>
            
         </div>
         <div className="flex flex-wrap justify-center">
            <div className=" rounded-lg shadow-2xl bg-white w-90 h-70 m-3 overflow-hidden">
             <h2 className="text-1/2xl text-center text-[#213b98] font-medium p-2">VISION</h2>
             <img src="/images/vision.jpg" alt="" className="w-90 h-auto transition-transform duration-300 hover:scale-105 " />
             <p className="text-[16px] p-2 text-center">Transforming People to their Best Version</p>
            </div>
            <div class=" rounded-lg shadow-2xl bg-white w-90 h-70 m-3 overflow-hidden">
               <h2 className="text-1/2xl text-center text-[#213b98] font-medium p-1">MISSION</h2>
               <img src="/images/mission.jpg" alt="" className="w-90 h-auto transition-transform duration-300 hover:scale-105" />
               <p className="text-[16px] p-2 text-center">We help Jobseekers get back to work through our Employee Referral Program</p>
            </div>
            <div class=" rounded-lg shadow-2xl bg-white w-90 h-70 m-3 overflow-hidden">
             <h2 className="text-1/2xl text-center text-[#213b98] font-medium p-2">CORE VALUES</h2>
               <img src="/images/core-value.jpg" alt="" className="w-90 h-auto transition-transform duration-300 hover:scale-105" />
               <p className="text-[16px] p-2 text-center">Quality, Passion and Value Addition</p>
            </div>
        </div>
        <Footer/>
        </>
    )
}
export default About