import Banner from '../../components/Banner'
import BreadCrum from '../../components/BreadCrum'
import StepsCard from '../../components/StepsCard'

const BannerText = () => {
  return <div className='text-xl font-semibold text-white'>Online CV</div>
}

const OnlineCV = () => {
  const breadCrum = [
    { name: 'Online CV', link: '/online-cv' }
  ]
  return (
    <div className='w-full'>
      <Banner image_path={'banner5.jpg'} text={<BannerText />} />
      <div className='my-8 md:mx-20 mx-2'>
        <BreadCrum data={breadCrum} />

        <div className='md:flex items-center my-5 justify-around'>
          <div className='md:w-[45%]'>
            <p className='text-base my-3'>
              We live in a Digital world where everything happens online.
              Recruiters are increasingly shifting to hiring online, abandoning
              offline methods. The online process has taken over to an extent
              where most of us have our job profiles online on platforms like
              LinkedIn, accessible through single clicks.
            </p>
            <p className=' my-3'>
              It’s important to have your online Resume ready! With Whiteslips
              Resume hosting service, you get an URL address for your Resume
              which is accessible anytime, anywhere for a validity of 2 years.
              You are just one click away from sending the URL to your Potential
              Employer.
            </p>
            <p className='font-semibold my-3'>
              Get your Online Resume URL Hosted Today!
            </p>
          </div>

          <div className='md:w-[45%] h-full'>
            <div className='shadow-md shadow-black p-7'>
              <p className='text-2xl text-red-500 font-semibold text-center'>
                Check your URL
              </p>
              <div className='my-3'>
                <p className='text-center h-5 font-semibold'>
                  Enter your name to check availability.
                </p>
                <p className='text-center font-semibold'>
                  If Url is not available, try appending 1,2 and so on...
                </p>
              </div>
              <div className='w-full flex items-center gap-1 justify-center my-3'>
                <input
                  type='text'
                  className='w-3/5 border-1 border-gray-400 px-1 focus:outline-none h-7'
                />
                <button className='uppercase bg-blue-500 text-white font-semibold text-sm h-7 px-5 hover:cursor-pointer'>
                  check
                </button>
              </div>
              <div className='w-full flex justify-center'>
                <button className='uppercase bg-orange-400 text-white font-semibold text-sm h-7 px-5 my-2 hover:cursor-pointer disabled:bg-gray-500 disabled:cursor-auto'>
                  confirm
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className='my-5'>
          <p className='text-2xl text-red-500 font-semibold text-center py-5'>
            How it works?
          </p>

          <div className='grid md:grid-cols-4 gap-5'>
            <StepsCard
              step={1}
              text={'Enter your name to check URL availability'}
              image='link-correct.png'
            />
            <StepsCard
              step={2}
              text={'If Url is not available, try alternating 1, 2 and so on'}
              image='link-wrong.png'
            />
            <StepsCard
              step={3}
              text={
                'The Url that you choose will be activated within 2 working days'
              }
              image='click-right.png'
            />
            <StepsCard
              step={4}
              text={
                'Flash your CV URL on LinkedIn, E-mail and other Social Media Platforms'
              }
              image='share2.png'
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default OnlineCV
