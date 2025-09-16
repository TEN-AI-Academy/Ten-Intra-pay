
import React from 'react'
import { Link } from 'react-router-dom'

const DropDown = () => {
  
    const services=[
        {
            title:"Resume Building",
            path:"/resumeBuilding",
        },
        {
            title:"LinkedIn Profile Maker",
            path:"/linkedInProfileMaker",
        },
        {
            title:"Profile Evaluation",
            path:"/profileEvaluation",
        },
        {
            title:"Employee Referral PRO",
            path:"/employeeReferralPRO",
        },
    ]
    
  return (
        <ul className='bg-blue-400 w-50 absolute top-full right-2 sm:left-2'>
            {services.map((item)=>{
                return (
                    <li>
                        <Link to={item.path} className='hover:bg-amber-400 block border-b-1 p-1 border-white'>{item.title}</Link>
                    </li>
                )
            })}
        </ul>
  )
}

export default DropDown