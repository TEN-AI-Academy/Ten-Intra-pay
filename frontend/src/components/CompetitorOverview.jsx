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
          {/* Header */}
          <tr>
            <td className='w-2/5 border-1 p-2 font-semibold border-gray-400'>
              Service Details
            </td>
            <td className='border-1 p-2 font-semibold text-center border-gray-400 bg-slate-800 text-white'>
              Whiteslips
            </td>
            <td className='border-1 p-2 font-semibold text-center border-gray-400'>
              Naukri
            </td>
            <td className='border-1 p-2 font-semibold text-center border-gray-400'>
              Shine
            </td>
            <td className='border-1 p-2 font-semibold text-center border-gray-400'>
              CV Designer.in
            </td>
          </tr>

          {/* Visual Resume */}
          <tr>
            <td className='w-2/5 border-1 p-2 border-gray-400'>Visual Resume Cost</td>
            <td className='border-1 font-semibold p-2 text-center border-gray-400 text-sm bg-blue-100'>
              ₹1999 - ₹5999
            </td>
            <td className='border-1 p-2 text-center border-gray-400 text-sm'>
              ₹2754 - ₹8008
            </td>
            <td className='border-1 p-2 text-center border-gray-400 text-sm'>
              ₹2999 - ₹6356
            </td>
            <td className='border-1 p-2 text-center border-gray-400 text-sm'>
              ₹9500
            </td>
          </tr>

          {/* LinkedIn Makeover */}
          <tr>
            <td className='w-2/5 border-1 p-2 border-gray-400'>LinkedIn Makeover Cost</td>
            <td className='border-1 font-semibold p-2 text-center border-gray-400 text-sm bg-blue-100'>
              ₹1999 - ₹3499
            </td>
            <td className='border-1 p-2 text-center border-gray-400 text-sm'>—</td>
            <td className='border-1 p-2 text-center border-gray-400 text-sm'>
              ₹2500 - ₹5600
            </td>
            <td className='border-1 p-2 text-center border-gray-400 text-sm'>
              ₹2500 - ₹5000
            </td>
          </tr>

          {/* Employee Referral Program */}
          <tr>
            <td className='w-2/5 border-1 p-2 border-gray-400'>Employee Referral Program</td>
            <td className='border-1 font-semibold p-2 text-center border-gray-400 bg-blue-100'>
              <TickImage />
            </td>
            <td className='border-1 p-2 text-center border-gray-400'>
              <CrossImage />
            </td>
            <td className='border-1 p-2 text-center border-gray-400'>
              <CrossImage />
            </td>
            <td className='border-1 p-2 text-center border-gray-400'>
              <CrossImage />
            </td>
          </tr>

          {/* Online CV */}
          <tr>
            <td className='w-2/5 border-1 p-2 border-gray-400'>Online CV</td>
            <td className='border-1 font-semibold p-2 text-center border-gray-400 text-sm bg-blue-100'>
              ₹499
            </td>
            <td className='border-1 p-2 text-center border-gray-400'>—</td>
            <td className='border-1 p-2 text-center border-gray-400'>—</td>
            <td className='border-1 p-2 text-center border-gray-400'>—</td>
          </tr>

          {/* Handpicked Job Search */}
          <tr>
            <td className='w-2/5 border-1 p-2 border-gray-400'>Handpicked Job Search Services</td>
            <td className='border-1 font-semibold p-2 text-center border-gray-400 bg-blue-100'>
              <TickImage />
            </td>
            <td className='border-1 p-2 text-center border-gray-400'>
              <CrossImage />
            </td>
            <td className='border-1 p-2 text-center border-gray-400'>
              <CrossImage />
            </td>
            <td className='border-1 p-2 text-center border-gray-400'>
              <CrossImage />
            </td>
          </tr>

          {/* Interview Preparation */}
          <tr>
            <td className='w-2/5 border-1 p-2 border-gray-400'>Interview Preparation</td>
            <td className='border-1 font-semibold p-2 text-center border-gray-400 text-sm bg-blue-100'>
              ₹7999
            </td>
            <td className='border-1 p-2 text-center border-gray-400 text-sm'>NA (30 mins Mock)</td>
            <td className='border-1 p-2 text-center border-gray-400'>—</td>
            <td className='border-1 p-2 text-center border-gray-400'>—</td>
          </tr>

          {/* Cover Letter */}
          <tr>
            <td className='w-2/5 border-1 p-2 border-gray-400'>Cover Letter</td>
            <td className='border-1 font-semibold p-2 text-center border-gray-400 text-sm bg-blue-100'>
              ₹500
            </td>
            <td className='border-1 p-2 text-center border-gray-400 text-sm'>₹615</td>
            <td className='border-1 p-2 text-center border-gray-400'>—</td>
            <td className='border-1 p-2 text-center border-gray-400 text-sm'>₹1000</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default CompetitorOverview
