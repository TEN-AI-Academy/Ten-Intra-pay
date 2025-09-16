

const Cards=()=>{

    return(
        <div className="flex flex-wrap justify-center">
            <div className=" rounded-lg shadow-2xl bg-white w-90 h-70 m-3 overflow-hidden">
             <h2 className="text-1/2xl text-center text-[#213b98] font-medium p-2">VISION</h2>
             <img src="/images/vision.jpg" alt="" className="w-90 h-auto transition-transform duration-300 hover:scale-105 " />
             <p className="text-[16px] p-2 text-center">Transforming People to their Best Version</p>
            </div>
            <div className=" rounded-lg shadow-2xl bg-white w-90 h-70 m-3 overflow-hidden">
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
    )
}
export default Cards