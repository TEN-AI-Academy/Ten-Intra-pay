import Slider from 'react-slick'

const ServiceSlider = ({ data }) => {
  var settings = {
    dots: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  }

  const slider_data = data || []
  return (
    <Slider className='w-full h-full mb-8' {...settings}>
      {slider_data.map((image, index) => (
        <img
          src={image.image}
          alt='...'
          key={index}
          className='w-full h-full bg-cover cursor-move'
        />
      ))}
    </Slider>
  )
}

export default ServiceSlider
