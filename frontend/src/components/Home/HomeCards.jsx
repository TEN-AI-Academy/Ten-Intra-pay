import React from 'react'
import { Link } from 'react-router-dom'

const HomeCards = ({title,heading,text,price,tag,link,image}) => {
  return (
          <div className=" rounded-lg shadow-3xl  bg-white w-90 h-125 md:h-120 m-3 overflow-hidden ">
             <h2 className="text-[17px] text-center text-[#213b98] font-medium p-2">{title}</h2>
             <div className='relative'>
                 <img src={`images/${image}.jpg`} alt="" className="w-90 h-auto transition-transform duration-300 hover:scale-105 " />
                {tag && <span className='absolute top-2 right-0 bg-red-600 text-white text-[10px] font-medium px-2 py-1 '>{tag}</span>} 
             </div>
            <div className='p-4'>
                 <span className="text-[17px] font-medium mb-2  block hover:text-blue-400">{heading}</span>
                 <span className="text-[17px] font-light ">{text}</span>
            </div>
             <div className='px-4 mb-4 flex justify-between'>
                <div>
                    <span className='font-medium text-[15px] block'>Starts from</span>
                    <span className='font-medium text-[15px] text-blue-800'>₹ {price}</span>
                </div>
                <Link to={link} className='font-medium text-md text-blue-400'>KNOW MORE ⮞</Link>
             </div>
            </div>
  )
}

export default HomeCards