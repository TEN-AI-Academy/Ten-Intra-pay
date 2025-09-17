import Banner from '../../components/Banner'
import BreadCrum from '../../components/BreadCrum'
import StepsCard from '../../components/StepsCard'

const BannerText = () => {
  return (
    <div className='text-2xl font-semibold text-white'>
      Make a great impression with our 5 Customized Recommendations
    </div>
  )
}

const LinkedInRecommendation = () => {
  const breadCrum = [
    { name: 'LinkedIn Recommendations', link: '/linkedin-recommendations' }
  ]
  return (
    <div>
      <Banner image_path={'banner6.jpg'} text={<BannerText />} />
      <div className='my-8 md:mx-20 mx-2'>
        <BreadCrum data={breadCrum} />

        <div className='my-8 md:mx-8 mx-2'>
          <p className='text-lg md:text-xl text-blue-950 font-semibold'>
            Benefits of LinkedIn Recommendations
          </p>
          <div className='md:flex justify-between my-5'>
            <div className='md:w-1/2 mx-2 my-3 grid grid-rows-4 gap-5'>
              <div className='flex items-center gap-5'>
                <img
                  src='/images/job-seeker.png'
                  alt='...'
                  className='w-15 hover:animate-shake'
                />
                <div className='text-base text-gray-500 leading-5'>
                  Members with recommendations are three times more likely to be
                  contacted by recruiters.
                </div>
              </div>
              <div className='flex items-center gap-5'>
                <img
                  src='/images/job-seeker2.png'
                  alt='...'
                  className='w-15 hover:animate-shake'
                />
                <div className='text-base text-gray-500 leading-5'>
                  Build positive relationships with people in your network while
                  also gaining the trust of potential employers, that can
                  translate into a job.
                </div>
              </div>
              <div className='flex items-center gap-5'>
                <img
                  src='/images/cover.png'
                  alt='...'
                  className='w-15 hover:animate-shake'
                />
                <div className='text-base text-gray-500 leading-5'>
                  Recommendations are an opportunity to have people sell you -
                  so you don’t have to do all the selling yourself.
                </div>
              </div>
              <div className='flex items-center gap-5'>
                <img
                  src='/images/like.png'
                  alt='...'
                  className='w-15 hover:animate-shake'
                />
                <div className='text-base text-gray-500 leading-5'>
                  The strength of your recommendations can get you your next
                  client or your next job.
                </div>
              </div>
            </div>
            <div className='md:w-1/3'>
              <p className='text-lg font-semibold text-center mb-5'>
                Buy LinkedIn Recommendations
              </p>
              <div className='bg-gray-100 py-3 w-full'>
                <p className='text-3xl text-gray-700 text-center'> $1999*</p>
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
                  'Share your Resume at service@whiteslips.com or on the payment page.'
                }
                image='resume-share.png'
              />
              <StepsCard
                step={3}
                text={
                  'Get the first version of your LinkedIn Recommendations, provide feedback and receive your updated version.'
                }
                image='mail-open.png'
              />
              <StepsCard
                step={4}
                text={
                  'Ask your colleagues, clients, supervisors to recommend you using the same content.'
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

export default LinkedInRecommendation
