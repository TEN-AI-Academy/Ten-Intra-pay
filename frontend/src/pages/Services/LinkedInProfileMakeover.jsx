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
      <p className='text-lg md:text-2xl font-bold'>
        Enhance your LinkedIn Profile to{' '}
        <span className='font-extrabold'>
          Spark the Interest of Hiring Managers
        </span>
      </p>{' '}
      <span className='text-sm md:text-base font-semibold'>
        Get your SEO Optimized Profile that creates high chances to be called
        for an Interview
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

const LinkedInProfileMakeover = () => {
  const [experienceCharge, setExperienceCharge] = useState(1999)
  const [speedCharge, setSpeedCharge] = useState(0)
  const [totalCharge, setTotalCharge] = useState(experienceCharge)

  const handleCoverLetter = e => {
    if (e.target.checked) setTotalCharge(totalCharge + 499)
    else setTotalCharge(totalCharge - 499)
  }

  const handleLinkedInRecommendationCharge = e => {
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
    { name: 'LinkedIn Profile Makeover', link: '/linkedin-profile-makeover-india' }
  ]

  const slider_data = [
    { image: './images/linkedIn1.jpg' },
    { image: './images/linkedIn2.jpg' },
    { image: './images/linkedIn3.jpg' },
    { image: './images/linkedIn4.jpg' },
    { image: './images/linkedIn5.jpg' }
  ]

  const table_data = [
    'JavaScript Developer with React expertise',
    'Proficient in Data Structures & Algorithms',
    'Experience with REST APIs and GraphQL',
    'Cloud Platforms: AWS, Azure, GCP',
    'Machine Learning using Python & TensorFlow',
    'Optimized SQL Queries for Large Databases',
    'Agile & Scrum Project Management',
    'Cross-functional Team Collaboration',
    'Strong Problem-Solving & Debugging Skills',
    'UI/UX Design with Figma & Tailwind CSS',
    'Cybersecurity Best Practices Implementation'
  ]

  const accordianData = [
    {
      heading: 'What services do you provide?',
      text: 'We specialize in professional resume writing, LinkedIn optimization, and personalized career consulting to help clients stand out in competitive markets.'
    },
    {
      heading: 'How fast is the delivery?',
      text: 'Our standard delivery time is 3–5 business days, with an option for expedited delivery within 48 hours.'
    },
    {
      heading: 'Why choose our writers?',
      text: 'Our writers are certified professionals with experience across multiple industries, ensuring your resume highlights the right skills and achievements.'
    },
    {
      heading: 'Do you offer interview preparation?',
      text: 'Yes, we provide mock interviews, personalized feedback, and strategies to boost your confidence before real interviews.'
    },
    {
      heading: 'What industries do you cover?',
      text: 'We cater to diverse industries including IT, healthcare, finance, engineering, marketing, and more.'
    },
    {
      heading: 'Is there a money-back guarantee?',
      text: 'We offer a satisfaction guarantee. If you are not happy with the first draft, we provide multiple revisions until you are satisfied.'
    },
    {
      heading: 'Do you optimize resumes for ATS?',
      text: 'Yes, our resumes are ATS-friendly and crafted with relevant keywords to increase your chances of selection.'
    },
    {
      heading: 'Can you update existing resumes?',
      text: 'Absolutely, we refine and update your existing resumes to align with current industry standards and job descriptions.'
    },
    {
      heading: 'Do you provide LinkedIn profile services?',
      text: 'We revamp LinkedIn profiles with keyword optimization, professional summaries, and engaging headlines to attract recruiters.'
    },
    {
      heading: 'What makes your service unique?',
      text: 'Our combination of industry expertise, quick turnaround, and personalized guidance makes us stand out in a crowded market.'
    }
  ]

  return (
    <div className=''>
      <Banner image_path={'banner2.jpg'} text={<BannerText />} />

      <div className='my-8 md:mx-20 mx-2'>
        <BreadCrum data={breadCrum} />

        <p className='text-3xl text-center w-full my-4 text-blue-400 font-semibold'>
          LinkedIn Profile Makeover
        </p>

        <div className='mx-6 md:mx-10 grid grid-cols-1 md:grid-cols-[53%_43%]  my-5 gap-8'>
          <div className='h-min'>
            <ServiceSlider data={slider_data} />
          </div>
          <div className=''>
            <div className=''>
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
                  <option value='3999'>3 - 8 Years - ₹3999</option>
                  <option value='4499'>8 - 15 Years - ₹4499</option>
                  <option value='4999'>15+ Years - ₹4999</option>
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
                  name='linkedIn_reccomendations'
                  id='linkedIn_reccomendations'
                  onChange={handleLinkedInRecommendationCharge}
                />
                <label htmlFor='linkedIn_reccomendations' className='pl-2'>
                  Add LinkedIn recommendations at ₹1999{' '}
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
                <div className='w-4/5 px-2 bg-gray-200 text-blue-600 flex justify-center items-center rounded md:text-sm text-sm'>
                  Add all and Get 25% off on Recommendations & Resume with Cover
                  Letter*
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
          We design SEO Optimized LinkedIn Profile that helps you appear on the
          "Top" during the Recruiter Search which creates high chances to be
          called for an Interview. Our experts build Informative and Powerful
          LinkedIn Profiles & Resumes to spark the interest of Hiring Managers.
          Our team of Certified, Award-winning Writers insert the "WOW" factor
          into every writing project!
        </div>

        <div className='mx-6 md:mx-10 grid grid-cols-1 md:grid-cols-2 my-5'>
          <div className='mb-3'>
            <div className='text-xl text-blue-700 font-semibold mb-4 w-full leading-6 text-justify'>
              We customize your LinkedIn Profile as per the Industry Standard
              Checklist as displayed below
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
            <div className='grid grid-cols-1 md:grid-cols-2 grid-rows-2 gap-5'>
              <StepsCard
                step={1}
                text={
                  'Post payment, LinkedIn Expert connects with you to understand your Profile & collects relevant Information'
                }
              />
              <StepsCard
                step={2}
                text={
                  'Share your LinkedIn ID and Temporary Password at service@whiteslips.com or on the Payment Page comments section'
                }
                image='share.png'
              />
              <StepsCard
                step={3}
                text={
                  'Get the First Version of your LinkedIn Profile, provide Feedback and receive an updated Version of your Profile'
                }
                image='resume.png'
              />
              <StepsCard
                step={4}
                text={
                  'Get Promo Code from your assigned LinkedIn Expert to avail 1 Employee Referral Program FREE'
                }
                image='promo-code.png'
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
            <span className='font'>Time to delivery first cut</span>
          </p>
          <p>
            <span className='font-bold'>Expected Final Delivery: </span>
            <span className='font'>Calculated based on 2 iterations</span>
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
                      Express
                    </td>
                    <td className='p-2 border-1 border-slate-500 text-sm text-center'>
                      4 working days
                    </td>
                    <td className='p-2 border-1 border-slate-500 text-sm text-center'>
                      10 working days
                    </td>
                  </tr>
                  <tr>
                    <td className='p-2 border-1 border-slate-500 text-sm text-center'>
                      Priority
                    </td>
                    <td className='p-2 border-1 border-slate-500 text-sm text-center'>
                      2 working days
                    </td>
                    <td className='p-2 border-1 border-slate-500 text-sm text-center'>
                      6 working days
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
            {accordianData.map((ele, index) => (
              <div className='my-2'>
                <Accordian text={ele.text} heading={ele.heading} key={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default LinkedInProfileMakeover
