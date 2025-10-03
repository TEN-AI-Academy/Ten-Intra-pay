import React from 'react'
import { Link } from 'react-router-dom'
import Slider from 'react-slick'

const HomeBanner = () => {
  const settings = {
    dots: true,
    arrows: true,
    infinite: true,
    speed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    pauseOnHover: true
    // responsive: [
    //   { breakpoint: 1024, settings: { slidesToShow: 2 } },
    //   { breakpoint: 640, settings: { slidesToShow: 1 } }
    // ]
  }

  const FirstBanner = ({ image_path, heading, text }) => {
    return (
      <div className='w-[100vw]  '>
        <div
          className='w-full py-6.25 px-10 md:py-10 h-fit  relative bg-cover md:bg-right bg-no-repeat md:flex md:justify-around  '
          style={{ backgroundImage: `url(/images/${image_path})` }}
        >
          <div className='md:mx-20 flex flex-col md:py-15'>
            <div>
              <span className='w-full    mb-2  text-white text-xl text-center md:text-3xl flex justify-center md:justify-normal font-bold '>
                {heading}
              </span>
            </div>
            <div>
              <span className='w-full    mb-5  text-white text-sm md:text-2xl flex justify-center md:justify-start text-center md:text-start  font-medium md:font-normal '>
                {text}
              </span>
            </div>
            <Link to={'/employee-registration'}>
              <button className='p-2 px-4 md:px-6 mb-2 mx-20 md:mx-0 bg-blue-400 rounded-lg hover:bg-amber-600  text-sm md:text-lg text-white font-medium '>
                Upload Resume
              </button>
            </Link>
          </div>
          <div className='md:mx-20'>
            <iframe
              className=' mx-0 md:w-130 md:h-80'
              src='https://www.youtube.com/embed/zsdPYFPTdw0?autoplay=1&mute=0&loop=1'
              title='YouTube video player'
              allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
            ></iframe>
          </div>
        </div>
      </div>
    )
  }

  const Banner = ({ image_path, heading, text, button, link }) => {
    return (
      <div className='w-[100vw] h-auto'>
        <div className='w-full py-4 px-10 md:py-0 md:px-10 h-90 md:h-100 bg-[#2e63af] z-0 flex flex-wrap justify-around'>
          <div className='flex flex-col justify-start md:p-0 md:py-20 md:px-0 md:w-1/2'>
            <div>
              <span className='w-[100%]   md:mx-0 mb-2  text-white text-xl md:text-3xl flex justify-center md:justify-start font-bold '>
                {heading}
              </span>
            </div>
            <div>
              <span className='w-[100%]  md:mx-0 mb-5  text-white text-sm md:text-2xl flex flex-wrap justify-center md:justify-start text-center md:text-start  font-medium md:font-normal '>
                {text}
              </span>
            </div>
            <Link to={link}>
              <button className='p-2 px-4 mx-24 md:mx-0 hover:bg-blue-400 rounded-lg bg-amber-600  text-sm text-white font-medium text-center'>
                {button}
              </button>
            </Link>
          </div>
          <div className='flex justify-center'>
            <img
              src={`images/${image_path}`}
              alt=''
              className='z-50 m-2 md:m-0 w-[50%] md:w-[90%]'
            />
          </div>
        </div>
      </div>
    )
  }

  return (
    <Slider {...settings} className='md:h-105'>
      <FirstBanner
        image_path={'home1.jpg'}
        text={
          'We help job seekers get back to work through Employee Referral Program'
        }
        heading={'Want to find Your Next Job?'}
      />
      <Banner
        image_path={'home2.png'}
        text={
          'Get referred and connected directly by an existing employee from your dream company'
        }
        heading={'Want to get hired smartly?'}
        button={'Get Referred'}
        link={'/pro'}
      />
      <Banner
        image_path={'home3.png'}
        text={
          'Get your resume and linkedin reviewed to improve your job application at just Rs.199'
        }
        heading={'Are you not getting any response after applying for jobs?'}
        button={'Apply Now'}
        link={'/profile-evaluation'}
      />
      <Banner
        image_path={'home4.png'}
        text={
          'We craft world class visual resume and LinedIn profile that sparks the interest of hiring managers'
        }
        heading={'Can your Resume Impress recruiters within 30 seconds?'}
        button={'Get Now'}
        link={'/resume-writing-services-india'}
      />
      <Banner
        image_path={'home5.png'}
        heading={'What are the Steps to be followed to get referrals?'}
        button={'FAQs'}
        link={'/faq'}
      />
    </Slider>
  )
}

export default HomeBanner
