const TickImage = () => {
  return (
    <td className='bg-blue-500 border-1 border-white'>
      <img src='/images/tick_white.png' alt='...' className='w-4 mx-auto' />
    </td>
  )
}

const CrossImage = () => {
  return (
    <td className='bg-gray-400 border-1 border-white'>
      <img src='/images/cross_white.png' alt='...' className='w-4 mx-auto' />
    </td>
  )
}

const EmployeeBenefitsTable = () => {
  return (
    <div className='w-auto'>
      <table className=''>
        <tbody className='border-1 border-gray-600'>
          <tr>
            <td className='w-3/5 border-1 border-white bg-blue-500 text-white p-2 py-3 font-semibold'>
              Benefits of Whiteslips PRO
            </td>
            <td className='border-1 border-white bg-gray-400 text-white p-1 leading-4 text-center font-semibold'>
              Free Service
            </td>
            <td className=' border-1 border-white bg-blue-950 text-white px-4 leading-4 text-center font-semibold'>
              Whiteslips PRO
            </td>
          </tr>
          <tr>
            <td className='w-3/5 border-1 border-white bg-blue-950 text-white p-2 text-sm'>
              2 Free Employee Referrals upon availing Resume & LinkedIn Services
            </td>
            <TickImage />
            <CrossImage />
          </tr>
          <tr>
            <td className='w-3/5 border-1 border-white bg-blue-950 text-white p-2 text-sm'>
              Job search support *
            </td>
            <TickImage />
            <CrossImage />
          </tr>
          <tr>
            <td className='w-3/5 border-1 border-white bg-blue-950 text-white p-2 text-sm'>
              2 Free Employee Referrals upon availing Resume & LinkedIn Services
            </td>
            <TickImage />
            <CrossImage />
          </tr>
          <tr>
            <td className='w-3/5 border-1 border-white bg-blue-950 text-white p-2 text-sm'>
              Job search support *
            </td>
            <TickImage />
            <CrossImage />
          </tr>
          <tr>
            <td className='w-3/5 border-1 border-white bg-blue-950 text-white p-2 text-sm'>
              2 Free Employee Referrals upon availing Resume & LinkedIn Services
            </td>
            <TickImage />
            <CrossImage />
          </tr>
          <tr>
            <td className='w-3/5 border-1 border-white bg-blue-950 text-white p-2 text-sm'>
              Job search support *
            </td>
            <TickImage />
            <CrossImage />
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default EmployeeBenefitsTable
