import { useState } from 'react'
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

const TableDataHelper = ({ data }) => {
  return (
    <tr className=''>
      <td className='border-1 px-1 py-2 text-sm font-semibold border-slate-400'>
        {data}
      </td>
      <td className='border-1 bg-cyan-50 border-slate-400'>
        <img
          src='./images/tick.png'
          alt='tick'
          width={20}
          className='mx-auto'
        />
      </td>
    </tr>
  )
}

const ResumeBuilding = () => {
  const [experienceCharge, setExperienceCharge] = useState(1999)
  const [speedCharge, setSpeedCharge] = useState(0)
  const [totalCharge, setTotalCharge] = useState(experienceCharge)

  const handleCoverLetter = e => {
    if (e.target.checked) setTotalCharge(totalCharge + 499)
    else setTotalCharge(totalCharge - 499)
  }

  const handleLinkedInMakeover = e => {
    if (e.target.checked) setTotalCharge(totalCharge + 1999)
    else setTotalCharge(totalCharge - 1999)
  }

  const handleNaukriMakeover = e => {
    if (e.target.checked) setTotalCharge(totalCharge + 2999)
    else setTotalCharge(totalCharge - 2999)
  }

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
    { name: 'Home', link: '#' },
    { name: 'Professional Resume', link: '#' }
  ]

  const slider_data = [
    { image: './images/resume1.jpg' },
    { image: './images/resume2.jpg' },
    { image: './images/resume3.jpg' },
    { image: './images/resume4.jpg' }
  ]

  const table_data = [
    'Relevant Keywords to beat Applicant Tracking System',
    'Relevant Keywords to beat Applicant Tracking System',
    'Relevant Keywords to beat Applicant Tracking System',
    'Relevant Keywords to beat Applicant Tracking System',
    'Relevant Keywords to beat Applicant Tracking System',
    'Relevant Keywords to beat Applicant Tracking System',
    'Relevant Keywords to beat Applicant Tracking System',
    'Relevant Keywords to beat Applicant Tracking System',
    'Relevant Keywords to beat Applicant Tracking System',
    'Relevant Keywords to beat Applicant Tracking System',
    'Relevant Keywords to beat Applicant Tracking System'
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
            <ServiceSlider data={slider_data} />
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
                  <option value='1999' defaultChecked>
                    0 - 3 Years - ₹1999
                  </option>
                  <option value='4999'>3 - 8 Years - ₹4999</option>
                  <option value='5999'>8 - 15 Years - ₹5999</option>
                  <option value='6999'>15+ Years - ₹6999</option>
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
                  <option value='1000'>Express - 4 Working Days = ₹1000</option>
                  <option value='2000'>
                    Priority - 2 Working Days = ₹2000
                  </option>
                </select>
              </div>

              <div className='flex items-center my-1'>
                <input
                  type='checkbox'
                  name='cover_letter'
                  id='cover_letter'
                  onChange={handleCoverLetter}
                />
                <label htmlFor='cover_letter' className='pl-2'>
                  Add a Cover Letter at ₹499
                </label>
              </div>
              <div className='flex items-center my-1'>
                <input
                  type='checkbox'
                  name='linked_in_makeover'
                  id='linked_in_makeover'
                  onChange={handleLinkedInMakeover}
                />
                <label htmlFor='linked_in_makeover' className='pl-2'>
                  Add a LinkedIn Makeover at ₹1999{' '}
                  <span className='text-xs text-red-600'>Know more</span>
                </label>
              </div>
              <div className='flex items-center my-1'>
                <input
                  type='checkbox'
                  name='naukri_makeover'
                  id='naukri_makeover'
                  onChange={handleNaukriMakeover}
                />
                <label htmlFor='naukri_makeover' className='pl-2'>
                  Add a Naukri Profile Makeover at ₹2999{' '}
                  <span className='text-xs text-red-600'>Know more</span>
                </label>
              </div>

              <div className='w-full h-12 border-1 border-slate-600 rounded-md flex my-4'>
                <div className='w-1/5 bg-slate-800 rounded-l flex justify-center items-center md:text-base text-sm text-center text-white'>
                  Combo Pack
                </div>
                <div className='w-4/5 bg-gray-200 text-blue-600 flex justify-center items-center rounded md:text-sm text-sm'>
                  Add any 2 or more and Get 25% off on Add-on services*
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

        <div className='mx-6 md:mx-10 grid grid-cols-1 md:grid-cols-2 my-5'>
          <div className='mb-3'>
            <div className='text-xl text-blue-700 font-semibold mb-4 w-full leading-6 text-justify'>
              We design your Resume as per the Industry Standard checklist as
              displayed below
            </div>
            <table className='w-full border-1 border-slate-400'>
              <tbody>
                <tr className='text-center'>
                  <td className='font-semibold py-1 w-3/4 border-1 border-slate-400'>
                    Industry Standard Checklist
                  </td>
                  <td className='font-semibold py-1 bg-slate-800 text-white border-1 border-slate-400'>
                    Company Visual Resume
                  </td>
                </tr>

                {table_data.map((data, index) => (
                  <TableDataHelper data={data} key={index} />
                ))}
              </tbody>
            </table>
          </div>

          <div className='mx-6 md:mx-10'>
            <div className='text-center font-semibold text-red-600 text-xl mb-6'>
              How it works?
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 grid-rows-2'>
              <StepsCard
                step={1}
                text={
                  'Post payment, our Professional Resume Writer connects with you to understand your Profile & collects relevant Information'
                }
              />
              <StepsCard
                step={2}
                text={
                  'Post payment, our Professional Resume Writer connects with you to understand your Profile & collects relevant Information'
                }
              />
              <StepsCard
                step={3}
                text={
                  'Post payment, our Professional Resume Writer connects with you to understand your Profile & collects relevant Information'
                }
              />
              <StepsCard
                step={4}
                text={
                  'Post payment, our Professional Resume Writer connects with you to understand your Profile & collects relevant Information'
                }
              />
            </div>
          </div>
        </div>

        <div className='mx-6 md:mx-10'>
          <div className='text-xl font-semibold text-blue-800 my-4'>
            Resume Delivery Time
          </div>
          <p>
            <span className='font-bold'>First Version: </span>
            <span className='font-semibold'>Time to delivery first cut</span>
          </p>
          <p>
            <span className='font-bold'>First Version: </span>
            <span className='font-semibold'>Time to delivery first cut</span>
          </p>

          <div className='md:flex items-center gap-12 my-5'>
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
                      Regular
                    </td>
                    <td className='p-2 border-1 border-slate-500 text-sm text-center'>
                      8 working days
                    </td>
                    <td className='p-2 border-1 border-slate-500 text-sm text-center'>
                      14 working days
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
            <span className='font-semibold'>
              Resume Writing team work from Mon - Fri
            </span>
          </p>
          <p className='w-full md:w-1/2'>
            ** We do not restrict iterations for any customer. On an average
            people take 2 Iterations to finalize resume
          </p>
        </div>

        <div className='mx-6 md:mx-10 my-5'>
          <div className='flex items-center gap-2 mb-2'>
            <div className='border-1 border-blue-800 rounded-full text-xl text-blue-800 font-semibold px-4 p-2'>
              ?
            </div>
            <div className='text-xl font-semibold text-blue-800'>
              Frequently Asked Questions
            </div>
          </div>
          <div>
            <div className='my-2'>
              <Accordian
                text={
                  "It is a framework where we strive to serve our esteemed customers who put their trust in our services. This platform's main focus emerged with the concept of enabling you to attain your dream career. Our reliable and professional resume writers are well-equipped and trained to render the highest quality matter within the shortest amount of time. Notwithstanding, seeing as our creative and technical resume writers have worked on diverse projects, we assign writers based on the profile's requirements and demands. To differentiate ourselves in a saturated market, we are integrating the concept of distinctiveness and benevolence by offering shortest business days delivery with the opportunity to upgrade to expedited professional resume writing service for 2 business day handover."
                }
                heading={'Why select this company?'}
              />
            </div>
            <div className='my-2'>
              <Accordian
                text={
                  "It is a framework where we strive to serve our esteemed customers who put their trust in our services. This platform's main focus emerged with the concept of enabling you to attain your dream career. Our reliable and professional resume writers are well-equipped and trained to render the highest quality matter within the shortest amount of time. Notwithstanding, seeing as our creative and technical resume writers have worked on diverse projects, we assign writers based on the profile's requirements and demands. To differentiate ourselves in a saturated market, we are integrating the concept of distinctiveness and benevolence by offering shortest business days delivery with the opportunity to upgrade to expedited professional resume writing service for 2 business day handover."
                }
                heading={'Why select this company?'}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ResumeBuilding
