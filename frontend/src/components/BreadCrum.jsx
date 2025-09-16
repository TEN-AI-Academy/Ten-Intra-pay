import React from 'react'
import {Link} from 'react-router-dom'

const BreadCrum = ({ data }) => {
  const breadCrum = data || []
  return (
    <div className='w-full'>
      {breadCrum.map((ele, index) => (
        <span key={index} className='font-semibold'>
            <Link className={`${index === data.length - 1 && 'text-blue-500'}`}>{ele.name}</Link>/
        </span>
      ))}
    </div>
  )
}

export default BreadCrum
