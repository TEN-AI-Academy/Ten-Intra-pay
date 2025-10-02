import { useEffect, useState } from 'react'
import Banner from '../../components/Banner'
import BreadCrum from '../../components/BreadCrum'
import ServiceSlider from '../../components/ServiceSlider'
import StepsCard from '../../components/StepsCard'
import NeedHelp from '../../components/NeedHelp'
import Accordian from '../../components/Accordian'

const BannerText = () => {
  return (
    <div className='text-white font-sans'>
      <p className='text-xl font-bold'>
        Impress the Recruiters within 30 seconds with our{' '}
        <span className='font-extrabold'>Powerful Visual Resume</span>
      </p>{' '}
      <span className='font-semibold'>
        Stand out from the crowd and secure Interviews with ease
      </span>
    </div>
  )
}

const Services = () => {
  const [experienceCharge, setExperienceCharge] = useState(0)
  const [speedCharge, setSpeedCharge] = useState(0)

   const [addons, setAddons] = useState({
    coverLetter: false,
    linkedInMakeover: false,
    naukriMakeover: false,
    interviewPreparation: false,
    onlineCV: false,
    resume: false,
    linkedInRecommendation: false
  });

  const [totalCharge, setTotalCharge] = useState(experienceCharge);

  const addonPrices = {
    coverLetter: 499,
    linkedInMakeover: 1999,
    naukriMakeover: 2999,
    interviewPreparation: 7999,
    onlineCV: 499,
    resume: 1999,
    linkedInRecommendation: 1999
  };

  useEffect(() => {
    let total = experienceCharge + speedCharge;

    Object.entries(addons).forEach(([key, value]) => {
      if (value) total += Number(addonPrices[key]);
    });

    setTotalCharge(total);
  }, [experienceCharge, speedCharge, addons]);

  const handleAddonChange = (e) => {
    console.log(e.target)
    const { name, checked } = e.target;
    setAddons((prev) => ({ ...prev, [name]: checked }));
  };

  const handleExperienceCharge = e => {
    const newAmount = totalCharge - Number(experienceCharge)
    setExperienceCharge(Number(e.target.value))
    setTotalCharge(newAmount + Number(e.target.value))
  }

  const handleSpeedCharge = e => {
    const newAmount = totalCharge - Number(speedCharge)
    setSpeedCharge(Number(e.target.value))
    setTotalCharge(newAmount + Number(e.target.value))
  }

  const breadCrum = [
    { name: 'Professional Resume', link: '/resume-writing-services-india' }
  ]

  const slider_data1 = [
    { image: './images/resume1.jpg' },
    { image: './images/resume2.jpg' },
    { image: './images/resume3.jpg' },
    { image: './images/resume4.jpg' }
  ]

  const slider_data2  = [
    { image: './images/linkedIn1.jpg' },
    { image: './images/linkedIn2.jpg' },
    { image: './images/linkedIn3.jpg' },
    { image: './images/linkedIn4.jpg' },
    { image: './images/linkedIn5.jpg' }
  ]

  return (
    <div className=''>
      <Banner image_path={'banner1.jpeg'} text={<BannerText />} />

      <div className='my-8 md:mx-20 mx-2'>
        <BreadCrum data={breadCrum} />

        <p className='text-3xl text-center w-full my-4 text-blue-400 font-semibold'>
          Professional Resume
        </p>

        <div className='mx-6 md:mx-10 grid grid-cols-1 md:grid-cols-[53%_43%]  my-5 gap-8'>
          <div className='h-min'>
            <ServiceSlider data={slider_data1} />
            <ServiceSlider data={slider_data2} />
          </div>
          <div>
            <div className='w-full'>
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
                  <option value='0' defaultChecked>
                    0 - 3 Years
                  </option>
                  <option value='0'>3 - 8 Years</option>
                  <option value='0'>8 - 15 Years</option>
                  <option value='0'>15+ Years</option>
                </select>
              </div>
              <div className='mt-1 mb-2'>
                <p className='text-blue-950 font-semibold text-sm'>
                  How Soon Would You Need This Done?
                </p>
                <select
                  name='total_years'
                  id='total_years'
                  className='w-full focus:outline-none border-1 h-10 rounded-md'
                  onChange={handleSpeedCharge}
                >
                  <option value='0' defaultChecked>
                    Normal - 8 Working Days = ₹0
                  </option>
                  <option value='2000'>
                    Priority - 2 Working Days = ₹2000
                  </option>
                </select>
              </div>

              <div className='flex items-center my-1'>
                <input
                  type='checkbox'
                  name='resume'
                  id='resume'
                  onChange={handleAddonChange}
                  checked={addons.resume}
                />
                <label htmlFor='resume' className='pl-2'>
                  Add a Resume at ₹1999
                </label>
              </div>
              <div className='flex items-center my-1'>
                <input
                  type='checkbox'
                  name='coverLetter'
                  id='coverLetter'
                  onChange={handleAddonChange}
                  checked={addons.coverLetter}
                />
                <label htmlFor='coverLetter' className='pl-2'>
                  Add a Cover Letter at ₹499
                </label>
              </div>
              <div className='flex items-center my-1'>
                <input
                  type='checkbox'
                  name='linkedInMakeover'
                  id='linkedInMakeover'
                  onChange={handleAddonChange}
                  checked={addons.linkedInMakeover}
                />
                <label htmlFor='linkedInMakeover' className='pl-2'>
                  Add a LinkedIn Makeover at ₹1999{' '}
                  <span className='text-xs text-red-600'>Know more</span>
                </label>
              </div>
              <div className='flex items-center my-1'>
                <input
                  type='checkbox'
                  name='linkedInRecommendation'
                  id='linkedInRecommendation'
                  onChange={handleAddonChange}
                  checked={addons.linkedInRecommendation}
                />
                <label htmlFor='linkedInRecommendation' className='pl-2'>
                  Add a LinkedIn Recommendations at ₹1999{' '}
                  <span className='text-xs text-red-600'>Know more</span>
                </label>
              </div>
              <div className='flex items-center my-1'>
                <input
                  type='checkbox'
                  name='naukriMakeover'
                  id='naukriMakeover'
                  onChange={handleAddonChange}
                  checked={addons.naukriMakeover}
                />
                <label htmlFor='naukriMakeover' className='pl-2'>
                  Add a Naukri Profile Makeover at ₹2999{' '}
                  <span className='text-xs text-red-600'>Know more</span>
                </label>
              </div>
              <div className='flex items-center my-1'>
                <input
                  type='checkbox'
                  name='interviewPreparation'
                  id='interviewPreparation'
                  onChange={handleAddonChange}
                  checked={addons.interviewPreparation}
                />
                <label htmlFor='interviewPreparation' className='pl-2'>
                  Add an Interview Preparation at ₹7999{' '}
                  <span className='text-xs text-red-600'>Know more</span>
                </label>
              </div>
              <div className='flex items-center my-1'>
                <input
                  type='checkbox'
                  name='onlineCV'
                  id='onlineCV'
                  onChange={handleAddonChange}
                  checked={addons.onlineCV}
                />
                <label htmlFor='onlineCV' className='pl-2'>
                  Add an Online CV at ₹499
                  <span className='text-xs text-red-600'>Know more</span>
                </label>
              </div>

              <div className='w-full h-12 border-1 border-slate-600 rounded-md flex my-4'>
                <div className='w-1/5 bg-slate-800 rounded-l flex justify-center items-center md:text-base text-sm text-center text-white'>
                  Bundle Offer
                </div>
                <div className='w-4/5 bg-gray-200 text-blue-600 flex justify-center items-center rounded md:text-sm text-sm'>
                  Add all services and get 5 Employee Referrals FREE *
                </div>
              </div>

              <div className='w-full md:w-4/5 flex items-center gap-2 h-8'>
                <input
                  type='text'
                  className='border-1 border-gray-500 h-full px-2'
                  placeholder='Promo Code'
                />
                <div className='h-full bg-red-600 flex items-center text-sm px-2 font-semibold text-white'>
                  Apply Code
                </div>
              </div>

              <div>
                <p className='my-2 text-xl font-bold'>
                  Total Price: Rs. {totalCharge}
                </p>
                <div className='uppercase text-white text-xl bg-red-600 px-2 py-1 text-center rounded-full w-full md:w-2/5'>
                  Pay now
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='w-full bg-blue-950 text-white p-3 font-sans'>
          We craft Visual Resumes to impress the Recruiters within 30 seconds.
          Our experts create Powerfully Written Resumes to spark the interest of
          Hiring Managers. Our team of Certified, Award-Winning Writers insert
          the "WOW" factor into every writing project! We create customized
          Resume that beats ATS and makes you stand out from the crowd and
          secure Interviews with ease.
        </div>

        <div className='mx-6 md:mx-10'>
          <div className='text-xl font-semibold text-blue-800 my-4'>
            Resume Delivery Time
          </div>
          <p>
            <span className='font-bold'>First Version: </span>
            <span className=''>Time to delivery first cut</span>
          </p>
          <p>
            <span className='font-bold'>Expected Final Delivery: </span>
            <span className=''>Calculated based on 2 iterations</span>
          </p>

          <div className='md:flex items-start gap-12 my-5'>
            <div className='w-full'>
              <table className='border-1 w-full'>
                <tbody>
                  <tr>
                    <td className='p-2 font-semibold border-1 border-slate-500'>
                      Resume Variant
                    </td>
                    <td className='p-2 font-semibold border-1 border-slate-500'>
                      First Version
                    </td>
                    <td className='p-2 font-semibold bg-slate-900 text-white border-1 border-slate-500'>
                      Final Delivery *
                    </td>
                  </tr>
                  <tr>
                    <td className='p-2 border-1 border-slate-500 text-sm text-center'>
                      Regular
                    </td>
                    <td className='p-2 border-1 border-slate-500 text-sm text-center'>
                      8 working days
                    </td>
                    <td className='p-2 border-1 border-slate-500 text-sm text-center'>
                      14 working days
                    </td>
                  </tr>
                  <tr>
                    <td className='p-2 border-1 border-slate-500 text-sm text-center'>
                      Express
                    </td>
                    <td className='p-2 border-1 border-slate-500 text-sm text-center'>
                      4 working days
                    </td>
                    <td className='p-2 border-1 border-slate-500 text-sm text-center'>
                      10 working days
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className='w-full mt-5 md:mt-0'>
              <NeedHelp />
            </div>
          </div>

          <p>
            <span className='font-bold'>* Working Days: </span>
            <span className=''>Resume Writing team work from Mon - Fri</span>
          </p>
          <p className='w-full md:w-1/2'>
            ** We do not restrict iterations for any customer. On an average
            people take 2 Iterations to finalize resume
          </p>
        </div>
      </div>
    </div>
  )
}

export default Services
