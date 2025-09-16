import React from 'react'

const TickImage = () => {
  return <img src='/images/tick.png' alt='...' className='w-4 mx-auto' />
}

const CrossImage = () => {
  return <img src='/images/cross.png' alt='...' className='w-4 mx-auto' />
}

const CompetitorOverview = () => {
  return (
    <div className='w-full overflow-x-scroll md:overflow-hidden'>
      <table className='w-full border-collapse whitespace-nowrap'>
        <tbody>
          <tr>
            <td className='w-2/5 border-1 p-2 font-semibold border-gray-400'>
              Service Details
            </td>
            <td className=' border-1 p-2 font-semibold text-center border-gray-400 bg-slate-800 text-white'>
              Company
            </td>
            <td className=' border-1 p-2 font-semibold text-center border-gray-400'>
              Naukri
            </td>
            <td className=' border-1 p-2 font-semibold text-center border-gray-400'>
              Shine
            </td>
            <td className=' border-1 p-2 font-semibold text-center border-gray-400'>
              CV Designer.in
            </td>
          </tr>
          <tr>
            <td className='w-2/5 border-1 p-2 border-gray-400'>
              Visual Resume Cost
            </td>
            <td className=' border-1 font-semibold p-2 text-center border-gray-400 text-sm bg-blue-100'>
              ₹1999 - ₹5999
            </td>
            <td className=' border-1 p-2 text-center border-gray-400 text-sm'>
              ₹2754 - ₹8008
            </td>
            <td className=' border-1 p-2 text-center border-gray-400 text-sm'>
              ₹2999 - ₹6356
            </td>
            <td className=' border-1 p-2 text-center border-gray-400 text-sm'>
              ₹9500
            </td>
          </tr>
          <tr>
            <td className='w-2/5 border-1 p-2 border-gray-400'>
              Visual Resume Cost
            </td>
            <td className=' border-1 font-semibold p-2 text-center border-gray-400 text-sm bg-blue-100'>
              ₹1999 - ₹5999
            </td>
            <td className=' border-1 p-2 text-center border-gray-400 text-sm'>
              ₹2754 - ₹8008
            </td>
            <td className=' border-1 p-2 text-center border-gray-400 text-sm'>
              ₹2999 - ₹6356
            </td>
            <td className=' border-1 p-2 text-center border-gray-400 text-sm'>
              ₹9500
            </td>
          </tr>
          <tr>
            <td className='w-2/5 border-1 p-2 border-gray-400'>
              Visual Resume Cost
            </td>
            <td className=' border-1 font-semibold p-2 text-center border-gray-400 text-sm bg-blue-100'>
              <TickImage />
            </td>
            <td className=' border-1 p-2 text-center border-gray-400 text-sm'>
              <CrossImage />
            </td>
            <td className=' border-1 p-2 text-center border-gray-400 text-sm'>
              <CrossImage />
            </td>
            <td className=' border-1 p-2 text-center border-gray-400 text-sm'>
              <CrossImage />
            </td>
          </tr>
          <tr>
            <td className='w-2/5 border-1 p-2 border-gray-400'>
              Visual Resume Cost
            </td>
            <td className=' border-1 font-semibold p-2 text-center border-gray-400 text-sm bg-blue-100'>
              <TickImage />
            </td>
            <td className=' border-1 p-2 text-center border-gray-400 text-sm'>
              <CrossImage />
            </td>
            <td className=' border-1 p-2 text-center border-gray-400 text-sm'>
              <CrossImage />
            </td>
            <td className=' border-1 p-2 text-center border-gray-400 text-sm'>
              <CrossImage />
            </td>
          </tr>
          <tr>
            <td className='w-2/5 border-1 p-2 border-gray-400'>
              Visual Resume Cost
            </td>
            <td className=' border-1 font-semibold p-2 text-center border-gray-400 text-sm bg-blue-100'>
              <TickImage />
            </td>
            <td className=' border-1 p-2 text-center border-gray-400 text-sm'>
              <CrossImage />
            </td>
            <td className=' border-1 p-2 text-center border-gray-400 text-sm'>
              <CrossImage />
            </td>
            <td className=' border-1 p-2 text-center border-gray-400 text-sm'>
              <CrossImage />
            </td>
          </tr>
          <tr>
            <td className='w-2/5 border-1 p-2 border-gray-400'>
              Visual Resume Cost
            </td>
            <td className=' border-1 font-semibold p-2 text-center border-gray-400 text-sm bg-blue-100'>
              <TickImage />
            </td>
            <td className=' border-1 p-2 text-center border-gray-400 text-sm'>
              <CrossImage />
            </td>
            <td className=' border-1 p-2 text-center border-gray-400 text-sm'>
              <CrossImage />
            </td>
            <td className=' border-1 p-2 text-center border-gray-400 text-sm'>
              <CrossImage />
            </td>
          </tr>
          <tr>
            <td className='w-2/5 border-1 p-2 border-gray-400'>
              Visual Resume Cost
            </td>
            <td className=' border-1 font-semibold p-2 text-center border-gray-400 text-sm bg-blue-100'>
              <TickImage />
            </td>
            <td className=' border-1 p-2 text-center border-gray-400 text-sm'>
              <CrossImage />
            </td>
            <td className=' border-1 p-2 text-center border-gray-400 text-sm'>
              <CrossImage />
            </td>
            <td className=' border-1 p-2 text-center border-gray-400 text-sm'>
              <CrossImage />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default CompetitorOverview
