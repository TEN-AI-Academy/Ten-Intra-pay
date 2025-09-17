import { Link } from 'react-router-dom'
import Banner from '../../components/Banner'
import BreadCrum from '../../components/BreadCrum'
import ResumeEvaluationForm from '../../components/ResumeEvaluationForm'
import StepsCard from '../../components/StepsCard'
import CompetitorOverview from '../../components/CompetitorOverview'

const BannerText = () => {
  return (
    <div className='text-white font-sans flex items-center h-20'>
      <p className='text-xl md:text-2xl font-bold'>
        Resume & LinkedIn Evaluation
      </p>
    </div>
  )
}

const ProfileEvaluation = () => {
  const breadCrum = [
    { name: 'Profile Evaluation', link: '/profile-evaluation' }
  ]
  return (
    <div>
      <Banner image_path={'banner3.jpeg'} text={<BannerText />} />

      <div className='my-8 md:mx-20 mx-2'>
        <BreadCrum data={breadCrum} />

        <div className='w-full md:flex justify-center items-center gap-5 my-6'>
          <div className='w-full md:w-2/5'>
            <div className='text-lg font-semibold text-center leading-6 w-2/3 my-3 mx-auto'>
              Get your Profile feedback as per the Industry standard to improve
            </div>
            <div className='mx-auto'>
              <img
                src='/images/qty-score.png'
                alt='...'
                className='w-2/3 mx-auto'
              />
            </div>
            <div className='text-lg font-semibold text-center leading-6 w-2/3 mx-auto'>
              Don't you have a Professional Resume & LinkedIn Profile?
            </div>
            <div className='text-center leading-6 w-2/3 mx-auto text-blue-400'>
              <Link to={'/resume-writing-services-india'}>
                Get your resume written by an expert
              </Link>
            </div>
          </div>
          <div className='w-full md:w-3/5'>
            <ResumeEvaluationForm />
          </div>
        </div>

        <div className='my-2'>
          <p className='text-center w-full text-red-600 text-2xl font-semibold'>
            How it works?
          </p>
          <div className='my-3 grid md:grid-cols-3 gap-6'>
            <StepsCard
              heading='Share your Resume and LinkedIn Id'
              text={
                "Upload your Resume and LinkedIn ID regardless what state it's in"
              }
              image='share.png'
            />
            <StepsCard
              heading='Share your Resume and LinkedIn Id'
              text={
                "Our Expert Review your Resume and LinkedIn based on 10+ parameters as per the Industry Standards"
              }
              image='document.png'
            />
            <StepsCard
              heading='GET FEEDBACK ON RESUME AND LINKEDIN PROFILE'
              text={
                "You will get your Resume and LinkedIn Score. If it's high, great! If the Score is low, you can get detailed feedback from our Expert to fix the same"
              }
              image='feedback.png'
            />
          </div>
        </div>

        <div className='my-2'>
          <p className='text-center w-full text-red-600 text-2xl font-semibold mb-3'>
            Competitor Overview
          </p>
          <CompetitorOverview/>
        </div>
      </div>
    </div>
  )
}

export default ProfileEvaluation
