
import Slider from "react-slick";

const testimonials = [
  { name: "Swapna", title: "Operations Head - Amazon", text: "I am thrilled! I got a great Job as an Operations Head, and I have Whiteslips to thank for getting me in the door. They really streamlined my Resume & LinkedIn so that my Strengths and Accomplishments were highlighted. Later, I was referred through their Employee Referral Program. Truly Impressed." },
  { name: "Abhishek", title: "Sales Manager - Paytm", text: "Though, I have been a Star Performer throughout my tenure I faced difficulties while appearing for Interviews. Whiteslips trained me based on my Skills & Profile through behavioural Interview Questions to ace my Interviews & I am successfully placed. I recommend Interview Preparation Service." },
  { name: "Asif", title: "Consultant - Accenture", text: "Over Six months, using my old Resume, I got about 5 call-backs. In just one month of using the new Resume Whiteslips helped me create, I received 4 call-backs and landed one of them. I started work just last week. I am excited! Thank you so much, Editor, for your insights, suggestions and support." },
  { name:"Siddharth", title:"Director - Swiggy", text:"Whiteslips helped me land a great Job. Previously, my Resume was just laundry list of Responsibilities. Whiteslips helped me highlight my accomplishments. I started work just last week. I am excited! Thank you so much, Editor, for your insights, suggestions and support, Highly Recommended!" },
  { name:"Rachita", title:"Analyst - JPMorgan Chase & Co.", text:"I've been looking for Job for months with no luck. A friend referred me to Whiteslips. Everything was crafted beautifully and atmosphere also good. I started work just last week. I am excited! Thank you so much, Editor, for your insights, suggestions and support, I was extremely impressed!" }
];



const section = () => {
    const settings = {
  dots: true,            
  arrows: false,
  infinite: true,
  speed: 2000,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  pauseOnHover: true,
  responsive: [
    { breakpoint: 992, settings: { slidesToShow: 2, slidesToScroll: 2 } },
    { breakpoint: 576, settings: { slidesToShow: 1, slidesToScroll: 1 } }
  ]
};

  return (
     <div style={{ backgroundColor: '#0D1B3A', padding: '50px', minHeight: "100vh" }}>
      <div className='text-center mb-5'>
        <h2 className='text-white fw-normal'>TESTIMONIALS</h2>
        <hr style={{
          height: '2px',
          width: "75px",
          backgroundColor: '#FFD700',
          border: 'none',
          margin: '16px auto',
          boxShadow: '0 0 10px #FFFF00, 0 0 20px #FFFF00'
        }} />
      </div>

      <div className="container">
        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <div key={index} className="p-2 d-flex">
              <div className="card p-3 text-white d-flex flex-column align-items-stretch" 
                   style={{ backgroundColor: "#1B2A5B" }}>
                <div style={{ fontSize: "2rem", color: "#FF7F50" }}>&ldquo;</div>
                <h5 className="mt-2">{item.title}</h5>
                <p style={{ fontSize: "1rem", fontWeight: 400 }}>{item.text}</p>
                <p className="fw-bold mt-2" style={{ color: "#FF7F50" }}>{item.name}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default section
