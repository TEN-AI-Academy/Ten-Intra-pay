import Accordion from '../../components/Accordian'
import Banner from '../../components/Banner'
import BreadCrum from '../../components/BreadCrum'
import StepsCard from '../../components/StepsCard'

const BannerText = () => {
  return <div className='text-2xl text-white font-semibold'>
    Get Mentored & Trained by the experienced Professionals to Ace the Interview
    on your First-Go
  </div>
}

const InterviewPreparation = () => {
  const breadCrum = [{ name: 'Interview Preparation', link: '/interview-preparation' }]

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
    <div>
      <Banner image_path={'banner9.jpg'} text={<BannerText />} />
      <div className='my-8 md:mx-20 mx-2'>
        <BreadCrum data={breadCrum} />

        <div className='my-8 md:mx-8 mx-2'>
          <p className='text-lg md:text-xl text-blue-900 font-semibold'>
            Benefits of Interview Preparation
          </p>
          <div className='md:flex justify-between my-5'>
            <div className='md:w-1/2 mx-2 my-3'>
              <div className='flex items-center gap-5 my-5'>
                <img
                  src='/images/idea-bulb.png'
                  alt='...'
                  className='w-15 hover:animate-shake'
                />
                <div className=''>
                  <p className='text-base font-semibold'>
                    STAR Technique Implementation to Ace your Interview
                  </p>
                  <p className='text-base text-gray-500 leading-5'>
                    Get coached on the Top 10 important questions with the STAR method (Situation, Task, Action, Result)
                  </p>
                </div>
              </div>
              <div className='flex items-center gap-5 my-5'>
                <img
                  src='/images/presentation.png'
                  alt='...'
                  className='w-15 hover:animate-shake'
                />
                <div className=''>
                  <p className='text-base font-semibold'>
                    Get trained on your Behavioural Interview Questions
                  </p>
                  <p className='text-base text-gray-500 leading-5'>
                    Based on your Skills, Core-competencies and Achievements we prepare the answer for the Behavioural Interview questions to impress the Recruiter
                  </p>
                </div>
              </div>
            </div>
            <div className='md:w-1/3'>
              <p className='text-lg font-semibold text-center mb-5'>
                Buy Interview Preparation
              </p>
              <div className='bg-gray-100 py-3 w-full'>
                <p className='text-3xl text-gray-700 text-center'>₹7999*</p>
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
                text={'We will schedule an Interview with an Expert'}
                image='calendar.png'
              />
              <StepsCard
                step={3}
                text={'We will address your Interview Performance with you'}
                image='interview2.png'
              />
              <StepsCard
                step={4}
                text={
                  'Get Trained by the Experts to Ace your next Interview'
                }
                image='experts.png'
              />
            </div>
          </div>
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
                <Accordion text={ele.text} heading={ele.heading} key={index} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default InterviewPreparation
