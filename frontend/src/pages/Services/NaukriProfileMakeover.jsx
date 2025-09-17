import Banner from '../../components/Banner'
import BreadCrum from '../../components/BreadCrum'
import StepsCard from '../../components/StepsCard'

const BannerText = () => {
  return (
    <div className='text-2xl font-semibold text-white'>
      Naukri Profile Makeover
    </div>
  )
}

const NaukriProfileMakeover = () => {
  const breadCrum = [
    { name: 'Naukri Profile Makeover', link: '/naukri-profile-makeover' }
  ]
  return (
    <div>
      <Banner image_path={'banner7.jpg'} text={<BannerText />} />
      <div className='my-8 md:mx-20 mx-2'>
        <BreadCrum data={breadCrum} />

        <div className='my-8 md:mx-8 mx-2'>
          <p className='text-lg md:text-xl text-blue-900 font-semibold'>
            Benefits of Naukri Profile Makeover
          </p>
          <div className='md:flex justify-between my-5'>
            <div className='md:w-1/2 mx-2 my-3'>
              <div className='flex items-center gap-5 my-3'>
                <img
                  src='/images/job-seeker.png'
                  alt='...'
                  className='w-15 hover:animate-shake'
                />
                <div className='text-base text-gray-500 leading-5'>
                  Candidates with 100% Profile completeness effectively with
                  relevant keywords appear on top and more likely to be
                  contacted by recruiters.
                </div>
              </div>
              <div className='flex items-center gap-5 my-3'>
                <img
                  src='/images/job-seeker2.png'
                  alt='...'
                  className='w-15 hover:animate-shake'
                />
                <div className='text-base text-gray-500 leading-5'>
                  Build a positive impression with a customized profile that
                  helps to gain the trust of potential employers, which can
                  translate into a job.
                </div>
              </div>
              <div className='my-3 p-2 animate-blink'>
                <p className='text-xl text-black font-semibold text-center mb-3'>
                  Promotional Offer!
                </p>
                <p className='text-center text-sm'>
                  Hurry! Buy Naukri Profile Makeover now and Get your Resume &
                  LinkedIn profile
                </p>
                <p className='text-center text-sm'>
                  Evaluation FREE{' '}
                  <span className='text-red-600 text-sm'>Know More</span>
                </p>
                <p className='text-center text-blue-500 font-semibold text-sm'>
                  Valid only for 10 mins!
                </p>
              </div>
            </div>
            <div className='md:w-1/3'>
              <p className='text-lg font-semibold text-center mb-5'>
                Buy LinkedIn Recommendations
              </p>
              <div className='bg-gray-100 py-3 w-full'>
                <p className='text-3xl text-gray-700 text-center'> $2999*</p>
                <p className='text-sm text-gray-700 text-center'>
                  *Applicable taxes may apply
                </p>
              </div>
              <div className='text-white uppercase text-xl font-semibold rounded-full bg-red-600 p-1 px-2 my-3 w-36 mx-auto text-center cursor-pointer'>
                buy now
              </div>
            </div>
          </div>

          <div className='my-3'>
            <p className='text-2xl text-red-600 text-center font-semibold my-3'>
              How it works?
            </p>

            <div className='grid md:grid-cols-4 gap-5 my-8'>
              <StepsCard
                step={1}
                text={
                  'Post payment, our Profile Building Expert connects with you to understand your Profile & collects relevant Information.'
                }
                image='calculator.png'
              />
              <StepsCard
                step={2}
                text={
                  'Share your Naukri User Id with temporary password at service@whiteslips.com or on the payment page.'
                }
                image='resume-share.png'
              />
              <StepsCard
                step={3}
                text={
                  'Get the First Version of your Naukri Profile in 8 working days, provide Feedback and receive an updated version of your Profile.'
                }
                image='mail-open.png'
              />
              <StepsCard
                step={1}
                text={
                  'Get Promo Code from your assigned Profile Expert to avail 1 Employee Referral Program FREE'
                }
                image='connect.png'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NaukriProfileMakeover
