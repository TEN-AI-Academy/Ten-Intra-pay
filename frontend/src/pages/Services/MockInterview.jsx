import Banner from '../../components/Banner'
import BreadCrum from '../../components/BreadCrum'
import StepsCard from '../../components/StepsCard'

const BannerText = () => {
  return <div className='text-2xl font-semibold text-white'>Mock Interview</div>
}

const MockInterview = () => {
  const breadCrum = [
    { name: 'Mock Interview', link: '/mock-interview' }
  ]
  return (
    <div>
      <Banner image_path={'banner8.jpg'} text={<BannerText />} />
      <div className='my-8 md:mx-20 mx-2'>
        <BreadCrum data={breadCrum} />

        <div className='my-8 md:mx-8 mx-2'>
          <p className='text-lg md:text-xl text-blue-900 font-semibold'>
            Benefits of Mock Interview
          </p>
          <div className='md:flex justify-between my-5'>
            <div className='md:w-1/2 mx-2 my-3'>
              <div className='flex items-center gap-5 my-5'>
                <img
                  src='/images/interview.png'
                  alt='...'
                  className='w-15 hover:animate-shake'
                />
                <div className=''>
                  <p className='text-base font-semibold'>
                    Mock Interview with Experts
                  </p>
                  <p className='text-base text-gray-500 leading-5'>
                    Get a taste of a real Interview and identify your weakness
                    to improve your Strength
                  </p>
                </div>
              </div>
              <div className='flex items-center gap-5 my-5'>
                <img
                  src='/images/hand-shake.png'
                  alt='...'
                  className='w-15 hover:animate-shake'
                />
                <div className=''>
                  <p className='text-base font-semibold'>
                    Report to help you prepare for near future Interviews
                  </p>
                  <p className='text-base text-gray-500 leading-5'>
                    Details on how to fix your weakness. Additional information to further improve your Skills. An easy reference guide for Job Interview best practices
                  </p>
                </div>
              </div>
            </div>
            <div className='md:w-1/3'>
              <p className='text-lg font-semibold text-center mb-5'>
                Buy Mock Interview
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
                  'Get confirmation call from Employment Advisor - Post payment'
                }
                image='call.png'
              />
              <StepsCard
                step={2}
                text={
                  'We will schedule an Interview with an Expert'
                }
                image='calendar.png'
              />
              <StepsCard
                step={3}
                text={
                  'We will address your Interview Performance with you'
                }
                image='interview2.png'
              />
              <StepsCard
                step={1}
                text={
                  'We will conduct a feedback session with Interview Tips to Boost your Confidence'
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

export default MockInterview
