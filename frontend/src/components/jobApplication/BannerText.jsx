
import BreadCrum from "../BreadCrum"
import { useState } from "react"


    const BannerText = () => {

    const [freeReferral,setFreeReferral]=useState({name:"",contactNo:""})

    const handleChangeFreeReferral=(e)=>{
      setFreeReferral({...freeReferral, [e.target.name]: e.target.value })
      console.log(freeReferral)
   }

    const breadCrum=[
        {name:"Job Application",link:"/job-application"}
    ]

  return (
   <div className='block p-2'>
      <div className='text-white'>
     <BreadCrum data={breadCrum}/>
     </div>
     <div>
      <h2 className='text-white font-medium text-2xl'>Get 1 Employee Referral FREE!</h2>
      <span className='text-white text-sm font-semibold md:text-lg'>Refer your friends, family or Colleagues to avail services from WhiteSlips</span>
      <form action="" className='block '>
        <div className='md:flex gap-8 pr-4 pl-2'>
            <input type="text" name='name' placeholder='Referral Name' className='bg-gray-200 p-2 w-full mt-2 mb-2 md:mt-0 md:mb-0' onChange={handleChangeFreeReferral} />
            <input type="number" name='contactNo' placeholder='Referral Number' className='bg-gray-200 p-2 w-full' onChange={handleChangeFreeReferral} />
        </div>
        <button type='submit' className='bg-red-500 text-white text-lg mt-4 pr-4 pl-4 rounded-4xl' onClick={()=>{console.log(freeReferral)}}>SUBMIT</button>
      </form>
     </div>
   </div>
  )
}
export default BannerText