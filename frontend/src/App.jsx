import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Home from './pages/Home'
import About from './pages/About'
import Faq from './pages/Faq'
import Layout from './components/Layout/Layout'
import ResumeBuilding from './pages/Services/ResumeBuilding'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import LinkedInProfileMakeover from './pages/Services/LinkedInProfileMakeover'
import ProfileEvaluation from './pages/Services/ProfileEvaluation'
import EmployeeRefferalPro from './pages/Services/EmployeeRefferalPro'
import ContactUs from './pages/ContactUs'
import OnlineCV from './pages/Services/OnlineCV'
import LinkedInRecommendation from './pages/Services/LinkedInRecommendation'
import NaukriProfileMakeover from './pages/Services/NaukriProfileMakeover'
import MockInterview from './pages/Services/MockInterview'
import NotFound from './pages/NotFound'
import JobApplication from './pages/jobApplication'
import InterviewPreparation from './pages/Services/InterviewPreparation'
import Offers from './pages/Services/Offers'
import Services from './pages/Services/Services'
import WhyUs from './pages/WhyUs'
import EmployeeRegistration from './pages/EmployeeRegistration'

const App = () => {
  return (
    <BrowserRouter>
      <Routes> 
        <Route path='/' element={<Layout/>}>
           <Route path="/" element={<Home />} />
           <Route path="*" element={<NotFound/>} />
           <Route path="/about" element={<About />} />
           <Route path="/faq" element={<Faq />} />
           <Route path="/contact-us" element={<ContactUs/>} />
           <Route path="/job-application" element={<JobApplication/>} />
           <Route path="/resume-writing-services-india" element={<ResumeBuilding />} />
           <Route path="/linkedin-profile-makeover-india" element={<LinkedInProfileMakeover />} />
           <Route path="/profile-evaluation" element={<ProfileEvaluation />} />
           <Route path='/pro' element={<EmployeeRefferalPro/>}/>
           <Route path='/online-cv' element={<OnlineCV/>}/>
           <Route path='/linkedin-recommendations' element={<LinkedInRecommendation/>}/>
           <Route path='/naukri-profile-makeover' element={<NaukriProfileMakeover/>}/>
           <Route path='/mock-interview' element={<MockInterview/>}/>
           <Route path='/interview-preparation' element={<InterviewPreparation/>}/>
           <Route path='/offers' element={<Offers/>}/>
           <Route path='/services' element={<Services/>}/>
           <Route path='/why-us' element={<WhyUs/>}/>
           <Route path='/employee-registration' element={<EmployeeRegistration/>}/>
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
