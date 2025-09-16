import { useState } from 'react'
import Banner from '../../components/Banner'
import BreadCrum from '../../components/BreadCrum'
import EmployeeBenefitsTable from '../../components/EmployeeBenefitsTable'
import StepsCard from '../../components/StepsCard'

const BannerText = () => {
  return (
    <div className='text-white font-sans'>
      <p className='text-lg md:text-2xl font-bold'>
        Find your Next Job through an Employee Referral Program
      </p>
      <p className='text-sm md:text-base font-semibold'>
        The Best Way to Get Hired!
      </p>
    </div>
  )
}

const EmployeeRefferalPro = () => {
  const [experienceCharge, setExperienceCharge] = useState(0)
  const [referralCharge, setReferralCharge] = useState(1999)

  const handleExperienceCharge = e => {
    const expCharge = Number(e.target.value)
    setExperienceCharge(expCharge)
    setReferralCharge(1999 + expCharge)
  }

  const handleReferralCharge = e => {
    setReferralCharge(Number(e.target.value))
  }
  const totalCharge = referralCharge

  const breadCrum = [
    { name: 'Home', link: '#' },
    { name: 'Employee Referral PRO', link: '#' }
  ]

  return (
    <div>
      <Banner image_path={'banner4.jpeg'} text={<BannerText />} />

      <div className='my-8 md:mx-20 mx-2'>
        <BreadCrum data={breadCrum} />

        <div className='grid md:grid-cols-2 gap-5 my-5 md:px-5'>
          <div className='w-auto'>
            <p className='text-xl font-semibold text-blue-900 leading-5 mb-3'>
              Benefits of availing Employee Referral Pro from Whiteslips
            </p>
            <EmployeeBenefitsTable />
          </div>

          <div className='w-4/5 mx-auto'>
            <div className='mt-1 mb-2'>
              <p className='text-blue-950 font-semibold text-sm'>
                Select Total Years Of Experience
              </p>
              <select
                name='total_years'
                id='total_years'
                className='w-full focus:outline-none border-1 h-10 rounded-md'
                onChange={handleExperienceCharge}
              >
                <option value='0'>0 - 3 Years</option>
                <option value='1000'>3 - 8 Years</option>
                <option value='2000'>8 - 15 Years</option>
                <option value='3000'>15+ Years</option>
              </select>
            </div>

            <div className='mt-1 mb-2'>
              <p className='text-blue-950 font-semibold text-sm'>
                Select Referral Credits
              </p>
              <select
                name='referral_credits'
                id='referral_credits'
                className='w-full focus:outline-none border-1 h-10 rounded-md'
                value={referralCharge}
                onChange={handleReferralCharge}
              >
                <option value={1999 + experienceCharge}>
                  2 Referral - ₹{1999 + experienceCharge}
                </option>
                <option value={3999 + 2 * experienceCharge}>
                  5 Referral - ₹{3999 + 2 * experienceCharge}
                </option>
              </select>
            </div>

            <div>
              <p className='my-2 text-xl font-bold'>
                Total Price: ₹{totalCharge}
              </p>
              <div className='uppercase text-white text-xl bg-red-600 px-2 py-1 text-center rounded-full w-full md:w-2/5'>
                Pay now
              </div>
            </div>
          </div>
        </div>

        <div className='w-full bg-blue-950 text-white p-3 font-sans my-3 text-sm md:text-base'>
          We design SEO Optimized LinkedIn Profile that helps you appear on the
          "Top" during the Recruiter Search which creates high chances to be
          called for an Interview. Our experts build Informative and Powerful
          LinkedIn Profiles & Resumes to spark the interest of Hiring Managers.
          Our team of Certified, Award-winning Writers insert the "WOW" factor
          into every writing project!
        </div>

        <div className='w-full my-5'>
            <p className='text-2xl font-semibold text-center text-red-600'>How it works?</p>

            <div className='grid md:grid-cols-4 md:gap-10'>
                <StepsCard step={1} text={"Post payment, our Expert will connect with you to conduct a Brainstorming session"}/>
                <StepsCard step={2} text={"Post payment, our Expert will connect with you to conduct a Brainstorming session"}/>
                <StepsCard step={3} text={"Post payment, our Expert will connect with you to conduct a Brainstorming session"}/>
                <StepsCard step={4} text={"Post payment, our Expert will connect with you to conduct a Brainstorming session"}/>
            </div>
        </div>
      </div>
    </div>
  )
}

export default EmployeeRefferalPro
