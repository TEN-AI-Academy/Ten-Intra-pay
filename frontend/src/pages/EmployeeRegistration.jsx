import React from 'react'
import Banner from '../components/Banner'
import BreadCrum from '../components/BreadCrum'

const BannerText = () => {
  return (
    <div className='text-white'>
      <div className='text-2xl font-semibold'>Register With Us</div>
      <div className='text-xl font-semibold'>
        Let's Join Hands Together & Empower One Another!
      </div>
    </div>
  )
}

const Card = ({ image, heading, text }) => {
  return (
    <div className='flex w-full items-center gap-3 my-3 p-2'>
      {/* Image container with fixed width and height */}
      <div className='w-16 h-16 flex-shrink-0 border border-gray-300 rounded-xl overflow-hidden'>
        <img
          src={`/images/${image}`}
          alt='...'
          className='w-full h-full object-cover hover:animate-shake'
        />
      </div>

      <div>
        <p className='font-semibold mb-2'>{heading}</p>
        <p className='leading-4 text-gray-500'>{text}</p>
      </div>
    </div>
  )
}

const EmployeeRegistration = () => {
  const breadCrum = [
    { name: 'Register With Us', link: '/employee-registration' }
  ]
  return (
    <div>
      <Banner image_path={'banner10.jpg'} text={<BannerText />} />
      <div className='my-8 md:mx-20 mx-2'>
        <BreadCrum data={breadCrum} />

        <div className='md:flex justify-center gap-5 w-full'>
          <div>
            <div className='shadow-3xl p-4'>
              <p className='text-lg text-blue-950 font-semibold'>
                Pick any 2 or more from below options:
              </p>
              <div className='flex items-center gap-3 my-2'>
                <input
                  type='checkbox'
                  name='jobseeker1'
                  id='jobseeker1'
                  checked
                />
                <label for='jobseeker1' className=''>
                  I am Jobseeker
                </label>
              </div>
              <div className='flex items-center gap-3 my-2'>
                <input type='checkbox' name='jobseeker2' id='jobseeker2' />
                <label for='jobseeker2' className=''>
                  I wish to refer a Jobseeker in my Company
                </label>
              </div>
              <div className='flex items-center gap-3 my-2'>
                <input type='checkbox' name='jobseeker3' id='jobseeker3' />
                <label for='jobseeker3' className=''>
                  I wish to refer my Company Job openings with Whiteslips
                </label>
              </div>
            </div>

            <div className='my-5 w-full'>
              <div className='text-blue-950 text-xl font-semibold'>
                Benefits on Registering with Whiteslips!
              </div>
              <Card
                image={'bonus.png'}
                heading={'Bonus'}
                text={
                  'Get benefited through an Employee Referral Program in your company on successful placement'
                }
              />
              <Card
                image={'advantage.png'}
                heading={'Advantage'}
                text={
                  'Use our platform as a network to find your next dream Job'
                }
              />
              <Card
                image={'high-quality.png'}
                heading={'High Quality'}
                text={
                  'With our 10+ years of network, we ensure you hire the Top-Quality Talents that fits your requirement'
                }
              />
              <Card
                image={'social-value.png'}
                heading={'Social Value'}
                text={`Let's Join hands together to help Jobseekers get back to work in this hour of need.`}
              />
            </div>
          </div>

          <div className='md:w-3/5 bg-gray-100 border-1 border-gray-200 p-3'>
            <small>* Mandatory Fields</small>
            <form>
              <input
                type='text'
                placeholder='Name *'
                className='my-1 w-full border-1 border-gray-300 h-10 focus:outline-none p-2 bg-white'
                required
              />
              <input
                type='text'
                placeholder='Email *'
                className='my-1 w-full border-1 border-gray-300 h-10 focus:outline-none p-2 bg-white'
                required
              />
              <input
                type='text'
                placeholder='LinkedIn ID'
                className='my-1 w-full border-1 border-gray-300 h-10 focus:outline-none p-2 bg-white'
                required
              />
              <input
                type='text'
                placeholder='Mobile Number *'
                className='my-1 w-full border-1 border-gray-300 h-10 focus:outline-none p-2 bg-white'
                required
              />
              <input
                type='text'
                placeholder='Company Number *'
                className='my-1 w-full border-1 border-gray-300 h-10 focus:outline-none p-2 bg-white'
                required
              />
              <input
                type='text'
                placeholder='Designation *'
                className='my-1 w-full border-1 border-gray-300 h-10 focus:outline-none p-2 bg-white'
                required
              />

              <select
                name='functions'
                id='functions'
                className='my-1 w-full border-1 border-gray-300 h-10 focus:outline-none p-2 bg-white text-black'
              >
                <option
                  value={'Function'}
                  id='functions'
                  className='text-black'
                >
                  --Functions*--
                </option>
              </select>
              <select
                name='industry'
                id='industry'
                className='my-1 w-full border-1 border-gray-300 h-10 focus:outline-none p-2 bg-white text-black'
              >
                <option value={'Industry'} id='industry' className='text-black'>
                  --Industry*--
                </option>
              </select>
              <select
                name='location'
                id='location'
                className='my-1 w-full border-1 border-gray-300 h-10 focus:outline-none p-2 bg-white text-black'
              >
                <option value={'Location'} id='location' className='text-black'>
                  --Location*--
                </option>
              </select>
              <select
                name='experience'
                id='experience'
                className='my-1 w-full border-1 border-gray-300 h-10 focus:outline-none p-2 bg-white text-black'
              >
                <option
                  value={'Experience In Years'}
                  id='experience'
                  className='text-black'
                >
                  --Experience In Years*--
                </option>
              </select>
              <select
                name='CTC'
                id='CTC'
                className='my-1 w-full border-1 border-gray-300 h-10 focus:outline-none p-2 bg-white text-black'
              >
                <option value={'Current CTC'} id='CTC' className='text-black'>
                  --Current CTC*--
                </option>
              </select>

              <div className='bg-gray-300 p-2 mt-3'>
                <small>Upload Resume *</small>
                <br />
                <input type='file' />
              </div>
              <small>
                (1 file only. Allowed file formats are .doc, .docx, .pdf)
              </small>

              <div className='flex items-center gap-3 my-2'>
                <input type='checkbox' name='form1' id='form1' checked />
                <label for='form1' className=' text-sm'>
                  I wish to Review my Resume & LinkedIn Profile for{' '}
                  <span className='font-semibold'>FREE</span>{' '}
                  <span className='animate-text-blink'>Know More</span>
                </label>
              </div>
              <div className='flex items-center gap-3 my-2'>
                <input type='checkbox' name='form1' id='form1' checked />
                <label for='form1' className=' text-sm'>
                  I wish to have a Mock Interview with an Expert for{' '}
                  <span className='font-semibold'>FREE</span>{' '}
                  <span className='animate-text-blink'>Know More</span>
                </label>
              </div>
              <div className='flex items-center gap-3 my-2'>
                <input type='checkbox' name='form1' id='form1' checked />
                <label for='form1' className=' text-sm'>
                  I wish to avail priority service for Rs.199{' '}
                  <span className='animate-text-blink'>Know More</span>
                </label>
              </div>

              <div className='w-full flex justify-center'>
                <button className='text-lg uppercase text-white bg-red-700 px-3 py-1 rounded-full w-2/5 font-semibold'>
                  submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EmployeeRegistration
