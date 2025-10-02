import React from 'react'
import Banner from '../components/Banner'
import BreadCrum from '../components/BreadCrum'
import WhyusCard from '../components/WhyusCard'

const BannerText = () => {
  return (
    <div>
      <BreadCrum data={[{ name: 'Why Choose Us', link: '/why-us' }]} />
      <div className='text-2xl text-white font-semibold'>Why Choose Us</div>
    </div>
  )
}

const WhyUs = () => {
  return (
    <div>
      <Banner image_path={'banner11.jpg'} text={<BannerText />} />
      <div className='my-8 md:mx-20 mx-2'>
        <p className='w-full text-3xl font-semibold text-blue-400 text-center mb-8'>
          Job Seekers
        </p>
        <div className='w-full grid md:grid-cols-4 gap-6 mb-5'>
          <WhyusCard
            image_path='jobseeker1.jpg'
            heading='Advantages'
            data='We process you through an Employee Referral Program - The Best way to Get Hired!'
          />
          <WhyusCard
            image_path='jobseeker2.jpg'
            heading='Excellence'
            data='We use our expertise to shortlist the Candidate and prepare them for an Interview'
          />
          <WhyusCard
            image_path='jobseeker3.jpg'
            heading='Importance'
            data='We give exclusive attention to each Candidate'
          />
          <WhyusCard
            image_path='jobseeker4.jpg'
            heading='Care'
            data='We will help you with one FREE Employee Referral if your profile is as per the Industry Standard.'
          />
        </div>

        <p className='w-full text-3xl font-semibold text-blue-400 text-center my-15'>
          Employees & Employers
        </p>

        <div className='w-full grid md:grid-cols-4 gap-6 mb-5'>
          <WhyusCard
            image_path='employee1.jpg'
            heading='Bonus'
            data='Get benefited through an Employee Referral Program in your company on successful placement'
          />
          <WhyusCard
            image_path='employee2.jpg'
            heading='Advantage'
            data='Use our platform as a network to find your next dream Job'
          />
          <WhyusCard
            image_path='employee3.jpg'
            heading='High Quality'
            data='With our 10+ years of network, we ensure you hire the Top-Quality Talents that fits your requirement'
          />
          <WhyusCard
            image_path='employee4.jpg'
            heading='Social Value'
            data={`Let's Join hands together to help Jobseekers get back to work in this hour of need.`}
          />
        </div>
      </div>
    </div>
  )
}

export default WhyUs
