import React from 'react'
import HomeCards from './HomeCards'
import { Link } from 'react-router-dom'

const MainContent = () => {

    const BigCard=({title,heading,text,price,tag,link,image})=>{
        return <div className=" rounded-lg shadow-3xl  bg-white w-190 h-fit m-3 overflow-hidden flex flex-wrap md:flex-nowrap">
            <div className='relative'>
                 <img src={`images/${image}.jpg`} alt="" className="w-auto h-fit transition-transform duration-300 hover:scale-105 " />
                 <span className='absolute top-2 right-0 bg-red-600 text-white text-[10px] font-medium px-2 py-1 '>{tag}</span>
             </div>
             <div className='py-4'>
                  <h2 className="text-[17px] text-[#213b98] font-medium p-2">{title}</h2>
            <div className='p-4'>
                 <span className="text-[17px] font-medium mb-2  block hover:text-blue-400">{heading}</span>
                 <span className="text-[17px] font-light ">{text}</span>
            </div>
            <div className='my-10'>
                <Link to={"/pro"} className='p-4 font-semibold text-blue-500 text-lg'> Company PRO</Link>
            </div>
             <div className='px-4 mb-4 flex justify-between'>
                <div>
                    <span className='font-medium text-[15px] block'>Starts from</span>
                    <span className='font-medium text-[15px] text-blue-800'>₹ {price}</span>
                </div>
                <Link to={link} className='font-medium text-md text-blue-400'>KNOW MORE ⮞</Link>
             </div>
             </div>
            
            </div>
    }



  return (
    <>
    <div className='flex flex-wrap gap-4 justify-center'>
        <HomeCards title={"RESUME BUILDING"} image={"resume-building"} heading={"Impress recruiters within 30 secs with our Customized Visual Resume."}  
        text={"We create world-class Resume that beats ATS and makes you stand out from the crowd and secure interviews with ease."} price={"1999"}
         link={"/resume-writing-services-india"} tag={"MOST POPULAR"}/>

         <HomeCards title={"LINKEDIN PROFILE MAKEOVER"} image={"linkedin-profile-designing"} heading={"94% of recruiters use LinkedIn to find candidates for job opportunities."}  
        text={"Our experts create Powerful LinkedIn Profiles to spark the interest of Hiring Managers."} price={"1999"}
         link={"/linkedin-profile-makeover-india"} tag={"RECOMMENDED"}/>

         <HomeCards title={"PROFILE EVALUATION"} image={"resume-quality-score"} heading={"Evaluate your Resume and LinkedIn profile now and make your job search efficient."}  
        text={"Our Experts will analyze your Resume and LinkedIn Profile and send a detailed report."} price={"199"}
         link={"/profile-evaluation"} tag={"MUST"}/>
    </div>
    <div className='flex flex-wrap justify-center gap-2'>
        <BigCard  title={"EMPLOYEE REFERRAL PRO"} image={"premium-services"} heading={"Want to get hired smartly?"}  
        text={"Get referred and connected directly by an Existing Employee from your Dream Company."} price={"1999"}
         link={"/pro"} tag={"MUST"}/>

         <div>
            <div className=" rounded-lg shadow-3xl  bg-white md:w-90 w-80  h-90 m-3 overflow-hidden ">
                         <h2 className="text-[17px] text-center text-[#213b98] font-medium p-2">NAUKRI PROFILE MAKEOVER</h2>
                         <div className='relative'>
                             <img src={`images/naukri.jpg`} alt="" className="w-90 h-auto transition-transform duration-300 hover:scale-105 " />
                             <span className='absolute top-2 right-0 bg-red-600 text-white text-[10px] font-medium px-2 py-1 '>BEST SELLER</span>
                         </div>
                        <div className='p-4'>
                             <span className="text-[17px] font-medium mb-2  block hover:text-blue-400">Want to get more interview calls?</span>
                             <span className="text-[17px] font-light ">
                                We customize your Profile effectively with Researched Relevant
                                 Keywords that make you appear on TOP during Recruiter Search.
                             </span>
                        </div>
                         <div className='px-4 mb-4 flex justify-between'>
                            <div>
                                <span className='font-medium text-[15px] block'>Starts from</span>
                                <span className='font-medium text-[15px] text-blue-800'>₹ 2999</span>
                            </div>
                            <Link to={"/naukri-profile-makeover"} className='font-medium text-md text-blue-400'>KNOW MORE ⮞</Link>
                         </div>
                        </div>
         </div>
    </div>
    <div className='flex flex-wrap gap-4 justify-center h-auto md:h-100'>
        <HomeCards title={"LINKEDIN RECOMMENDATIONS"} image={"cover-letter"} heading={"LinkedIn Profiles with recommendations rank more highly in Recruiter searches."}  
        text={"Make a great impression with our 5 Customized Recommendations that you can ask your colleagues, clients, supervisors to recommend you using the same."} price={"1999"}
         link={"/linkedin-recommendations"} />

         <HomeCards title={"ONLINE CV"} image={"online-resume-hosting"} heading={"Get a customized URL for your CV"}  
        text={"To get across that fast-approaching online interview, you just need to send an URL to your Recruiter and one-click leads him/her to your resume."} price={"499"}
         link={"/online-cv"} tag={"NEW"}/>

         <HomeCards title={"Interview Preparation"} image={"interview-preparation"} heading={"Master your next job Interview!"}  
        text={"Get trained by the professionals on interview techniques. We help you perform your best during the interview for most commonly asked questions!"} price={"7999"}
         link={"/interview-preparation"} />
    </div>

    </>
  )
}

export default MainContent