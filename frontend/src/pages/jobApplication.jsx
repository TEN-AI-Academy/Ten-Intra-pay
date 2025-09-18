import React, { useState } from 'react'
import Banner from '../components/Banner'
import BannerText from '../components/jobApplication/BannerText'
import ReferralForm from '../components/jobApplication/referralForm'
import NotesCard from '../components/jobApplication/NotesCard'

const JobApplication = () => {

   


   

  return (
    <div className='w-full'>
      <Banner image_path={'jobform.jpg'} text={<BannerText />} />
       <div>
           <div className='pt-4 '>
            <ReferralForm/>
           </div>
           
       </div>
      
    </div>
  )
}

export default JobApplication