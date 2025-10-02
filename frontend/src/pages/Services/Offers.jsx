import React from 'react'
import OfferCard from '../../components/OfferCard'
import BreadCrum from '../../components/BreadCrum'
import Banner from '../../components/Banner'

const BannerText = ()=>{
    return <div className='text-2xl font-semibold text-white'>Offers</div>
}

const Offers = () => {
    const breadCrum = [{ name: 'Offers', link: '/offers' }]
  return (
    <div>
      <Banner image_path={'banner10.jpg'} text={<BannerText />} />
      <div className='my-8 md:mx-20 mx-2'>
        <BreadCrum data={breadCrum} />

        <div className='my-8 md:mx-8 mx-2'>
          <div className='w-full h-full flex justify-center items-center'>
            <OfferCard/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Offers
